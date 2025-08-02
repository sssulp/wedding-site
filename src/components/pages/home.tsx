import React from 'react';
import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
import '../../styles/styles.css';

const Home: React.FC = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        <section className="wrapper">
          <div className="home-main">
            <div className="home-content">
              <h2>Welcome to the home page</h2>
            </div>
          </div>
        </section>
        <section id=""></section>
      </motion.div>
    </>
  );
};

export default Home;
