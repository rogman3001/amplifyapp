import React from 'react';
import './App.css';
import logo from './logo.png';

function App() {
  return (
    <div className="App">
       <div>
             <img src={logo} alt="this is car image" />
        </div>
      <h1>Create e-CMR</h1>
      
     <div className="block">
     <p><label>1.Sender (name, adress, country):</label> <br />
        <input type="text" name="moviename" />
        <input type="text" name="moviename" />
        <input type="text" name="moviename" /><br />
      <label>2.Consignee (name, adress, country):</label> <br />
        <input type="text" name="moviename" />
        <input type="text" name="moviename" />
        <input type="text" name="moviename" /><br /></p>
     
      <label>3.Taking over the good (place, country, date):</label> <br />
        <input type="text" name="moviename" />
        <input type="text" name="moviename" />
        <input type="text" name="moviename" /><br />
       
      </div>


      <div className="quadruple">
      <label>Time of arrival, time of depature:</label> <br />
        <input type="text" name="moviename" />
        <input type="text" name="moviename" /><br />
      </div>
     


      <div className="block"><p> 
        <label>4. Delivery of goods (place, country, warehouse opening hours):</label> <br />
        <input type="text" name="moviename" />
        <input type="text" name="moviename" />
        <input type="text" name="moviename" /><br />
        </p> 
      </div>

      <div className="form">
        <label>5. Senders instructions:</label>
        <input type="text" name="moviename" />
      </div>

      <div className="block">
     <p></p> <label>6.Carrier (name, adress, country):</label> <br />
        <input type="text" name="moviename" />
        <input type="text" name="moviename" />
        <input type="text" name="moviename" /><br />
      </div>
    
      <div className="form">  
        <label>Another reference:</label>
        <input type="text" name="moviename" />
      </div>


      <div className="block">
      <p></p><label>7.Succesive carriers (name, adress, country):</label> <br />
        <input type="text" name="moviename" />
        <input type="text" name="moviename" />
        <input type="text" name="moviename" /><br />
      </div>
    
      <div className="form">  
        <label>Another reference:</label>
        <input type="text" name="moviename" />
      </div>

      <button>Submit</button>

    </div>
  );
}

export default App;
