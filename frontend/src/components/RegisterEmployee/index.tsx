import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonStyle, FormStyle, InputStyle } from "../../GlobalStyles/style";


const RegisterEmployee = () => {

    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const jsonToken: any = localStorage.getItem("UserToken")

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        const token = await JSON.parse(jsonToken);
        axios.post("http://localhost:3001/employee/register", {username: name, password:password }, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
    }

    const NavigateHome = () => {
        navigate('/')
        localStorage.clear()
    }

    return (
        <FormStyle onSubmit={(e: any) => handleSubmit(e)}>
            <h1>Cadastro de Funcionários</h1>

            <p>Usuário:</p>
            <InputStyle type="text" placeholder="Seu nome" onChange={(e) => setName(e.target.value)} />

            <p>Senha:</p>
            <InputStyle type="text" placeholder="Seu email" onChange={(e) => setPassword(e.target.value)} />

            <div className={"div-buttons"}>
                <ButtonStyle type="submit" onClick={(e) => handleSubmit(e)}>Cadastrar</ButtonStyle>
                <ButtonStyle type="submit" onClick={() => NavigateHome()}>Voltar</ButtonStyle>
            </div>

        </FormStyle>
    )
}

export default RegisterEmployee;