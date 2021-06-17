import React from "react";
import PropTypes from "prop-types";
import PurchasedProductListItem from "./PurchasedItem";
import { connect } from "react-redux";
import map from "lodash/map";
import { Col } from "react-bootstrap";
const ProductList = (
	({ products }) => (
		<section className="row mt-5">
			{map(products, (product, index) => (
				<Col sm={12} key={index} className="text-center">
					<PurchasedProductListItem product={product} />
				</Col>
			))}
		</section>
	)
);

ProductList.propTypes = {
	products: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired
	}).isRequired)
};

const mapStateToProps = state => ({
	products: state.purchasedProducts.map(id => state.products.data[id])
});

const mapDispatchToProps = () => ({
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ProductList);
