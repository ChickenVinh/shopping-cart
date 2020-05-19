export const addToCart = (id) => {
    return{
        type: 'ADD_TO_CART',
        payload: id
    }
}

export const addQuantity = (id) => {
    return{
        type: 'ADD_QUANTITY',
        payload: id
    }
}

export const subtractQuantity = (id) => {
    return{
        type: 'SUBTRACT_QUANTITY',
        payload: id
    }
}

export const removeFromCart = (id) => {
    return{
        type: 'REMOVE_ITEM',
        payload: id
    }
}

export const addShipping = () => {
    return{
        type: 'ADD_SHIPPING'
    }
}

export const subtractShipping = () => {
    return{
        type: 'SUBTRACT_SHIPPING'
    }
}