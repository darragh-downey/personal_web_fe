import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import Card, { HImgCard } from '../../components/card'
import Pill from '../../components/pill'
import AuthorSig from '../../components/authorsig'

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
          <div>
            <div>
              <h1 className="text-lg text-gray-800">{postData.title}</h1>
            </div>
            <div>
              <AuthorSig imgSrc="/images/profile.jpg" authorName="Darragh Downey" date={postData.date}/>
            </div>
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
