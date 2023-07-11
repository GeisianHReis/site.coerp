import { useLocation, useNavigate } from "react-router-dom";
import { BoxMenu, ButtonMenu } from "./styles";
import imagemLogo from "../../assets/Logo Coerp azul.png";

export function Header(){
        const navigate = useNavigate();
        const location = useLocation();

        const handleHome = () => navigate('/home');
        const handleProgramacao = () => navigate('/programacao');
        const handleCultos = () => navigate('/cultos');
        const handleSobre = () => navigate('/sobre');
        const handleMinisterios = () => navigate('/Ministerios');

    

    return(
        <BoxMenu>
            {location.pathname === '/home' && <img src={imagemLogo} />}

            <ButtonMenu
                onClick={handleHome}
                className={location.pathname === '/home' ? 'active' : ''}
            >
                INÍCIO
            </ButtonMenu>
            <ButtonMenu
                onClick={handleProgramacao}
                className={location.pathname === '/programacao' ? 'active' : ''}
            >
                PROGRAMAÇÃO
            </ButtonMenu>
            <ButtonMenu
                onClick={handleCultos}
                className={location.pathname === '/cultos' ? 'active' : ''}
            >
                CULTOS
            </ButtonMenu>
            <ButtonMenu
                onClick={handleMinisterios}
                className={location.pathname === '/Ministerios' ? 'active' : ''}
            >
                MINISTÉRIOS
            </ButtonMenu>
            <ButtonMenu
                onClick={handleSobre}
                className={location.pathname === '/sobre' ? 'active' : ''}
            >
                SOBRE NÓS
            </ButtonMenu>
        </BoxMenu>
    )
}
