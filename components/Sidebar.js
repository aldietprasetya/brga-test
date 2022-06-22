import Image from 'next/image'
import Link from "next/link"
import { useRouter } from "next/router"
import nav from '../styles/Nav.module.scss'

export default function Sidebar() {

  const router = useRouter();

  return (
    <div className={nav.sidebar}>
      <div className={nav.sidebar__menu}>
        <Link href="/beranda/laporan/aspekManajemen">
          <div className={router.pathname == "/beranda/laporan/aspekManajemen" ? `${nav["sidebar__menuList"]} ${nav["sidebar__menuList_active"]}` : `${nav["sidebar__menuList"]}`}>
            <span className={nav.sidebar__menuList_number}>1</span>
            Aspek Manajemen
          </div>
        </Link>
      </div>

      <div className={nav.sidebar__bound}></div>

      <div className={nav.sidebar__menu}>
        <div className={router.pathname == "/beranda/laporan/konfirmasi" ? `${nav["sidebar__menuList"]} ${nav["sidebar__menuList_active"]}` : `${nav["sidebar__menuList"]}`}>
          Konfirmasi
          <span className={nav.sidebar__menuList_arrow}></span>
        </div>
      </div>
    </div>
  )
}
