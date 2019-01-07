import _ from 'lodash';

const streamReducer = (state={},action)=>{
    switch(action.type){
        case 'FETCH_STREAMS':
            return {...state,..._.mapKeys(action.payload,'id')};
        case 'FETCH_STREAM':
            return {...state,[action.payload.id]:action.payload};
        case 'CREATE_STREAM':
        // console.log({...state,[action.payload.id]:action.payload})
            return {...state,[action.payload.id]:action.payload};
        case 'EDIT_STREAM':
            return {...state,[action.payload.id]:action.payload}; 
        case 'DELETE_STREAM':
            return _.omit(state,action.payload)               
        default:
            return state;
    }
}

export default streamReducer;