import React from 'react'
import title from '../images/title-section.png'
import sectionImg from '../images/iblock/4da/section1_img.png'

class Promo extends React.Component {
  render () {
    return (
      <section className="service-direction-wrapper wrapper">
      	<div className="container">
      		<div className="title-wrapper">
      			<div className="title-wrapper__inner">
      				<div className="title-wrapper__header">
      					<span><img src={title} alt="Листик" /></span>
      				</div>
      				<div className="title-wrapper__title">
      					Лазерная Эпиляция
              </div>
      				<div className="title-wrapper__footer">
      					<span>Самая эффективная процедура в борьбе с нежелательной растительностью</span>
      				</div>
      			</div>
          </div>
      		<div className="service-direction-top">
      			<div className="row">
      				<div className="col-xs-12 col-md-6">
      					<div className="service-direction-top__image">
      						<img src={sectionImg} alt="" />
      					</div>
      				</div>
      				<div className="col-xs-12 col-md-6  ">
                <div className="service-direction-top__text">
                  <div className="title-block">
      	            <h1>Лазерная Эпиляция</h1>
                  </div>
                  <div className="text-block">
      	            <p>
      		            Лазерная эпиляция - одна из самых популярных процедур косметических и медицинских салонов, позволяющая избавиться от лишних волос и сделать ваше тело идеальным на все 100!
      	            </p>
      	            <p>
      		            Принцип действия диодного лазера основан на передаче тепловой энергии в волосяной фолликул. Луч лазера поглощается меланином (тёмным пигментом волоса), разрушая его и нарушая нормальный роста волос.
      	            </p>
      	            <p>
      		            Приглашаем пройти процедуру лазерной эпиляции в одном из наших салонов и лично ознакомиться со всеми преимуществами диодной лазерной эпиляции.
      	            </p>
                  </div>
                  <br />
                </div>
      				</div>
      			</div>
          </div>
      	</div>
      </section>
    )
  }
}

export default Promo
