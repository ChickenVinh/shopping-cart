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
    //INSIDE HOME COMPONENT
    if(action.type === 'ADD_TO_CART'){
        let addedItem = state.items.find(item => item.id === action.payload)
        //check if the action id exists in the addedItems
        let existed_item= state.addedItems.find(item => action.payload === item.id)
        if(existed_item){
            addedItem.quantity += 1 
            return{
                ...state,
                total: state.total + addedItem.price 
            }
        }else{
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.price 
            
            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
          
        }
    }

    if(action.type === 'REMOVE_ITEM'){
        let itemToRemove= state.addedItems.find(item=> action.payload === item.id)
        let new_items = state.addedItems.filter(item=> action.payload !== item.id)
        
        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
        console.log(itemToRemove)
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    //INSIDE CART COMPONENT
    if(action.type === 'ADD_QUANTITY'){
        let addedItem = state.items.find(item=> item.id === action.payload)
            addedItem.quantity += 1 
            let newTotal = state.total + addedItem.price
            return{
                ...state,
                total: newTotal
            }
    }

    if(action.type === 'SUBTRACT_QUANTITY'){  
        let addedItem = state.items.find(item=> item.id === action.payload) 
        //if the qt == 0 then it should be removed
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.payload)
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                total: newTotal
            }
        }
    }
    
    if(action.type === 'ADD_SHIPPING'){
        return{
            ...state,
            total: state.total + 6
        }
    }

    if(action.type === 'SUBTRACT_SHIPPING'){
        return{
            ...state,
            total: state.total - 6
        }
    }
    else{
        return state
    }
}

export default rootReducer