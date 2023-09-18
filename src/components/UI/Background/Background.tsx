import sample from '@/assets/img/zxc-1663598147.64374.mp4'
import styles from "./Background.module.scss"
import { useEffect, useRef } from 'react'
export const Background = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error('Ошибка воспроизведения видео:', error);
      });
    }
  }, []);
  return (
    <video className={styles.videoTag} autoPlay loop muted>
      <source src={sample} type='video/mp4' />
    </video>
  )
}

