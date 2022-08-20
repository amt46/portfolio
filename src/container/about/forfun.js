import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { imgs } from "./images";
import Carousel from "framer-motion-carousel";
import { IoChevronForward, IoChevronBack } from "react-icons/io5";

const Forfun = ({ setForimg }) => {

	return (
		<motion.div 
			initial={{y: "-100vh", opacity: 0}}
			animate={{y: 0, opacity: 1}}
			exit={{y: "-100vh", opacity: 0}}
			className="z bdrr-20 forfun pa t-50 l-0 r-0 mx-auto bg-white">
			<motion.div className="h-[10%] i-c flex justify-end items-center">
				<motion.p className="mr-100">That's crazy</motion.p>
				<motion.div
					onClick={() => setForimg(false)}
					className="m-10 text-xl cp"
				>
					<IoClose />
				</motion.div>
			</motion.div>
			<motion.div className="h-[90%] pr">
				<motion.div>
					<Carousel
						interval={5000}
						renderArrowLeft={({ handlePrev, activeIndex }) => (
							<motion.div
								onClick={() => handlePrev()}
								className="wpx-30 text-2xl text-white hpx-30 wr-flex pa l-0 fbi cp"
							>
								<IoChevronBack />
							</motion.div>
						)}
						renderArrowRight={({ handleNext, activeIndex }) => (
							<motion.div
								onClick={() => handleNext()}
								className="wpx-30 hpx-30 wr-flex text-2xl text-white pa r-0 fbi cp"
							>
								<IoChevronForward />
							</motion.div>
						)}
						renderDots={({ setActiveIndex, activeIndex }) => (
							<motion.div className="pa b-10 l-0 r-0 mx-auto wr-flex w-50">
								{imgs.map((i, k) => (
									<motion.div
										style={
											activeIndex === k
												? { backgroundColor: "red" }
												: {}
										}
										className="hpx-12 wpx-12 drop-shadow-sm m-5 bdr-50 bg-white cp"
										key={k}
										onClick={() =>
											setActiveIndex(k)
										}
									/>
								))}
							</motion.div>
						)}
					>
						{imgs.map((item, i) => (
							<img
								className="hpx-300 object-cover"
								draggable="false"
								src={item}
								key={i}
								width="100%"
								alt=""
							/>
						))}
					</Carousel>
				</motion.div>
			</motion.div>
		</motion.div>
	);
};

export default Forfun;
