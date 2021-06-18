import {BUY_CAKE} from '../Cake/CakeTypes'
import {SALE_CAKE} from '../Cake/CakeTypes'

const initialstate = {
    numOfCake: 10
}

const CakeReducer = (state = initialstate, action) =>{
switch(action.type){
    case BUY_CAKE: return{
        ...state,
        numOfCake: state.numOfCake - 1
    }
    case SALE_CAKE: return{
        ...state,
        numOfCake: state.numOfCake + 1
    }
    default: return state
}
}
export default CakeReducer