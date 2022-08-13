import React from "react";

import Social from "./social";
import "./wrapper.scss";

const Wrapper = (Component, classNames, idName, pageRef) => () => {

	return (
		<div
			ref={pageRef}
			className={`${classNames + "-background"} wrapper mh-100 body pr overflow-hidden`}
			id={idName}
		>
			<Social classNames={classNames} />
			<div className="app__wrapper app__flex">
				<Component />
			</div>
		</div>
	);
};

export default Wrapper;
