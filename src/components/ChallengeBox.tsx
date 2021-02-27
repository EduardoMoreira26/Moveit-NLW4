
// import { CountdownContext } from '../contexts/CountdownContext';
import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {

  const cantextData = useContext(ChallengesContext)

  console.log(cantextData)

  const hasActiveChallenge = true;


  // const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
  // const { resetCountdown } = useContext(CountdownContext);

  // function handleChallengeSucceeded() {
  //   completeChallenge();
  //   resetCountdown();
  // }

  // function handleChallengedFailed() {
  //   resetChallenge();
  //   resetCountdown();
  // }

  return (
    <div className={styles.challengeBoxContainer}>
      { hasActiveChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe 400 xp</header>

          <main>
            <img src={`icons/body.svg`} />
            <strong>Novo desafio</strong>
            <p>Levante e faça uma caminhada de 3 minutes.</p>
          </main>

          <footer>
            <button
              type="button"
              className={styles.challengeFailedButton}
            >
              Falhei
                        </button>
            <button
              type="button"
              className={styles.challengeSucceededButton}
            >
              Completei
            </button>
          </footer>


        </div>
      ) : (
          <div className={styles.challengeNotActive}>
            <strong>Finalize um ciclo para receber um desafio</strong>
            <p>
              <img src="icons/level-up.svg" alt="Level up" />
                        Avance de level completando desafios.
                    </p>
          </div>
        )}

    </div>
  )
}