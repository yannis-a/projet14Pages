
import { Route, Routes } from "react-router-dom";
import Form from './pages/Form'
import Employees from './pages/Employees'
import Error from './pages/Error'
import "./app.css"
import 'ag-grid-community/dist/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'; // Optional theme CSS

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/*" element={<Error title="Error 404" content="Page is not found"/>} />
      </Routes>
    </div>
  );
}

export default App;
