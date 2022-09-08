import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>cranci.netlify.app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Cranci Site" />
        <p className="description">
          If your seeing this<code>Im Death...</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
