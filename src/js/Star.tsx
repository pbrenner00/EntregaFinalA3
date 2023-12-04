import React from 'react';

interface StarProps {
    filled: boolean;
    filledSrc: string;
    outlineSrc: string;
    preenchidoSrc: string;
}

const Star: React.FC<StarProps> = ({ filled, filledSrc, outlineSrc, preenchidoSrc }) => (
    <img
        src={filled ? preenchidoSrc : (filledSrc ? filledSrc : outlineSrc)}
        className="star_img"
        alt="Estrela"
    />
);

export default Star;