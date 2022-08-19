import React from "react";
import { icons } from "../../components/wrapper/social";
import Window from "./window";
const Mobile = () => {
	return (
		<div className="window w-100">
			<div className="p-20 w-50 mx-auto wr-flex">
				{icons.map((i, k) => {
					const Icon = i.icon;
					return (
						<div
							className="m-5 p-5 text-2xl hover:text-blue-600 tr cp"
							key={k}
						>
							<Icon />
						</div>
					);
				})}
			</div>
			<Window />
		</div>
	);
};
export default Mobile;
