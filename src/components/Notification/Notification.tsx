import { INotification } from '@/types/INotification.ts'
import { FC, useEffect, useState } from 'react'
import styles from './Notification.module.scss'
import cn from 'classnames'
import { AnimatePresence, motion } from 'framer-motion'

const variantsNotifications = {
  initial: {
    x: '120%',
  },
  animate: {
    x: 0,
  },
  exit: {
    x: '120%',
  }
}
export const Notification: FC<INotification> = ({ message, type }) => {
  const [exit, setExit] = useState<boolean>(false)


  useEffect(() => {
    setTimeout(() => {
      setExit(true)
    }, 3000);
  }, [])
  return (
    <AnimatePresence>
      {
        !exit &&
        <motion.div
          variants={variantsNotifications}
          initial='initial'
          animate='animate'
          exit='exit'
        >
          <div className={cn(styles.item, styles[type])}>
            {message}
            <button onClick={() => setExit(true)}>&</button>
          </div>
        </motion.div>
      }
    </AnimatePresence>
  )
}

