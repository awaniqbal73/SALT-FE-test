import React from 'react'
import Banner from '../../asset/banner.jpg'
import Scroll from '../../asset/scroll.svg'
import './banner.scss'

export default function Header() {
    return (
        <>
            <section>
                <div className='banner'>
                    <img src={Banner} className="banner-size" alt="logo" />
                    <div className='overlay'>
                        <div className='box-title-thumb'>
                            <div className='title'>
                                <h1>Discover<br /> Your Wonder</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='center'>
                    <a href='#who'>
                        <img src={Scroll} className="Scroll" alt="overlay" />
                    </a>
                </div>
            </section>

        </>

    )
}
