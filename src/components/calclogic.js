import React from "react";
import { useState } from "react";
import "../App.css";


function Calclogic() {
const [res,setres] = useState("");
const onClick = (e)=>{
  setres(res.concat(e.target.name));
}

//for computation events
const handlevent = ()=>{
  try{
    setres(eval(res).toString());
  } catch (err){
    setres("err");
  }
}

//for clearing input
const Reset = ()=>{
    setres("");
  }
  

  return (
    <>
    <div className="container">
      <div className="calculator">

        <input type="text" value={res} placeholder="0" /></div>
          <div className="box">
          <button onClick={Reset} id="Reset" >C</button>
          </div>
          <div className="row1">
            <button onClick={onClick} name="1" className="one">1</button>
            <button onClick={onClick} name="2" className="two">2</button>
            <button onClick={onClick} name="3" className="three">3</button>
            <button onClick={onClick} name="/" className="div">/</button>
          </div>
          <div className="row2">
            <button onClick={onClick} name="4" className="four">4</button>
            <button onClick={onClick} name="5" className="five">5</button>
            <button onClick={onClick} name="6" className="six">6</button>
            <button onClick={onClick} name="-" className="sub">-</button>
          </div>
          <div className="row3">
            <button onClick={onClick} name="7" className="seven">7</button>
            <button onClick={onClick} name="8" className="eigth">8</button>
            <button onClick={onClick} name="9" className="nine">9</button>
            <button onClick={onClick} name="+" className="add">+</button>
          </div>
          <div className="row4">
            <button onClick={onClick} name="." className="sym">.</button>   
            <button onClick={onClick} name="0" className="zero">0</button>
            <button onClick={handlevent}      className="result">=</button>
            <button  onClick={onClick} name="*" className="mul">*</button>
          </div>
      </div>

    </>
  );
}

export default Calclogic;