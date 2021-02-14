import {useState, useEffect} from 'react'
import {getPhotoList} from "../../services/Requests";
import classes from './Album.module.css';


const Album = props => {
    const [photosInAlbum, setPhotosInAlbum] =useState(0);
    const [preview, setPreview] = useState([])

    useEffect(()=>{
        getPhotoList(props.albumInfo.id).then(res=>{
            setPhotosInAlbum(res.length);
            const preview = []
            res.forEach((el, i) =>{
               if (i < 5 ) preview.push(el.thumbnailUrl)
            });
            setPreview(preview)
        })
    },[])

    const title = props.albumInfo.title.length < 20 ? props.albumInfo.title :  `${props.albumInfo.title.substr(1, 17)}...`;
    const  generatePreview = preview.map((el, i)=>{
        return(
            <img key={`preview-${i}`} src={el} alt={'просто превью'}/>
        )
    })

    return(
        <div
            className={classes.Album}
            onClick={()=>props.openAlbum(props.albumInfo.id)}
        >
            {title}
            <br/>
           <div>
               { preview.length === 5 ? generatePreview : <h3>Загрузка...</h3>}
           </div>
          <span>  {`${photosInAlbum} фотографий`}</span>
        </div>
    )
}

export default Album