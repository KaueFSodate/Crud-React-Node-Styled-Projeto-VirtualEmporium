import styled from "styled-components";


export const FormProduto = styled.form`
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    width: 25vw;
    height:50vh;
    background-color:#012E40;
    border-radius:10px;
    box-shadow: 6px 2px 10px #C7FFED;

    div{
        width:20vw;
        display:flex;
        justify-content:space-between;
        align-items:center;
        background-color:#012E40;
    }
    
    label {
        color:white;
        margin:0;
        padding:0;
    }
    input {
        width: 12vw;
        height:3vh;
        margin:10px;
        border-radius:10px;
        
    }
    button{
        width: 7vw;
        height:3vh;
        border-radius:8px;
        margin-top: 20px;
    }
    p{
        color:white;
        margin:15px;
    }
    a{
        text-decoration:none;
    }
`;          

export const Container = styled.div`

    display:flex;
    width:100vw;
    height:85vh;
    background-color:#3CA6A6;
    align-items:center;
    justify-content:center;
    flex-direction:column;

    h1{
        margin-bottom:25px;
    }

`;

export const ImgProfile = styled.img`
    width:250px;
    height:250px;
    border-radius:120px;

`;

export const Title = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    height:10vh;
    width:100vw;

    h1{
        color:white;
    }
`;
