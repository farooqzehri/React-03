import React from 'react'
import { useParams } from 'react-router-dom'
import customers from '../../../shared/data/customers'

function SingleUser() {
  const { id } = useParams()
  const customer = customers.find(item => item.id === parseInt(id))

  return (
    <div>SingleUser
      {customer && (
        <div key={customer.id}>
          <img src={customer.image} alt={customer.name} width="100" height="100" />
          <h3>{customer.name}</h3>
        </div>
      )}
    </div>
  )
}

export default SingleUser
