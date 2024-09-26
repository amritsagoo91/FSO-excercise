import { useState } from 'react'

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>
const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}:</td>
      <td>{props.value}</td>
    </tr>
  );
};

const Statistics = (props) => {
  const sum = props.stats.reduce((acc, current) => acc + current, 0);
  const total = props.good + props.bad + props.neutral;

  return (<table>
    <tbody>
    <StatisticLine text="good" value={props.good} />
    <StatisticLine text='neutral' value={props.neutral} />
    <StatisticLine  text='bad' value={props.bad}/>
    <StatisticLine text='all' value={props.good + props.bad + props.neutral} />
    <StatisticLine text='average' value={sum ? sum / total : 0} />
    <StatisticLine text='positive' value={(props.good ? (props.good / total)*100 : 0)+ ' %'}/> 
    </tbody>
  </table>

  )

}


function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [stats, setStats] = useState([]);

  const handleGood = () => {
    setGood(good + 1);
    setStats(stats.concat(1))
  }

  const handleNeutal = () => {
    setNeutral(neutral + 1);
    setStats(stats.concat(0))
  }

  const handleBad = () => {
    setBad(bad + 1);
    setStats(stats.concat(-1))
  }
  console.log(stats)

  return (
    <>
      <h1>give feedback</h1>
      <Button onClick={handleGood} text="good" />
      <Button onClick={handleNeutal} text="neutral" />
      <Button onClick={handleBad} text="bad" />
      

      {(good || bad || neutral) ? <Statistics good={good} bad={bad} neutral={neutral} stats={stats} /> : <h4>No Feedback given</h4>}

      {/* <Statistics good={good} bad={bad} neutral={neutral} stats={stats}/> */}




    </>
  )
}

export default App
