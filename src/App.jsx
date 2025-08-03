import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import StudentForm from './StudentForm';
import StudentList from './StudentList';

function App() {
  const [students, setStudents] = useState(() => {
    const data = localStorage.getItem('students');
    return data ? JSON.parse(data) : [];
  });
  const [form, setForm] = useState({ name: '', age: '', marks: '' });

  useEffect(() => {
    localStorage.setItem('students', JSON.stringify(students));
  }, [students]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.age || !form.marks) return;
    setStudents([...students, form]);
    setForm({ name: '', age: '', marks: '' });
  };

  return (
    <BrowserRouter>
      <div className="App">
        <div style={{ maxWidth: 400, margin: 'auto', fontFamily: 'Arial' }}>
          <h2>Student Details</h2>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <StudentForm form={form} onChange={handleChange} onSubmit={handleSubmit} />
                  <Link to="/students">
                    <button style={{ marginTop: 20, padding: 8, background: 'black', color: 'white', borderRadius: 4 }}>
                      Display Students
                    </button>
                  </Link>
                </>
              }
            />
            <Route
              path="/students"
              element={
                <>
                  <h3 style={{ marginTop: 30 }}>Student List</h3>
                  <StudentList students={students} />
                  <Link to="/">
                    <button style={{ marginTop: 20, padding: 8, background: 'black', color: 'white', borderRadius: 4 }}>
                      Back
                    </button>
                  </Link>
                </>
              }
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
