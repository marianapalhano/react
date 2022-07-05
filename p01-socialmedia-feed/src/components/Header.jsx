import styles from './Header.module.css';

import socialMediaLogo from '../assets/socialmedia-logo.svg';

export function Header() {
    return(
        <header className={styles.header}>
            <img src={socialMediaLogo} alt="Logotipo da SocialMedia" />
            <strong>Social Media Feed</strong>
        </header>
    )
}