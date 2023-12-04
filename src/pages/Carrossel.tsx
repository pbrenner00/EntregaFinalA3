import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { PrevArrow, NextArrow } from '../components/Navegacao';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import ImgCarousel1 from "../img/carrousel1.jpg";
import ImgCarousel2 from "../img/carrousel2.jpg";
import ImgCarousel3 from "../img/carrousel3.png";

const Carrossel = () => {
    const handlePrev = () => {
        // Lógica para lidar com o clique no botão "Anterior"
        console.log('Clicou em Anterior');
    };

    const handleNext = () => {
        // Lógica para lidar com o clique no botão "Próximo"
        console.log('Clicou em Próximo');
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <PrevArrow onClick={handlePrev} />,
        nextArrow: <NextArrow onClick={handleNext} />,
    };

    return (
        <Slider {...settings}>
            <div>
                <img src={ImgCarousel1} className="" alt="..."/>
                <div className="carosselLegenda">
                    <h5>Battlefield 4™</h5>
                    <p>Para quem gosta de jogos tiro.</p>
                </div>
            </div >
            <div>
                <img src={ImgCarousel2} className="" alt="..."/>
                <div  className="carosselLegenda">
                    <h5>GTA V</h5>
                    <p>Esse jogo vai fazer você ficar vidrado, com as varias missões para fazer.</p>
                </div>
            </div>
            <div>
                <img src={ImgCarousel3} className="" alt="..."/>
                <div className="carosselLegenda">
                    <h5>EA Sports FC 24</h5>
                    <p>O grafico e a jogabilidade junto a realidade vai fazer você amar esse jogo.</p>
                </div>
            </div>
            {/* Adicione mais divs para mais slides */}
        </Slider>
    );
};

export default Carrossel;
