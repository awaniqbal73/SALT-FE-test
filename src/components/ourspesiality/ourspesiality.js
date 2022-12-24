import React, { Component } from "react";
import Slider from "react-slick";
import './ourspesiality.scss'
import Acc from '../../asset/Accesories.png';
import Speed from '../../asset/Speed Improvement.png';
import Exhaust from '../../asset/Exhaust.png'

export default class AsNavFor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nav1: null,
            nav2: null
        };
    }

    componentDidMount() {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });
    }

    render() {
        const settings = {
            className: "center",
            centerMode: true,
            centerPadding: "80px",
            slidesToShow: 1,
            arrows: false,
            autoplay:true,
        };
        const settingsText = {
            className: "center",
            centerMode: false,
            centerPadding: "60px",
            slidesToShow: 1,
            arrows: true,
            dots: true,
        };
        return (
            <div>
                <section className='our-speciality'>
                    <div className='container'>
                        <div className='row'>
                            <div className="box-our-speciality-title">
                                <div className='title'>
                                    Our Speciality
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc sit amet congue aliquam.
                                </p>
                            </div>
                            <div className='slider-our-speciality'>
                                <Slider {...settings}
                                    asNavFor={this.state.nav1}
                                    ref={slider => (this.slider2 = slider)}
                                    // slidesToShow={3}
                                    swipeToSlide={true}
                                    focusOnSelect={true}
                                >
                                    <div className='box-slider-our'>
                                        <img src={Acc} />
                                        <h3>Accesories</h3>
                                    </div>
                                    <div className='box-slider-our'>
                                        <img src={Speed} />
                                        <h3>Speed Improvement</h3>
                                    </div>
                                    <div className='box-slider-our'>
                                        <img src={Exhaust} />
                                        <h3>Exhaust</h3>
                                    </div>
                                </Slider>
                                <Slider {...settingsText}
                                    asNavFor={this.state.nav2}
                                    ref={slider => (this.slider1 = slider)}
                                >
                                    <div className="text-slick">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc sit amet congue aliquam.</p>
                                    </div>
                                    <div className="text-slick">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc sit amet congue aliquam.</p>
                                    </div>
                                    <div className="text-slick">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc sit amet congue aliquam.</p>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}