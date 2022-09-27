import axios from "axios";
import { useState } from "react";
import { ButtonContactStyle, InputStyle, ModalStyle, SelectStyle, TableStyle } from "../../GlobalStyles/style";

const CreateContact = (user: any, setModal: any) => {
    const [type, setType] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [contacts, setContacts] = useState([])

    const getContacts = () => {
        axios.get(`http://localhost:3001/user/${user.user.id}/contact`)
            .then((res) => setContacts(res.data.contacts))
    }
    getContacts()

    const deleteContacts = (id: string) => {
        axios.delete(`http://localhost:3001/user/${user.user.id}/contact/${id}`)
        .then((res) => setContacts(res.data.contacts))
        setInterval(() => getContacts(), 2000)
    }

    const handleSubmit = async (id: any, event: any) => {
        event.preventDefault()
        const newContacts = { type: type, email: email, phone: phone }
        axios.post(`http://localhost:3001/user/${user.user.id}/contact`, newContacts)

        setInterval(() => getContacts(), 2000)

    }

    return (

        <ModalStyle >

            <h2>{user.user.name}</h2>

            <TableStyle>
                <tr>
                    <td>Tipo</td>
                    <td>Email</td>
                    <td>Telefone</td>
                </tr>
                {contacts.map((contact: any, index) => {
                    return (

                        <tr key={index} onClick={() => deleteContacts(contact.id)}>
                            <td><button>{contact.type}</button></td>
                            <td><button>{contact.email}</button></td>
                            <td><button>{contact.phone}</button></td>
                        </tr>
                    )
                })}
            </TableStyle>

            <InputStyle type="text" placeholder="Novo email"
                onChange={(e) => {
                    setEmail(e.target.value)
                }}
            />
            <InputStyle type="text" placeholder="Novo telefone" onChange={(e) => {
                setPhone(e.target.value)
            }} />

            <SelectStyle onChange={(e) => {
                setType(e.target.value)
            }}>
                <option value="Pessoal"> Pessoal </option>
                <option value="Trabalho"> Trabalho </option>
                <option value="Recado"> Recados </option>
            </SelectStyle>


            <div className={"div-buttons"}>
                <ButtonContactStyle type="submit" onClick={(e) => {
                    handleSubmit(user.id, e)
                }}>Salvar</ButtonContactStyle>
                <ButtonContactStyle type="submit" onClick={() => {
                    setModal(false)
                }}>Cancelar</ButtonContactStyle>
            </div>
        </ModalStyle>

    )
}

export default CreateContact;