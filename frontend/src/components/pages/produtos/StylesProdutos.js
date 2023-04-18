import styled from "styled-components";


export const Container = styled.div`

    display:flex;
    justify-content:center;
    width:100vw;
    height:80vh;
    background-color:#3CA6A6;
    padding:30px;

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

export const ContainerProduto = styled.div`
    background-color:#012E40;
    width:20vw;
    height:55vh;
    padding:5px;
    margin:15px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    border-radius:10px;
    box-shadow: 6px 2px 10px #C7FFED;

    img{
        width:18vw;
        height:300px;
        border-radius:40px;
    }

    h3{
        color:#C7FFED;
    }

    p{
        margin:5px 0 5px 0;
        text-align:left;
        color:#C7FFED;
        text-align:center;
    }
    button{
        width:120px;
        height:30px;
        border-radius:10px;
        margin-left:20px;
        border-width:0;
    }

    a{
        text-decoration:none;
        color:white;
    }
`;