import React from 'react';
import Header from '../components/Header';
import About from "../components/About"
import Profile from "../components/Profile"
import Carousel from "../components/Carousel"
import Academic from "../components/Academic"
import Skills from "../components/Skills"
import Experience from "../components/Experience"
import Languages from "../components/Languages"
import Certificate from "../components/Certificate"
import Interest from "../components/Interest"
import Social from "../components/Social"
import Footer from "../components/Footer"

// import '../styles/components/App.css';
import "../styles/components/App.scss"

// import useInitialState from "../hooks/useInitialState";
import getData from '../utils/getData';


const API = "http://localhost:3000/data"

const App = () => {
  const data = getData(API);
  return (
    <>
      <Header name={data.name} profession={data.profession} avatar={data.avatar}>
        <About email={data.email} address={data.address} website={data.website} />
      </Header>
      <Profile profile={data.Profile} />
      <Certificate certificates={data.certificate} />
      <Carousel>
        <Experience experiences={data.experience} />
        <Academic academics={data.Academic} />
        <Skills skills={data.skills} />
        <Languages languages={data.languages} />
      </Carousel>
      <Interest interests={data.interest} />
      <Social social={data.social} />
      <Footer />
    </>
  );
};

export default App;
