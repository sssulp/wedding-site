import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import './styles/styles.css';

import Navigation from './components/navigation';
import { Home, Event, Travel, Attire } from './components/pages/index';

const App = () => {
  const location = useLocation();
  return (
    <>
      <AnimatePresence>
        <Navigation />
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/itinerary" element={<Event />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/attire" element={<Attire />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default App;
