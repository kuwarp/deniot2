


import React, { useEffect, useState } from 'react';
import '../assets/css/Homi.css';
import HomeCarousels from './HomeCarousels';

const Homepage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [showComponents, setShowComponents] = useState(false);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (scrollY > 750) { // Adjust this value based on when you want to show other components
      setShowComponents(true);
    }
  }, [scrollY]);

   const getContainerSize = () => {
    if (scrollY < 100) return 400; 
    if (scrollY < 200) return 450; 
    return '100%'; 
  };
  const getContainerSizeX = () => {
    if (scrollY < 100) return 400; 
    if (scrollY < 200) return 750; 
    return '100%'; 
  };

  return (
    <div className='extra container-fluid  ' >
      <div
        className='homepage-container  '
        style={{ height: getContainerSize(), width: getContainerSizeX() }}
      >
        <div className="homepage-content" >
          <HomeCarousels />
        </div>
       
      
      </div>
     
    
    </div>
  );
};

export default Homepage;


// import React, { useEffect } from 'react';
// import './Homi.css';
// import HomeCarousels from '../Layouts/HomeCarousels';
// import ScrollAnimation from 'react-animate-on-scroll';
// import CookieConsent from './Cookie';

// const Homepage = () => {
//   const [scrollY, setScrollY] = React.useState(10);

//   const handleScroll = () => {
//     setScrollY(window.scrollY);
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const getContainerSize = () => {
//     if (scrollY < 100) return 400;
//     if (scrollY < 200) return 450;
//    return 
//   };

//   const getContainerSizeX = () => {
//     if (scrollY < 100) return 400;
//     if (scrollY < 200) return 750;
//   return
//   };

//   return (
//     <div className='extra'>
//       <div className='  container'>
        
//         <div
//           className="homepage-container m-auto"
//           style={{ height: getContainerSize(), width: getContainerSizeX() }}
//         >
//           <div className="homepage-content">
//             <HomeCarousels />
//           </div>
//           <div className='text-overlay'>
//             <h1 className='display-1'>
              
//                 Design Your Life And Dreams
//               </h1>
            
       
//           </div>
//         </div>
     
//       </div>
      
//     </div>
//   );
// };

// export default Homepage;
