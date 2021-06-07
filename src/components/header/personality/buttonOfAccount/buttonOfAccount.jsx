import s from './buttonOfAccount.module.scss';

const ButtonOfAccount = () => {
    return (
        <div className={s.buttonOfAccount}>
            <select name='Name' value='Options' placeholder='Options'>
                <option disabled>Options</option>
                <option>Info</option>
                <option>Help</option>
                <option>Quit</option>
            </select>
        </div>
    )
};

export default ButtonOfAccount;