import Button from "@mui/material/Button";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { getWindowSize } from "../header/header";
import "./about.scss";
import Askhow from "./askhow";
import Family from "./family/family";
import Forfun from "./forfun";
const About = () => {
  const [bigWin, setBigWin] = useState(false);
  const [forimg, setForimg] = useState(false);
  const [readMore, setReadMore] = useState(false);
  const [aboutMe, setAboutMe] = useState(null);
  const [family, setFamily] = useState("");
  const [askhow, setAskhow] = useState(false);
  const [inpValue, setInpValue] = useState("");
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const ltaRef = useRef(null);
  const skillRef = useRef(null);
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  useEffect(() => {
    if (windowSize.innerWidth >= 640) setBigWin(true);
    if (windowSize.innerWidth <= 641) setBigWin(false);
  }, [windowSize]);
  const checkValue = (e) => {
    e.preventDefault();
    const v = inpValue.toLowerCase().replace(/ /g, "");
    if (v === "yaminaye" || v === "maungmyo" || v === "tintunoo") {
      setFamily(v);
    }
    return;
  };
  const clickBtn = (e, info, i) => {
    if (e.target.id === "0") {
      ltaRef.current.click();
      setAboutMe(i);
      setAskhow(false);
    }
    if (e.target.id === "1") {
      alert("I will be update about me");
    }
    if (e.target.id === "2") {
      skillRef.current.click();
    }
  };
  if (family === "") {
    return (
      <div className="app__about pr">
        <AnimatePresence>
          {forimg && <Forfun setForimg={setForimg} />}
        </AnimatePresence>
        <a ref={ltaRef} style={{ display: "none" }} href="#about">
          none
        </a>

        <a ref={skillRef} style={{ display: "none" }} href="#skills">
          none
        </a>
        <div className="mt-10 wr-flex pr">
          <div className="w-90">
            <motion.div whileInView={{ x: [-100, 0], opacity: [0, 1] }}>
              <motion.p
                transition={{ duration: 0.5 }}
                className="h text-4xl fw-800 mt-30 mb-30 drop-shadow-lg"
              >
                Welcome to{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  My Portfolio website
                </span>
              </motion.p>
              <motion.p className="fs-2 fw-600 mb-20 drop-shadow-sm">
                What do I do and What's in it for you?
              </motion.p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: [0, 1], y: [100, 0] }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className={`forcontent hpx-300 ${readMore ? "sy ss" : ""}`}
            >
              <motion.p className="p-t">
                My goal is Mobile Developer. I want to use Javascript for this
                and React Native. Because I started programming with javascript
                from Msquare Programming YouTube Channel and more. I want to
                learn Python for backend. But I think there is no one who can
                explain Python basic like Msquare Programming teacher.{" "}
                {!bigWin && (
                  <span onClick={() => setReadMore(!readMore)}>
                    {`${readMore ? "see less" : "see more"}...`}
                  </span>
                )}
              </motion.p>
              {(bigWin || readMore) && (
                <motion.p className="p-t">
                  There is one problem I have never worked with a team. But I
                  want start with you if you are programmer. I want create that
                  projects social media like Facebook, Instagram and Online Shop
                  App like lazada. For this I am keep learning and I need more
                  teacher, more good guide. I don't want to work in a company
                  with this programming, but i want to be a app owner. But
                  because of my many problems, I know that this is not really
                  possible. for example{" "}
                  <span
                    onClick={(e) => {
                      setForimg(true);
                    }}
                  >
                    click here
                  </span>{" "}
                  {bigWin ? "and" : "..."}{" "}
                  {bigWin && (
                    <span
                      className="tr"
                      onClick={(e) => {
                        ltaRef.current.click();
                        setReadMore(!readMore);
                      }}
                    >
                      {readMore ? "see less" : "read more"}
                      ...
                    </span>
                  )}
                </motion.p>
              )}
              {readMore && (
                <motion.p>
                  <motion.p className="p-t">
                    My goal is Mobile Developer. I want to use Javascript for
                    this and React Native. Because I started programming with
                    javascript from Msquare Programming YouTube Channel and
                    more. I want to learn Python for backend. But I think there
                    is no one who can explain Python basic like Msquare
                    Programming teacher.
                  </motion.p>{" "}
                  <motion.p className="p-t">
                    My goal is Mobile Developer. I want to use Javascript for
                    this and React Native. Because I started programming with
                    javascript from Msquare Programming YouTube Channel and
                    more. I want to learn Python for backend. But I think there
                    is no one who can explain Python basic like Msquare
                    Programming teacher.
                  </motion.p>{" "}
                  <motion.p className="p-t">
                    My goal is Mobile Developer. I want to use Javascript for
                    this and React Native. Because I started programming with
                    javascript from Msquare Programming YouTube Channel and
                    more. I want to learn Pytho4 for backend. But I think there
                    is no one who can explain Python basic like Msquare
                    Programming teacher.{" "}
                    <span
                      onClick={() => {
                        ltaRef.current.click();
                        setReadMore(!readMore);
                      }}
                    >
                      see less...
                    </span>
                  </motion.p>
                </motion.p>
              )}
            </motion.div>
          </div>
        </div>
        <AnimatePresence>
          {aboutMe === "I know you" && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              className="flex popup"
            >
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="mb-20 drop-shadow-sm fw-500"
              >
                Do you want to enter my family page?
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="b-c"
              >
                <Button
                  onClick={() => {
                    setAboutMe(false);
                    setAskhow(true);
                    ltaRef.current.click();
                  }}
                  className="yes"
                >
                  Yes
                </Button>
                <Button onClick={() => setAboutMe(null)}>No</Button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {askhow && (
            <Askhow
              setAboutMe={setAboutMe}
              checkValue={checkValue}
              setAskhow={setAskhow}
              setInpValue={setInpValue}
              inpValue={inpValue}
            />
          )}
        </AnimatePresence>
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.8, delay: 1 }}
          className="button w-100 wr-flex flex-wrap sm:mt-[10px]"
        >
          {["I know you", "About me", "My Skills"].map((i, k) => (
            <motion.div
              id={k}
              key={i}
              whileTap={{ scale: 0.9 }}
              onTap={(e, info) => clickBtn(e, info, i)}
            >
              <Button
                id={k}
                style={{ borderRadius: "10px" }}
                className={`${readMore ? "sh" : ""}`}
              >
                {i}
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    );
  } else if (family === "yaminaye") {
    return <Family />;
  }
};
export default About;
