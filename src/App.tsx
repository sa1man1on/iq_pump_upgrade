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
import Tournaments from "./pages/Tournaments/Tournaments.tsx";
import TournamentCreation from "./pages/TournamentCreation/TournamentCreation.tsx";
import Tournament from "./pages/Tournament/Tournament.tsx";
import BuyArtefact from "./pages/BuyArtefact/BuyArtefact.tsx";


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
                    <Route path="/tournament_menu" element={<Tournaments/>}/>
                    <Route path='/tournament_creation' element={<TournamentCreation/>}/>
                    {<Route path='/tournament_card' element={<Tournament/>}/>}
                    {<Route path='/buy_artefact_next' element={<BuyArtefact/>}/>}
                    {<Route path='/buy_artefact_shield' element={<BuyArtefact/>}/>}
                    {<Route path='/buy_artefact_heal' element={<BuyArtefact/>}/>}
                    
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
