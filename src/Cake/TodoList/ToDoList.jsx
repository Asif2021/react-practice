import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {addToDo, deleteToDo, removeToDo} from './Actions/Index'

const ToDoList = () => {
    const [inputData, setInputData] = useState('');
    const dispatch = useDispatch();
    const list = useSelector((state)=> state.toDoReducer.list);
 
return (
        <div>
        <div>
        <h1 className='mt-5 text-danger'>To Do List</h1>
            <div>
                <input type="text" placeholder='add items....'
                vlaue={inputData} onChange={ (e) => { setInputData(e.target.value)}} />
               
        <i className='fa fa-plus add-btn' onClick = {() => dispatch(addToDo(inputData), 
                setInputData(""))}> </i>
            </div>
        
            <div>
                    {
                        list.map((elem) => {
                            return (<div key={elem.id}>
                            <h3 style={{display:'inline-flex'}}>{elem.data}</h3>
                            <button className='ml-3' onClick={()=> dispatch(deleteToDo(elem.id))}><i class="fa fa-minus" aria-hidden="true"></i></button>
                            </div>)
                            
                        })
                    }
                    

            </div>
            <div>
                <button className='btn btn-info mt-3' onClick={() => dispatch(removeToDo())}>Clear All</button>
            </div>
        </div>
        </div>
    )
}

export default ToDoList
