import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path='/' element={'test'}></Route>
          </Routes>
      </BrowserRouter>
  )
}

export default App
