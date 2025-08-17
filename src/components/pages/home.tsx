import React from 'react';
import { motion } from 'framer-motion';
import { gallery } from '../../assets';
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
        <div className="home-background">
          <div className="bg-overlay"></div>
        </div>
        <section className="wrapper">
          <div className="home-main">
            <div className="home-title">
              <h2>We're tying the knot</h2>
            </div>
            <div className="home-body">
              <div className="story">
                <h3>Our Story</h3>
              </div>
              <div className="story-details">
                <div className="story-text">
                  <p>
                    After nearly seven years of dating, we finally are ready to
                    take a step forward into our forever, always carrying
                    Parker, our little best friend, who was there to see us
                    grow. Who we will always miss, and be thankful for.
                  </p>
                  <p>
                    As this story of us continues forward, we face big life
                    changes side-by-side: new jobs, new opportunities, and new
                    dreams. We will continue to learn from each other, celebrate
                    our life, and lean on one another during the longer days.
                  </p>
                  <p>
                    Now, as we step into this exciting new chapter, we couldn't
                    be more grateful for the journey that brought us here and
                    the future we'll continue to build together.
                  </p>
                </div>
                <div className="story-images">
                  <img src={gallery} className="gallery" />
                </div>
              </div>
            </div>
            <div className="form-body">
              <h4>Dietary Form</h4>
              <div className="form-content">
                <p>
                  Please follow the link to open a google form and fill out the
                  necessary information so we can plan the food appropriately.
                </p>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdEuuJ2ygY7PlBIAr3PPnk9OSwEOI8dIIchcy-V2D-ieYlOIQ/viewform?embedded=true"
                  target="_blank"
                  className="google-form"
                >
                  Submit your dietary restrictions
                </a>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default Home;
