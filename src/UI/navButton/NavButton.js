import classes from './NavButton.module.css';

const navButton = props => {
    const cls =[
        classes.navButton,
        props.type === 'prev' ? classes.prev : classes.next
    ];
    return(
        <div
            className={cls.join(' ')}
            onClick={props.handler}
        >
            {props.content}
        </div>
    )
}

export default navButton;