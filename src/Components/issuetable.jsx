/* eslint-disable react/prop-types */

function IssueTable({ issues }) {
    return (
      <div>
        <h2>Submitted Issues</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Description</th>
              <th>Severity</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {issues.map((issue, index) => (
              <tr key={index} id={`issue-${index}`}>
                <td>{index + 1}</td>
                <td>{issue.description}</td>
                <td>{issue.severity}</td>
                <td>{issue.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default IssueTable;
  