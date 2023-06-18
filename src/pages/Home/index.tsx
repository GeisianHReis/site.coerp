import 'bootstrap/dist/css/bootstrap.css';
import { Carousel } from "react-bootstrap";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { TopMenu, Box, FaixaDaHome, FaixaDeAvisos, MinCarrossel } from "./styles";
import imagem  from "../../assets/WordPresscarousel.png";
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';


export function Home(){
    const imagens = [imagem, imagem, imagem, imagem, imagem, imagem];
    const carousel = useRef();
    const [width, setWidth] = useState(0);

useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
})

    return(
        <>
           
            <TopMenu/>
            <Header/>
            <Box>
                    <Carousel fade>
                        <Carousel.Item interval={1500}>
                        <img
                            src="https://novelas.redenoticia.com.br/imagens/2019/03/carrossel.jpg"
                            alt="Image One"
                        />
                        </Carousel.Item>
                        <Carousel.Item interval={1500}>
                        <img
                            src="https://novelas.redenoticia.com.br/imagens/2019/03/carrossel.jpg"
                            alt="Image Two"
                        />
                        </Carousel.Item>
                    </Carousel>
            </Box>
            <FaixaDaHome>

            </FaixaDaHome>

            <FaixaDeAvisos>
                <div>
                    <h1>AVISOS</h1>
                
                    <p>
                    Lorem ipsum dolor sit amet, consectetuer Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh eu
                    </p>
                </div>

                <div>
                    <h1>GALERIA</h1>
                    
                    <MinCarrossel>
                        <motion.div ref={carousel} drag="x" dragConstraints={{ right: 0, left: -width}}>
                            {imagens.map(imagem => (
                                <motion.div>
                                    <img src={imagem} />
                                </motion.div>
                            ))}
                        </motion.div>

                    </MinCarrossel>
                    
                </div>

            </FaixaDeAvisos>
            <Footer/>
       </>
    )
};