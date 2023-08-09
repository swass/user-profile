import { Action } from "@ngrx/store";

const initialState:any = {
    randomList: ['React', 'Angular', 'HTML' ]
}

/*state = initialState in below function means if state is null, 
initialState will be default value else the the value of state will be passed
so for the first time, state will be initialState */
export function myReducer(state = initialState, action: Action){
    switch(action.type){
        //use all uppercase for actions
        case 'ADD_ITEM':
            /*do not use push or pop methods as ngrx never change existing data
             instead it copies old state and makes the update then return new state */
            console.log("'ADD_ITEM' action dispatched");
            return{
                ...state,
                randomList: [...state.randomList]
            }
            break;
        case 'DELETE_ITEM':
            console.log("'DELETE_ITEM' action dispached");
            break;
        case 'EDIT_ITEM':
            console.log("'EDIT_ITEM' action dispatched");

    }
}