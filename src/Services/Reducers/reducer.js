import {ADD_TO_CART} from '../Constraints'
const initialState = {
  cartData: [],
};

export default function cardItem  (state=initialState, action) {
  

    switch (action.type) {
      case ADD_TO_CART:
            return{
                ...state,
                cartData:action.data,
            }
        break;

      default:
          return{
              state,
          }
        break;
    }
}
