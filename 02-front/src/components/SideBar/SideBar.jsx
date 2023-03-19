import './SideBar.css'
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi'
import { useEffect, useState } from 'react'

const Sidebar = () => {
  const socialMedia = [
    { icon: FiGithub, label: 'Github' },
    { icon: FiLinkedin, label: 'LinkedIn' },
    { icon: FiTwitter, label: 'Twitter' },
    { icon: FiMail, label: 'Email' }
  ]
  const [isActive, setIsActive] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsActive(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])
  return (
    <div className={`sidebar ${isActive ? 'active' : ''}`}>
      <ul>
        {socialMedia.map((media) => (
          <li key={media.label} className= "icon">
            <div className="icon-wrapper">
              <media.icon size="1.5rem"/>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar
