import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
const ProductListItem = (
	({ product, balance, onClick }) => (
		<Card className={"mb-4"} style={{}}>
			<Card.Header>
				TOTAL {product.count}
			</Card.Header>
			<Card.Img variant="top" src={product.image} style={{}} />
			<Card.Body>
				<Card.Title>
					Price: <strong>${product.price}</strong>
				</Card.Title>
				<Card.Text>
					{
						product.count <= 0 ?
							<label className="btn-sm text-danger">Out of stock</label> :
							product.loading ?
								<button className="btn btn-primary">Buying ...</button> :
								product.price <= balance.value ?
									<button className="btn btn-primary" onClick={() => onClick(product.id)}>Buy</button> :
									<label className="btn-sm text-warning">Load <strong>${product.price - balance.value}</strong> more</label>
					}
				</Card.Text>
			</Card.Body>
		</Card>
	)
);

ProductListItem.propTypes = {
	product: PropTypes.shape({
		id: PropTypes.number.isRequired,
		price: PropTypes.number.isRequired,
		image: PropTypes.string.isRequired
	}).isRequired,
	balance: PropTypes.shape({
		loading: PropTypes.bool.isRequired,
		value: PropTypes.number.isRequired
	}),
	onClick: PropTypes.func.isRequired
};

export default ProductListItem;
