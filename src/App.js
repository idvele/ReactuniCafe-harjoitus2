import { useState } from 'react'

const StatisticLine = (props) => {
  return(
    <p>{props.text} {props.value}</p>
  )
}

const Statistics = (props)=>{

  const average =  ((props.good*1) + (props.neutral*0) + (props.bad*-1)) / (props.good + props.bad + props.neutral)
  const positive= ((props.good/(props.good+props.neutral+props.bad))*100)
  

  if(props.good!=0 || props.neutral!=0 || props.bad!=0)
 { return(
    <>
    
      <StatisticLine text="good" value ={props.good} />
      <StatisticLine text="neutral" value ={props.neutral} />
      <StatisticLine text="bad" value ={props.bad} />
      <StatisticLine text="average" value ={average} />
      <StatisticLine text="positive" value ={positive} />
      
    </>
)
}
<p></p>
}
const Button = (props)=> {
return(
  <button onClick={()=>props.setti(props.feedBack+1)}>{props.name}</button>
)

}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

 
  return (
    <div>
      <h1> give feedback</h1>
      
      <Button setti={setGood} feedBack={good} name={"good"}/>
      <Button setti={setNeutral} feedBack={neutral} name={"neutral"}/>
      <Button setti={setBad} feedBack={bad} name={"bad"}/>
      
      
      <h1> statistics</h1>

      
      
      <Statistics good={good} neutral={neutral} bad={bad}/>

    </div>
  )
}

export default App