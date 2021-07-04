import s from './username.module.scss';

const UserName = props => {
  return (
    <div className={s.username}>
      <div className={s.name_status}>
        <div className={s.name}>
          {props.name}
        </div>
        <div>
          Status: <span>{props.status}</span> 
        </div>
      </div>
      <div className={s.job_location}>
        <div className={s.job}>{`job: ${props.job}`}</div>
        <div className={s.country}>{`country: ${ props.country }, city: ${ props.city }`}</div>
      </div>
    </div>
  )
};

export default UserName;