
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Side } from "../../components/Side";
import { ListaProgramacao, TopMenu, Cicle, TimeLine, GaleriaDaliderança, Liderança } from "./styles";
import foto  from "../../assets/images.png"

export function SobreNos(){
    return(
        <>
           
            <TopMenu/>
            <Header/>
            <Side name="SOBRE NÓS"/>
            <ListaProgramacao>
                <h2>NOSSA HISTÓRIA</h2>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
                sed diam nonummy nibh euismod tincidunt ut laoreet dolore 
                magna aliquam erat volutpat. Ut wisi enim ad minim veniam, 
                quis nostrud Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
                sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam 
                erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation 
                ullamcorLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam 
                nonummy nibh euismod tincidunt ut laoreet dolore 
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore 
                
                <TimeLine>
                    <Cicle>1976</Cicle> <hr/>
                    <Cicle>1965</Cicle> <hr/>
                    <Cicle>1965</Cicle> <hr/>
                    <Cicle>1965</Cicle> 
                </TimeLine>

                <h2>DECLARAÇÃO DE FÉ</h2>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
                sed diam nonummy nibh euismod tincidunt ut laoreet dolore 
                magna aliquam erat volutpat. Ut wisi enim ad minim veniam, 
                quis nostrud Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
                sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam 
                erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation 
                ullamcorLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam 
                nonummy nibh euismod tincidunt ut laoreet dolore 
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore

                <GaleriaDaliderança>
                    
                    <Liderança>
                        <img id="presidente" src={foto}/> PASTOR PRESIDENTE
                    </Liderança> 
                    <Liderança>
                        <img id="pr1" src={foto}/> VICE PASTOR
                    </Liderança> 
                    <Liderança>
                        <img id="pr1" src={foto}/> VICE PASTOR
                    </Liderança> 
                    <Liderança>
                        <img id="pr1" src={foto}/> VICE PASTOR
                    </Liderança> 
                    <Liderança>
                        <img id="pr1" src={foto}/> VICE PASTOR
                    </Liderança>
                    <Liderança>
                        <img id="pr1" src={foto}/> VICE PASTOR
                    </Liderança>
                    
                </GaleriaDaliderança>
                  
            </ListaProgramacao>
           
            
            <Footer/>
       </>
    )
};