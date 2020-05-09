import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'
import Card from '../../components/card'
import Pill from '../../components/pill'

export default function Post({ postData }) {
  const tags = postData.tags.split(" ")
  console.log("tags to render", typeof tags)
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <div className="container mx-auto">
      <Card>
        <article>
          <h1 className={utilStyles.headingXl}>{postData.title}</h1>
          <div className={utilStyles.lightText}>
            <Date dateString={postData.date} />
          </div>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
        <div className="px-6 py-4">
          {
            tags.map((value, id) => (
                <Pill pillKey={`${id}`} pillString={value}/>
            ))
          }
        </div>
      </Card>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}
