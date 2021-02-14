import classes from './BackButton.module.css';

const BackButton = props => {

    return(
     <div className={classes.BackButton}>
         <button
         onClick={props.handler}
         >
             Вернуться
         </button>
     </div>
    )

}

export default BackButton