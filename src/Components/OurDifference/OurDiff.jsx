import React from "react";
import "./OurDiff.css";
import { ourDiffFeatures } from "./../../utils/data";
import { motion } from "framer-motion";
import {
  containerVariants,
  tagVariants,
  titleVariants,
  textVariants,
} from "../../utils/animation";
const OurDiff = () => {
  return (
    <>
      <div className="od-wrapper">
        <div className="container">
          <div className="od-container">
            {/* head */}
            <div className="od-head">
              <motion.span
                variants={tagVariants}
                initial="offscreen"
                whileInView={"onscreen"}
                className="tag"
              >
                Our Difference
              </motion.span>

              <motion.span
                variants={titleVariants}
                initial="offscreen"
                whileInView={"onscreen"}
                className="title"
              >
                Fair capital, hassle free
              </motion.span>

              <motion.span
                variants={textVariants}
                initial="offscreen"
                whileInView={"onscreen"}
                className="text"
              >
                Our mission is to level thhe playing for early stage growth
                capital.
                <br /> We provide capital that is unbiased, flexible and non
                dilutive with the execution support to accelerate value
                creation.
              </motion.span>
            </div>

            {/* features */}
            <div className="od-features">
              {ourDiffFeatures.map((feature, i) => (
                <div
                  key={i}
                  initial="offscreen"
                  whileInView={"onscreen"}
                  variants={containerVariants((i + 1) * 0.1)}
                  className="od-feature"
                >
                  <img
                    src={feature.icon}
                    alt="feature"
                    width={128}
                    height={128}
                  />
                  <motion.span
                    variants={titleVariants}
                    initial="offscreen"
                    whileInView={"onscreen"}
                    className="sec-title"
                  >
                    {feature.title}
                  </motion.span>
                  <motion.span
                    variants={textVariants}
                    initial="offscreen"
                    whileInView={"onscreen"}
                    className="text"
                  >
                    {feature.des}
                  </motion.span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default OurDiff;
