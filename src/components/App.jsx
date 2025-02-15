import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Projects from './Projects/Projects';
import OurStory from './secondText/secondText';
import Map from './Map/Map';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

import { PortfolioProvider } from '../context/context';

import {
  heroData,
  aboutData,
  projectsData,
  ourStoryData,
  mapData,
  contactData,
  footerData,
} from '../mock/data';

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [second, setSecondText] = useState({});
  const [map, setMap] = useState({});
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setSecondText({ ...ourStoryData });
    setMap({ ...mapData });
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{ hero, about, projects, second, map, contact, footer }}>
      <Hero />
      <About />
      <Projects />
      <OurStory />
      <Map />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
