// import React from 'react';
// import './App.css';
// import Loader from './Pages/PreLoader';
// import Homepage from './Pages/Hompage';
// const App = () => {
//   const [isLoading, setIsLoading] = React.useState(true);

//   const handleFinishLoading = () => {
//     setIsLoading(false);
//   };

//   return (
//     <div className="App">
//       {isLoading ? <Loader onFinish={handleFinishLoading} /> : <Homepage />}
//     </div>
//   );
// };
// export default App;


import React, { useState,useEffect } from 'react';
import './App.css';
import Loader from './Pages/PreLoader';
import Homepage from './Layouts/Hompage';
import CookieConsent from './Pages/Cookie';
import InternationalSection from './Layouts/InternationalSection';
import Footer from './Pages/Footer';
import HasprCursor from 'haspr-cursor' // Import Wrapper
import 'haspr-cursor/dist/cursor.css'
import Navbar from './Pages/Nav';
import Deniot from './Layouts/Deniot';
import ScrollEffect from './Pages/ScrollEffect';

const App = () => {
  const [loading, setLoading] = useState(true);
  
  const handleLoadComplete = () => {
    setLoading(false);
  };

 
  useEffect(() => {
    setTimeout(()=>{
      handleLoadComplete()
    },2000)
   }, []);

  
  return (
    <div  className='app'> <HasprCursor >
<Navbar />
<ScrollEffect/>
      {loading ? (
        <Loader onLoadComplete={handleLoadComplete} />
      ) : (
      <>
     
      <Homepage/>
      <Deniot/>
      <InternationalSection/>
      <Footer/>
      </> 
      
      )}
      </HasprCursor>
    </div>
  );
};

export default App;
