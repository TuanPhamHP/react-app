import React from 'react'
import './Task.css'
import Flipmove from 'react-flip-move'
function Task(props) {
    const items = props.items
    const listitems = items.map(param =>{
        return <div name={param.key} key={param.key} className="tasks" >
        <span>
            <input type="text" key={param.key} id={param.key} value={param.text}  onChange={(e)=>{ props.changeValue(e.target.value, param.key)}}/>
            <span className="remove-btn" onClick={()=> props.therestitem(param.key)}>X</span>
        </span>
        </div>
    } )
    return (
        <div className="list-tasks" >
            <Flipmove duration={400} easing="ease-in-out">
                {listitems}
            </Flipmove>
        </div>
    )
}

export default Task
