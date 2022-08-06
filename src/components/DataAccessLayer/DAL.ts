// import axios from 'axios';
//
//
// export const getUsers = () => {
//     axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
//
// //This line of code should be activated when login logic will be done!
//             //withCredentials: true,
//             headers: {
//                 'API-KEY': '61673f24-31ed-4acb-baab-8f77d72b4514'
//             }
//         }
//     ).then(res => {
//         this.props.setFetching(false)
//         this.props.setUsers(res.data.items)
//         this.props.setTotalUsersCount(res.data.totalCount)
//     }).catch(err => err)
// }