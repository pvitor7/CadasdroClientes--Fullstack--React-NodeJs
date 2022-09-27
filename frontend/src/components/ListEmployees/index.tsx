import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonStyle, LiStyle, UlStyle } from "../../GlobalStyles/style";

const ListEmployee = () => {

    const [listUsers, setListUsers] = useState([])
    const navigate = useNavigate();
    const [id, setId] = useState('');

    const jsonToken: any = localStorage.getItem("UserToken")
    const token = JSON.parse(jsonToken);


    const NavigateHome = () => {
        navigate('/')
        localStorage.clear()
    }
    const NavigateClients = () => {
        navigate('/clients')
    }

    useEffect(() => {
        axios.delete(`http://localhost:3001/employee/${id}`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        getEmployees();
    })

    const getEmployees = () => {
        axios.get("http://localhost:3001/employees", {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then((res) => {
                setListUsers(res.data)
            })
    }
    getEmployees()

    if (!localStorage.getItem("UserToken")) { NavigateHome() }

    return (
        <UlStyle>
            <h2>Funcionários:</h2>
            {
                listUsers.map((user: any, key) => {
                    return (
                        <LiStyle key={key} id={user.id}>
                            <p>{user.username} </p>
                            <p>{user.is_active ? (<span>Ativo</span>) : (<span>Inativo</span>)} </p>
                            <button onClick={() => setId(user.id)}>x</button>

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