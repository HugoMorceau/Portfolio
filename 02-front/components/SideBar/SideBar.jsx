import styles from './SideBar.module.scss';
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';
import { useEffect, useState } from 'react';

const Sidebar = () => {
  const socialMedia = [
    { icon: FiGithub, label: 'Github', link: 'https://github.com/HugoMorceau' },
    { icon: FiLinkedin, label: 'LinkedIn', link: 'https://www.linkedin.com/in/hugo-morceau-5b36051b7/' },
    { icon: FiTwitter, label: 'Twitter', link: 'https://twitter.com/MorceauHugo' },
    { icon: FiMail, label: 'Email', link: 'mailto:hugo.morceau@gmail.com' }
  ];
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsActive(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`${styles.sidebar} ${isActive ? styles.active : ''}`}>
      <ul>
        {socialMedia.map((media) => (
          <li key={media.label} className={styles.icon}>
            <div className={styles.iconWrapper}>
              <a
                key={media.label}
                href={media.link}
                target={media.link ? '_blank' : '_self'}
                rel="noopener noreferrer"
                title={media.label}
              >
                <media.icon size="1.5rem" />
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;