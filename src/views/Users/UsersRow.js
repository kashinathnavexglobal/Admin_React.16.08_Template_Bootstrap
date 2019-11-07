import React from 'react'

function UserRow(props) {
    const user = props.users
    return (   
        <tr key={user._id.toString()}>
        <td>{user._id}</td>
        <td>{user.email}</td>
        <td>{user.firstName}</td>
        <td>{user.lastname}</td>
       </tr>
    )
  }
  export default UserRow;