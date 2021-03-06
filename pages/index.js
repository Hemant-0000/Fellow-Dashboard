import Head from 'next/head'
import LeftNavbar from '../components/LeftNavbar'
import Header from '../components/Header'
import Content from '../components/Content'
import { signIn, signOut, useSession } from 'next-auth/react'

export default function Home() {
  
  const { data: session } = useSession()

	// if (loadingSession) {
	// 	return <>
	// 		<p>Loading...</p>
	// 	</>
	// }

  return (
    <div className=''>
      <Head>
        <title>Fellow Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/pro.ico" />
      </Head>

      {/* LeftNavbar  */}
      <LeftNavbar signIn={signIn} signOut={signOut} session={session}  />

      {/* Header  */}
      <Header signIn={signIn} signOut={signOut} session={session}  />

      {/* Content  */}
      <Content signIn={signIn} signOut={signOut} session={session}  />


    </div>
  )
}
