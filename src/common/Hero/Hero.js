import React from 'react';
import reactLogo from '../../assets/reactjs-icon.svg';

const Hero = () => {
  const Title = () => (
    <>
      <h2 className="title">
        Bienvenidos al panel de seguimiento digital de 
        <span className="text-blue">  AASSA</span>
      </h2>
    </>
  );

  return (
    <div className="jumbotron text-center">
      <Title/>
    </div>
  );
};

export default Hero;

