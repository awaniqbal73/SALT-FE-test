import React from 'react'
import Vectorcore from '../../asset/vectorcore.png'
import './corevalue.scss'

export default function Corevalue() {
  return (
    <div>
      <section className='core-values'>
        <div className='container'>
          <div className='row'>
            <div className='box-item-core'>
              <h1>Core Values</h1>
              <p>Ridiculus laoreet libero pretium et, sit vel elementum convallis fames. Sit suspendisse etiam eget egestas. Aliquet odio et lectus etiam sit.
                <br /><br/>
                In mauris rutrum ac ut volutpat, ornare nibh diam. Montes, vitae, nec amet enim.
              </p>
              <ul className='box-list'>
                <li>
                  <h1>Dedication</h1>
                  <div className='p-list'>
                    Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.
                  </div>
                </li>
                <li>
                  <h1>Intellectual Honesty</h1>
                  <div className='p-list'>
                    Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias conse.
                  </div>
                </li>
                <li>
                  <h1>Curiosity</h1>
                  <div className='p-list'>
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.
                  </div>
                </li>
              </ul>
            </div>
            <div className='box-core-img'>
              <img src={Vectorcore} className="backbanner" alt="overlay" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
