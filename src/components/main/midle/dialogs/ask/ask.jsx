import s from './ask.module.scss';

const Ask = props => {
    return (
        <div className={s.wrappperAsk}>
            <div className={s.ask}>
                {props.ask}
            </div>
        </div>

    )
}

export default Ask;