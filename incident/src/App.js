// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter and Routes
import Registration from './Registration';
import Login from './Login';
import Dashboard from './Dashboard';

function App() {
  const [pincodeData, setPincodeData] = useState('');

  return (
    <div className="App">
      <Router> {/* Use BrowserRouter */}
        <Routes>
          <Route path='/Registration' element={<Registration
        invalidError="Please check pincode"
        lengthError="Pincode must be of 6 digits"
        getData={(data) => setPincodeData(data)}
        container={styles.container}
        pincodeContainer={styles.inputContainer}
        pincodeInput={styles.input}
        cityContainer={styles.inputContainer}
        cityInput={styles.input}
        countryContainer={styles.inputContainer}
        countryInput={styles.input}
      />}/>
          <Route path='/' element={<Login/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
      </Router>
      
      
      
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  inputContainer: {
    marginBottom: '10px',
  },
  input: {
    width: '200px',
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
};

export default App;
