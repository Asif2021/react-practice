import React, { Component } from 'react'
import CrudForm from './CrudForm'

class Crudlist extends Component {
    state = {
        currentIndex: -1,
        list: this.returnList()
    }

    returnList(){
        if(localStorage.getItem('transaction') == null)
        localStorage.setItem('transaction',JSON.stringify([]) )
        return JSON.parse(localStorage.getItem('transaction'))
    }

    onAddorEdit = (data) => {
        var list = this.returnList()
        if(this.state.currentIndex == -1)
        list.push(data)
        else
        list[this.state.currentIndex] = data
        localStorage.setItem('transaction', JSON.stringify(list) )
        this.setState({list, currentIndex:-1})
    }

    handleEdit = index =>{
        this.setState({
            currentIndex: index
        })
    }

    handleDelete = index =>{
        var list = this.returnList()
        list.splice(index,1)
        localStorage.setItem('transaction', JSON.stringify(list) )
        this.setState({list, currentIndex:-1})
    }
    render() {
        return (
            <div>
               <CrudForm 
               onAddorEdit= {this.onAddorEdit}
               currentIndex={this.state.currentIndex}
               list = {this.state.list}
               />
               <hr />
               <p>list of Transactions</p> 
               <table className='crud_tb'>
                   <tbody>
                   <th className='bg-primary'>Account No.</th>
                   <th className='bg-primary'>iFSC Code</th>
                   <th className='bg-primary'>User Name</th>
                   <th className='bg-primary'>Ammount</th>
                   <th className='bg-primary'>Action</th>
                   
                       {this.state.list.map((item, index)=>{
            return <tr key={index}>
            <td> {item.BAaccountNo} </td>
            <td> {item.iFSC} </td>
            <td> {item.BName} </td>
            <td> {item.amount} </td>
            <td> <button onClick={()=> this.handleEdit(index)}>Edit</button>
            <button onClick={()=> this.handleDelete(index)}>Delete</button></td>

            </tr>
                       })}
                   </tbody>
               </table>
            </div>
        )
    }
}

export default Crudlist
