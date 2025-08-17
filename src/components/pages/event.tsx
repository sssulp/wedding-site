import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  weddingRingIcons,
  martini,
  cake,
  lunchService,
  bouquet,
} from '../../assets';
import '../../styles/styles.css';

const Event = () => {
  const [lineActive, setLineActive] = useState<boolean>(false);

  useEffect(() => {
    const lineTimer = setTimeout(() => {
      setLineActive(true);

      const container = document.querySelector('.event-content');
      const items =
        document.querySelectorAll<HTMLLIElement>('.event-content li');

      if (container) {
        const containerHeight = container.scrollHeight;
        const lineDuration = 2000; // 2 seconds
        const contentStartDelay = 250; // extra delay for content animation

        items.forEach((item) => {
          const itemTop = item.offsetTop;
          const percent = itemTop / containerHeight;
          const delay = percent * lineDuration + contentStartDelay;

          setTimeout(() => {
            item.classList.add('active');
          }, delay);
        });
      }
    }, 700); // 700ms delay before line starts

    return () => clearTimeout(lineTimer);
  }, []);

  return (
    <>
      <div className="event-main">
        <motion.div
          className="event-header"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <img src={weddingRingIcons} className="weddingRings" />

          <motion.h2
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut', delay: 0.7 }}
          >
            The Itinerary
          </motion.h2>
        </motion.div>

        {/* vertical timeline for event details */}
        <div className={`event-content ${lineActive ? 'line-active' : ''}`}>
          <ul>
            <li>
              <span className="time">09:30</span>
              <p>Arrive at the Kahala Hotel Lobby</p>
              <img src={''} />
            </li>
            <li>
              <span className="time">09:50</span>
              <p>Guests to be seated</p>
            </li>
            <li>
              <span className="time">10:00</span>
              <p>Ceremony begins</p>
              <img src={bouquet} className="bouquet" />
            </li>
            <li>
              <span className="time">11:00</span>
              <div className="cocktail-hour">
                <p>Cocktail hour</p> <img src={martini} className="icon" />
              </div>
            </li>
            <li>
              <span className="time">11:40</span>
              <p>Guests check in for Reception</p>
            </li>
            <li>
              <span className="time">12:15</span>
              <p>Lunch service</p>
              <img src={lunchService} className="lunch" />
            </li>
            <li>
              <span className="time">13:10</span>
              <div className="cake-cutting">
                <p>Cake cutting</p>
                <img src={cake} className="cake" />
              </div>
            </li>
            <li>
              <span className="time">13:45</span>
              <p>Open dance floor</p>
            </li>
            <li>
              <span className="time">15:00</span>
              <p>End of Reception</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Event;
