import React from 'react';
import StackedScroll from './News';

const Home = () => {
  return (
    <>
      <div 
        className="flex justify-center items-center text-3xl h-screen bg-cover bg-center" 
        style={{ backgroundImage: "url('/mahe.jpg')" }}
      >
        <h1 className="text-white font-bold">MAHE-MUN</h1>
      </div>
      <StackedScroll />
    </>
  );
};

export default Home;
