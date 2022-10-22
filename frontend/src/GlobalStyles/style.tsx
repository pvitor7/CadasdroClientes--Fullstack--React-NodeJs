import styled from "styled-components"


export const HeaderStyle = styled.header`
    width: 100vw;
    min-height: 80px;
    background: #000000;

    h1{
        color: #FFFFFF;
    }
`

export const FormStyle = styled.form`

    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 400px;
    min-width: 300px;
    width: 80%;
    min-height: 400px;
    padding: 3%;
    margin: 30px;
    background-color: blue;

    h1, p{
        color: #FFFFFF
    }

    .div-buttons{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    height: auto;
    gap: 10px;
    }
`

export const InputStyle = styled.input`

    border-radius: 10px;
    background-color: #FFFFFF;
    max-width: 400px;
    width: 80%;
    padding: 10px;
    min-height: 30px;
    border: none;
    margin: 5px;
`
export const ButtonStyle = styled.button`

    border-radius: 10px;
    background-color: #1f1c1c;
    color: #FFFFFF;
    width: 70%;
    font-size: 20px;
    min-height: 60px;
    margin: 10px 0px;
    padding: 10px;
    border: none;
`

export const UlStyle = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style: none;
    border-radius: 10px;
    background-color: blue;
    color: #FFFFFF;
    max-width: 400px;
    min-width: 290px;
    width: 85%;
    min-height:400px;
    padding: 3%;
    margin: 30px 0px;

    .div-buttons{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    height: auto;
    gap: 10px;
    }
    
    .add-register{
        background-color:  #1c1c1c;
        border: none;
        width: 50px;
        font-size: 20px;
        color: #FFFFFF;
        border-radius: 5px;
        font-size: 15px;
        margin: 5px;
        padding: 10px;
    }

`

export const LiStyle = styled.li`
    display: flex;
    width: 90%;
    align-items: center;
    border-radius: 10px;
    background-color: #1f1c1c;
    color: #FFFFFF;
    padding: 0 10px;
    margin: 10px;

    p{
        width: 80%;
    }

    button{
        background-color: #FFFFFF;
        border: none;
        width: 50px;
        font-size: 20px;
        color: #1c1c1c;
        border-radius: 5px;
        font-size: 18px;
        margin: 5px;
        padding: 5px;
    }

`

export const ModalStyle = styled.form`

    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 400px;
    width: 80%;
    min-height: 200px;
    padding: 3%;
    margin: 30px;
    background-color: #1f1c1c;
    gap: 20px;

    h2, p{
        color: #FFFFFF
    }

    .div-buttons{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
    height: auto;
    gap: 3%;
    }
`

export const ButtonContactStyle = styled.button`

    border-radius: 10px;
    background-color: blue;
    color: #FFFFFF;
    width: 70%;
    max-width: 300px;
    font-size: 20px;
    min-height: 60px;
    margin: 10px 0px;
    padding: 10px;
    border: none;
`

export const SelectStyle = styled.select`

    border-radius: 10px;
    background-color: #FFFFFF;
    max-width: 400px;
    width: 80%;
    padding: 10px;
    min-height: 30px;
    border: none;
    margin: 20px;
`

export const TableStyle = styled.table`

    border-radius: 10px;
    background-color: #FFFFFF;
    width: 100%;
    border: none;
    padding: 20px 0px ;
    max-width: 900px;

    td{
    width: 100px;
    border-bottom: 1px solid  blue;
    }

    button{
        background-color: #FFFFFF;
        border: none;
        width: max-content;
    }
`

