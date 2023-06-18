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

export const Box = styled.main`
    display: flex;
    flex-direction: row;
`;


export const TopMenu = styled.div`
    height: 30px;
    background-color: black;
    position: relative;
`;