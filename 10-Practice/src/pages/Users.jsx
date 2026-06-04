import React from 'react'
import { useNavigate } from 'react-router-dom'
import customers from '../../../shared/data/customers'

function Users() {
  const navigate = useNavigate()

  return (
    <div>Users
      <ul>
        {customers.map(item => (
          <div key={item.id}>
            <img src={item.image} alt={item.name} width="100" height="100" />
            <h3>{item.name}</h3>
            <p>Email: {item.email}</p>
            <p>Phone: {item.phone}</p>
            <p>Address: {item.address}</p>
            <button onClick={() => navigate(`/singleuser/${item.id}`)}>Details</button>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default Users
