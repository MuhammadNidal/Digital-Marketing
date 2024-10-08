import React from "react";
import "./WhatWeDo.css";
import { features } from "./../../utils/data";
import { motion } from "framer-motion";
import {
  containerVariants,
  desVariants,
  tagVariants,
  titleVariants,
} from "../../utils/animation";

const WhatWeDo = () => {
  return (
    <>
      <div className="wwd-wrapper">
        <div className="container">
          <div className="wwd-container">
            {/* head of section */}
            <div className="wwd-head">
              <motion.span
                initial="offscreen"
                whileInView={"onscreen"}
                variants={tagVariants}
                className="tag"
              >
                What we do
              </motion.span>
              <motion.span
                initial="offscreen"
                whileInView={"onscreen"}
                variants={titleVariants}
                className="title"
              >
                Empowering founders with non delutive cupital and execution
                experties
              </motion.span>
              <motion.span
                initial="offscreen"
                whileInView={"onscreen"}
                variants={desVariants}
                className="des"
              >
                Here is how we can evaluate
              </motion.span>
            </div>

            {/* two blocks */}
            <div className="wwd-blocks">
              {/* first block */}
              <div className="wwd-block">
                <motion.span
                  initial="offscreen"
                  whileInView={"onscreen"}
                  variants={titleVariants}
                  className="sec-title"
                >
                  Blue Advances
                </motion.span>
                <motion.span
                  initial="offscreen"
                  whileInView={"onscreen"}
                  variants={desVariants}
                  className="text"
                >
                  Fund recurring growth expenses e.g. customer a acquisition
                  inventory
                </motion.span>

                <div className="block-features">
                  {features.slice(0, 3).map((feature, i) => (
                    <motion.div
                      initial="offscreen"
                      whileInView={"onscreen"}
                      variants={containerVariants((i + 1) * 0.1)}
                      className="block-feature"
                      key={i}
                    >
                      <img
                        src={feature.icon}
                        alt="icon"
                        width={60}
                        height={60}
                      />
                      <span>{feature.title}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* second block */}
              <div className="wwd-block">
                <motion.span
                  initial="offscreen"
                  whileInView={"onscreen"}
                  variants={titleVariants}
                  className="sec-title"
                >
                  Blue Seed
                </motion.span>
                <motion.span
                  initial="offscreen"
                  whileInView={"onscreen"}
                  variants={desVariants}
                  className="text"
                >
                  Fund one-offs to scale e.g. product, hiring
                </motion.span>

                <div className="block-features">
                  {features.slice(3, 6).map((feature, i) => (
                    <motion.div
                      initial="offscreen"
                      whileInView={"onscreen"}
                      variants={containerVariants((i + 1) * 0.1)}
                      className="block-feature"
                      key={i}
                    >
                      <img
                        src={feature.icon}
                        alt="icon"
                        width={60}
                        height={60}
                      />
                      <span>{feature.title}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
            {/* support block */}
            <div className="wwd-support">
              {/* left side */}
              <div>
                <motion.span
                  initial="offscreen"
                  whileInView={"onscreen"}
                  variants={containerVariants(0, 3)}
                  className="sec-title"
                >
                  Blue Growth Support
                </motion.span>
                <motion.span
                  initial="offscreen"
                  whileInView={"onscreen"}
                  variants={desVariants}
                  className="des"
                >
                  Data Insights and full stack expertise to supercharge growht
                </motion.span>
              </div>
              {/* right side */}
              <div>
                <motion.span
                  initial="offscreen"
                  whileInView={"onscreen"}
                  variants={desVariants}
                  className="text"
                >
                  Actionable data insigts by connecting revenue, markketing and
                  social media platforms
                </motion.span>
                <motion.span
                  initial="offscreen"
                  whileInView={"onscreen"}
                  variants={desVariants}
                  className="text"
                >
                  On demand execution experise of cost or revenue share across
                  proposition design, engineering, marketing analytics,
                  partnerships, brand, intellectual property, market expansion,
                  talent management
                </motion.span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatWeDo;
