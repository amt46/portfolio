import { useState } from "react";

import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from "swiper";
import "./project_simple.scss";
import { projects } from "./projects";

SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);

const Project = () => {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);

	return (
		<div className="pb-50 project-container w-95 mh-100 flex justify-center items-end">
			<div className="w-90 h-100 max-w-[1150px]">
				<Swiper
					id="main"
					thumbs={{ swiper: thumbsSwiper }}
					tag="section"
					wrapperTag="ul"
					navigation
					pagination={{
						clickable: true,
					}}
					grabCursor={true}
					spaceBetween={0}
					slidesPerView={1}
					onInit={(swiper) =>
						console.log("Swiper initialized!", swiper)
					}
					onSlideChange={(swiper) => {
						console.log(
							"Slide index changed to: ",
							swiper.activeIndex
						);
					}}
					onReachEnd={() => console.log("Swiper end reached")}
					className="p-20 swiper1 hpx-200 wr-flex"
				>
					{projects.map((i, index) => (
						<SwiperSlide key={index}>
							<div className="wr-flex">
								<img
									className="w-50"
									src={i.img}
									alt={i.name}
								/>
								<p>{i.name}</p>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
				<Swiper
					id="thumbs"
					spaceBetween={5}
					slidesPerView={5}
					onSwiper={setThumbsSwiper}
					centerInsufficientSlides={true}
					centeredSlidesBounds={true}
					className="swiper2 w-80 hpx-100"
				>
					{projects.map((i, index) => (
						<SwiperSlide key={index}>
							<div className="tr wpx90 hpx-90">
								<img
									className="w-100 h-90 object-cover"
									src={i.img}
									alt={i.name}
								/>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};

export default Project;
