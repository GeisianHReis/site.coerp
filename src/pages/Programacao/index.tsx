
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Side } from "../../components/Side";
import { ListaProgramacao, TopMenu, Box } from "./styles";

export function Programacao(){
    return(
        <>
           
            <TopMenu/>
            <Header/>
            <Side name="PROGRAMAÇÃO"/>
            <Box>
                <ListaProgramacao>
                <p>25/04 - CULTO DE MULHERES </p>
                    <p>29/04 - CULTO DE ANIVERSÁRIO  </p>
                    <p>30/04 - CULTO DA FAMÍLIA  </p><p>25/04 - CULTO DE MULHERES </p>
                    <p>29/04 - CULTO DE ANIVERSÁRIO  </p>
                    <p>30/04 - CULTO DA FAMÍLIA  </p><p>25/04 - CULTO DE MULHERES </p>
                    <p>29/04 - CULTO DE ANIVERSÁRIO  </p>
                    <p>30/04 - CULTO DA FAMÍLIA  </p><p>25/04 - CULTO DE MULHERES </p>
                    <p>29/04 - CULTO DE ANIVERSÁRIO  </p>
                    <p>30/04 - CULTO DA FAMÍLIA  </p>
                </ListaProgramacao>
                <ListaProgramacao>
                    <p>20h</p>
                    <p>19h</p>
                    <p>10h</p>
                </ListaProgramacao>
            </Box>
            <Footer/>
       </>
    )
};