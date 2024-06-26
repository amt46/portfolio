import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Button from "@mui/material/Button";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { BsFillInfoCircleFill, BsGithub } from "react-icons/bs";
import { MdEmojiEmotions } from "react-icons/md";
import { urlFor } from "../../client";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
};

const Project1 = ({ p }) => {
  const [si, setSi] = useState(null);
  return (
    <div className="w-100 p2 mt-10">
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="flex sm:justify-center justify-center sm:mt-5 flex-wrap min-h-[300px]"
      >
        {p.map((i, k) => (
          <motion.div
            variants={item}
            animate={si?._id === i._id ? { opacity: 0.1 } : { opacity: 1 }}
            key={k}
            className="gp tr m-10 p-10 bdrr-5 text-black bg-white hover:bg-zinc-100"
          >
            <motion.div className="g w-100 h-[150px] relative">
              <motion.img
                className="img w-full h-full object-cover bdrr-5 mb-10"
                src={urlFor(i.imageurl)}
                alt={i.name}
              />
              <motion.div className="hi pa t-0 l-0 r-0 b-0 bdrr-5 tr wr-flex">
                <motion.div
                  whileTap={{ scale: 0.9 }}
                  onClick={() => console.log("click")}
                  className="i wr-flex hpx-40  wpx-40 bdr-50 m-5 drop-shadow-lg shadow-white"
                >
                  <BsGithub />
                </motion.div>
                <motion.div
                  whileTap={{ scale: 0.9 }}
                  className="wr-flex i hpx-40 wpx-40 bdr-50 m-5"
                >
                  <RemoveRedEyeIcon size={35} />
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.p className="fw-600">
              {i.name.split(" ").slice(0, 2).join(" ")}
            </motion.p>
            <motion.p className="">{i.desc.substring(0, 30)}...</motion.p>
            <motion.button
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              className="ab flex items-center bdrr-10"
              onClick={(e) => {
                if (si) return;
                setSi(i);
              }}
            >
              <BsFillInfoCircleFill />
              <motion.span>Details</motion.span>
            </motion.button>
          </motion.div>
        ))}
      </motion.div>
      <AnimatePresence>
        {si && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="z text-black pb bdrr-10 w-80 h-70 overflow-hidden p-10 overflow-y-auto ss bg-white fixed top-[20%] left-0 right-0 mx-auto"
          >
            <motion.div
              className="cl wpx-30 hpx-30 t-10 r-10 ml-[auto]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              whileTap={{ scale: 0.9 }}
            >
              <AiFillCloseCircle onClick={() => setSi(null)} size={30} />
            </motion.div>
            <p className="fw-600 p nt text-gray-700 text-center p-0 m-0">
              {si.name}
            </p>
            <div className="w-100 a flex">
              <div className="ml-10 b w-50 p2-img max-h-[300px] mt-20 mx-auto">
                <img
                  className="drop-shadow-sm w-100 h-100 object-cover bdrr-5"
                  src={urlFor(si.imageurl)}
                  alt=""
                />
              </div>
              <div className="wpx-500 p-20 h-100">
                <div className="cc text-gray-600 drop-shadow-sm hpx-250 overflow-y-auto ss">
                  <p>
                    {si.desc}
                    {si.desc}
                    {si.desc}
                    {si.desc}
                  </p>
                </div>
                <div className="mt-10 btn btn2 mx-auto min-w-[200px]">
                  <Button className="drop-shadow-lg">
                    <BsGithub size={20} />
                    Github
                  </Button>
                  <Button className="drop-shadow-lg">
                    <MdEmojiEmotions size={20} />
                    Live Demo
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default Project1;
