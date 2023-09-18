import { ClimbingBoxLoader, PulseLoader } from 'react-spinners'
import styles from './Loading.module.scss'
import { FC } from 'react'
import {motion} from 'framer-motion'

interface ILoading {
  text: string
}

const variantsLoading = {
  hidden: {
    opacity: 0
  },
  animate: {
    opacity: 1
  }
}

const Loading: FC<ILoading> = ({ text }) => {
  return (
    <motion.div
      variants={variantsLoading}
      initial='hidden'
      animate='animate'
      className={styles.loading}
    >
      <ClimbingBoxLoader color='#8b00ff' size={25} />
      <div className={styles.text}>
        {text}
        <PulseLoader color='#fff' size={10} />
      </div>
    </motion.div>
  )
}

export default Loading