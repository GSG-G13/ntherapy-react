import { useState, ChangeEvent, FormEvent } from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './style.css';

const LinkText = styled(Link)`
  text-decoration: none;
  color : white;
`;

const BugReportPage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [severity, setSeverity] = useState('Low');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleTitleChange = (e:ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  const handleSeverityChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSeverity(e.target.value);
  };

  const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setIsSubmitted(true);
  };

  return (
    <div className="container">
      {isSubmitted ? (
        <div className="submitted-message">
          <h2>Thank you for submitting the bug report!</h2>
          <p>We appreciate your contribution. Our team will review the report shortly.</p>
          <Button
            variant="contained"
            color="primary"
            sx={{
              marginTop: '16px',
            }}
          >
            <LinkText to="/">
              Go to Homepage
            </LinkText>
          </Button>
        </div>
      ) : (
        <form className="bug-report-form" onSubmit={handleSubmit}>
          <h2 className="bug-report-title">
            Submit Bug Report

          </h2>
          <div className="form-group">
            <label className="bug-label" htmlFor="title">
              Title:
              <input className="bug-title" type="text" id="title" value={title} onChange={handleTitleChange} required />
            </label>
          </div>
          <div className="form-group">
            <label className="bug-label" htmlFor="description">
              Description:
              <textarea className="bug-description" id="description" value={description} onChange={handleDescriptionChange} required />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="severity" className="bug-label">
              Severity:
              <select className="bug-severity" id="severity" value={severity} onChange={handleSeverityChange}>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </label>
          </div>
          <button type="submit" className="submit-button" disabled={isLoading}>
            {isLoading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      )}
    </div>
  );
};

export default BugReportPage;
