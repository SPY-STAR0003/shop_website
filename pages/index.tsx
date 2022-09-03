// react & next
import Link from 'next/link'

// types
import type { NextPage } from 'next'

const LoginPage: NextPage = () => {
  return (
    <Link href={'./auth/login'}> Go to Login Page </Link>
  )
}

export default LoginPage
