import React from 'react';
import reactLogo from '../../assets/reactjs-icon.svg';

const Hero = () => {
  const Title = () => (
    <>
      <h2 className="title">
        Bienvenido al seguimiento digital de  &lt;
        <span className="text-blue">AASSA</span>.<span className="text-green">io</span>
        &gt;
      </h2>
    </>
  );

  return (
    <div className="jumbotron text-center" style={{marginTop: '-40px'}}>
      <Title/>
    </div>
  );
};

export default Hero;

