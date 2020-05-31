import React, { Component } from 'react'
import Task from './Task'
import './Tasklist.css'

class TaskList extends Component {
    constructor(props){
        super(props)
        this.state={
            items : [],
            conTent: {
                text : '',
                key :''
            }
        }
        this.textAdded = this.textAdded.bind(this)
        this.itemAdded = this.itemAdded.bind(this)
        this.theRestItems = this.theRestItems.bind(this)
        this.changeValue = this.changeValue.bind(this)

    }
    textAdded(e){
        this.setState({
            conTent:{
                text : e.target.value,
                key: Date.now()
            }
        })
    }
    itemAdded(e){
        e.preventDefault();
        const newTask = this.state.conTent
        console.log(newTask)
        if (newTask.text !== '') {
            const newitems = [...this.state.items, newTask];  //destructring assign
            this.setState({
                items: newitems,
                conTent:{
                    text:'',
                    key :''
                }
            })
        }
    }
    theRestItems(key){
        const theRestItems = this.state.items.filter(itemlist => itemlist.key !== key);
        this.setState({
            items:theRestItems,
        })
        console.log(theRestItems)
    }
    changeValue(ptext, pkey){
        const nitems = this.state.items;
        nitems.map(item =>{
            if (item.key == pkey) {
                item.text = ptext;
            }
        })
        this.setState({
            items: nitems
        })
    }
    render() {
        return (
            <div>
               <form id="to-do-form" onSubmit={this.itemAdded}>
               <div className="input-wrap">
               <input id='inp' type="text" placeholder="Note your things" value= {this.state.conTent.text} onChange={this.textAdded} />
                   <button type="submit" id="add-btn"> + </button>
               </div>
               <Task items={this.state.items} therestitem = {this.theRestItems} changeValue={this.changeValue}></Task>
               </form>
               
            </div>
        )
    }
}
export default TaskList;