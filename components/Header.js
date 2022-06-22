import Image from 'next/image'
import styles from '../styles/components/Header.module.scss'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>

        <div className={styles.header__wrapper}>
          <div className={styles.header__logo}>
            <Image src="/img/logo/Logo Lampion Kebun.svg" alt="Vercel Logo" width={258} height={79} />
          </div>
          <div className={styles.header__user}>
            <Image src="/img/icon/icon-profile.svg" alt="Vercel Logo" width={40} height={43} />
            <div className={styles.header__userdetail}>
              <p className={styles.header__username}>Angelica Tamada Putri</p>
              <span className={styles.header__useremail}>angel@gmail.com</span>
            </div>
            <Image src="/img/icon/icon-arrow-passive.svg" alt="Vercel Logo" width={12} height={6} />
          </div>
        </div>

      </div>
    </header>
  )
}
