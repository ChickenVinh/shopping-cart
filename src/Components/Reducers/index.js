import tasty from './img/tasty.jpg'
import standart from './img/standart.jpg'
import sweet from './img/sweet.jpg'
import teddy from './img/teddy.jpg'
import teddy2 from './img/teddy2.jpg'
import toy from './img/toy.jpg'

const initialState = {
    items: [
        {id: 1, titel: 'Tasty Avocado', desc: 'The bestseller! Tasty, delicious, just perfect.', price: 4, img: tasty},
        {id: 2, titel: 'Standart Avocado', desc: 'The standart one. Best for Guacamole but also good for face masks.', price: 2.5, img: standart},
        {id: 3, titel: 'Sweet Avocado', desc: 'The unique taste of the Sweet Avocado. You will love it!', price: 3, img: sweet},
        {id: 4, titel: 'Teddy Avocado', desc: 'Fluffy teddy waiting for your hugs.', price: 10, img: teddy},
        {id: 5, titel: 'Cute Teddy Avocado', desc: 'Cute, Cute, Cute.', price: 10, img: teddy2},
        {id: 6, titel: 'Action Avocado', desc: 'Avocado Action Toy.', price: 10, img: toy}
    ],
    addedItems: [],
    total: 0
}

const rootReducer = (state = initialState, action) => {
    return state
}

export default rootReducer