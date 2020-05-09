import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import Card, { HImgCard } from '../../components/card'
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
          <h1 className="text-lg text-gray-800">{postData.title}</h1>
          <div className="text-gray-300">
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
      <HImgCard>
        <p class="text-sm text-gray-600 flex items-center">
            <svg class="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
            </svg>
            Members only
        </p>
        <div class="text-gray-900 font-bold text-xl mb-2">Can coffee make you a better developer?</div>
        <p class="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
      </HImgCard>
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
