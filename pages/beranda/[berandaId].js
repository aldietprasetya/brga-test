import { useRouter } from 'next/router'

function beranda() {
  const router = useRouter()
  const berandaId = router.query.berandaId
  return berandaId
}

export default function konfirmasi() {
  return(<></>)
}
