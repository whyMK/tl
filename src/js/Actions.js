import React from 'react'

import firstAction from '../images/first-action.png'
import secondAction from '../images/second-action.png'
import title from '../images/iblock/83c/actions_title.png'

var textStyleJustify = { textAlign: 'justify' };
var textStyleRight = { textAlign: 'right' };

class Actions extends React.Component {
  render () {
    return (
    	<section className="offers-wrapper wrapper">
    		<div className="container">
    			<div className="title-wrapper">
    				<div className="title-wrapper__inner">
    					<div className="title-wrapper__header">
    						<span><img src={title} alt="" /></span>
    					</div>
    					<div className="title-wrapper__title">
    						Акции
              </div>
    					<div className="title-wrapper__footer">
    						<span>и специальные предложения</span>
    					</div>
    				</div>
    			</div>
    			<div className="offers-container">
    				<div className="offers-wrap" id="bx_3218110189_47722">
    					<div className="image-block">
    						<img src={firstAction} alt="Акция Давай знакомиться от Toplaser" />
    					</div>
    					<div className="text-block">
    						<div className="title-block">
    							Акция "Давай знакомиться" от TopLaser
                </div>
    						<div className="content-block main-text">
    							<p style={textStyleJustify}>
                    <b>При первом посещении СКИДКА 30% на ВСЁ
                      <br />
                    </b>
                  </p>
                  <p style={textStyleJustify}>
                  	 Все подробности у администратора салона.<b>
                    <br />
                   </b>
                  </p>
                  <p style={textStyleRight}>
                   <i>*Условия акции: подпишись на нашу группу в Instagram!</i>
                   <br />
                  </p>
                </div>
              </div>
            </div>

    				<div className="offers-wrap" id="bx_3218110189_6122">
    					<div className="image-block">
    						<img src={secondAction} alt="Приведи подругу от TopLaser" />
    					</div>
    					<div className="text-block">
    						<div className="title-block">
    							Акция "Приведи подругу" от TopLaser
                </div>
    						<div className="content-block main-text">
    							<p style={textStyleJustify}>
    	              Приведи подругу и получи эпиляцию одной зоны БЕСПЛАТНО
                    <br />
                  </p>
                  <p style={textStyleRight}>
                   <i>
                  	*Условия акции: подпишись на нашу группу в Instagram!</i>
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

export default Actions
