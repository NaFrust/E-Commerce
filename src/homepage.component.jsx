import React from 'react';

const Homepage = () =>{
    return(
        <div className="homepage">
            <div className="directory-menu">
                <div className="menu-item">
                    <div className="contenido">
                        <h1 className="titulo">Sombreros</h1>
                        <span className="subtitulo">Comprar ahora</span>
                    </div>
                </div>    
                <div className="menu-item">
                    <div className="contenido">
                        <h1 className="titulo">Pantalones</h1>
                        <span className="subtitulo">Comprar ahora</span>
                    </div>    
                </div>
                <div className="menu-item">
                    <div className="contenido">
                        <h1 className="titulo">Anteojos</h1>
                        <span className="subtitulo">Comprar ahora</span>
                    </div>
                </div>     
                <div className="menu-item">
                    <div className="contenido">
                        <h1 className="titulo">Remeras</h1>
                        <span className="subtitulo">Comprar ahora</span>
                    </div> 
                </div>    
                <div className="menu-item">
                    <div className="contenido">
                        <h1 className="titulo">Zapatillas</h1>
                        <span className="subtitulo">Comprar ahora</span>
                    </div>
                </div>    
            </div>
        </div>
            
    )
}

export default Homepage;