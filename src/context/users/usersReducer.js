/* eslint-disable import/no-anonymous-default-export */
import { GETUSERS, LOADINGUSERS, FAILGETUSERS } from '../type';



export default (state, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case GETUSERS:  
            return {
                ...state,
                users: action.payload,
            }
    }
}