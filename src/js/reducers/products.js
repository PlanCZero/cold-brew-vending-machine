import * as actionTypes from "../constants/ActionTypes";
import keyBy from "lodash/keyBy";

const initialState = {
	loading: false,
	data: {}
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
	case actionTypes.GET_PRODUCT:
		return {...state,
			loading: true
		};
	case actionTypes.GET_PRODUCT_DONE:
		return {...state,
			loading: false,
			data: keyBy(action.payload.data.map(product => (
				{...product,
					loading: false
				}
			)), "id")
		};
	case actionTypes.BUY_ITEM:
		return {...state,
			data: {...state.data,
				[action.payload]: {...state.data[action.payload],
					loading: true
				}
			}
		};
	case actionTypes.BUY_ITEM_DONE:
		return {...state,
			data: {...state.data,
				[action.payload]: {...state.data[action.payload],
					loading: false,
					count: state.data[action.payload].count - 1
				}
			}
		};
	default:
		return state;
	}
};

export default reducer;
