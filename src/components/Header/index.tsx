import { useNavigate } from "react-router-dom";
import { BoxMenu, ButtonMenu } from "./styles";

export function Header(){
        const navigate = useNavigate();
        const handleHome = () => navigate('/home');
        const handleProgramacao = () => navigate('/programacao');
    

    return(
        <BoxMenu>
            <ButtonMenu onClick={handleHome}>HOME</ButtonMenu>
            <ButtonMenu onClick={handleProgramacao}>PROGRAMAÇÃO</ButtonMenu>
            <ButtonMenu>CULTOS</ButtonMenu>
            <ButtonMenu>MINISTÉRIOS</ButtonMenu>
            <ButtonMenu>SOBRE NÓS</ButtonMenu>
            
        </BoxMenu>
    )
}
