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
    margin-bottom: 20px;
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

export const UlStyle = styled.li`
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
`

export const LiStyle = styled.li`
    display: flex;
    width: 90%;
    justify-content: space-around;
    align-items: center;
    border-radius: 10px;
    background-color: #1f1c1c;
    color: #FFFFFF;
    margin: 10px;

    span{
    color: yellow
    }

`

