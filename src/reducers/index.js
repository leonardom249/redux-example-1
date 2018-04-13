import {ADD_ITEM, UPDATE_ITEM, DELETE_ITEM} from '../actions';

const initialState = {
    items: []
};

export const crudReducer = (state=initialState, action) => {
    // Add code which handles each action here
    if (action.type === ADD_ITEM) {
      return Object.assign({}, state, {
      items:[...state.items, action.item]
      }
     )      
    }
  
    else if (action.type === UPDATE_ITEM) {
      let updatedItemArray = state.items.map(item=>{
        if(item.id===action.item.id){
          return action.item
        }
        else{
          return item
        }
      })
      // console.log('this one', updatedItemArray);
      
      return Object.assign({}, state, {
        items:updatedItemArray
      }
     )
    }
  
  
    else if (action.type === DELETE_ITEM) {
      let deleteItemFromArray = state.items.filter(item=>{
        return item.id !== action.item.id
      })
      // console.log('Hi', deleteItemFromArray)
      
      return Object.assign({}, state, {
        items:deleteItemFromArray
      }
     )
    }
    return state;
};
