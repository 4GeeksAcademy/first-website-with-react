import React from "react";
import Navbar from "./Navbar";
import Welcome from "./Welcome";
import Cards from "./Cards";

import Footer from "./Footer"


//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar/>
			<Welcome/>
			<Cards/>
			<Footer/>
		</div>
	)
}

export default Home
