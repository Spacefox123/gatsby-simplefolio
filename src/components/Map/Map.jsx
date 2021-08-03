import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import Title from '../Title/Title';
import PortfolioContext from '../../context/context';

const Map = () => {
  const { map } = useContext(PortfolioContext);
  const { mapUrl } = map;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <>
      <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
        <Title title="Where can you find us?" />
      </Fade>

      <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
        <iframe title="locations" src={mapUrl} width="100%" height="500" />
      </Fade>
    </>
  );
};

export default Map;
