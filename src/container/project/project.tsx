import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { HiOutlineViewGrid } from "react-icons/hi";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { VscSplitHorizontal } from "react-icons/vsc";
import { client, urlFor } from "../../client";
import Slide from "./components/slide";
import Project1 from "./project1";
import "./project2.scss";

const Project = ({ projectsRef }) => {
  const [g, setG] = useState(false);
  const [p, setP] = useState([]);
  const [po, setPo] = useState(0);
  const getData = async () => {
    const query = '*[_type == "projects"]';
    await client
      .fetch(query)
      .then((data) => {
        setP(data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getData();
  }, []);
  const onr = () => {
    if (po < p.length - 1) {
      setPo(po + 1);
    }
  };
  const onl = () => {
    if (po > 0) {
      setPo(po - 1);
    }
  };

  return (
    <div ref={projectsRef} className="pm wr-flex w-100 h-90">
      {p.length === 0 && (
        <p className="loading">
          <div className="loader">
            <div className="inner one"></div>
            <div className="inner two"></div>
            <div className="inner three"></div>
          </div>
        </p>
      )}
      {g && <Project1 p={p} />}
      {p.length > 0 && (
        <AnimatePresence>
          <motion.div
            whileInView={{ scale: [0, 1.4, 1] }}
            onClick={() => setG(!g)}
            className="c-p z pa t-70 r-20 cp"
          >
            {!g ? (
              <motion.div whileTap={{ scale: 0.9 }} className="drop-shadow-xl">
                <HiOutlineViewGrid size={30} />
              </motion.div>
            ) : (
              <motion.div
                whileInView={{ scale: [0.7, 1.1, 1] }}
                whileTap={{ opacity: 0.9 }}
                className="drop-shadow-xl"
              >
                <VscSplitHorizontal size={30} />
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      )}
      {!g && (
        <div className="bi">
          {p?.map(
            (i, k) =>
              po === k && (
                <motion.img
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: k === po ? 0.1 : 0,
                  }}
                  key={k}
                  className="w-full h-full object-cover"
                  src={urlFor(i.imageurl)}
                  alt={i.name}
                />
              )
          )}
        </div>
      )}
      {!g && (
        <motion.button
          whileInView={po === 0 ? {} : { opacity: [0, 1], scale: [0, 1] }}
          disabled={po === 0 ? true : false}
          whileTap={po === 0 ? {} : { scale: 0.9 }}
          style={
            po === 0
              ? { color: "rgba(255, 255, 255, 0.5)" }
              : { cursor: "pointer" }
          }
          className="z for wr-flex fs-2"
          onClick={onl}
        >
          {p.length !== 0 && <IoChevronBack />}
        </motion.button>
      )}
      {!g && <Slide p={p} po={po} setPo={setPo} onr={onr} onl={onl} />}
      {!g && (
        <motion.button
          whileInView={
            po === p.length - 1 ? {} : { opacity: [0, 1], scale: [0, 1] }
          }
          disabled={po === p.length - 1 ? true : false}
          whileTap={po === p.length - 1 ? {} : { scale: 0.9 }}
          style={
            po === p.length - 1
              ? { color: "rgba(255, 255, 255, 0.5)" }
              : { cursor: "pointer" }
          }
          className="z for wr-flex fs-2 mr-5"
          onClick={onr}
        >
          {p.length !== 0 && <IoChevronForward />}
        </motion.button>
      )}
      {!g && (
        <div className="dot pa b-0 l-0 r-0 mx-auto wr-flex">
          {p.map((i, k) => (
            <div
              onClick={() => setPo(k)}
              key={k}
              className={`${
                po === k ? "bg-white" : "bg-zinc-500"
              } cp hpx-10 wpx-10 bdr-50 m-10`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
export default Project;
