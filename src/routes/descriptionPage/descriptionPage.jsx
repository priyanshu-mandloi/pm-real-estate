import "./descriptionPage.scss";

import React from "react";

// DescriptionPage.js

const DescriptionPage = () => {
  return (
    <div className="description-page">
      <h1>Welcome to PM REAL ESTATE</h1>
      <div className="how-it-works">
        <h2>How it works</h2>
        <div className="step">
          <h3>Step 1: Post your Property Ad</h3>
          <p>
            Enter all details like locality name, amenities etc. along with
            uploading Photos
          </p>
        </div>
        <div className="step">
          <h3>Step 2: Check Responses on Dashboard</h3>
          <p>Get access to Buyer/Tenant contact details & connect easily</p>
        </div>
        <div className="step">
          <h3>Step 3: Sell/Rent faster with instant Connect</h3>
          <p>
            Negotiate with your prospective Buyer/Tenant & mutually close the
            deal (site-visit)
          </p>
        </div>
      </div>
      <div className="selling-tips">
        <h2>Tips on Selling a Property Online</h2>
        <ul>
          <li>Post your Property Ad</li>
          <li>
            Enter all details like locality name, amenities etc. along with
            uploading Photos
          </li>
          <li>Add Quality Photos</li>
          <li>Choose Correct Locality/Address</li>
          <li>Write a Great Description</li>
          <li>Add additional details</li>
        </ul>
      </div>
      <div className="selling-benefits">
        <h2>Benefits of Selling Your Property Online</h2>
        <ul>
          <li>Time-Efficient</li>
          <li>Get Better Exposure To Potential Buyers</li>
          <li>Cost-Effective</li>
          <li>More Services</li>
        </ul>
      </div>
    </div>
  );
};

export default DescriptionPage;
