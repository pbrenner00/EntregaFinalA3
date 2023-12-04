import React, {FC,MouseEvent} from 'react';
import '../css/style2.css'
interface ArrowProps {
    onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

const PrevArrow: FC<ArrowProps> = ({ onClick }) => (
    <button onClick={onClick} className="slick-prev">
        Anterior
    </button>
);

const NextArrow: FC<ArrowProps> = ({ onClick }) => (
    <button onClick={onClick} className="slick-next">
        Próximo
    </button>
);

export { PrevArrow, NextArrow };