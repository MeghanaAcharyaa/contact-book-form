import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [values, setValues] = useState({
    name: '',
    number: '',
    address: '',
    state: '',
    city: '',
    message: ''
  });

  const change = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };



  const submit = () => {
    if (
      values.name === '' ||
      values.number === '' ||
      values.address === '' ||
      values.state === '' ||
      values.city === '' ||
      values.message === ''
    ) {
      alert('All fields are required');
    } else {
      axios
        .post('http://localhost:1000/api/v1/post', values)
        .then((res) => {
          console.log(res);
          alert('Data saved successfully!');
          setValues({
            name: '',
            number: '',
            address: '',
            state: '',
            city: '',
            message: ''
          });
        })
        .catch((err) => {
          console.error(err.response?.data || err.message);
          alert('Failed to save data. Check backend or input.');
        });
    }
  };

  return (
    <div
      className="main d-flex justify-content-center align-items-center vh-100"
      style={{ backgroundColor: '#0b0146' }}
    >
      <div
        className="card-contact px-3 py-3"
        style={{
          backgroundColor: '#160b56',
          borderRadius: '10px',
          color: 'white',
          width: '500px'
        }}
      >
        <h3 className="text-center mb-4">Contact Form</h3>

        <div className="mb-3">
          <label>Enter your name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={values.name}
            onChange={change}
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-3">
          <label>Enter your phone number</label>
          <input
            type="text"
            className="form-control"
            name="number"
            value={values.number}
            onChange={change}
            placeholder="Enter your phone number"
          />
        </div>

        <div className="mb-3">
          <label>Address</label>
          <textarea
            className="form-control"
            name="address"
            value={values.address}
            onChange={change}
            placeholder="Enter your address"
          ></textarea>
        </div>

        <div className="d-flex gap-2 mb-3">
          <div className="w-50">
            <label>State</label>
            <input
              type="text"
              className="form-control"
              name="state"
              value={values.state}
              onChange={change}
              placeholder="Enter your state"
            />
          </div>
          <div className="w-50">
            <label>City</label>
            <input
              type="text"
              className="form-control"
              name="city"
              value={values.city}
              onChange={change}
              placeholder="Enter your city"
            />
          </div>
        </div>

        <div className="mb-3">
          <label>Message</label>
          <textarea
            className="form-control"
            name="message"
            value={values.message}
            onChange={change}
            placeholder="Enter your message"
          ></textarea>
        </div>

        <div className="text-center">
          <button className="btn btn-primary" onClick={submit}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
