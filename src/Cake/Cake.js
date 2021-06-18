import React from 'react'
import {connect} from 'react-redux'
import {buyCake} from '../Redux/index'
import {giveCake} from '../Redux/index'
import UserContainer from '../Cake/User/UserContainer'

function Cake(props) {
    return (
        <div className='mt-5'>
        <h1>{props.numOfCake} </h1>
            <button className='btn btn-outline-dark mr-3' onClick={props.buyCake}> <i class="fa fa-minus" aria-hidden="true"></i> </button>
            <button className='btn btn-outline-success' onClick={props.giveCake}> <i class="fa fa-plus" aria-hidden="true"></i> </button>
       <UserContainer />
        </div>
    )
}
const mapStateToProps = state => {
    return{numOfCake: state.CakeReducer.numOfCake }
}
const mapDispatchToProps = dispatch => {
    return{
        buyCake: () => dispatch(buyCake()),
        giveCake: () => {dispatch(giveCake()) }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cake)
 
