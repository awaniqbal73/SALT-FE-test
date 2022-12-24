import React, { Component } from "react";
import Slider from "react-slick";
import './who.scss'

export default class SimpleSlider extends Component {

    state = {
        activeSlide: 1,
        activeSlide2: 0
    };
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll:1,
            arrows:true,
            beforeChange: (current, next) => this.setState({ activeSlide: next + 1 }),
            afterChange: current => this.setState({ activeSlide2: current }),
            
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1
                    }
                },
            ]
        };
        return (
            <div>
                <section className="slick-who">
                    <div className="container">
                        <Slider {...settings}>
                            <div className="box-slick">
                                <h1>Who we are</h1>
                                <h3>Technology Company</h3>
                                <p>Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                            </div>
                            <div className="box-slick">
                                <h1>What we do</h1>
                                <h3>Professional Brand Management</h3>
                                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem</p>
                            </div>
                            <div className="box-slick">
                                <h1>How we do</h1>
                                <h3>Strategize, Design, Collaborate</h3>
                                <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse sequam nihil molestiae consequatur.</p>
                            </div>

                        </Slider>
                        <div className="index-number" id="who">
                            <span className="number-stong">0{this.state.activeSlide}</span><span className="miring">/</span><span>03</span>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}