import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ButtonStyle, LiStyle, UlStyle } from "../../GlobalStyles/style";

const ListEmployee = () => {

    const [listUsers, setListUsers] = useState([])
    const navigate = useNavigate();

    const NavigateHome = () => {
        navigate('/')
        localStorage.clear()
    }
    const NavigateClients = () => {
        navigate('/clients')
    }

    axios.get("http://localhost:3001/employees")
        .then((res) => {
            setListUsers(res.data)
        })

    if(!localStorage.getItem("UserToken")){ NavigateHome()}

    return (
        <UlStyle>
            <h2>Funcionários:</h2>
            {
                listUsers.map((user: any, key) => {
                    return (
                        <LiStyle key={key} id={user.id}>
                            <p>{user.username} </p>
                            <p>{user.is_active ? (<span>Ativo</span>) : (<span>Inativo</span>)} </p>

                        </LiStyle>
                    )
                })
            }
            <div className={"div-buttons"}>
                <ButtonStyle type="submit" onClick={() => NavigateHome()}>Home</ButtonStyle>
                <ButtonStyle type="submit" onClick={() => NavigateClients()}>Clientes</ButtonStyle>
            </div>
        </UlStyle>
    )
}

export default ListEmployee;