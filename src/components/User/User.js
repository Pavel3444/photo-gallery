import classes from './User.module.css';

const User = props => {
    return (
        <span
            className={classes.User}
            onClick={()=> props.setActiveUser(props.activeId)}
        >
<h3>{props.name}</h3>
        </span>
    )
}

export default User