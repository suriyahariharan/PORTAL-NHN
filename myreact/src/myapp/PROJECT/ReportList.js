// src/components/ReportList.js
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getReports } from '../services/api';

const ReportList = () => {
  const { id } = useParams();
  const [reports, setReports] = useState([]);

  useEffect(() => {
    getReports(id).then((data) => setReports(data));
  }, [id]);

  return (
    <div>
      <h2>Medical Reports for Patient {id}</h2>
      <ul>
        {reports.map((report) => (
          <li key={report.id}>
            <Link to={`/reports/${report.id}`}>{report.date}: {report.description}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReportList;
