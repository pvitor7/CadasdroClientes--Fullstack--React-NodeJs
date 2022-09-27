import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom"
import { ButtonStyle, LiStyle, UlStyle, } from "../../GlobalStyles/style";

const ListClients = () => {

    const [listUsers, setListUsers] = useState([])
    const navigate = useNavigate();

const NavigateHome = () => {
    navigate('/')
    localStorage.clear()
}
const NavigateEmployees = () => {
    navigate('/employees')
}

axios.get("http://localhost:3001/users")
    .then((res) => {
        setListUsers(res.data)
    })

    if(!localStorage.getItem("UserToken")){ NavigateHome()}


return (
    <UlStyle>
        <h2>Clientes:</h2>
        {
            listUsers.map((user: any, key) => {
                return (
                    <LiStyle key={key} id={user.id}>
                        <p>{user.name} </p>
                    </LiStyle>
                )
            })
        }
        <div className={"div-buttons"}>
            <ButtonStyle type="submit" onClick={() => NavigateHome()}>Voltar</ButtonStyle>
            <ButtonStyle type="submit" onClick={() => NavigateEmployees()}>Funcionários</ButtonStyle>
        </div>
    </UlStyle>
)
}

export default ListClients;