import React from 'react'
import styles from '@/styles/pages/home.module.css'
import Intro from '@/components/Intro'

export default function home() {
  return (
    <div className={styles['page-container']}>
      <Intro />
    </div>
  )
}
