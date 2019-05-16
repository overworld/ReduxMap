export const UPDATE_POINTS = 'UPDATE_POINTS';
export const REQUEST_POINTS = 'REQUEST_POINTS';
export const ADD_POINT = 'ADD_POINT';
export const START_EDIT = 'START_EDIT';



export const updatePoint = (product) => ({
    type: UPDATE_POINTS,
    items: product,
});

export const requestPoint = () => ({
    type: REQUEST_POINTS,
});

export const addPoint = (point) => ({
    type: ADD_POINT,
    point,
});

export const startEdit = (id) => ({
    type: START_EDIT,
    id,
});
/*
export const fetchPoint = () => dispatch => {
    dispatch(requestPoint());
    return fetch('/json/points.json')
        .then(response => response.json())
        .then(json => {
            dispatch(updatePoint(json))
        })
};*/
