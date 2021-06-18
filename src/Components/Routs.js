import React from 'react'
import Login from '../Container/Login'
import { Route, Switch } from 'react-router';
import Home from './Home';
import Contact from './Contact';
import Analytics from './Analytics';
import Cake from '../Cake/Cake';
import ToDoList from '../Cake/TodoList/ToDoList'
import CrudList from '../Cake/Crud/Crudlist'


const Routs = () => {
    return (
        <div>
    
   <main>
    <Switch>
      <Route path = '/' component={Home} exact/>
      <Route path = '/contact' component={Contact}/>
      <Route path = '/login' component={Login}/>
      <Route path = '/analytics' component={Analytics}/>
      <Route path = '/cake' component= {Cake}/>
      <Route path = '/todo' component={ToDoList}/>
      <Route path = '/crud' component= {CrudList}/>
      <Route component={Home}/>
      </Switch>
    </main>
        </div>
    )
}

export default Routs
