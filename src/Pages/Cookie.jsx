import React, { useState } from 'react';

const CookieConsent = () => {
  
  const [show, setShow] = useState(true);

  React.useEffect(() => {
    const consentGiven = localStorage.getItem('cookieConsent');
    if (consentGiven) {
      setShow(false);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShow(false);
  };
  const handleCustom = () => {
    // Add custom settings logic here
  };

  return (
    show && (
      <div className="cookie-consent card p-4 shadow-sm">
        <p>
          We use cookies to improve your browsing experience on this site, to generate audience statistics, but also to manage access to the investor environment. You can enable or disable these cookies by clicking on the Custom button and get here more information on their management.
        </p>
        <div className="d-flex justify-content-end align-items-center">
          <button className="btn btn-link text-muted" onClick={handleAccept}>I agree</button>
          <hr className="mx-2 my-0 hr-line" />
          <button className="btn btn-link text-muted" onClick={handleCustom}>Custom</button>
        </div>
      </div>
    )
  );
};

export default CookieConsent;
