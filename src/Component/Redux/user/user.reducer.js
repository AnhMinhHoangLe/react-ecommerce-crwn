import { UserActionTypes } from './user.types'
//Define a reducer that transform the old state to the new one based on action.type
const INITIAL_STATE = {
        currentUser: null
}

const userReducer = (state = INITIAL_STATE, action) => {
        switch (action.type) {
                case UserActionTypes.SET_CURRENT_USER:
                        return {
                                ...state,
                                currentUser: action.payload
                        }
                default:
                        // the reason why we want a default return the state
                        //  is because if none of the action types match 
                        //inside of the switch statement about the ones 
                        //that we care about then we just want to return 
                        //the state.
                        return state
        }
}

export default userReducer


