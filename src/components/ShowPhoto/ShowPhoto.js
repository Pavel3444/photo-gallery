import classes from './ShowPhoto.module.css';
import React,{useState, useEffect} from 'react';
import  {getPhoto, photoLength} from "../../services/Requests";
import NavButton from "../../UI/navButton/NavButton";
import loader from './load.gif';

const ShowPhoto = props => {
    const [photosLength, setPhotosLength] = useState(null);
    const [photoUrl, setPhotoUrl] = useState(null);
    const [photoTitle, setPhotoTitle] = useState(null);


    useEffect(() => {
        photoLength.then(res => setPhotosLength(res))
        getPhoto(props.photoId).then(res => {
        })

    }, [])
    useEffect(() => {
        getPhoto(props.photoId).then(res => {
            setPhotoTitle(res[0].title);
            setPhotoUrl(res[0].url);
        })
    }, [props.photoId])


   const changePhoto = (index) =>{
       props.changePhoto(index);
       setPhotoUrl(null)
   }

    return (
       <React.Fragment>
           <h2>Фото {props.photoId}</h2>
           <div className={classes.PhotoListener}>
               {
                   props.photoId !== 1  ?
                       <NavButton
                           content={'‹'}
                           type={'prev'}
                           handler={() => changePhoto(props.photoId)}
                       />
                       : null
               }

               {
                   props.photoId !== photosLength ?
                       <NavButton
                           content={'›'}
                           type={'next'}
                           handler={() => changePhoto(props.photoId + 2)}
                       />
                       :null
               }
               {
                   photoUrl ?
                       <img
                           src={photoUrl}
                           alt={photoTitle}
                       />
                       :
                       <img src={loader} alt="loader..."/>
                       // <h3>Загрузка...</h3>
               }
           </div>
       </React.Fragment>
    )
}

export default ShowPhoto;