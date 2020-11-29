import Link from 'next/link'
// import Avatar from '../components/avatar'
import DateComponent from './date'
// import CoverImage from './cover-image'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <>
      {/* <div>
      
      <div className="mb-5">
        <CoverImage title={title} slug={slug} url={coverImage.url} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <DateComponent dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      {author && <Avatar name={author.name} picture={author.picture} />}
    </div> */}

      {/* <div class="bg-gray-200 font-sans leading-normal tracking-normal">
        <div class="container px-4 md:px-0 max-w-6xl mx-auto -mt-32"> */}
          {/* <div class="mx-0 sm:mx-6"> */}
            <div class="bg-gray-200 w-full text-xl md:text-2xl text-gray-800 leading-normal rounded-t">
              <div className="flex flex-row flex-wrap justify-between pt-12 -mx-6">

                {/* <!--1/3 col --> */}
                <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                  <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                    <Link as={`/posts/${slug}`} href="/posts/[slug]">
                      <a href={`/posts/${slug}`} className="flex flex-wrap no-underline hover:no-underline">
                        <img src={coverImage.url} className="h-64 w-full rounded-t pb-6" />
                        <p className="w-full text-gray-600 text-xs md:text-sm px-6">{author.name} </p>
                        <div className="w-full font-bold text-xl text-gray-900 px-6">{title}</div>
                        <p className="text-gray-800 font-serif text-base px-6 mb-5">
                          {excerpt}
                        </p>
                      </a>
                    </Link>
                  </div>
                  <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
                    <div className="flex items-center justify-between">
                      <img className="w-8 h-8 rounded-full mr-4 avatar" data-tippy-content={author.name} src={author.picture.url} alt="Avatar of Author" />
                      <p className="text-gray-600 text-xs md:text-sm"><DateComponent dateString={date} /></p>
                    </div>
                  </div>
                </div>

                {/* <!--1/3 col --> */}
                <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
          <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
            <a href="#" className="flex flex-wrap no-underline hover:no-underline">
              <img src="https://source.unsplash.com/collection/3106804/800x600" className="h-64 w-full rounded-t pb-6" />
              <p className="w-full text-gray-600 text-xs md:text-sm px-6">GETTING STARTED</p>
              <div className="w-full font-bold text-xl text-gray-900 px-6">Lorem ipsum dolor sit amet.</div>
              <p className="text-gray-800 font-serif text-base px-6 mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ip Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
								</p>
            </a>
          </div>
          <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
            <div className="flex items-center justify-between">
              <img className="w-8 h-8 rounded-full mr-4 avatar" data-tippy-content="Author Name" src="http://i.pravatar.cc/300" alt="Avatar of Author" />
              <p className="text-gray-600 text-xs md:text-sm">1 MIN READ</p>
            </div>
          </div>
        </div>
                {/* <!--1/3 col --> */}
                <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
          <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
            <a href="#" className="flex flex-wrap no-underline hover:no-underline">
              <img src="https://source.unsplash.com/collection/539527/800x600" className="h-64 w-full rounded-t pb-6" />
              <p className="w-full text-gray-600 text-xs md:text-sm px-6">GETTING STARTED</p>
              <div className="w-full  font-bold text-xl text-gray-900 px-6">Lorem ipsum dolor sit amet.</div>
              <p className="text-gray-800 font-serif text-base px-6 mb-5">
                Lorem ipsum eu nunc commodo posuere et sit amet ligula.
								</p>
            </a>
          </div>
          <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
            <div className="flex items-center justify-between">
              <img className="w-8 h-8 rounded-full mr-4 avatar" data-tippy-content="Author Name" src="http://i.pravatar.cc/300" alt="Avatar of Author" />
              <p className="text-gray-600 text-xs md:text-sm">1 MIN READ</p>
            </div>
          </div>
        </div>

              </div>
            </div>
          {/* </div>
        </div> */}
      {/* </div> */}

    </>
  )
}
