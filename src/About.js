import React from 'react';
import web from "../src/images/img2.svg";
import { NavLink } from 'react-router-dom';
import Common from './Common';
import Service from './Service';

const About = () => {
  return (
    <>
        <Common 
            name="Welcome to About page of " 
            imgsrc={web} 
            line="Boost traffic and generate leads, all for a simple monthly fee. No contracts. No hiring. No hassle."
            // line2="Get anything from a few pieces right through to daily content each month, all sprinkled with the added magic of a dedicated SEO and editorial team."
            visit="/contact" 
            btname="Contact Now" 
        />

        <Service />
    </>
  );
};

export default About;


// import React from 'react';

// const About = () => {
//   return (
//     <>
//         <h1>Welcome About Page</h1>
//     </>
//   );
// };

// export default About;
