import React, {useState, useEffect} from 'react';
import classes from './AlbumsList.module.css';
import {getAlbumList} from "../../services/Requests";
import Album from "../Album/Album";

const AlbumsList = props => {
    const [albumsList, setAlbumsList] = useState([]);

useEffect(()=>{
            getAlbumList(props.userActiveId).then(res => {
                setAlbumsList(res)
            })
}, [props.userActiveId])

    const renderAlbums = albumsList.map((el,i)=> {
        return (
                    <Album
                        key={`album-${i}`}
                        albumInfo={el}
                        openAlbum={props.openAlbum}
                    />
    )})

    return (
        <React.Fragment>
            <h2>Альбомы:  {props.userActiveId === null ? 'нет выбранных  авторов' : null} </h2>
            <div className={classes.AlbumsList}>
                {
                    props.userActiveId !== null ?
                    renderAlbums  : null

                }
            </div>
        </React.Fragment>

    )
}

export default AlbumsList;