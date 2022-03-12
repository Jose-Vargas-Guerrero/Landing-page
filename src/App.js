import react, {useState} from "react";
import "./App.css";
import { motion, AnimatePresence } from "framer-motion";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const animation = {
  visible: { y: 0, opacity: 1 },
  hidden: { y: 80, opacity: 0}
}
const data = {
  visible: { scale: 1},
  hidden: { scale: 0}
}

function Dropwdown() {
  let [dropdown, setdropdown] = useState(false)
  const toggleDropdown = () => {setdropdown( dropdown = !dropdown)}

  if (!dropdown) {
    return  <AnimatePresence>
      <motion.button className="menu" onClick={toggleDropdown} initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
      transition={{ duration: 0.6, type: "tween"}}>MENU</motion.button>
    </AnimatePresence>
  }
   return (
    <>
      <AnimatePresence>
        <motion.div className="dropdown" initial={{opacity: 0}} animate={{ opacity: 1}} transition={{ duration: 0.5}} exit={{ opacity: 0 }}>
          <button className="X" onClick={toggleDropdown}>X</button> 
          <a onClick={toggleDropdown} className="link" href="#hero">Home</a>
          <a onClick={toggleDropdown} className="link" href="#nosotros">About us</a>
          <a onClick={toggleDropdown} className="link" href="#contacto">Our work</a>
        </motion.div>
      </AnimatePresence>
    </>
  ) 
}

function App() {
  return (
    <>
      <div className="container-fluid hero-container" id="hero">
        <Dropwdown/>
        <motion.p className="sub-1" initial="hidden" animate="visible" variants={animation} transition={{ duration: 1.5}}>DESIGN AGENCY</motion.p>
        <motion.h2 className="p1" initial="hidden" animate="visible" variants={animation} transition={{ duration: 1.5}}>SOLVING PROBLEM</motion.h2>
        <motion.h2 className="p2" initial="hidden" animate="visible" variants={animation} transition={{ duration: 1.5}}>
          WITH <motion.strong className="strong" initial="hidden" animate="visible" variants={animation} transition={{ duration: 1}}>CREATIVITY</motion.strong>
        </motion.h2>
        <motion.p className="text" initial="hidden" animate="visible" variants={animation} transition={{ duration: 1.5 }}>
          We are here to hep startup to grow up their business with our design
          solution
        </motion.p>
        <div className="buttons-box">
          <motion.button className="button-1" initial="hidden" animate="visible" variants={animation} transition={{ duration: 1.5 }}>LET'S TALK</motion.button>
          <motion.button className="button-2" initial="hidden" animate="visible" variants={animation} transition={{ duration: 1.5 }}> SHOWREEL</motion.button>
        </div>
        <div className="box">
          <motion.div className="data-box box-1" variants={data} initial="hidden" animate="visible" transition={{ duration: 1, delay: 1, type: "spring"}}>
            <h3 className="data">280+</h3>
            <p className="data-text">Job Done</p>
          </motion.div>
          <motion.div className="data-box" variants={data} initial="hidden" animate="visible" transition={{ duration: 1, delay: 1.5, type: "spring"}}>
            <h3 className="data">280+</h3>
            <p className="data-text">Job Done</p>
          </motion.div>
          <motion.div className="data-box" variants={data} initial="hidden" animate="visible" transition={{ duration: 1, delay: 2, type: "spring"}}>
            <h3 className="data">280+</h3>
            <p className="data-text">Job Done</p>
          </motion.div>
        </div>
      </div>
      <div className="container-fluid nosotros" id="nosotros">
        <div data-aos="fade-left">
          <h2 className="nosotros-title">We put the needs of our clients first</h2>
          <p className="nosotros-text">We value advice above transactions and relationships above revenues. We build long-term relationships with our clients founded on trust, reliability and honesty. We help you solve your most important human capital challenges and, if the answer is do not proceed, we will tell you that.</p>
        </div>
      </div>
      <div className="container-fluid contacto" id="contacto">
        <div data-aos="fade-right">
          <h1 className="contacto-title">Collaboration is at the heart of everything we do</h1>
          <p className="contacto-our">We are a partnership united by a strong set of values and a commitment to succeeding as a team. Our people are passionate about excellence, both in the work they do and the lives they lead. We believe that advice is about sharpening focus through multiple perspectives and diverse ways of thinking and seeing.</p>
        </div>
      </div>
    </>
  );
}

export default App;
