import { motion } from 'framer-motion';
import {
  attire1,
  attire2,
  attire3,
  attire4,
  attire5,
  attire6,
} from '../../assets';
import '../../styles/styles.css';

const Attire = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="attire-home">
        {/* Title */}
        <motion.div
          className="attire-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2>The Attire</h2>
        </motion.div>

        {/* Text */}
        <motion.div
          className="attire-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p>
            We suggest guests to wear formal for the occasion. We kindly request
            for our guests to not wear white. Please see the images below for
            inspiration.
          </p>
        </motion.div>

        {/* Gallery */}
        <motion.div
          className="attire-gallery"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {/* Circles */}
          <motion.div
            className="circle-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <div className="circle circle1" />
            <div className="circle circle2" />
            <div className="circle circle3" />
            <div className="circle circle4" />
          </motion.div>

          {/* Ladies */}
          <motion.div
            className="attire-ladies"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
            >
              Ladies
            </motion.h4>
            <motion.div
              className="attire-examples1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <img src={attire1} />
              <img src={attire2} />
              <img src={attire3} className="attire-3" />
            </motion.div>
            <p>
              Please wear a neutral color outfit. The above colors or neutral
              colored patterns or prints are welcomed.
            </p>
          </motion.div>

          {/* Gentlemen */}
          <motion.div
            className="attire-men"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.4 }}
          >
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.5 }}
            >
              Gentlemen
            </motion.h4>
            <motion.div
              className="attire-examples1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.6 }}
            >
              <img src={attire4} />
              <img src={attire5} />
              <img src={attire6} />
            </motion.div>
            <p>
              Please wear a neutral colored suit or tuxedo. The above colors or
              grey or brown are great options. Navy is not a neutral color.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Attire;
