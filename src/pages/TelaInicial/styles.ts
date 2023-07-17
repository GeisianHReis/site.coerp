import styled from "styled-components";



export const Titulo = styled.div`
       
display:flex;
flex-direction:column;

align-items: center;
        align-items: center;
        justify-content: center;
         
        background-color: #3363B5;
        width: 100%;       
        height: 360px;
         
        color: white;
        h1{
            margin-bottom:-40px;
            margin-top:26px;
            font-weight: ${(props) => props.theme["weigth-titulo"]};
            font-size:60px;
            font-family: ${(props) => props.theme["font-family-default"]};
            @media screen and (max-width: 650px) {
                font-size: 35px;
            }
            @media screen and (max-width: 470px) {
                font-size: 25px;
            }
        }
        
        h2{
            margin-top: -147px;
            font-weight: ${(props) => props.theme["weigth-titulo"]};
            font-size: 45px;
            font-family: ${(props) => props.theme["font-family-default"]};
           
            @media screen and (max-width: 650px) {
            p{font-size: 18px;}
    margin-top: -174px;
h2{
    margin-top:207px;
}


            }
            @media screen and (max-width: 470px) {
            
                font-size: 25px;
              
            }
        }

`;

export const ButtonMenu = styled.button`
    display: inline-block;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    

    width: 14em;
    height: 3.5em;
color:#3063B0;
font-size:17px;
    background-color: white;

    border-radius: 1.5em;
    border: solid 1px black;
    
    text-decoration: none;
    margin: 3em 0.5em 0.5em 0.5em;


    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    transition: transform .2s; 
   


    &:hover{
        cursor: pointer;
        transform: scale(1.1);
        box-shadow: 0 16px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
        
    }

    &:first-child{
        margin-left: 10%;
        margin-top: -166px;
    }
    
    
    &:last-child{
        margin-top: -166px;
    }



    p{
        margin-top: 0;
        margin-bottom: 0;
    }

    @media screen and (max-width: 650px) {
        &:first-child{
            margin-left: 0;
            margin-top: -166px;
        }
   


    }

   

`;


export const Subtitulo = styled.div`

display: flex;


        align-items: center;
        justify-content: center;
         
        background-color: #3363B5;
        width: 100%;       
        
             
        color: white;
        p{
            margin-top: -210px;
            margin-bottom:-13px;
            font-weight: ${(props) => props.theme["weigth-titulo"]};
            font-size: 30px;
            font-family: ${(props) => props.theme["font-family-default"]};
            @media screen and (max-width: 650px) {
                font-size: 35px;
            
            }
            @media screen and (max-width: 470px) {
                font-size: 18px;
                margin-top:-387px;
            }
        }
`;

export const Menu = styled.div`
       
display: flex;
background-color: #3363B5;
align-items: center;
        align-items: center;
        justify-content: center;
         padding-right: 140px;
       
        width: 100%;       
        height: 200px;
        margin:0;
         

        @media screen and (max-width: 650px) {
            display:flex;
            flex-direction: column-reverse;
            margin-left:0;
            padding-right: 0;
margin-top:-77px;

        }

        
`;


export const Logo = styled.div`
display: flex;
align-items: center;
        align-items: center;
        justify-content: center;
 background-color: #3363B5;
 
img{
    position:relative;
    top:50px;
    width: 10%;
    margin: 0;
    
}


@media screen and (max-width: 650px) {
    img{
        
        width: 30%;
   
        
    }


}


`;