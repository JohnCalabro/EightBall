import React, {useState} from "react";
// import answers from "./answers";
import "./EightBall.css"


const EightBall = (props) => {

  const [msg, setMsg] = useState("Think of a Question.");
  const [color, setColor] = useState("black");

//    const [msg, setMsg] = useState("Think of a Question.");
//    const [color, setColor] = useState("black");


    // console.log(props.data)
   
    // console.log(msg)
    // console.log(answers, typeof(answers))
    // let answers = ["mario", "luigi", "link"];
    
    
    let think = "Think of a Question"
    // console.log(think)

    let getRandomAnswer = (answers) => {
        console.log(answers)
        console.log(answers[Math.floor(Math.random() * answers.length)])
        return answers[Math.floor(Math.random() * answers.length)]
    }
    
    let handleClick = () => {
    let {msg, color} = getRandomAnswer(props.data);
    console.log(msg)
    setMsg(msg);
    setColor(color);
    }
    

    // const [question, setAnswer] = useState(think)
    const [test, setTest] = useState('mankey!')
   
//    const getAnswer = () => {
       
//         // setAnswer(getRandomAnswer(answers))
    
//    }


  


//    import React, { useState } from "react";

//    function Person() {
//      const [mood, setMood] = useState("happy");
   
//      return (
//        <div>
//          <div> Your mood is {mood} </div>
//          <button onClick={() => setMood('excited')}> Change! </button>
//        </div>
//      );




   return <>
        <div onClick={handleClick} className="ball" style={{ backgroundColor: color }}>
           <p className="think">{msg}</p>
           
           {/* <button onClick={() => getRandomAnswer(answers)}>TEST</button>
           <button onClick={() => setAnswer(getRandomAnswer(answers))}>CHANGE??</button> */}
          
           <h1 onClick={() => setTest('primape')}>{test}</h1>
        </div>
    </>
}


export default EightBall;