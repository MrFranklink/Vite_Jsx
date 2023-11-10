import { useState } from 'react';
import IssueForm from './Issue';
import IssueTable from './issuetable';

function App() {
  const [issues, setIssues] = useState([]);

  const addIssue = (newIssue) => {
    setIssues([...issues, newIssue]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <IssueForm addIssue={addIssue} />
        <IssueTable issues={issues} />
      </header>
    </div>
  );
}

export default App;
