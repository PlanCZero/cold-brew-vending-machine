import React from "react";
import PropTypes from "prop-types";
import ProductListItem from "./ProductItem";
import { connect } from "react-redux";
import map from "lodash/map";
import { buyProduct } from "../js/actions";
import { Row, Col, Button, Card } from "react-bootstrap";
const ProductList = (
	({ products, balance, onProductClick }) => (
		<section className="row">
			{
				products.loading ?
				"Loading products..." :
				map(products.data, product => (
					<Col sm={3} key={product.id} className="text-center">
						<ProductListItem product={product} balance={balance} onClick={onProductClick} />
					</Col>
				))
			}
		</section>
	)
);

ProductList.propTypes = {
	products: PropTypes.shape({
		loading: PropTypes.bool.isRequired,
		data: PropTypes.object.isRequired
	}).isRequired,
	balance: PropTypes.object.isRequired,
	onProductClick: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	products: state.products,
	balance: state.balance
});

const mapDispatchToProps = dispatch => ({
	onProductClick: id =>  dispatch(buyProduct(id))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ProductList);
