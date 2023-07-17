
import 'bootstrap/dist/css/bootstrap.css';
import { Titulo, Logo, Subtitulo, ButtonMenu, Menu } from "./styles";
import imagemLogo from "../../assets/symbolcoerp.png"




export function TelaInicial() {


    return (
        <>
          <Logo>
 {location.pathname === '/inicial' && <img src={imagemLogo} />}</Logo>
            <Titulo>

            <h2>
                   COERP
                </h2>

                <h1>
                    SEJA BEM VINDO
                </h1>




            </Titulo>

            <Subtitulo>
                <p>escolha uma unidade:</p>
            </Subtitulo>

<Menu>
            <ButtonMenu
                
                className={location.pathname === '/home' ? 'active' : ''}
            >
                <p>Matriz </p>
                <p>Ferraz de Vasconcelos</p>
            </ButtonMenu>
            <ButtonMenu
            
                className={location.pathname === '/home' ? 'active' : ''}
            >
                Jesus é o Caminho Guaianases
            </ButtonMenu>

</Menu>


        </>


    )
}


