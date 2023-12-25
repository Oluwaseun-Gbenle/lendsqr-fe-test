import React from 'react';
import '../Styles/UnavailablePage.scss';

const UnavailablePage = () => {
  return (
    <div className="unavailable-page">
      <div className="content">
        <h1>Sorry, this page isn't available.</h1>
        <p>The link you followed is currently not available.</p>
      </div>
    </div>
  );
}

export default UnavailablePage;