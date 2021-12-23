import { v4 as uuidv4 } from 'uuid'
import { NEW_LIST, UPDATE_LIST } from '../action/actions'

const initState = {
    list: [ 
    {id: uuidv4(), title: 'Issue1', state:'Active' },
    {id: uuidv4(), title: 'Issue2', state: 'Active' }
],

}

const listReducer = (state = initState, action) => {

    switch (action.type){
        case NEW_LIST:
            action.payload.id = uuidv4()
          return {
                ...state,
                list: [...state.list, action.payload]
            };
        case UPDATE_LIST:
            const tempList = state.list.map(issue => {
                if(issue.id === action.payload.id) {
                    return {
                        ...issue,
                        list: [...state.list, action.payload]
                    }
                }
                return issue;
            })
            return {
                ...state,
                list:tempList
            };
        


        default:
            return state;
    }

}

export default listReducer