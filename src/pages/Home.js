import { render } from '@testing-library/react'
import React, { useEffect } from 'react'
import './Home.css'


const PagesHome = () => {
      
    const [longitude, setlongitude] = React.useState(0);
    const [latitude, setlatitude] = React.useState(0);


    async function carregar(){
        if("geolocation" in navigator){
            navigator.geolocation.getCurrentPosition(function(position){
              setlatitude (position.coords.latitude)
              setlongitude (position.coords.longitude)
            })
        }
        else{
            alert("Não foi possivel acessar sua localização, por favor verificar as permissões do navegador")
        }

        const resposta = await fetch(`https://api.sunrise-sunset.org/json?lat=${36.7201600}&lng=${-4.4203400}&callback=mycallback`)
        /* não obtive retorno valido da api */
    }

    function handleClick(event) {
        event.currentTarget.classList.toggle("active")
        event.currentTarget.classList.remove("acender")
    }

    function buttomClick(){
        const janelas = document.querySelectorAll(".janela")
        janelas.forEach(janela => {
            if (janela.classList.contains("active")){
                janela.classList.remove("active")
            }      
            janela.classList.toggle("acender")
        });
    }

    return(
        <>
            <section>
                <buttom onClick={buttomClick}>Click</buttom>
            </section>
            <section className="predio_bloco">
                <div className="topo"></div>
                    <ul className="andares">
                        <li>
                            <div className="frente">
                                <div onClick={handleClick} className="janela"></div>
                                <div onClick={handleClick} className="janela"></div>
                                <div onClick={handleClick} className="janela"></div>
                                <div onClick={handleClick} className="janela"></div>
                            </div>
                            <div className="lado"></div>
                        </li>
                        <li>
                            <div className="frente">
                                <div onClick={handleClick} className="janela"></div>
                                <div onClick={handleClick} className="janela"></div>
                                <div onClick={handleClick} className="janela"></div>
                                <div onClick={handleClick} className="janela"></div>
                            </div>
                            <div className="lado"></div>
                        </li>
                        <li>
                            <div className="frente">
                                <div onClick={handleClick} className="janela"></div>
                                <div onClick={handleClick} className="janela"></div>
                                <div onClick={handleClick} className="janela"></div>
                                <div onClick={handleClick} className="janela"></div>
                            </div>
                            <div className="lado"></div>
                        </li>
                    </ul>
            </section>

        </>
    );
}

export default PagesHome;