import { useEffect, useState, useRef } from "react";
import './main.scss'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import hoverEffect from 'hover-effect';
import manga1 from '../assets/renike1.jpg';
import manga2 from '../assets/renike2.jpg';
import manga3 from '../assets/imitor1.jpg';
import manga4 from '../assets/imitor2.jpg';
import manga5 from '../assets/anthony1.jpg';
import manga6 from '../assets/anthony2.jpg';
import dist from '../assets/displacement.jpeg'


export default function Main() {

    const image = useRef(null);
    const image1 = useRef(null);
    const image2 = useRef(null);
    const circular = useRef(null);
    const circularText = useRef(null);

    useEffect(() => {
        const images =  [manga1, manga2];
        const images1 = [manga3, manga4];
        const images2 = [manga5, manga6];

        const contentNo = 0;

        const img = image.current;
        const img2 = image1.current;
        const img3 = image2.current;

        hoverEffectfn(images, img)
        hoverEffectfn(images1, img2)
        hoverEffectfn(images2, img3)

        function hoverEffectfn(photo, selector){
            return new hoverEffect({
                parent: selector,
                intensity: 0.3,
                imagesRatio: 450/600,
                image1: photo[0],
                image2: photo[1],
                displacementImage: dist,
                hover: true,
            })
        }

        

        circularText.current.innerHTML = circularText.current.innerText.split('').map((char, idx) => {
            console.log(circularText.current.innerText.length);

            return `<span style = "transform: rotate(${idx * 10.5}deg)">${char}</span>`
        }).join('');


    })

    
    function moveMouse (e) {
        circular.current.style.left = `${e.pageX}px`;
        circular.current.style.top = `${e.pageY}px`;
    }

    function enterMouse () {
        circular.current.style.opacity = 1;
        circular.current.style.transform = `scale(1)`;
    }

    function leaveMouse () {
        circular.current.style.opacity = 0;
        circular.current.style.transform = `scale(0)`
    }


    return (
        <body>
            <section className="one">
                <div className="container">
                    <figure className="figure">
                        <div onMouseEnter={enterMouse} onMouseMove={moveMouse} onMouseLeave={leaveMouse} ref={image} className="img-placeholder img-placeholder-1"></div>
                        <p className="title">Renike</p>

                        <div className="label">
                            <div className="serial">No. 1</div>
                            <div className="txt">Renike</div>
                        </div>
                    </figure>
                </div>
            </section>

            <section className="two">
                <div className="container">
                    <figure className="figure">
                        <div onMouseEnter={enterMouse} onMouseMove={moveMouse} onMouseLeave={leaveMouse} ref={image1} className="img-placeholder img-placeholder-2"></div>
                        <p className="title">Imitor</p>

                        <div className="label">
                            <div className="serial">No. 2</div>
                            <div className="txt">Eve</div>
                        </div>
                    </figure>
                </div>
            </section>

            <section className="three">
                <div className="container">
                    <figure className="figure">
                        <div onMouseEnter={enterMouse} onMouseMove={moveMouse} onMouseLeave={leaveMouse} ref={image2} className="img-placeholder img-placeholder-3"></div>
                        <p className="title">Anthony</p>

                        <div className="label">
                            <div className="serial">No. 3</div>
                            <div className="txt">Sabina</div>
                        </div>
                    </figure>
                </div>
            </section>

            <div ref={circular} className="circle circular-text">
                <div ref={circularText} className="text">
                    Explore more content
                </div>
            </div>
        </body>
    )
}