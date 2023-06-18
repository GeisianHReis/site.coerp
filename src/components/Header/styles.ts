import styled from "styled-components";

export const BoxMenu = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;

    background-color: white;

    
`

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
    margin: 2em 0.5em 0.5em 0.5em;


    font-family: 'Montserrat', sans-serif;
    font-weight: bold;

    transition: background 0.5s ease;

    &:hover{
        cursor: pointer;
        background-color: black;
        color: white;
    }
    &:first-child{
        margin-left: 10em;
    }
    @media screen and (max-width: 850px) {
        
        display: none;
    }

`