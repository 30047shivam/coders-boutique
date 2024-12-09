// components/AssessmentsTable.js
import { useEffect, useState } from "react";

export default function AssessmentsTable() {
  const [assessments, setAssessments] = useState([]);

  useEffect(() => {
    fetch("/api/assessments")
      .then((res) => res.json())
      .then((data) => setAssessments(data));
  }, []);

  return (
    <table border="1" style={{ width: "100%", textAlign: "left" }}>
      <thead>
        <tr>
          <th>Title</th>
          <th>Status</th>
          <th>Score</th>
          <th>Date Assigned</th>
        </tr>
      </thead>
      <tbody>
        {assessments.map((a) => (
          <tr key={a.id}>
            <td>{a.title}</td>
            <td>{a.status}</td>
            <td>{a.score || "N/A"}</td>
            <td>{new Date(a.dateAssigned).toLocaleDateString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
