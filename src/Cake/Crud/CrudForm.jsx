import React, { Component } from 'react'

export class CrudForm extends Component {
    state = {
        ...this.returnStateObject()}
   
        returnStateObject(){
        if(this.props.currentIndex == -1) 
        return {
            BAaccountNo:'',
            iFSC:'',
            BName:'',
            amount:''
        }
         else 
        return this.props.list[this.props.currentIndex]
    }
    
    HandelInputChange = (e) => {
this.setState({
    [e.target.name] : e.target.value
})
    }
    HandelSubmit=(e)=>{
        e.preventDefault();
        this.props.onAddorEdit(this.state)
    }
    componentDidUpdate(prevProps){
        if(prevProps.currentIndex != this.props.currentIndex || 
            prevProps.list.length != this.props.list.length )
        this.setState({...this.returnStateObject()})
    }
    render() {
        return (
            <form autoComplete="off" onSubmit={this.HandelSubmit}>

                <input name='BAaccountNo' placeholder='Account No.' 
                value = {this.state.BAaccountNo} onChange = {this.HandelInputChange} /> <br/> <br />

                <input name='iFSC' placeholder='iFSC code' 
                value = {this.state.iFSC} onChange = {this.HandelInputChange} /> <br /> <br />

                <input name='BName' placeholder='Account Holder Name' 
                value = {this.state.BName} onChange = {this.HandelInputChange} /> <br /> <br />

                <input name='amount' placeholder='amount' 
                value = {this.state.amount} onChange = {this.HandelInputChange} /> <br /> <br />

                <button type='submit'> Submit </button>
            </form>
        )
    }
}

export default CrudForm
