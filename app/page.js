import Link from 'next/link'

export default function Home() {
  return <>
    <h1>Welcome home!</h1>
    <Link href="/users">Users</Link>
  </>
}

// 'use client'
//
// import { useRouter } from 'next/navigation'
//
// export default function Home() {
//   const router = useRouter()
//   return <>
//     <h1>Welcome home!</h1>
//     <button type="button" onClick={() => router.push('/users')}>
//       Users
//     </button>
//   </>
// }