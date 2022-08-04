import React from 'react';
import styles from './Users.module.css';
import smallLogo from '../../assets/images/samurai_small_logo.png';
import {UsersPropsType} from './UsersContainer';
import axios from 'axios';


class Users extends React.Component<UsersPropsType> {

    componentDidMount() {
        if (this.props.items.length === 0)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {headers: {
                'API-KEY': '61673f24-31ed-4acb-baab-8f77d72b4514'
            }}
        ).then(res => {
            this.props.setUsers(res.data.items)
            this.props.setTotalUsersCount(res.data.totalCount)
        }).catch(err=>err)
    }

    onPageChanged = (number: number) => {
        this.props.setCurrentPage(number)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${number}&count=${this.props.pageSize}`, {headers: {
                'API-KEY': '61673f24-31ed-4acb-baab-8f77d72b4514'
            }}
        ).then(res => this.props.setUsers(res.data.items)).catch(err=>err)
    }

    render = () => {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

         pages.length = 10



        return (

            <div className={styles.main}>

                <div className={styles.imgDiv}>
                    <img alt={''} className={styles.img}
                         src={'https://www.textillia.com/sites/default/files/styles/large/public/img/2022/01/14/1Samurai%20LogoV1pattern.jpg?itok=I2y422PV'}/>
                </div>

                <div>{pages.map(el => <span
                    onClick={()=>this.onPageChanged(el)}
                    className={this.props.currentPage === el
                        ? styles.selectedPage
                        : ''}
                    key={el}>
                    {el}
                </span>)}</div>

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
