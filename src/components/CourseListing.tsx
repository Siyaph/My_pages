// src/components/CourseListing.tsx
import React from 'react';
import './CourseListing.css';

const CourseListing: React.FC = () => {
  return (
    <div className="course-listing-container">
      <div className="course-listing-header">
        <h1>Request For Project</h1>
        <div className="search-bar-container">
          <input type="text" placeholder="Search courses..." className="search-bar" />
          <button className="search-button">
            <i className="fa fa-search"></i>
          </button>
        </div>
      </div>
      <div className="course-listing-content">
        <div className="course-listing">
          <table>
            <thead>
              <tr>
               
               
              </tr>
            </thead>
            <tbody>
             
             
             
              
              </tbody>
              <div>
                
 

  
    <form >
      <div>
        <label htmlFor="referenceNumber">Reference Number:</label><br></br>
        <input
          type="text"
          id="referenceNumber"
          name="referenceNumber"
          
        />
      </div>
      <div>
        <label htmlFor="qualification">Qualification:</label><br></br>
        <select
          id="qualification"
          name="qualification"
         
        >
          <option value="">Select qualification</option>
          <option value="qualification1">Receive stock into a distribution centre</option>
          <option value="qualification2">Despatch stock from distribution centre</option>
          <option value="qualification3">Operate a computer in a wholesale</option>
          <option value="qualification3">Replenishing Stock</option>
          <option value="qualification3">Operate a computer in a Retail Outlet</option>
          <option value="qualification2">Despatch stock from distribution centre</option>
        </select>
      </div>
      <div>
        <label className='label' htmlFor="qualificationId">Qualification ID:</label><br></br>
        <input className='text'
          type="text"
          id="qualificationId"
          name="qualificationId"
        
        />
      </div>
      <div>
        <label htmlFor="nqfLevel">NQF Level:</label>
        <select
          id="nqfLevel"
          name="nqfLevel"
        
        ><br></br>
          <option value="">Select NQF level</option>
          <option value="level1">Level 1</option>
          <option value="level2">Level 2</option>
          <option value="level3">Level 3</option>
        </select>
      </div>
      <div>
        <label htmlFor="startDate">Start Date:</label><br></br>
        <input
          type="date"
          id="startDate"
          name="startDate"
         
        />
      </div>
      <div>
        <label htmlFor="endDate">End Date:</label><br></br>
        <input
          type="date"
          id="endDate"
          name="endDate"
          
        />
      </div>
      <div>
        <label htmlFor="yearOfStudy">Year of Study:</label><br></br>
        <input
          type="text"
          id="yearOfStudy"
          name="yearOfStudy"
          
        />
      </div>
      <div>
        <label htmlFor="studentNumber">Student Number:</label><br></br>
        <input
          type="text"
          id="studentNumber"
          name="studentNumber"
        
        />
      </div>
      <div>
        <label htmlFor="highestQualification">Highest Qualification Level:</label> <br></br>
        <input
          type="text"
          id="highestQualification"
          name="highestQualification"
      
        />
      </div>
      <button type="submit">Submit</button>
    </form>
    </div>

           
            
          </table>
        </div>
        <div className="course-info">
          <div className="course-info-grid">
            <h2>Total Courses</h2>
            <p>4</p>
          </div>
          <div className="course-info-grid">
            <h2>Active Courses</h2>
            <p>3</p>
          </div>
        </div>
      </div>
    </div>
    
  );
  
  
};

export default CourseListing;
