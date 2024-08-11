import { Route } from 'react-router-dom';
import Homepage from '../Homepage';
import { Routes } from 'react-router-dom';
import AboutUs from '../../AboutUs/AboutUs';
import OurService from '../../OurService/OurService';

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path='service' element={<OurService />} />
      </Routes>
    </main>
  );
};

export default Main;
