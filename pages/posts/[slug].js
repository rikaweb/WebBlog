import { useRouter } from 'next/router'
import Head from 'next/head'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import MoreStories from '../../components/more-stories'
import Header from '../../components/header'
import PostHeader from '../../components/post-header'
import SectionSeparator from '../../components/section-separator'
import LayoutPost from '../../components/newComponents/Post/layoutPost'
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api'
import PostTitle from '../../components/post-title'
import { CMS_NAME } from '../../lib/constants'
import Main from '../../components/newComponents/Home/main'
import NewPostPage from '../../components/newComponents/newPostPage'
import PostSelected from '../../components/newComponents/Post/postSelected'
import MoreStoriesPosts from '../../components/newComponents/Post/more-stories'

export default function Post({ post, morePosts, preview }) {

  console.log(morePosts)

  const router = useRouter()

  if (!router.isFallback && !post) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <LayoutPost preview={preview}>
      {/* <NewPostPage
        title={post.title}
        coverImage={post.coverImage}
        date={post.date}
        author={post.author}
      /> */}
      {post && (
        <PostSelected
          title={post.title}
          coverImage={post.coverImage}
          date={post.date}
          author={post.author}
          content={post.content}
          content={post.content}
          excerpt={post.excerpt}

        />
      )
      }
      {/* {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
            <>
              <article>
                <Head>
                  <title>
                    {post.title} | Next.js Blog Example with {CMS_NAME}
                  </title>
                  <meta property="og:image" content={post.coverImage.url} />
                </Head>
                <PostHeader
                  title={post.title}
                  coverImage={post.coverImage}
                  date={post.date}
                  author={post.author}
                />
                <PostBody content={post.content} />
              </article>
              <SectionSeparator />
              {morePosts && morePosts.length > 0 && (
                <MoreStories content={post.content} />
              )}
            </>

            
          )} */}
      {/* {router.isFallback ? 
      (
        <PostTitle>Loading…</PostTitle>
      ) : 
      (
      <> {morePosts && morePosts.length > 0 && (
            <MoreStoriesPosts posts={morePosts} />
      )}
      </>
      )} */}
      <MoreStoriesPosts posts={morePosts} />

    </LayoutPost>
  )
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getPostAndMorePosts(params.slug, preview)

  return {
    props: {
      preview,
      post: data?.post ?? null,
      morePosts: data?.morePosts ?? null,
    },
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug()
  return {
    paths: allPosts?.map(({ slug }) => `/posts/${slug}`) ?? [],
    fallback: true,
  }
}