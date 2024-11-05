import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import Candidate from '../interfaces/Candidate.interface';

const CandidateSearch: React.FC = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [currentCandidate, setCurrentCandidate] = useState<Candidate | null>(null);
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('savedCandidates');
    if (saved) {
      setSavedCandidates(JSON.parse(saved));
    }
  }, []);

  const fetchCandidates = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await searchGithub(); // Initial API call for candidates
      setCandidates(data);
      setCurrentIndex(0);
  
      // Fetch information for the first candidate
      if (data.length > 0) {
        fetchCandidateDetails(data[0].login);
      }
    } catch (err) {
      setError('Failed to fetch candidates');
    }
    setLoading(false);
  };

  const fetchCandidateDetails = async (username: string) => {
    try {
      const detailedCandidate = await searchGithubUser(username);

      // Skip candidates without a valid name, username, and profile URL
      if (detailedCandidate && detailedCandidate.login && detailedCandidate.html_url) {
        setCurrentCandidate(detailedCandidate);
      } else {
        handleNextCandidate(); // Skip this candidate if it doesn't meet the criteria
      }
    } catch (err) {
      setError('Failed to fetch candidate details');
    }
  };

  useEffect(() => {
    fetchCandidates();
  }, []);

  const handleSaveCandidate = () => {
    if (currentCandidate) {  // Ensure we have detailed candidate information
      const updatedSavedCandidates = [...savedCandidates, currentCandidate];
      setSavedCandidates(updatedSavedCandidates);
      localStorage.setItem('savedCandidates', JSON.stringify(updatedSavedCandidates)); // Save detailed data
      handleNextCandidate();
    }
  };

  const handleRejectCandidate = () => {
    handleNextCandidate();
  };

  const handleNextCandidate = () => {
    if (currentIndex < candidates.length - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
  
      // Fetch information for the next candidate
      fetchCandidateDetails(candidates[nextIndex].login);
    } else {
      // Fetch a new batch if we’re at the end of the list
      fetchCandidates();
    }
  };

  return (
    <div className="candidate-search-container">
      <h1>Candidate Search</h1>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {currentCandidate && (
        <div className="candidate-card">
          <img src={currentCandidate.avatar_url} alt={currentCandidate.login} className="candidate-avatar" />
          <div className="candidate-info">
            <h2>{currentCandidate.name || currentCandidate.login} <span>({currentCandidate.login})</span></h2>
            <p>Location: {currentCandidate.location || 'N/A'}</p>
            <p>Email: <a href={`mailto:${currentCandidate.email}`}>{currentCandidate.email || 'N/A'}</a></p>
            <p>Company: {currentCandidate.company || 'N/A'}</p>
            <p>Profile: <a href={currentCandidate.html_url} target="_blank" rel="noopener noreferrer">{currentCandidate.html_url}</a></p>
          </div>
          <div className="candidate-actions">
            <button className="action-button decline" onClick={() => handleRejectCandidate()}>-</button>
            <button className="action-button accept" onClick={() => handleSaveCandidate()}>+</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CandidateSearch;
