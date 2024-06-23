// src/components/Contracts.tsx
import React from 'react';
import './Contract.css';

const Contracts: React.FC = () => {
  return (
    <div className="contracts-container">
      <h1>Contracts</h1>
      <div className="upload-container">
        <div className="upload-box">
          <div className="upload-icon">+</div>
          <p>Upload</p>
        </div>
        <div className="preview-box">
          <div className="preview-icon">
            <i className="fa fa-file"></i>
          </div>
          <p>Preview</p>
          <button className="download-button">
            <i className="fa fa-download"></i> Download
          </button>
        </div>
      </div>
      <div className="terms-container">
        <label>
          <input type="checkbox" /> Terms and Conditions
        </label>
        <label>
          <input type="checkbox" /> I agree
        </label>
        <label>
          <input type="checkbox" /> I disagree
        </label>

      </div>
      <div>
      <label htmlFor="options">Choose an option:</label>
      <select id="options" value= "" >
        <option value="" disabled>Select an option</option>
        <option value="option1">Quotation</option>
        <option value="option2">None-disclosure Agreement</option>
        <option value="option3">Contract</option>
      </select>
     
    </div>
      <button className="submit-button">Submit</button>
    </div>
  );
};

export default Contracts;
