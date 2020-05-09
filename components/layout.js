import Head from 'next/head'
import Link from 'next/link'
import Nav from './nav'
import Footer from './footer'

const name = 'Darragh Downey'
export const siteTitle = 'SwirlsCounterClockwise'

export default function Layout({ children, home }) {
  return (
    <>
    <div className="flex flex-col h-screen justify-between">
    <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Personal site where I post about life, work and stuff..."
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Nav/>
      <main className="container mx-auto px-4">{children}</main>
      {!home && (
        <div className="hover">
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
      <Footer/>
    </div>
    </>
  )
}
