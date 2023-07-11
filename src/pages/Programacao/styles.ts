import styled from "styled-components";

export const ListaProgramacao = styled.section`
    display: flex;
    flex-direction: row;
    
    margin-left: 10%;
    margin-right: 35%;
    padding: 20px;

    font-size: 20pt;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    justify-content: space-between;
    color: black;
    @media screen and (max-width: 650px) {
        margin-left: 2%;
        margin-right: 5%;
        padding: 7px;
        font-size: 20px;
    }
`;

export const Box = styled.main`
    display: flex;
    flex-direction: row;
   
`;
export const BoxGeral = styled.main`
    display: flex;
    flex-direction: column;
    width: 100%;
    h1 {
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${(props) => props.theme["color-titulo"]};
        font-family: ${(props) => props.theme["font-family-default"]};
        font-weight: ${(props) => props.theme["weigth-titulo"]};
        font-size: ${(props) => props.theme["size-titulo"]};
        @media screen and (max-width: 650px) {
            font-size: 25px;
            padding: 15px;
            margin-bottom: 10px;
        }
}

`;