import createStore from "redux-zero";

export const COMMENT = [];
    //  this.index = 0;
    
// export const inputName = null;
// export const inputComent = null;
    
// let index = 0;
 
const initialState={
// index:index,
comments:COMMENT
    
}
const store = createStore(initialState);
export default store