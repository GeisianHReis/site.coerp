import styled from "styled-components";


export const Cicle = styled.button`
    border: solid 3px blue;
    margin: 30px;

    height: 80px;
    width: 80px;

    border-radius: 50px;
    color: black;

    background-color: white;

    text-decoration-color: black;

    font-weight: bold;
    font-size: 16px;

`;

export const TimeLine = styled.span`
    display: flex;
    flex-direction: row;
    padding: 25px;
    align-items: center;
    flex-wrap: wrap;
    
    hr{
        display: flex;
        padding: 1px;
        transform: rotate(90deg);
        margin-left: 6.5px;
        margin-right: 6.5px;
        height: 2.6em;
        border-color: blue;
        background-color: blue;
        font-size: 30px;
    }
  
   
`;

export const ListaProgramacao = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    margin-left: 250px;
    margin-right: 100px;
    margin-top: 2em;

    font-size: 16pt;
    font-family: 'Montserrat', sans-serif;

    h2 {
        margin: 1em;
        margin-bottom: 0.5em;
        display: flex;
        color: red;
        align-items: center;
        justify-content: center;
        font-size: 28pt;
        font-weight: bold;
    }
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

export const GaleriaDaliderança = styled.div`
    display: flex;
    flex-wrap: wrap;
    
`;

export const Liderança = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0.5em;
     
`;

