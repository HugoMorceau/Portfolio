import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Button from '../Buttons/Button/Button'

const ContactForm = () => {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [returnMessage, setReturnMessage] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const response = await fetch('https://formspree.io/f/mnqybqjg', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })

    if (response.ok) {
      setReturnMessage(t('Message sent'))
      setFormData({
        name: '',
        email: '',
        message: ''
      })
    } else {
      setReturnMessage(t('Message not sent'))
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder= {t('Name')}
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder={t('Email')}
        value={formData.email}
        onChange={handleChange}
        required
      />
      <textarea
        name="message"
        placeholder={t('Message')}
        value={formData.message}
        onChange={handleChange}
        required
      />
      <Button type="submit" text={t('Send')}></Button>
      {returnMessage && <p>{returnMessage}</p>}
    </form>
  )
}

export default ContactForm
