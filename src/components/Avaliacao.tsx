// Avaliacao.js
import React from 'react';
import Star from '../js/Star';
import StarPreenchida from "../img/star.png";
import StarFilled from "../img/star-filled.png";
import StarOutline from "../img/star-outline.png";


interface AvaliacaoProps {
    numEstrelas: number;
    maxEstrelas: number;
    filledSrc: string;
    outlineSrc: string;
    preenchidoSrc: string;
}

const Avaliacao: React.FC<AvaliacaoProps> = ({ numEstrelas, maxEstrelas, filledSrc, outlineSrc, preenchidoSrc }) => (
    <div className="estrelas">
        {Array.from({ length: maxEstrelas }).map((_, index) => (
            <Star
                key={index}
                filled={index < numEstrelas}
                filledSrc={StarFilled}
                outlineSrc={StarOutline}
                preenchidoSrc={StarPreenchida}
            />
        ))}
    </div>
);

export default Avaliacao;
