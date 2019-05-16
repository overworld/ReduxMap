import {ADD_POINT, REQUEST_POINTS, START_EDIT, UPDATE_POINTS} from "../actions/point";

const initialPoint = {items : [], loading : false, currentEdit : null};

const point = (state = initialPoint , action) => {
    switch (action.type) {
        case REQUEST_POINTS :
            return {
                ...state,
                loading : true,
            };
        case UPDATE_POINTS :
            return {
                ...state,
                loading : false,
                items : [...action.items]
            };
        case ADD_POINT:
            return {
                ...state,
                items: [...state.items, action.point]
            };

        case START_EDIT:
            return {
                ...state,
                currentEdit : action.id,
            };
        default:
            return state
    }
};

export const getPoints = state => state.point.items;
export const getLoading = state => state.point.loading;
export const getCurrentEdit = state => state.point.currentEdit;
export {point}