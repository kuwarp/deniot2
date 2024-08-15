// import React, { useEffect } from 'react';
// import './Loader.css'; 
// import D from '../assets/Images/d-b.png'
// const Loader = ({ onFinish }) => {
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       onFinish();
//     }, 2000); 

//     return () => clearTimeout(timer);
//   }, [onFinish]);

//   return (
//     <div className="loader-container">
// <img src={D} alt="Logo" className="loader-logo" />
//     </div>
//   );
// };

// export default Loader;
import React, { useEffect } from 'react';
import D from '../assets/Images/d-b.png'
const Loader = ({ onLoadComplete }) => {
  useEffect(() => {
    const timer = setTimeout(onLoadComplete, 2000);
    return () => clearTimeout(timer);
  }, [onLoadComplete]);

  return (
    <div className="loader  d-flex justify-content-center align-items-center">
      <img src={D} alt="Logo" />
    </div>
  );
};

export default Loader;
