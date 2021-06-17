import *  as actionTypes from "../constants/ActionTypes";

const initialState = {
	loading: false,
	value: 0
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
	case actionTypes.ADD_BALANCE:
		return {...state,
			loading: true
		};
	case actionTypes.ADD_BALANCE_DONE:
		return {...state,
			loading: false,
			value: state.value + action.payload
		};
	case actionTypes.DEDUCT_BALANCE:
		return {...state,
			loading: false,
			value: state.value - action.payload
		};
	default:
		return state;
	}
};

export default reducer;
