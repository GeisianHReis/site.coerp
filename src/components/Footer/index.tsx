import { MapPin, WhatsappLogo } from "@phosphor-icons/react";
import { FooterStyle, Secao } from "./styles";
import logo from "../../assets/images.png";


export function Footer(){
    return(
        <>
            
            <FooterStyle>
                <Secao></Secao>
                
                <Secao><WhatsappLogo size={28} color="white"/> (11) 9999-9999 </Secao>
                <Secao><MapPin size={28}  /> <p>R: Quatorze de Outubro 235 </p> <p>Sítio Paredão - Ferraz de Vasconcelos</p> </Secao>
                <Secao><MapPin size={28}  /><p> Rua João Cabral Melo Neto, 10</p><p> Cid.Tiradentes - SP </p></Secao>
                <Secao><p>Contribua:</p> <p><img src={logo}/> </p></Secao>
                
                
            </FooterStyle>
        </>
    )
};