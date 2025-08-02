import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import './styles/styles.css';

import Navigation from './components/navigation';
import {
  Home,
  Event,
  Travel,
  Lodging,
  ToDo,
  Attire,
} from './components/pages/index';
// import bg from './assets/home-splash.jpg';

const App = () => {
  const location = useLocation();
  return (
    <>
      {/* <div className="home-background">
        <img src={bg} className="home-splash" />
      </div> */}
      <Navigation />
      <div>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            {/* event = our wedding, wedding date, location info, timeline of the day */}
            <Route path="/event" element={<Event />} />

            {/* methods of travel that is recommended? add google maps to the location? embedded map? */}
            <Route path="/travel" element={<Travel />} />

            {/* ROOM BLOCK BOOKING INFO ETC */}
            <Route path="/lodging" element={<Lodging />} />

            {/* general shit you can do in hawaii/oahu for fun, explore, etc */}
            <Route path="/things-to-do" element={<ToDo />} />

            {/* attire */}
            <Route path="/attire" element={<Attire />} />
          </Routes>
        </AnimatePresence>
      </div>
    </>
  );
};

export default App;
