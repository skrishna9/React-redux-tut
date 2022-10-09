///this is reducer file 
import {ADD_TO_CART ,REMOVE_TO_CART} from '../Constant'

const State ={
    cartData:[]
}
export default function cardItems(state=[],action)
{
    switch(action.type){
        case ADD_TO_CART :
            // console.warn('reducer',action)
            return [
                ...state,
                {cartData:action.data}
            ]
        case REMOVE_TO_CART :
            // console.warn('reducer',action)
            state.pop();
            return [
                ...state,
            ]
            break;
            default:
                return state
    }
}
