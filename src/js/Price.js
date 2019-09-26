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
      					Прайс
              </div>
      				<div className="title-wrapper__footer">
      					<span>Популярные зоны</span>
      				</div>
      			</div>
      		</div>

      		<div className="service-price test4">
      			<div className="price-wrap">
      				<div className="title-table">
      					<div className="left-block">
      						Зона
      					</div>
      					<div className="center-block">
      						Длительность, мин.
      					</div>
      					<div className="right-block">
      						Цена, руб.
      					</div>
                <div className="subtitle-block">

                </div>
      				</div>

      				<div className="price-table">
      					<div className="price-wrap-table">
      						<table>
      							<tbody>
      								<tr>
      									<td>Бикини глубокое</td>
      									<td>20</td>
      									<td>1100₽</td>
      								</tr>
      								<tr>
      									<td>Живот дорожка</td>
      									<td>5</td>
      									<td>150₽</td>
      								</tr>
      								<tr>
      									<td>Подмышки</td>
      									<td>15 </td>
      									<td>500₽</td>
      								</tr>
      								<tr>
      									<td>Ноги полностью</td>
      									<td>60</td>
      									<td>4500₽</td>
      								</tr>
      								<tr>
      									<td>Грудь/ареолы</td>
      									<td>15</td>
      									<td>400₽</td>
      								</tr>
      								<tr>
      									<td>Ягодицы</td>
      									<td>15</td>
      									<td>500₽</td>
      								</tr>
      								<tr>
      									<td>Голени</td>
      									<td>30</td>
      									<td>2300₽</td>
      								</tr>
      								<tr>
      									<td>Руки</td>
      									<td>20</td>
      									<td>1300₽</td>
      								</tr>
      								<tr>
      									<td>Верхняя губа</td>
      									<td>7</td>
      									<td>450₽</td>
      								</tr>
      								<tr>
      									<td>Подбородок</td>
      									<td>7</td>
      									<td>450₽</td>
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
