import React from 'react'
import './Home.css'

const PagesHome = () => {

    const [active, setActive] = React.useState(true)
      
    function handleClick(event) {
        event.currentTarget.classList.toggle("active")
    }

    function buttomClick(){
        const janelas = document.querySelectorAll(".janela")
        janelas.forEach(janela => {
            if (janela.classList.contains("active")){
                janela.classList.remove("active")
            }
            else{
                janela.classList.add("active")
            }
        });
        console.log(janelas)
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