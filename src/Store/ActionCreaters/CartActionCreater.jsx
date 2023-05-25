import {ADD_CART} from "../Constants"

export function addCart(data){
    return{
        type:ADD_CART,
        payload:data
    }
}

export function deleteCart(data){
    return{
        type:DELETE_CART,
        payload:data
    }
}
