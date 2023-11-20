// src/components/PatientList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getPatients } from '../services/api';

const PatientList = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    getPatients().then((data) => setPatients(data));
  }, []);

  return (
    <div>
      <h2>Patient List</h2>
      <ul>
        {patients.map((patient) => (
          <li key={patient.id}>
            <Link to={`/patients/${patient.id}/reports`}>{patient.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientList;
