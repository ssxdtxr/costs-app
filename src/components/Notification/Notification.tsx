import { INotification } from '@/types/INotification.ts'
import { FC, memo, useEffect, useState } from 'react'
import styles from './Notification.module.scss'
import cn from 'classnames'
import { AnimatePresence, motion } from 'framer-motion'
import { useActions } from '@/hooks/useActions.ts'

const variantsNotifications = {
  initial: {
    y: '-120%',
  },
  animate: {
    y: 0,
  },
  exit: {
    y: '-140%',
  },
}
export const Notification: FC<INotification> = memo(({ message, type, id }) => {
  const [exit, setExit] = useState<boolean>(false)
  const { deleteNotification } = useActions()

  useEffect(() => {
    setTimeout(() => {
      removeNotification()
    }, 3000)
  }, [])

  const removeNotification = (): void => {
    setExit(true)
    deleteNotification(id)
  }
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
            <button onClick={() => removeNotification}>&</button>
          </div>
        </motion.div>
      }
    </AnimatePresence>
  )
})

