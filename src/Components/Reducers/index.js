import tasty from './img/tasty.jpg'
import standart from './img/standart.jpg'
import sweet from './img/sweet.jpg'
import teddy from './img/teddy.jpg'
import teddy2 from './img/teddy2.jpg'
import toy from './img/toy.jpg'

const initialState = {
    items: [
        {id: 1, title: 'Tasty Avocado', desc: 'The bestseller! Tasty, delicious, just perfect.', price: 4, img: tasty},
        {id: 2, title: 'Standart Avocado', desc: 'The standart one. Best for Guacamole but also good for face masks.', price: 2.5, img: standart},
        {id: 3, title: 'Sweet Avocado', desc: 'The unique taste of the Sweet Avocado. You will love it!', price: 3, img: sweet},
        {id: 4, title: 'Teddy Avocado', desc: 'Fluffy teddy waiting for your hugs.', price: 10, img: teddy},
        {id: 5, title: 'Cute Teddy Avocado', desc: 'Cute, Cute, Cute.', price: 10, img: teddy2},
        {id: 6, title: 'Action Avocado', desc: 'Avocado Action Toy.', price: 10, img: toy}
    ],
    addedItems: [],
    total: 0
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_TO_CART':
            let addedItem = state.items.find(item => item.id === action.payload)
            let existedItem = state.addedItems.find(item => action.payload === item.id)

            if(existedItem){
                addedItem.quantity += 1
                return{
                    ...state,
                    total: state.total + addedItem.price
                }
            }else{
                addedItem.quantity = 1;
                let newTotal = state.total + addedItem.price
                return{
                    ...state,
                    addedItems: [...state.addedItems, addedItem],
                    total: newTotal
                }
            }
        default:
            return state 
    }
}

export default rootReducer