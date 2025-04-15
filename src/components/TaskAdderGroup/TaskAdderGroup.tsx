import cls from './TaskAdderGroup.module.scss';
import {useNavigate} from "react-router-dom";

function TaskAdderGroup() {
    const navigate = useNavigate()
    return (
        <div className={cls.task_adder_group_wrapper}>
            <div className={cls.sberbank_wrapper}>
                <div className={cls.sberbank}></div>
            </div>
            <div
                onClick={() => navigate('/add_task')}
                className={cls.task_add}>add <br/> task</div>
        </div>

    );
}

export default TaskAdderGroup;
