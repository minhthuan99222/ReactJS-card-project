import * as types from '../contants/ActionsTypes'
import * as messages from '../contants/Message'

var initialState = messages.MGS_WELCOM

const message = (state = initialState, action) => {
    switch(action.type){
        case types.CHANGE_MESSAGE:
            return action.message
        default: 
            return state
    }
}

export default message;