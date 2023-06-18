import styled from "styled-components";

export const FooterStyle = styled.div`
        display: flex;
        flex-direction: row;

        background-color: #3363B5;
        width: 100%;
        

        height: 170px;


`;

export const Secao = styled.section`
        display: flex;
        flex-grow: 1;
        flex-direction: column;

        align-items: center;
        justify-content: center;
        color: white;
`;



export const Imagem = styled.img`
        position: fixed;
        right: 0;

        height: 650px;
        @media screen and (max-width: 850px) {
                display: none;
        }
`;