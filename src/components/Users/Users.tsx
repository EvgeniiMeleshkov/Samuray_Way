import React from 'react';
import styles from './Users.module.css';
import smallLogo from '../../assets/images/samurai_small_logo.png';
import {UserType} from '../../redux/usersReducer';
import Preloader from '../common/Preloader';
import {NavLink} from 'react-router-dom';
import SamuraiGif from '../common/SamuraiGif';
import axios from 'axios';

type UsersPropsType = {
    items: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    onPageChanged: (number: number) => void
    follow: (id: number) => void
    unFollow: (id: number) => void
}

export const Users = (props: UsersPropsType) => {


    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    pages.length = 9
    if (props.currentPage > 4) {
        pages[0] = props.currentPage - 4
        pages[1] = props.currentPage - 3
        pages[2] = props.currentPage - 2
        pages[3] = props.currentPage - 1
        pages[4] = props.currentPage
        pages[5] = props.currentPage + 1
        pages[6] = props.currentPage + 2
        pages[7] = props.currentPage + 3
        pages[8] = props.currentPage + 4
    } else if (props.currentPage === pages.length) {
        pages[0] = props.currentPage - 2
        pages[1] = props.currentPage - 1
        pages[2] = props.currentPage
    }
    return (

        <div className={styles.main}>
            {props.isFetching
                ?
                <Preloader/>
                :
                <SamuraiGif/>
            }
            <div className={styles.pagesDiv}>{pages.map(el => <span
                onClick={() => props.onPageChanged(el)}
                className={props.currentPage === el
                    ? styles.selectedPage
                    : styles.page}
                key={el}>
                    {el}
                </span>)}</div>

            {props.items.map(el => {
                return <div key={el.id + el.name} className={styles.userItem}>
                    <div className={styles.logoFollowDiv}>
                        <div>
                            <NavLink to={'/profile/' + el.id}>
                                <img alt={''} className={styles.smallLogo}
                                     src={el.photos.small ? el.photos.small : smallLogo}/>
                            </NavLink>
                        </div>


                        <div onClick={el.followed
                            ? () => {

                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': '61673f24-31ed-4acb-baab-8f77d72b4514'
                                    }
                                }).then(res => {
                                    if (res.data.resultCode === 0) {
                                        props.unFollow(el.id)
                                    }
                                })

                            }
                            : () => {

                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`, {}, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': '61673f24-31ed-4acb-baab-8f77d72b4514'
                                    }
                                }).then(res => {
                                    if (res.data.resultCode === 0) {
                                        props.follow(el.id)
                                    }
                                })
                            }
                        }
                             className={styles.followUnfollow}>
                            {el.followed ? 'Unfollow' : 'Follow'}
                        </div>


                    </div>

                    <div className={styles.userInfo}>
                        <div style={{
                            textAlign: 'start',
                            color: 'rgba(25, 36, 18, 0.81)',
                            fontWeight: 'bold'
                        }}>{el.name}</div>
                        <div style={{
                            textAlign: 'center',
                            margin: '1rem 5px 1rem 5px',
                            fontFamily: 'monospace',
                            fontWeight: 'bold',
                            color: 'rgba(6, 54, 106, 0.75)',
                            overflowWrap: 'anywhere'
                        }}>{el.status ? `status: ${el.status}` : 'Status not found...'}</div>
                        <div style={{textAlign: 'end'}}>{el.uniqueUrlName}</div>
                    </div>
                </div>
            })}
        </div>
    )
};