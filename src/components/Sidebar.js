import React from "react";
import BalancePanel from "./BalancePanel";
import BanknotePanel from "./BanknotePanel";
import PurchasedProductList from "./PurchasedItems";

const Sidebar = (
	() => (
		<section className="sidebar">
			<BalancePanel />
			<BanknotePanel banknotes={[1,2,5,10,20,50,100,200,300]} />
			<PurchasedProductList />
		</section>
	)
);

export default Sidebar;
