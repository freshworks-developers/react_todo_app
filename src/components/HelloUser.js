import React, { useState } from 'react'
import PropTypes from 'prop-types'
import reactLogo from '../assets/logo.svg';
import icon from '../assets/icon.svg'

const HelloUser = (props) => {
  const [name, setName] = useState('')

  props.client.data.get('contact').then((data) => {
    setName(data.contact.name)
  })


  return (
    <div>
      <h3> you fuckers</h3>
    </div>
  )
}

HelloUser.propTypes = {
  client: PropTypes.object
}
export default HelloUser
