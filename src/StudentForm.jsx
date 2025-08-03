import React from 'react';

function StudentForm({ form, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={onChange}
        style={{ padding: 8, border: '1px solid #ccc', borderRadius: 4 }}
      />
      <input
        type="number"
        name="age"
        placeholder="Age"
        value={form.age}
        onChange={onChange}
        style={{ padding: 8, border: '1px solid #ccc', borderRadius: 4 }}
      />
      <input
        type="number"
        name="marks"
        placeholder="Marks"
        value={form.marks}
        onChange={onChange}
        style={{ padding: 8, border: '1px solid #ccc', borderRadius: 4 }}
      />
      <button type="submit" style={{ padding: 8, background: 'grey', color: '#fff', border: 'none', borderRadius: 4 }}>
        Add Student
      </button>
    </form>
  );
}

export default StudentForm;