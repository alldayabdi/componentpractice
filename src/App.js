import './App.css';

function App() {
  return (
    <>
    <h1>To Do List</h1>
    <div id="addTask">
        <strong><label for="task">Task</label></strong>
        <input type="text" id="task"/>
        <button id="submitButton">Submit</button> </div>

        <h2><u>Current tasks:</u></h2>
    <table id="tableWrapper">
        <thead>
            <tr>
                <th>Task</th>
            </tr>
        </thead>
        <tbody id="taskTableBody"></tbody>
    </table>
  
  </>
  )
}

export default App;
