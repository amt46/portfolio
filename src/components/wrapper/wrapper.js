import React from "react";

import Social from "./social";
import "./wrapper.scss";

const Wrapper = (Component, classNames, idName, pageRef) => () => {
	return (
		<div ref={pageRef} className={`${classNames + "-background"} wrapper body`} id={idName}>
			<Social classNames={classNames} />
			<Component />
		</div>
	);
};

export default Wrapper;
