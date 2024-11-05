// pages/SavedCandidates.tsx
import React, { useState, useEffect } from 'react';
import Candidate from '../interfaces/Candidate.interface';

const SavedCandidates: React.FC = () => {
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  // Load saved candidates from localStorage when mounting from the component
  useEffect(() => {
    const saved = localStorage.getItem('savedCandidates');
    if (saved) {
      setSavedCandidates(JSON.parse(saved));
    }
  }, []);

  // Function to remove a candidate from the saved list
  const handleRejectCandidate = (id: number) => {
    const updatedCandidates = savedCandidates.filter((candidate) => candidate.id !== id);
    setSavedCandidates(updatedCandidates);
    localStorage.setItem('savedCandidates', JSON.stringify(updatedCandidates));
  };

  return (
    <div className="saved-candidates-container">
      <h1>Potential Candidates</h1>
      <table className="candidate-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Location</th>
            <th>Email</th>
            <th>Company</th>
            <th>Bio</th>
            <th>Reject</th>
          </tr>
        </thead>
        <tbody>
          {savedCandidates.map((candidate) => (
            <tr key={candidate.id}>
              <td>
                <img src={candidate.avatar_url} alt={candidate.login} width={50} height={50} />
              </td>
              <td>
                {candidate.name || candidate.login} <span>({candidate.login})</span>
              </td>
              <td>{candidate.location || 'N/A'}</td>
              <td>
                <a href={`mailto:${candidate.email}`}>{candidate.email || 'N/A'}</a>
              </td>
              <td>{candidate.company || 'N/A'}</td>
              <td>{candidate.bio || 'N/A'}</td>
              <td>
                <button
                  className="action-button reject"
                  onClick={() => handleRejectCandidate(candidate.id)}
                >
                  -
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SavedCandidates;