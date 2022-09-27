import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonStyle, FormStyle, InputStyle } from "../../GlobalStyles/style";

const Login = () => {
    const navigate = useNavigate();

    const NavigateClients = () => {
        navigate('/clients')
    }
    const NavigateRegister = () => {
        navigate('/employee/register')
    }

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (event: any) => {
        event.preventDefault()
        const login = {username: username, password: password}
        axios.post("http://localhost:3001/employee/login", login)
        .then((res) => { localStorage.setItem("UserToken", JSON.stringify(res.data.token))
        })
    }


    return (
        <FormStyle >
            <h1>Login</h1>
            <p>Usuário:</p>
            <InputStyle type="text" placeholder="Seu email"
            onChange={(e) => {setUsername(e.target.value)}}
            />
            <p>Senha:</p>
            <InputStyle type="text" placeholder="Sua senha"  onChange={(e) => {setPassword(e.target.value)}}/>
            <ButtonStyle type="submit" onClick={(e)=> {NavigateClients()
            handleSubmit(e)
            }}>Login</ButtonStyle>
            <ButtonStyle type="submit" onClick={()=> NavigateRegister()}>Cadastre-se</ButtonStyle>
        </FormStyle>
    )
}

export default Login;