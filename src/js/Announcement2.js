import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
import femaleHairRemoval from '../images/iblock/629/epilyaciya.jpg'

import sectionImg from '../images/image-guarantee.png'
import Appointment from './Appointment'
var textStyle = { textAlign: 'center' };

class Announcement2 extends React.Component {
  render () {
    return (
      <section className="service-about-wrapper wrapper mb75">
      	<div className="container">
      		<div className="service-about-info my_service-about">
      			<div className="row">
      				<div className="col-xs-12">
      					<div className="text-block">

                  <br />
                  <h2>Бесплатная консультация</h2>
                  <div className="list-block">
                      <li>При первом посещении в нашем салоне вы обязательно проходите консультацию специалиста. Она БЕСПЛАТНАЯ и обязательная для всех (даже если вы уже посещали процедуры ЛЭ в других салонах);</li>
                      <li>Консультация необходима для того, чтобы выявить возможные противопоказания, ознакомить вас с процедурой и уходом за кожей до и после неё. Также специалист индивидуально подберёт для вас характеристики на лазере и порекомендует оптимальные интервалы между процедурами;</li>
                  </div>
                  <div className="title-block mTop40">
                  	 <h2>Основные этапы процедуры</h2>
                  </div>
                  <p style={textStyle}>
                   <img width="630" alt="Принцип действия лазерной эпиляции" src={femaleHairRemoval} height="253" title="Принцип действия лазерной эпиляции" />
                  </p>
                  <div className="content-block">
                  	<p>
                  	1.Вы приходите со сбритыми волосками. На кожу наносится гель
                  	</p>
                    <p>
                    2.Происходит обработка лазером выбранной зоны, вы ощущаете покалывание
                    </p>
                    <p>
                    3.В течение 7-14 дней луковица волоса атрофируется. Волоски становятся тоньше, мягче, замедляются в росте
                    </p>
                    <p>
                    4.Волоски выпадают. До 20% из них уже не восстановятся
                    </p>
                    <p>
                    P/S <br /> В среднем для полноценного эффекта вам необходимо пройти курс из 6-10 процедур. Интервал между ними составляет месяц. По мере достижения эффекта интервал будет увеличиваться до 5-6 недель. Затем вы перейдёте на поддерживающие процедуры и будете приходить на 1 сеанс раз в 4-12 месяцев по мере необходимости. Таким образом эффект будет сохраняться постоянно
                    </p>
                  </div>
                  <br />
                  <h2>Рекомендации после процедуры</h2>
                  <div className="content-block">
                  	<div className="list-block">
                  		<ul>
                  			<li>5-7дней не загорать, использовать солнцезащитный крем в зоне эпиляции;</li>
                  			<li>не удаляйте волоски сахарам/воском/электро.эпилятором/пинцетом;</li>
                  			<li>воспользуйтесь для этих целей бритвой, триммером или кремом для депиляции;</li>
                  			<li>2-3 дня не принимайте горячую ванну, не следует посещать бани, сауны, бассейны;</li>
                        <li>2-3 дня не используйте в зоне эпиляции скрабы, жесткие мочалки;</li>
                        <li>2-3 дня нежелательно наносить на кожу спиртосодержащие вещества;</li>
                  		</ul>
                  	</div>
                  </div>
                </div>
              </div>
      		  </div>
      	  </div>
        </div>
      </section>
    )
  }
}

export default Announcement2
