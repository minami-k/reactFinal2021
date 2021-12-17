import { v4 as uuidv4 } from 'uuid'
import { NEW_LIST, UPDATE_LIST } from '../action/actions'

const initState = {
    list: [ 
    {id: uuidv4(), title: 'Task1', content:'Get pizza' },
    {id: uuidv4(), title: 'Task2', content: 'Go for walk' }
],

}

const listReducer = (state = initState, action) => {

    switch (action.type){
        case NEW_LIST:
            action.payload.id = uuidv4()
            action.payload.title = ''
            return {
                ...state,
                list: [...state.list, action.payload]
            };
        case UPDATE_LIST:
            
            return {
                ...state,
                list: [...state.list, action.payload],
                preList: state.preList.concat({list: [...state.list, action.payload]})
            };
        


        default:
            return state;
    }

}

export default listReducer