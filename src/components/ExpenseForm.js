import React from 'react';
import moment from 'moment'
import {SingleDatePicker} from 'react-dates';


export default class ExpenseForm extends React.Component{
    state = {
        description: this.props.expense ? this.props.expense.description : '',
        amount: this.props.expense ? (this.props.expense.amount / 100).toString() : '',
        note: this.props.expense ? this.props.expense.note : '',
        createdAt: this.props.expense ? moment(this.props.expense.createdAt) : moment(),
        calendarFocused: false,
        error: ''
    }
    
    render(){
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    {this.state.error &&<p>{this.state.error}</p> }

                    <input type="text" 
                    placeholder="Description"
                    name="description"
                    autoFocus
                    value={this.state.description}
                    onChange={this.onDescriptionChange}/>
                    <input type="text" placeholder="Amount"
                    name="amount"
                    value={this.state.amount}
                    onChange={this.onAmountChange}/>
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={()=> false} //Make all past days available
          />
                    <textarea name="note" placeholder="Add a note (optional)"
                    value={this.state.note}
                    onChange={this.onNoteChange}></textarea>
                    <button>Add Expense</button>
                    
                </form>
                
            </div>
        )
    }
    onDescriptionChange = (e)=>{
        const description = e.target.value
        this.setState(()=>({
            description
        }))
    }
    onAmountChange = (e)=>{
        const amount = e.target.value
        if(amount.match(/^\d*(\.\d{0,2})?$/)){
            this.setState(()=>({
                amount
            }))            
        }

    }
    onNoteChange = (e)=>{
        const note = e.target.value
        this.setState(()=>({
            note
        }))
    }

    onDateChange = (createdAt)=>{
        this.setState(()=>({
            createdAt
        }))
    }
    onFocusChange = ({ focused }) => {
        this.setState({ calendarFocused:focused })
    }
    
    onSubmit = (e) => {
        e.preventDefault();
        if(!this.state.description || !this.state.amount){
          this.setState(()=>({
            error: 'Please enter a description and/or amount'
          }))
        } else{
          this.setState(()=>({
            error: ''
          }))
          this.props.onSubmit({
            description: this.state.description,
            amount:parseFloat(this.state.amount,10)*100,
            note:this.state.note,
            createdAt: this.state.createdAt.valueOf(),
          })

        }
    }

}