// src/services/api.js
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const patients = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Doe' },
];

const reports = [
  { id: 1, patientId: 1, date: '2023-01-01', description: 'Routine checkup' },
  { id: 2, patientId: 1, date: '2023-02-15', description: 'X-ray results' },
  { id: 3, patientId: 2, date: '2023-03-10', description: 'Blood test report' },
];

export const getPatients = async () => {
  await delay(500);
  return patients;
};

export const getReports = async (patientId) => {
  await delay(500);
  return reports.filter((report) => report.patientId == patientId);
};

export const getReport = async (reportId) => {
  await delay(500);
  return reports.find((report) => report.id == reportId);
};

export const saveReport = async (report) => {
  await delay(500);
  if (report.id) {
    // Update existing report
    const index = reports.findIndex((r) => r.id === report.id);
    reports[index] = report;
  } else {
    // Add new report
    report.id = reports.length + 1;
    reports.push(report);
  }
};
