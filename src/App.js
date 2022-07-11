
import { Route, Routes } from "react-router-dom";
import Form from './pages/Form'
import Employees from './pages/Employees'
import Error from './pages/Error'

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
