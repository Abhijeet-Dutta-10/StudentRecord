import React from 'react';

function StudentList({ students }) {
  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {students.map((s, idx) => (
        <li key={idx} style={{ margin: '8px 0', padding: 10, borderRadius: 4 }}>
          <strong>Name:</strong> {s.name} &nbsp; 
          <strong>Age:</strong> {s.age} &nbsp; 
          <strong>Marks:</strong> {s.marks}
        </li>
      ))}
    </ul>
  );
}

export default StudentList;