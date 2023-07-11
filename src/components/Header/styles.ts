import styled from "styled-components";

export const BoxMenu = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;

    margin-bottom: 3em;

    background-color: white;
    img{
        width: 15%;
        margin: 3em 0.5em 0.5em 0.5em;
        
    }
    @media screen and (max-width: 650px) {
        display: none;
    }

`;

export const ButtonMenu = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;

    width: 12em;
    height: 3em;


    background-color: white;

    border-radius: 1em;
    border: solid 1px black;
    color: black;
    text-decoration: none;
    margin: 3em 0.5em 0.5em 0.5em;


    font-family: 'Montserrat', sans-serif;
    font-weight: bold;

    transition: background 0.5s ease;

    &:hover{
        cursor: pointer;
        background-color: black;
        color: white;
    }
    &.active{
        background-color: black;
        color: white;
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    }
    &:first-child{
        margin-left: 10%;
    }
    
    @media screen and (max-width: 650px) {
        display: none;
    }
`;