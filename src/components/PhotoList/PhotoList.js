import classes from './PhotoList.module.css';
import React, {useState, useEffect} from "react";
import {getPhotoList} from "../../services/Requests";
import Photo from "../Photo/Photo";
import Error from "../../UI/Error/Error";

const PhotoList = props => {
    const [photoList, setPhotoList] = useState([]);
const [error, setError] = useState(false);

    useEffect(()=>{
        getPhotoList(props.activeAlbum).then(res=>{
            setError(false);
            const result =  []
                res.map(el=>{
                    result.push({id: el.id, url: el.thumbnailUrl, title: el.title})
            })
            setPhotoList(result)
        }).catch(setError(true))
    },[])

    const renderPhotos = photoList.map((el, id)=>{
          return(
              <Photo
                  key={`photoId-${id}`}
                  photoId={el.id}
                  photoTitle={el.title}
                  photoUrl={el.url}
                  openPhoto={props.openPhoto}
              />
          )
    })

    return(
        <React.Fragment>
            <h2>Альбом {props.activeAlbum} </h2>
            <div className={classes.PhotoList}>
                {   error ?  <Error/> :
                    photoList.length ?
                    renderPhotos
                : <h3>Загрузка...</h3>
                }
            </div>
        </React.Fragment>

    )

}
export default PhotoList;