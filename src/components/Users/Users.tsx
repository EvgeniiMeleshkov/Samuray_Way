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

        pages.length = 9
        if (this.props.currentPage > 4) {
            pages[0] = this.props.currentPage - 4
            pages[1] = this.props.currentPage - 3
            pages[2] = this.props.currentPage - 2
            pages[3] = this.props.currentPage - 1
            pages[4] = this.props.currentPage
            pages[5] = this.props.currentPage + 1
            pages[6] = this.props.currentPage + 2
            pages[7] = this.props.currentPage + 3
            pages[8] = this.props.currentPage + 4
        } else if (this.props.currentPage === pages.length) {
            pages[0] = this.props.currentPage - 2
            pages[1] = this.props.currentPage - 1
            pages[2] = this.props.currentPage
        }
        return (

            <div className={styles.main}>

                <div className={styles.imgDiv}>
                    <img alt={''} className={styles.img}
                         src={'https://www.textillia.com/sites/default/files/styles/large/public/img/2022/01/14/1Samurai%20LogoV1pattern.jpg?itok=I2y422PV'}/>
                </div>

                <div className={styles.pagesDiv}>{pages.map(el => <span
                    onClick={()=>this.onPageChanged(el)}
                    className={this.props.currentPage === el
                        ? styles.selectedPage
                        : styles.page}
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
                            <div style={{textAlign: 'center'}}>{el.status}</div>
                            <div style={{textAlign: 'end'}}>{el.uniqueUrlName}</div>
                        </div>
                    </div>
                })}
            </div>
        )
    };
}
export default Users
