import * as actionTypes from "../constants/ActionTypes";
import axios from "axios";

export const fetchProducts = () => dispatch => {
	dispatch({
		type: actionTypes.GET_PRODUCT
	});

	axios.get("/products.json").then(products => {
		dispatch({
			type: actionTypes.GET_PRODUCT_DONE,
			payload: products
		});
	});
};

export const incrementBalance = amount => dispatch => {
	dispatch({
		type: actionTypes.ADD_BALANCE,
		payload: amount
	});

	// Fake api: just pretend calling to web api, but the value will add when it failed in catch block
	axios.post("api/balance", {
		amount
	}).catch(() => {
		dispatch({
			type: actionTypes.ADD_BALANCE_DONE,
			payload: amount
		});
	});
};

export const decrementBalance = amount => dispatch => {
	dispatch({
		type: actionTypes.DEDUCT_BALANCE,
		payload: amount
	});
};

export const buyProduct = id => (dispatch, getState) => {
	dispatch({
		type: actionTypes.BUY_ITEM,
		payload: id
	});

	// Fake api:
	axios.put("api/products/${id}").catch(() => {
		// deduct shoulb be in then block after put value success, but no real api yet, so just put it here 
		dispatch(decrementBalance(getState().products.data[id].price));

		dispatch({
			type: actionTypes.BUY_ITEM_DONE,
			payload: id
		});
	});
};
