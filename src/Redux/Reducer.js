import { combineReducers } from "redux"

const cart = {

    userInfo: localStorage.getItem("userInfo")
        ? JSON.parse(localStorage.getItem("userInfo"))
        : null
    ,
    cart: {
        cartItem: localStorage.getItem("cartItem")
            ? JSON.parse(localStorage.getItem("cartItem"))
            : []
    }
}

const handleCart = (state = cart, action) => {

    switch (action.type) {

        case "LOGIN_USER":
            return { ...state, userInfo: action.payload }
        case "SIGN_UP_USER":
            return { ...state, userInfo: action.payload }
        case "LOGOUT_USER":
            return { ...state, userInfo: null}

        default:
            return state

    }

}

const rootReducer = combineReducers({
    handleCart,
})

export default rootReducer;