import React from 'react';
import styles from './Users.module.css';
import smallLogo from '../../assets/images/samurai_small_logo.png';
import {UsersPropsType} from './UsersContainer';
import axios from 'axios';


class Users extends React.Component<UsersPropsType> {

    componentDidMount() {
        if (this.props.items.length === 0)
        axios.get('https://social-network.samuraijs.com/api/1.0/users', {params: '61673f24-31ed-4acb-baab-8f77d72b4514'}).then(response => {
            return response
        }).then(res => this.props.setUsers(res.data.items)).catch(err=>err)
    }

    render = () => {
        return (
            <div className={styles.main}>
                <div className={styles.imgDiv}>
                    <img alt={''} className={styles.img}
                         src={'https://www.textillia.com/sites/default/files/styles/large/public/img/2022/01/14/1Samurai%20LogoV1pattern.jpg?itok=I2y422PV'}/>
                </div>
                {this.props.items.map(el => {
                    return <div key={el.id + el.name} className={styles.userItem}>
                        <div className={styles.logoFollowDiv}>
                            <div>
                                <img alt={''} className={styles.smallLogo}
                                     src={el.photos.small ? el.photos.small : smallLogo}/>
                            </div>
                            <div onClick={el.followed
                                ? () => this.props.unFollow(el.id)
                                : () => this.props.follow(el.id)}
                                 className={styles.followUnfollow}>
                                {el.followed ? 'Unfollow' : 'Follow'}
                            </div>
                        </div>

                        <div className={styles.userInfo}>
                            <div style={{textAlign: 'start'}}>{el.name}</div>
                            <div style={{textAlign: 'center'}}>{el.id}</div>
                            <div style={{textAlign: 'end'}}>{el.uniqueUrlName}</div>
                        </div>
                    </div>
                })}
            </div>
        )
    };
}
export default Users
