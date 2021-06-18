import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'


function Login() {
const [val1, setVal1] = useState()
const [val2, setVal2] = useState()
const History = useHistory();

const data = {
    name: 'admin',
    password: 123
}

function GoHome () {
if(val1 == data.name && val2 == data.password){
History.push('/');
} else {
    alert('username or password is incorrect')}

}

    return (
        <div>
        <div className='Login_outer'>
        
        <h1 className='text-success'>Hello World</h1>
        <input type="text" placeholder='Enter Your Name' 
            onChange={e => setVal1(e.target.value)} value={val1}/>
            <br/>
        
        <input type="password" placeholder='Enter Your Password' 
            onChange={e => setVal2(e.target.value)} value={val2}/>
            <br/>
        
        <button onClick={GoHome} class="btn btn-outline-success">Login</button>
        
            </div>
        </div>
    )
}

export default Login
