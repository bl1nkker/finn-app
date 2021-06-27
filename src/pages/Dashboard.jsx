import RemainderConfirmation from "../components/confirmationWindow/RemainderConfirmation";
import {useState} from 'react'
import { Bar } from 'react-chartjs-2'

const tempData = [
  {title:'Внимание!', description:'В ведомости за декабрь 2020  сотруднику Иванову И.И. перевыдано денежных средств в размере 1 500 руб.'},
  {title:'Не внимание!', description:'В ведомости за декабрь 2020  сотруднику Иванову И.И. перевыдано денежных средств в размере 1 500 руб.'},
  {title:'Стой!', description:'В ведомости за декабрь 2020  сотруднику Иванову И.И. перевыдано денежных средств в размере 1 500 руб.'},
  {title:'Внимание!', description:'В ведомости за декабрь 2020  сотруднику Иванову И.И. перевыдано денежных средств в размере 1 500 руб.'},
  {title:'Внимание!', description:'В ведомости за декабрь 2020  сотруднику Иванову И.И. перевыдано денежных средств в размере 1 500 руб.'},
  {title:'Внимание!', description:'В ведомости за декабрь 2020  сотруднику Иванову И.И. перевыдано денежных средств в размере 1 500 руб.'},
  {title:'Внимание!', description:'В ведомости за декабрь 2020  сотруднику Иванову И.И. перевыдано денежных средств в размере 1 500 руб.'},
  {title:'Внимание!', description:'В ведомости за декабрь 2020  сотруднику Иванову И.И. перевыдано денежных средств в размере 1 500 руб.'},
]

function Dashboard() {
  const [isConfirmed, setIsConfirmed] = useState(false)
  
  return (
    <div style={{ textAlign: "center"}}>
      {/* Confirmation Window (perm) */}
      {!isConfirmed && <RemainderConfirmation setIsConfirmed={setIsConfirmed}/>}

      <main className="container home__container">
        {/* Signals */}
        <div className="home__signals">
          <div className="signals__box">Сигналы <span>{tempData.length}</span></div>
            <div className="home__warning-cards">
              {tempData.map((card, id) =>
                <div key={id} className="home__warning-card">
                  <div className="warning__card-title">{card.title} <a href="#">Подробнее</a></div>
                  <div className="warning__card-content">{card.description}</div>
                </div>)}
            </div>
        </div>

        {/* BarPlot */}
        <div className="home__infographic">
          <div className="info">
            <Bar
              data={{
                labels: ['January', 'February', 'March',
                         'April', 'May'],
                datasets: [
                  {
                    label: 'Rainfall',
                    backgroundColor: 'rgba(75,192,192,1)',
                    borderColor: 'rgba(0,0,0,1)',
                    borderWidth: 2,
                    data: [65, 59, 80, 81, 56]
                  }
                ]
              }}
              options={{
                title:{
                  display:true,
                  text:'Average Rainfall per month',
                  fontSize:20
                },
                legend:{
                  display:true,
                  position:'right'
                }
              }}
            />
          </div>
          <div className="info__cards">
            <div className="info__card">
              <div className="info__card-title">Выручка за последние 5 дней</div>
              <h3 className="info__title">110 000,00 ₽</h3>
            </div>
            <div className="info__card">
              <div className="info__card-title">Выручка за день</div>
              <h3 className="info__title">110 000,00 ₽</h3>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
