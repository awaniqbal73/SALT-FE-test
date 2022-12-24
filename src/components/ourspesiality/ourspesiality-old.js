import React, { Component } from 'react'
import SliderOur from "react-slick";
import './ourspesiality.scss'
import Acc from '../../asset/Accesories.png';
import Speed from '../../asset/Speed Improvement.png';
import Exhaust from '../../asset/Exhaust.png'

export default class Ourspesiality extends Component {
    render() {
        const settings = {
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "60px",
            slidesToShow: 1,
            speed: 500,
            arrows: true,
            dots: true,
        };
        return (
            <div>
                <section className='our-speciality'>
                    <div className='container'>
                        <div className='row'>
                            <div className='title'>
                                Our Speciality
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc sit amet congue aliquam.
                            </p>
                            <div className='slider-our-speciality'>

                            
                            <SliderOur {...settings}>
                                <div className='box-slider-our'>
                                    <img src={Acc} />
                                    <div className='title'>tes</div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc sit amet congue aliquam.</p>
                                </div>
                                <div  className='box-slider-our'>
                                    <img src={Speed} />
                                    <div className='title'>tes</div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc sit amet congue aliquam.</p>

                                </div>
                                <div  className='box-slider-our'>
                                    <img src={Exhaust} />
                                    <div className='title'>tes</div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc sit amet congue aliquam.</p>

                                </div>
                                <div  className='box-slider-our'>
                                    <img src={Acc} />
                                    <div className='title'>tes</div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc sit amet congue aliquam.</p>

                                </div>
                            </SliderOur>
                            </div>
                        </div>
                    </div>


                </section>
            </div>
        );
    }
}
