import cls from "./QuizEnd.module.scss";
import GameLayout from "../../layouts/GameLayout/GameLayout.tsx";
import {useNavigate} from "react-router-dom";


function QuizEnd() {
    const navigate = useNavigate();

    return (
        <div className={cls.PageWrapper}>
            <div className={cls.GameContainer}>
                <GameLayout isAvatar={true}></GameLayout>
                <div className={cls.QuizEndWrapper}>

                    <div className={cls.textnew}>
                        Новый IQ-квиз появится через
                    </div>

                    <div className={cls.timer}>15:47:03</div>

                    <div className={cls.mw}>А пока, соревнуйтесь в интеллекте с другими пользователями в разделе
                        турниров
                        <span> VS</span>
                    </div>

                    <button
                        onClick={() => navigate("/tournament_menu")}
                        className={cls.btn}
                    >Играть
                    </button>

                </div>
            </div>
        </div>
    );
}

export default QuizEnd;
