import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { ButtonStyle, LiStyle, UlStyle, } from "../../GlobalStyles/style";
import CreateContact from "../CreateContact";

const ListClients = () => {

    const [listUsers, setListUsers] = useState([])
    const [modal, setModal] = useState(false)
    const [user, setUser] = useState('')
    const navigate = useNavigate();

    const jsonToken: any = localStorage.getItem("UserToken")

    const getClients = async () => {
        const token = await JSON.parse(jsonToken);
        axios.get("http://localhost:3001/users", {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then((res) => {
                setListUsers(res.data)
            })
    }

    const NavigateHome = () => {
        navigate('/')
        localStorage.clear()
    }
    const NavigateEmployees = () => {
        navigate('/employees')
    }


    const deleteClients = async  (id: any) => {
        const token = await JSON.parse(jsonToken);
        axios.delete(`http://localhost:3001/user/${id}`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        getClients();
    }
    getClients();
    if (!localStorage.getItem("UserToken")) { NavigateHome() }

    return (
        <>
            {modal && <CreateContact user={user} setModal={setModal} />}
            {!modal && <UlStyle>
                <h1>Clientes  <button className="add-register" onClick={()=> navigate('/register')}>+</button></h1>
                
                {

                    listUsers.map((user: any, key) => {
                        return (
                            <LiStyle key={key} id={user.id} >
                                <p>{user.name} </p>
                                <button onClick={() => {
                                    setModal(true)
                                    setUser(user)
                                }}>Info</button>
                                <button onClick={() => deleteClients(user.id)}>x</button>
                            </LiStyle>
                        )
                    })
                }
                <div className={"div-buttons"}>
                    <ButtonStyle type="submit" onClick={() => NavigateHome()}>Voltar</ButtonStyle>
                    <ButtonStyle type="submit" onClick={() => NavigateEmployees()}>Funcionários</ButtonStyle>
                </div>

            </UlStyle>}
        </>)
}

export default ListClients;