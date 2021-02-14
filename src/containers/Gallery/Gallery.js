import classes from './Gallery.module.css';
import React from 'react';
import AlbumsList from "../../components/AlbumsList/AlbumsList";
import UsersList from "../../components/UsersList/UsersList";
import PhotoList from "../../components/PhotoList/PhotoList";
import ShowPhoto from "../../components/ShowPhoto/ShowPhoto";
import BackButton from "../../UI/BackButton/BackButton";

class Gallery extends React.Component {

    state = {
        userActiveId: null,
        activeAlbum: null,
        activePhoto: null,

        isAlbumOpen: false,
        isPhotoOpen: false,
    }

    selectForUser = userId => {
        this.setState({
            userActiveId: userId,
            isAlbumOpen: false,
            isPhotoOpen: false
        })
    }
    openAlbum = (albumId) => {
        this.setState({
            isAlbumOpen: true,
            activeAlbum: albumId
        })
    }


    openPhoto = (photoId) => {
        this.setState({
            isPhotoOpen: true,
            activePhoto: photoId+1
        })
    }
    changePhoto = (index) => {
            this.setState({
                activePhoto: index
            })
    }

    backToStart = () =>{
        this.setState({
            userActiveId: null,
            activeAlbum: null,
            activePhoto: null,
            isAlbumOpen: false,
            isPhotoOpen: false,
        })
    }

    render() {
        return (

            <div className={classes.Gallery}>
                <h1>Галерея </h1>
                {
                    !this.state.isPhotoOpen ?
                    <UsersList
                        activeUser={this.state.userActiveId}
                        setActiveUser={this.selectForUser}
                    />  :
                        <BackButton
                        handler={this.backToStart}
                        />
                }


                {
                    this.state.isPhotoOpen ?
                        <ShowPhoto
                            activeAlbum={this.state.activeAlbum}
                            photoId={this.state.activePhoto - 1}
                            changePhoto={this.changePhoto}
                        />
                        :
                        this.state.isAlbumOpen ?
                            <PhotoList
                                activeAlbum={this.state.activeAlbum}
                                openPhoto={this.openPhoto}
                            />
                            :
                            <AlbumsList
                                userActiveId={this.state.userActiveId}
                                openAlbum={this.openAlbum}
                            />
                }

            </div>

        )
    }

}

export default Gallery;