import React from 'react'
import sectionImg from '../images/iblock/451/table_header.png'

class Price extends React.Component {
  render () {
    return (
      <section className="service-price-wrapper wrapper">
      	<div className="container">
      		<div className="title-wrapper">
      			<div className="title-wrapper__inner">
      				<div className="title-wrapper__header">
      					<span>
      						<img src={sectionImg} alt="Прайсы" />
      					</span>
      				</div>
      				<div className="title-wrapper__title">
      					 Set'ы
              </div>
      				<div className="title-wrapper__footer">
      					<span>Набором дешевле!</span>
      				</div>
      			</div>
      		</div>
      		<div className="service-price">
      			<div className="price-wrap">
      				<div className="price-table">
      					<div className="price-wrap-table">
      						<table className="table-set">
      							<tbody>
      								<tr>
      									<td>Set 1</td>
      									<td>подмышки<br/>бикини</td>
      									<td>1400₽</td>
      								</tr>
      								<tr>
      									<td>Set 2</td>
      									<td>подмышки<br/>бикини<br/>голени</td>
      									<td>2500₽</td>
      								</tr>
      								<tr>
      									<td>Set 2+</td>
      									<td>подмышки<br/>бикини<br/>голени<br/>1/2 бедра</td>
      									<td>3500₽</td>
      								</tr>
      								<tr>
      									<td>Set 3</td>
      									<td>подмышки<br/>бикини<br/> голени<br/>бёдра<br/>дорожка на животе<br/> 2 зоны на лице</td>
      									<td>4500₽</td>
      								</tr>
      								<tr>
      									<td>Set 4</td>
      									<td>подмышки<br/>бикини<br/>голени<br/>бёдра<br/>руки<br/>дорожка на животе<br/>2 зоны на лице</td>
      									<td>5500₽</td>
      								</tr>
      							</tbody>
      						</table>
      					</div>
      				</div>
      			</div>
      		</div>
      	</div>
      </section>
    )
  }
}

export default Price
