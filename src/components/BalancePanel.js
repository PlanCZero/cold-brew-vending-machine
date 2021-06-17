import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const BalancePanel = (
	({ balance }) => (
		<section className="alert alert-success">
			<h4 className="alert-heading text-center text-uppercase">
				Balance
			</h4>
			<hr />
			<div className="panel-body text-center font-weight-bold">
				${balance.value}
			</div>
		</section>
	)
);

BalancePanel.propTypes = {
	balance: PropTypes.shape({
		loading: PropTypes.bool.isRequired,
		value: PropTypes.number.isRequired
	})
};

const mapStateToProps = state => ({
	balance: state.balance
});

const mapDispatchToProps = () => ({
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(BalancePanel);
