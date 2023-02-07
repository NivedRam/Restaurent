import { createStore,combineReducers,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { restuarantListReducer } from "./reducers/restaurentReducer";

// reducer
const reducers=combineReducers({
    restaurantReducer:restuarantListReducer

})


// middleware
const middleware=[thunk]


// create store

const store=createStore(reducers,applyMiddleware(...middleware))      // [(....)-is called spread operator]



export default store