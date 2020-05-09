import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Card from '../components/card'
import Date from '../components/date'
import Pill from '../components/pill'

export default function Home({ allPostsData }) {
  
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Card>
      <section className="">
        <h2 className="text-gray-900 font-bold text-xl mb-2">Blog</h2>
        <ul className="list">
          {allPostsData.map((postData) => (
            <li className="text-gray-700 text-base" key={`${postData._idId}`}>
              <Link href="/posts/[id]" as={`/posts/${postData.id}`}>
                <a>{postData.title}</a>
              </Link>
              <br />
              <small className="text-gray-300 w-3 h-3 mr-2">
                <Date key={postData._dateId} dateString={postData.date} />
              </small>
              
              {postData.tags.split(" ").map((value, id) => (
                <Pill pillKey={`${id}${value}`} pillString={value}/>
              ))
              }
            </li>
          ))}
        </ul>
      </section>
      </Card>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
