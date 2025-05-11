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
import BuyArtefactHeal from "./pages/BuyArtefactHeal/BuyArtefactHeal.tsx";
import TournamentQuiz from "./pages/TournamentQuiz/TournamentQuiz.tsx";
import TournamentAccepted from "./pages/TournamentAccepted/TournamentAccepted.tsx";
import Chests from "./pages/Chests/Chests.tsx";
import QuizWin from "./pages/QuizWin/QuizWin.tsx";
import QuizLost from "./pages/QuizLost/QuizLost.tsx";
import BuyArtefactShield from "./pages/BuyArtefactShield/BuyArtefactShield.tsx";
import BuyArtefactNext from "./pages/BuyArtefactNext/BuyArtefactNext.tsx";
import GettingNewCharacter from "./pages/GettingNewCharacter/GettingNewCharacter.tsx";
import About from "./pages/About/About.tsx";
import {Provider} from "react-redux";
import {store} from "./store/store.ts"


function App() {


    return (
        <div className="App">
            <Provider store={store}>
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
                        <Route path='/buy_artefact_next' element={<BuyArtefactNext/>}/>
                        <Route path='/buy_artefact_shield' element={<BuyArtefactShield/>}/>
                        <Route path='/buy_artefact_heal' element={<BuyArtefactHeal/>}/>
                        <Route path='/tournament_running' element={<TournamentQuiz/>}/>
                        <Route path='/tournament_waiting' element={<Tournament/>}/>
                        <Route path='/about' element={<About/>}/>
                        <Route path='/tournament_accepted' element={<TournamentAccepted isTimer={true}/>}/>
                        {/*не активные*/}
                        <Route path='/chests' element={<Chests/>}/>
                        <Route path='/win' element={<QuizWin/>}/>
                        <Route path='/lost' element={<QuizLost/>}/>
                        <Route path='/new' element={<GettingNewCharacter/>}/>
                    </Routes>
                </BrowserRouter>
            </Provider>
        </div>
    )
}

export default App
