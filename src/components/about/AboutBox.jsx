import React from 'react';
const AboutBox = () => (
  <div className="about__boxes grid">
    {['SysML', 'CUDA', 'Distributed systems', 'ML inference'].map(focus => (
      <div className="about__box" key={focus}><h3 className="about__title">{focus}</h3></div>
    ))}
  </div>
);
export default AboutBox;
