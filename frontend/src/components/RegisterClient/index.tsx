import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonStyle, FormStyle, InputStyle } from "../../GlobalStyles/style";


const RegisterClient = () => {


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [date, setDate] = useState('');
    const navigate = useNavigate();

    const jsonToken: any = localStorage.getItem("UserToken")
    const token = JSON.parse(jsonToken);

    const NavigateHome = () => {
        navigate('/')
        localStorage.clear()
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        axios.post("http://localhost:3001/register", { name, email, phone, date }, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        .then((res) => {
        })
        navigate('/clients')
    }

    if (!token){NavigateHome()}

    return (
        <FormStyle onSubmit={(e: any) => handleSubmit(e)}>
            <h1>Cadastro</h1>

            <p>Nome completo:</p>
            <InputStyle type="text" placeholder="Seu nome" onChange={(e) => setName(e.target.value)} />

            <p>Email:</p>
            <InputStyle type="email" placeholder="Seu email" onChange={(e) => setEmail(e.target.value)} />

            <p>Telefones:</p>
            <InputStyle type="text" placeholder="Seu telefone" onChange={(e) => setPhone(e.target.value)} />

            <p>Data:</p>
            <InputStyle type="date" onChange={(e) => setDate(e.target.value)} />

            <ButtonStyle type="submit">Cadastrar</ButtonStyle>
            <ButtonStyle type="submit" onClick={() => navigate('/clients')}>Voltar</ButtonStyle>

        </FormStyle>
    )
}

export default RegisterClient;