import cls from "./QuizEnd.module.scss";
import GameLayout from "../../layouts/GameLayout/GameLayout.tsx";
import {useNavigate} from "react-router-dom";
import Button from "../../components/buttons/Button/Button.tsx";


function QuizEnd() {
    const navigate = useNavigate();

    return (
        <div className={cls.PageWrapper}>
            <div className={cls.GameContainer}>
                <GameLayout isAvatar={true}></GameLayout>

                {/*<div className={cls.glow}></div>*/}

                <div className={cls.QuizEndWrapper}>

                    <div className={cls.textnew}>
                        Новый IQ-квиз появится через
                    </div>

                    <div className={cls.timer}>15:47:03</div>

                    <div className={cls.mw}>А пока, соревнуйтесь в интеллекте с другими пользователями в разделе
                        турниров
                        <br/>
                        <span>VS</span>
                    </div>
                    <div className={cls.btn_wrapper}>
                        <Button onClick={() => navigate("/tournament_menu")}>
                            Играть
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default QuizEnd;
