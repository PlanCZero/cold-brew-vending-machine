import * as actionTypes from "../constants/ActionTypes";

const initialState = [
];

const reducer = (state = initialState, action) => {
	switch (action.type) {
	case actionTypes.BUY_ITEM_DONE:
		return [...state,
			action.payload
		];
	default:
		return state;
	}
};

export default reducer;
