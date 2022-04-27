import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncGetProfile } from '../actions/actions'

const Profile = (props) => {
    const dispatch = useDispatch()
    const user = useSelector((state) => {
        //return state.users
        return state.storeData.users.data
    })
    useEffect(() => {
        dispatch(asyncGetProfile())
    }, [])
    return (
        <div className='m-5'>
            <h1>Profile</h1>
            <p>UserName : {user.username}</p>
            <p>Email : {user.email}</p>
            <p>Business Name : {user.businessName}</p>
            <p>Address : {user.address}</p>
        </div>
    )
}
export default Profile