import React from 'react';
import styles from './ProfileInfo.module.css';
import SamuraiGif from '../../common/SamuraiGif';
import {UserProfileType} from '../../../redux/profileReducer';
import Preloader from '../../common/Preloader';
import smallLogo from '../../../assets/images/samurai_small_logo.png'
import SpanInput from '../../common/SpanInput';

type ProfileInfoPropsType = {
    data: UserProfileType
    isFetching: boolean
    status: string
    updateStatus: (status: string) => void
}


const ProfileInfo = (props: ProfileInfoPropsType) => {

    if (props.isFetching) {
        return <Preloader/>
    } else {
        return (
            <div>
                <SamuraiGif/>
                <div className={styles.profileBody}>
                    <div className={styles.imgDiv}>
                        <img className={styles.img} alt={'avatar'}
                             src={props.data?.photos?.large ? props.data?.photos?.large : smallLogo}/>
                    </div>
                    <div className={styles.profileInfoField}>
                        <div className={styles.name}>
                            <div>{props.data?.fullName}</div>
                            <SpanInput status={props.status}/>
                        </div>
                        <div style={{width: '-webkit-fill-available'}} className={styles.statusAndLookForJob}>
                            <div>{props.data?.aboutMe}</div>
                            <div>{props.data?.lookingForAJob ? '🙋🏼‍♂️' : '🙅🏼'}</div>
                        </div>

                        <div>
                            <div>{props.data?.lookingForAJobDescription}</div>
                        </div>
                        <div>
                            <ul className={styles.contacts}>
                                <li>{props.data?.contacts?.github}</li>
                                <li>{props.data?.contacts?.vk}</li>
                                <li>{props.data?.contacts?.facebook}</li>
                                <li>{props.data?.contacts?.instagram}</li>
                                <li>{props.data?.contacts?.mainLink}</li>
                                <li>{props.data?.contacts?.youtube}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ProfileInfo