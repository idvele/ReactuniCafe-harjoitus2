import { useState } from 'react'


const Statistics = (props)=>{

  const average =  ((props.good*1) + (props.neutral*0) + (props.bad*-1)) / (props.good + props.bad + props.neutral)
  const positive= ((props.good/(props.good+props.neutral+props.bad))*100)
  
  if(props.good!=0 || props.neutral!=0 || props.bad!=0)
 { return(
    <>
    <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
    
    <p>average{average}</p>
    <p>positive{positive}%</p>
    
    </>
)
}
<p></p>
}


const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

 
  return (
    <div>
      <h1> give feedback</h1>
      
      <button onClick={()=>setGood(good+1)}>good</button>
      <button onClick={()=>setNeutral(neutral+1)}>neutral</button>
      <button onClick={()=>setBad(bad+1)}>bad</button>
      
      <h1> statistics</h1>

      
      
      <Statistics good={good} neutral={neutral} bad={bad}/>

    </div>
  )
}

export default App