import "./App.css";
import Navbar from "./Components/Navbar/Navbar";

import Hero from "./Components/Hero/hero";
import BrandingVideo from "./Components/BrandingVideo/BrandingVideo";
import WhatWeDo from "./Components/WhatWeDo/WhatWeDo";
import OurDiff from "./Components/OurDifference/OurDiff";
import { motion, useAnimation } from "framer-motion";
import HowItWorks from "./Components/HowItWorks/HowItWorks";
import WhoWeInvest from "./Components/WhoWeInvest/WhoWeInvest";
import Testimonial from "./Components/Testimonials/Testimonial";
import Footer from "./Components/Footer/Footer";

function App() {
  const controls = useAnimation();
  return (
    <motion.div className="App" animate={controls}>
      <Navbar />
      <Hero />
      <BrandingVideo />
      <WhatWeDo />
      <motion.div
        onViewportEnter={() =>
          controls.start({
            backgroundColor: "var(--secondary-color)",
          })
        }
        onViewportLeave={() =>
          controls.start({
            backgroundColor: "white",
          })
        }
        viewport={{amount: 0.4}}
      >
        <OurDiff />
      </motion.div>
      <HowItWorks/>
      <motion.div 
      onViewportEnter={() =>
        controls.start({
          backgroundColor: "var(--primary-color)",
        })
      }
      onViewportLeave={() =>
        controls.start({
          backgroundColor: "white",
        })
      }
      viewport={{amount: 0.4}}
      >
      <WhoWeInvest/>
      </motion.div>
      <Testimonial/>
      <Footer/>
    </motion.div>
  );
}

export default App;
