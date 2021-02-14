
import classes from './Photo.module.css';

const Photo = props => {


    return (
        <div
            className={classes.Photo}
        >

                <img
                    onClick={() => props.openPhoto(props.photoId)}
                    src={props.photoUrl}
                    alt={props.photoTitle}

                />

        </div>
    )
}
export default Photo;