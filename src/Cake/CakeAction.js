import {BUY_CAKE} from './CakeTypes'
import {SALE_CAKE} from './CakeTypes'

export const buyCake = () => {
return {
    type: BUY_CAKE
}
}
export const giveCake = ()=>{
    return {
        type: SALE_CAKE
    }
}