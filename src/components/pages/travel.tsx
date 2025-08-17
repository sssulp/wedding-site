import { motion } from 'framer-motion';

const Travel = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        className="travel-content"
      >
        <motion.h2
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.2 }}
        >
          Getting Here
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
          className="travel-info"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
          >
            The Kahala Hotel & Resort - 5000 Kahala Ave, Honolulu, HI 96816,
            United States
          </motion.p>
          <motion.div
            className="travel-map"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3717.9895053587124!2d-157.7738378!3d21.271882999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c0072a7fb4e5405%3A0xa50bef298438eee!2sThe%20Kahala%20Hotel%20%26%20Resort!5e0!3m2!1sen!2sca!4v1754149953596!5m2!1sen!2sca"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: 10 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Kahala Resort and Hotel Map"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Travel;
