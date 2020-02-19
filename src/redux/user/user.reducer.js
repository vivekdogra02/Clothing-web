import { UserActionTypes } from "./user.actions.types";


const InitialState = {
    currentUser: null
}

const userReducer = (state = InitialState, action) => {
    switch (action.type) {
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }

        default:
            return state;
    }
}

export default userReducer;