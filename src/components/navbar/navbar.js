import React, { useState, useEffect } from "react";
import "./navbar.scss";

import Link from "./link/link";

const Navbar = ({ refArray }) => {
	const [ cls, setCls ] = useState('')

	return (
		<div
			className={`${cls} app__navbar tr`}
		>
			<p>Aung Myo Thu</p>
			<Link refArray={refArray} cls={cls} setCls={setCls} />
		</div>
	);
};

export default Navbar;
