import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { incrementBalance } from "../js/actions";
import { Row, Col, Button, Card } from "react-bootstrap";
const BanknotePanel = (
	({ banknotes, onBanknoteClick }) => (
		<section>
			<Card>
				<Card.Header className="text-center">
					Load Banknotes
				</Card.Header>
				<Card.Body>
					<Row>
						{
						banknotes.map(banknote => (
							<Col sm={4} key={banknote} className="text-center btn btn-outline-secondary font-weight-bold"  onClick={() => onBanknoteClick(banknote)}>
								${banknote}
							</Col>
						))}
					</Row>
				</Card.Body>
			</Card>
		</section>
	)
);

BanknotePanel.propTypes = {
	banknotes: PropTypes.arrayOf(PropTypes.number).isRequired,
	onBanknoteClick: PropTypes.func.isRequired
};

const mapStateToProps = () => ({
});

const mapDispatchToProps = dispatch => ({
	onBanknoteClick: amount => dispatch(incrementBalance(amount))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(BanknotePanel);
