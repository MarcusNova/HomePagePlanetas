import './Sectionone.css';
import React from 'react';
import Parallax from 'parallax-js';
import logoBack from '../resources/background.png';
import imgRock from '../resources/rock.png';
import imgEarth from '../resources/earth.png';
import imgMid from '../resources/mid.png';
import imgFore from '../resources/foreground.png';

export default class Section1 extends React.Component {
    componentDidMount() {
        this.parallax = new Parallax(this.scene)
    }
    componentWillUnmount() {
        this.parallax.disable()
    }
    render() {
        return (
            <section ref={escena => this.scene = escena} id="scene">
                <div data-depth="0.1" className="bg">
                    <img src={logoBack} alt="Space"></img>
                </div>     
                <div data-depth="0.2" className="rock1">
                    <img src={imgRock} alt="rock"></img>
                </div>   
                <div data-depth="1.2" className="earth">
                    <img src={imgEarth} alt="earth"></img>
                </div>   
                <div data-depth="0.1" className="scene-Title">
                    <h1>PLANETS</h1>
                </div>     
                <div data-depth="0.4" className="mid">
                    <img src={imgMid} alt="mid"></img>
                </div>     
                <div data-depth="0.1" className="fore">
                    <img src={imgFore} alt="fore"></img>
                </div>     
                
            </section>
        );
    }
}