import React from 'react';

export default function SummaryCards({ assessments }) {
  const total = assessments.length;
  const completed = assessments.filter((a) => a.status === "Completed").length;

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="p-4 bg-green-100 rounded shadow">
        <h3>Total Assessments</h3>
        <p>{total}</p>
      </div>
      <div className="p-4 bg-blue-100 rounded shadow">
        <h3>Completed Assessments</h3>
        <p>{completed}</p>
      </div>
    </div>
  );
}
