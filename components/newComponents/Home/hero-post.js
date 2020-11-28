import Link from 'next/link'
// import Avatar from '../components/avatar'
import DateComponent from './date'
// import CoverImage from '../components/cover-image'

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <>
      {/* <section>
      <div className="mb-8 md:mb-16">
        <CoverImage title={title} slug={slug} url={coverImage.url} />
      </div>
      <div className="md:grid md:grid-cols-2 md:col-gap-16 lg:col-gap-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="hover:underline">{title}</a>
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <DateComponent dateString={date} />
          </div>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
          {author && <Avatar name={author.name} picture={author.picture} />}
        </div>
      </div>
    </section> */}
      {/* <!--Lead Card--> */}
      <div className="flex h-full bg-white rounded overflow-hidden shadow-lg" style={{
        width: '100%',
        height: 'auto',
        maxHeight: '80vh',
        objectFit: 'cover',
        overflow: 'hidden',
        objectPosition: 'center center'

      }}>
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a href="/posts/[slug]" className="flex flex-wrap no-underline hover:no-underline">
            <div className="w-full md:w-2/3 rounded-t">
              <img src={coverImage.url} className="h-full w-full shadow" />
            </div>

            <div className="w-full md:w-1/3 flex flex-col flex-grow flex-shrink">
              <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                <p className="w-full text-gray-600 text-xs md:text-sm pt-6 px-6">{author.name} </p>
                <div className="w-full font-bold text-xl text-gray-900 px-6">{title}</div>
                <p className="text-gray-800 font-serif text-base px-6 mb-5">
                  {excerpt}
                </p>
              </div>

              <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <img className="w-8 h-8 rounded-full mr-4 avatar" src={author.picture.url} data-tippy-content="Author Name" alt="Avatar of Author" />
                  <p className="text-gray-600 text-xs md:text-sm"><DateComponent dateString={date} /></p>
                </div>
              </div>
            </div>

          </a>
        </Link>
      </div>
      {/* <!--/Lead Card--> */}

    </>

  )
}
