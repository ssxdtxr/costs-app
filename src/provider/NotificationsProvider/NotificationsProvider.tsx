import { FC, PropsWithChildren } from 'react'
import styles from "./NotificationsProvider.module.scss"
import { Notification } from '@/components/Notification/Notification.tsx'
import { useTypedSelectorHook } from '@/hooks/TypedUseSelectorHook.ts'
export const NotificationsProvider: FC<PropsWithChildren> = ({children}) => {
  const {notifications} = useTypedSelectorHook(state => state.notifications)
  return (
    <div>
      <div className={styles.wrapper}>
        {notifications.map((note, index) => (
          <Notification key={index} {...note}/>
        ))}
      </div>
      {children}
    </div>
  )
}