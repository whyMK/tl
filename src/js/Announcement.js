import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
import femaleHairRemoval from '../images/iblock/629/epilyaciya.jpg'

import sectionImg from '../images/image-guarantee.png'
import Appointment from './Appointment'
var textStyle = { textAlign: 'center' };

class Announcement extends React.Component {
  render () {
    return (
      <section className="service-about-wrapper wrapper mb75">
      	<div className="container">
      		<div className="service-about-info my_service-about">
      			<div className="row">
      				<div className="col-xs-12">
      					<div className="text-block">
      						<div className="title-block">
      	            <h2>Преимущества процедуры</h2>
                  </div>
                  <br />
                  <p>Избавиться раз и навсегда от нежелательной растительности на лице и теле – мечта каждой девушки!</p>
                  <p>К бесспорным достоинствам лазерной эпиляции в салоне необходимо отнести следующие моменты:</p>
                  <div className="list-block">
                  	<ul>
                  		<li>безопасность;</li>
                  		<li>безболезненность;</li>
                  		<li>кожа становится гладкой и шелковистой;</li>
                  		<li>уходит раздражение и врастание;</li>
                      <li>уменьшается потливость;</li>
                      <li>не нужно отращивать волосы;</li>
                  	</ul>
                  </div>
                  <br />
                  <h2>Противопоказания</h2>
                  <div className="list-block">
                  	Как и любая косметическая процедура, лазерная эпиляция имеет ряд противопоказаний:
                  	<ul>
                  		<li>Беременность и период лактации;</li>
                  		<li>Онкологические заболевания;</li>
                  		<li>Эпилепсия;</li>
                  		<li>Туберкулез;</li>
                  		<li>Сахарный диабет в фазе декомпенсации;</li>
                  		<li>Повышенная температура тела;</li>
                  		<li>Герпес в зоне эпиляции на момент процедуры;</li>
                      <li>Лишай, витилиго, псориаз;</li>
                      <li>Травмированная кожа в зоне эпиляции: ожоги, не зажившие шрамы после операции, глубокие порезы;</li>
                      <li>Свежий интенсивный загар (в течение недели до процедуры);</li>
                  	</ul>
                    <li>К противопоказаниям НЕ относятся: варикоз, родинки, критические дни, раздражение после бритья</li>
                    <li>При отсутствии противопоказаний лазерная эпиляция АБСОЛЮТНО БЕЗОПАСНА для вас!</li>
                  </div>
                  <br />
                  <h2>Подготовка к процедуре</h2>
                  <div className="list-block">
                  	<ul>
                  		<li>3-4 недели не удалять волосы воском/сахаром/эпилятором/пинцетом;</li>
                  		<li>5-7 дней перед процедурой не загорать;</li>
                  		<li>накануне вечером перед процедурой тщательно удалить волосы бритвой, триммером или депилирующим кремом;</li>
                  		<li>необходимо очистить кожу от дезодоранта/кремов/масел/косметических средств;</li>
                    </ul>
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

export default Announcement
