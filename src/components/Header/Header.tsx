import { Container } from '@/components/Container/Container.tsx'
import styles from './Header.module.scss'

export const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.main}>
          <h1>Costs App</h1>
          <button>Go light</button>
        </div>
      </Container>
    </header>
  )
}

