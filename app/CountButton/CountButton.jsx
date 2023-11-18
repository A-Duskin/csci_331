import { useState, useEffect} from "react"
import "./CountButton.css"

export default function CountButton(props){
    let [count, setCount] = useState(0)
    function handleClick() {
        setCount(count + props.number)
    }
    function RollOverCount(){
        if (count > 10) {
            setCount(0)
        }
    }
    const ButtonStyle = {
        backgroundColor: props.color,
        color: "white",
    }
    useEffect(RollOverCount, [count])
    return (
      <>
      <button style={ButtonStyle} onClick={handleClick}>+{props.number}</button>
      <div>{count}</div>
      </>
    )
    
  }