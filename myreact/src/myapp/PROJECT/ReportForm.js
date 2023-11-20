// src/components/ReportForm.js
import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getReport, saveReport } from '../services/api';

const ReportForm = () => {
  const { id } = useParams();
  const history = useHistory();
  const [report, setReport] = useState({ date: '', description: '' });

  useEffect(() => {
    if (id) {
      getReport(id).then((data) => setReport(data));
    }
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReport((prevReport) => ({ ...prevReport, [name]: value }));
  };

  const handleSubmit = () => {
    saveReport(report);
    history.push(`/patients/${id}/reports`);
  };

  return (
    <div>
      <h2>{id ? 'Edit Report' : 'Add Report'}</h2>
      <form>
        <label>Date:</label>
        <input type="date" name="date" value={report.date} onChange={handleInputChange} />

        <label>Description:</label>
        <textarea name="description" value={report.description} onChange={handleInputChange} />

        <button type="button" onClick={handleSubmit}>
          Save Report
        </button>
      </form>
    </div>
  );
};

export default ReportForm;
