import React from 'react'
import {useHistory} from 'react-router-dom'

const Contact = () => {
const History = useHistory();
const GoHome = ()=>{
    // History.push('/')
}
    return (
        <div className='bg-dark vh-100 py-2'>
            <div>
            <div className='container text-white'>
                <h1 className=" mt-1 text-success py-5 text-uppercase">Contact Us</h1>
                <hr/>
                <div className='row'>
                    <div className='col-md-6 mt-5 text-left'>
                        <div className='ml-5'>
                        <address>Lahore Cantt Pakistan</address>
                        <p>Email:- abcd@gmail.com</p>   
                        <p>Mobile:- 0333-1234567</p>
                        </div>
                    </div>
                    <div className='col-md-6'>
                    <div>
                    <div className='align-items-left'>
                        <label className='mr-3'> Name </label>
                        <input type="text" placeholder='Enter Your Name'/>
                    </div>
                    <div className='form-group'>
                        <label className='mr-3'> Email </label>
                        <input type="text" placeholder='Enter Your Mail'/>
                    </div>
                    <div className='ml-5'>
                        <textarea className='mr-6' cols="50" rows="5" placeholder='Your Message'/> 
                    </div>
                    <br/>
                    <button className='btn btn-outline-success offset-1'>Send</button>
                    </div>
                </div>
            </div>
                </div> <br/>
        </div></div>
    )
}

export default Contact
