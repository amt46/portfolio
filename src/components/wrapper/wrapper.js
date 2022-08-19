import React from "react";

import Social from "./social";
import "./wrapper.scss";

const Wrapper = (Component, classNames, idName, pageRef) => () => {
	const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
	return (
		<div
			style={vh >= 1500 ? {height: "1024px"} : {}}
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
			<div className={`${classNames === "home" || classNames === "contact" ? "hidden" : "z copyright fs-1 pa b-10 r-10"}`}>
				<p className="p-text">@2022 AUNGMYOTHU</p>
				<p className="p-text">All rights reserved</p>
			</div>
		</div>
	);
};

export default Wrapper;
