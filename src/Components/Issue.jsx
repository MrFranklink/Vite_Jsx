/* eslint-disable react/prop-types */

import  { useState } from 'react';
import './Issue.css';

function IssueForm({ addIssue }) {
    
  const [description, setDescription] = useState('');
  const [severity, setSeverity] = useState('Low');
  const [status, setStatus] = useState('Open');
  

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSeverityChange = (e) => {
    setSeverity(e.target.value);
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newIssue = { description, severity, status };
    addIssue(newIssue); 
    setDescription('');
    setSeverity('Low');
    setStatus('Open');
  };
  return (
    <div>
      <h2>Add New Issue</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={handleDescriptionChange}
          />
        </div>
        <div>
          <label htmlFor="severity">Severity:</label>
          <select id="severity" value={severity} onChange={handleSeverityChange}>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
        <div>
          <label htmlFor="status">Status:</label>
          <select id="status" value={status} onChange={handleStatusChange}>
            <option value="Open">Open</option>
            <option value="Closed">Closed</option>
            <option value="In Progress">In Progress</option>
          </select>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default IssueForm;