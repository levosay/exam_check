import { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className="max-w-3xl">
      <ul>
        <Link href={'/signup'}>
          <li>рега</li>
        </Link>
        <Link href={'/signin'}>
          <li>вход</li>
        </Link>
      </ul>
    </div>
  )
}

export default Home
