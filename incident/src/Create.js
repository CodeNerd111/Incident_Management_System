import React, { useState } from 'react';

const Create = () => {
  const [type, setType] = useState('enterprise');
  const [reportingName, setReportingName] = useState('');
  const [reportedDateTime, setReportedDateTime] = useState('');
  const [priority, setPriority] = useState('high');
  const [status, setStatus] = useState('open');

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  return (
    <div>
      <div>
        <label>
          <input
            type="radio"
            value="enterprise"
            checked={type === 'enterprise'}
            onChange={handleTypeChange}
          />
          Enterprise
        </label>
        <label>
          <input
            type="radio"
            value="govt"
            checked={type === 'govt'}
            onChange={handleTypeChange}
          />
          Govt
        </label>
      </div>
      <div>
        <label>
          Reporting Name:
          <input
            type="text"
            value={reportingName}
            onChange={(e) => setReportingName(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Reported Date Time:
          <input
            type="datetime-local"
            value={reportedDateTime}
            onChange={(e) => setReportedDateTime(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Priority:
          <input
            type="radio"
            value="high"
            checked={priority === 'high'}
            onChange={handlePriorityChange}
          />
          High
        </label>
        <label>
          <input
            type="radio"
            value="medium"
            checked={priority === 'medium'}
            onChange={handlePriorityChange}
          />
          Medium
        </label>
        <label>
          <input
            type="radio"
            value="low"
            checked={priority === 'low'}
            onChange={handlePriorityChange}
          />
          Low
        </label>
        <label>
          <input
            type="radio"
            value="other"
            checked={priority === 'other'}
            onChange={handlePriorityChange}
          />
          Other
        </label>
      </div>
      <div>
        <label>
          Status:
          <input
            type="radio"
            value="open"
            checked={status === 'open'}
            onChange={handleStatusChange}
          />
          Open
        </label>
        <label>
          <input
            type="radio"
            value="inprogress"
            checked={status === 'inprogress'}
            onChange={handleStatusChange}
          />
          In Progress
        </label>
        <label>
          <input
            type="radio"
            value="closed"
            checked={status === 'closed'}
            onChange={handleStatusChange}
          />
          Closed
        </label>
      </div>
    </div>
  );
};

export default Create;
