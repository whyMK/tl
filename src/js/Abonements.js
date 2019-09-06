import React from 'react'

import firstAbonement from '../images/first_abonement.png'
import secondAbonement from '../images/second-abonement.jpg'
import heart from '../images/1f49c.png'
import finger from '../images/1f449.png'
import face from '../images/1f60f.png'
import title from '../images/iblock/83c/actions_title.png'

var textStyleJustify = { textAlign: 'justify' };
var textStyleRight = { textAlign: 'right' };

class Abonements extends React.Component {
  render () {
    return (
    	<section className="offers-wrapper wrapper">
    		<div className="container">
    			<div className="title-wrapper">
    				<div className="title-wrapper__inner">
    					<div className="title-wrapper__header">
    						<span><img src={title} alt="" /></span>
    					</div>
    					<div className="title-wrapper__titles title-wrapper__title">
    						Абонементы
              </div>
    				</div>
    			</div>
    			<div className="offers-container">
    				<div className="offers-wrap" id="bx_3218110189_47722">
    					<div className="image-block">
    						<img src={firstAbonement} alt="Toplaser_abonement" />
    					</div>
    					<div className="text-block">
    						<div className="content-block main-text">
                  <p style={textStyleJustify}>
                    <b>
                      <img src={heart} width="30" height="30" alt="heart" />При покупке сразу 4 процедур
                      <img src={finger} width="30" height="30" alt="finger" />вы получаете выгоду 25%⠀
                    </b>
                    <br />
                    <b>
                      <img src={heart} width="30" height="30" alt="heart" />Абонемент на 6 процедур
                      <img src={finger} width="30" height="30" alt="finger" /> скидка составит 33%⠀</b>
                    <br />
                    <b>
                      <img src={heart} width="30" height="30" alt="heart" />Cамая выгодная цена при покупке абонемента на 10 процедур
                      <img src={finger} width="30" height="30" alt="finger" /> 40%
                    </b>
                    <br />
                  </p>
    						</div>
    					</div>
    				</div>

    				<div className="offers-wrap" id="bx_3218110189_6122">
    					<div className="image-block">
    						<img src={secondAbonement} alt="Second-abon" />
    					</div>
    					<div className="text-block">
    						<div className="title-block main-text">
                  Теперь вы сможете
                  <br />
                  проходить курс эпиляции
                  <br />
                  по очень аппетитной цене
                  <img src={face} width="30" height="30" alt="face" />
                </div>
    						<div className="content-block main-text">
    							<p style={textStyleJustify}>
    	              Все подробности у администратора салона.
                    <br />
                  </p>
    					  </div>
    				  </div>
    				</div>
    			</div>
    		</div>
      </section>
    )
  }
}

export default Abonements
