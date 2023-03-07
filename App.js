import React, {useState} from "react"
import ReactDOM from "react-dom/client"
import Counter from "./counter";





function App(){
    const [count, setCount] = useState(0);
    const handleAdd = () =>{
        setCount(count+1);
    }
    const handleSub = () =>{
        setCount(count-1)
    }
    const reset = () =>{
        setCount(0)
    }
    const add = <button className="button" onClick={handleAdd}>Add</button>
    const sub = <button className="button" onClick={handleSub}>Sub</button>
    const resetB = <button className="button reset-button" onClick={reset}>Reset</button>
    return(
    
        <div>
            <Counter count = {count}/>
            {add}
            {sub}
            {resetB}
        </div>
       
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>)