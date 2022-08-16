import React from "react";

import Social from "./social";
import "./wrapper.scss";

const Wrapper = (Component, classNames, idName, pageRef) => () => {
	return (
		<div
			ref={pageRef}
			className={`${
				classNames + "-background"
			} wrapper mh-100 body pr overflow-hidden`}
			id={idName}
		>
			<Social classNames={classNames} />
			<div className="app__wrapper app__flex">
				<Component/>
			</div>
			<div className={`${classNames === "home" ? "hidden" : "copyright pa b-10 r-10"}`}>
				<p className="p-text">@2020 AUNGMYOTHU</p>
				<p className="p-text">All rights reserved</p>
			</div>
		</div>
	);
};

export default Wrapper;
