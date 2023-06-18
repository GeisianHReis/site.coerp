import styled from "styled-components";


export const Lateral = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    top: 0;

    width: 3em;

    position: fixed;
    
    
    height: 50rem;
    background-color: black;
    vertical-align: middle;

    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    font-size: 3em;

    
    transform: scale(-1, -1);
    writing-mode: vertical-lr;

    color: white;

    @media screen and (max-width: 850px) {
        display: flex;
        flex-direction: row;
        align-items: center;
        top: 0;
        
        overflow: hidden;
        position: fixed;
        top: 0;
        width: 100%;
        transform: none;
        writing-mode: horizontal-tb;
        height: 5em;
        

        font-size: large;

    }
`