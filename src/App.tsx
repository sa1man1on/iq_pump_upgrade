import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css'


import Enter from "./pages/Enter/Enter.tsx";
import Connect from "./pages/Connect/Connect.tsx";
import Quiz from "./pages/Quiz/Quiz.tsx";
import QuizEnd from "./pages/QuizEnd/QuizEnd.tsx";
import Profile from "./pages/Profile/Profile.tsx";
import Transactions from "./pages/Transactions/Transactions.tsx";
import CreateTask from "./pages/CreateTask/CreateTask.tsx";
import TaskCreation from "./pages/TaskCreation/TaskCreation.tsx";


function App() {

  return (
      <div className="App">
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Enter/>}/>
                  <Route path="/connect" element={<Connect/>}/>
                  <Route path="/quiz" element={<Quiz/>}/>
                  <Route path="/quiz_end" element={<QuizEnd/>}/>
                  <Route path="/profile" element={<Profile/>}/>
                  <Route path="/transactions" element={<Transactions/>}/>
                  <Route path="/add_task" element={<CreateTask/>}/>
                  <Route path="/create_task" element={<TaskCreation/>}/>

                  {/*{<Route path='/' element={<GettingNewCharacter/>}/>}*/}
                  {/*<Route path="/" element={<QuizWin/>}/>*/}
                  {/*<Route path="/quiz_end" element={<QuizEnd/>}/>*/}
                  {/*<Route path="/" element={<Chests/>}/>*/}
                  {/*<Route path="/" element={<QuizWin/>}/>*/}
              </Routes>
          </BrowserRouter>
      </div>
  )
}

export default App
