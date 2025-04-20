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
import TournamentMenu from "./pages/TournamentMenu/TournamentMenu.tsx";
import TournamentCreation from "./pages/TournamentCreation/TournamentCreation.tsx";
import Tournament from "./pages/Tournament/Tournament.tsx";
import BuyArtefact from "./pages/BuyArtefact/BuyArtefact.tsx";
import TournamentQuiz from "./pages/TournamentQuiz/TournamentQuiz.tsx";
import TournamentAccepted from "./pages/TournamentAccepted/TournamentAccepted.tsx";


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
                    <Route path="/tournament_menu" element={<TournamentMenu/>}/>
                    <Route path='/tournament_create' element={<TournamentCreation/>}/>
                    {/*<Route path='/tournament' element={<TournamentAccepted/>}/>*/}
                    <Route path='/buy_artefact_next' element={<BuyArtefact/>}/>
                    <Route path='/buy_artefact_shield' element={<BuyArtefact/>}/>
                    <Route path='/buy_artefact_heal' element={<BuyArtefact/>}/>
                    <Route path='/tournament_running' element={<TournamentQuiz/>}/>
                    <Route path='/tournament_waiting' element={<Tournament/>}/>
                    <Route path='/tournament_accepted' element={<TournamentAccepted isTimer={true}/>}/>
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
