// reducers.js
const initialState = {
    name: '',
    designation: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_DATA':
            return {
                ...state,
                name: action.payload.name,
                designation: action.payload.designation
            };
        default:
            return state;
    }
};

export default reducer;