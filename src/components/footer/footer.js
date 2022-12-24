import {React, useState} from 'react'
import LogoWhite from '../../asset/logo-white.png'
import Caret from '../../asset/caret.svg'
import './footer.scss'

export default function Footer() {
    const [isColExpanded, setIsColExpanded] = useState(false)
    return (
        <div>
            <section className='footer'>
                <div className='container'>
                        <div className='box-logo'>
                            <img src={LogoWhite} />
                        </div>
                        <div className='box-contact'>
                            <div className='title' onClick={() => {
                setIsColExpanded(!isColExpanded)
              }}>
                                TECHNOLOGY DEPARTMENT
                                <span  className={isColExpanded ? "caret show" : "caret"}><img src={Caret}/></span>
                            </div>
                            <div className={isColExpanded ? "desc show" : "desc"} >
                                Jl. Lembang No 8 Kel. Braga Kec.Sumur Bandung, Kota Bandung, Jawa Barat
                            </div>
                        </div>
                        <div className='box-list'>
                            <ul>
                                <li>Who We Are</li>
                                <li>Our Values</li>
                                <li>The Perks</li>
                            </ul>
                        </div>
                    </div>
            </section>
        </div>
    )
}
