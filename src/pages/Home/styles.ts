import styled from "styled-components";

export const ListaProgramacao = styled.section`
    display: flex;
    flex-direction: column;
    
    margin-left: 200px;
    margin-top: 2em;

    font-size: 20pt;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    p{
        margin-bottom: 1em;
        
    }
    @media screen and (max-width: 850px) {
        margin-left: 50px;
        font-size: 14pt;
    }
`;

export const FaixaDeAvisos = styled.section`
    display: flex;
    flex-direction: row;
    padding: 150px;

    div{
        flex-grow: 6;
        padding: 30px;
        align-items: center;
        
        h1{
            color: red;
        }
        p{
            color: black;
            font-weight: bold;
            font-size: 20pt;

        }
    }


`;

export const Box = styled.main`
    display: flex;
    flex-direction: row;
    justify-content: center;

    img{
        width: 100%;
    }
    
`;


export const TopMenu = styled.div`
    height: 30px;
    background-color: black;
    position: relative;
`;

export const FaixaDaHome = styled.div`
        display: flex;
        flex-direction: row;

        background-color: #3363B5;
        width: 100%;
        
        height: 120px;

`;

export const MinCarrossel = styled.section`
    cursor: grab;
    overflow: hidden;
    width: 100%;
    max-width: 500px;
    min-height: 100hv;
    display: flex;
    align-items: center;
    justify-content: center;
    div{
        display: flex;
        min-height: 200px;
        min-width: 400px;
        padding: 14px      
    }
    img{
        width: 100%;
        height: 90%;
        pointer-events: none;
    }
`;

