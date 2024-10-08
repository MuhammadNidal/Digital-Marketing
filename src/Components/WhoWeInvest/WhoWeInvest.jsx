import React from "react";
import "./WhoWeInvest.css";
import { whoWeInvest } from "../../utils/data";
import { motion } from "framer-motion";
import {
  containerVariants,
  desVariants,
  tagVariants,
  titleVariants,
} from "../../utils/animation";

const WhoWeInvest = () => {
  return (
    <>
      <div className="wwi-wrapper">
        <div className="container">
          <div className="wwi-container">
            {/* left side */}
            <div className="wwi-left">
              <div className="head">
                <motion.span
                  initial="offscreen"
                  whileInView={"onscreen"}
                  variants={tagVariants}
                  className="tag"
                >
                  Who we invest in
                </motion.span>
                <motion.span
                  initial="offscreen"
                  whileInView={"onscreen"}
                  variants={titleVariants}
                  className="title"
                >
                  Digital businesses
                  <br />
                  with early traction
                </motion.span>
              </div>

              {/* features */}
              <div className="wwi-features">
                {whoWeInvest.map((feature, i) => (
                  <motion.div
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={containerVariants(i * 0.05 + 1)}
                    className="wwi-feature"
                    key={i}
                  >
                    <motion.span
                      initial="offscreen"
                      whileInView={"onscreen"}
                      variants={titleVariants}
                      className="des"
                    >
                      {feature.title}
                    </motion.span>
                    <motion.span
                      initial="offscreen"
                      whileInView={"onscreen"}
                      variants={desVariants}
                      className="text"
                    >
                      {feature.des}
                    </motion.span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* right side */}
            <motion.div className="wwi-right">
              <motion.img
                variants={containerVariants(0.5)}
                initial="offscreen"
                whileInView={"onscreen"}
                src="persons.png"
                alt="persons"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};
export default WhoWeInvest;
