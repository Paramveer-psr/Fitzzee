import React from 'react'
import Bmi from '../../components/bmi-calculator/bmi';
import Navbar from '../../components/navbar/Navbar';
import MiniFooter from '../../components/mini-footer/MiniFooter';

function BmiCalculator() {
  return (
    <>
      <Navbar />
      <Bmi />
      <MiniFooter />
    </>
  );
}

export default BmiCalculator
