import classes from './UserList.module.css';
import React, {useState, useEffect} from "react";
import {getUserList} from "../../services/Requests";
import User from "../User/User";


const UsersList = props => {
    const [usersList, setusersList] = useState([]);

    useEffect(()=> {
        getUserList
            .then(res => {
                const newUsersList = res;
                newUsersList.forEach(el => {
                    for (let key in el) {
                        if (key !== 'name' && key !== 'id') {
                            delete el[key]
                        }
                    }
                })
                setusersList(newUsersList);
            })
    },[])



    const renderUsers = usersList.map((el, index) => {
        return (
            <User
                key={`userRl-${index}`}
                activeId={el.id}
                setActiveUser={props.setActiveUser}
                name={el.name}
            />
        )
    });

    const AllCont = (
        <React.Fragment>
            <div className={classes.UserList}>
                {renderUsers}
            </div>
            <h4>
                {props.activeUser ?
                    `Автор выбран: ${usersList[props.activeUser - 1].name}` :
                    null
                }
            </h4>
        </React.Fragment>
    )

    return (
        <React.Fragment>
            {   usersList.length ? AllCont : <h3>Загрузка...</h3>}
        </React.Fragment>
    )
}

export default UsersList;