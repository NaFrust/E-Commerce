import React from 'react';
import './menu-item.style.scss'

const MenuItem = ({title})=>(
            <div className="menu-item">
                <div className="contenido">
                    <h1 className="title">{title}</h1>
                    <span className="subtitulo">Comprar ahora</span>
                </div>
            </div>  
)

export default MenuItem;