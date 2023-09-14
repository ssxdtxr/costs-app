import sample from '@/assets/img/zxc-1663598147.64374.mp4'
import styles from "./Background.module.scss"
export const Background = () => {
  return (
    <video className={styles.videoTag} autoPlay loop muted>
      <source src={sample} type='video/mp4' />
    </video>
  )
}

