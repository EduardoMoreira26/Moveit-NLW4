import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export const Profile = () => {

  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="http://github.com/diego3g.png" alt="Diego" />
      <div>
        <strong>Diego Fernandes</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  )
}