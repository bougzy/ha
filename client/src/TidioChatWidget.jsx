import React, { useEffect } from 'react';

const TidioChatWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//code.tidio.co/qr6vranclha7yqnsm9t8jkmxaoxvvuc2.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // This component doesn't render anything directly
};

export default TidioChatWidget;


