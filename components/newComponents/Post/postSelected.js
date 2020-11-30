import DateComponent from "../Home/date";
import PostPreview from "./postsPreview";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

export default function PostSelected({ title, coverImage, date, author, content }) {

    return (
        <>
            {/* <!--Title--> */}
            <div className="pt-16 text-center md:pt-32">
                <p className="text-sm font-bold text-green-500 md:text-base"> {author.name}{' '}<span className="text-gray-900">/</span>{' '}<DateComponent dateString={date} /></p>
                <h1 className="text-3xl font-bold break-normal md:text-5xl">{title}</h1>
            </div>

            {/* <!--image--> */}
            <img className="container w-full max-w-6xl mx-auto mt-8 mb-10 bg-white bg-cover rounded" src={coverImage.url} style={{
                width: '100%',
                height: 'auto',
                maxHeight: '80vh',
                objectFit: 'cover',
                overflow: 'hidden',
                objectPosition: 'center center'

            }}></img>

            {/* <!--Container--> */}
            <div className="container max-w-5xl mx-auto -mt-32">

                <div className="mx-0 sm:mx-6">

                    <div className="w-full p-8 text-xl leading-normal text-gray-800 bg-white md:p-24 md:text-2xl" style={{ fontFamily: "Georgia,serif" }}>

                        {/* <!--Post Content--> */}


                        {/* <!--Lead Para--> */}
                        {/* <p className="mb-5 text-2xl md:text-3xl">
                            👋 Welcome fellow <a className="text-gray-800 no-underline border-b-2 border-green-500 hover:text-green-500" href="https://www.tailwindcss.com">Tailwind CSS</a> and <a className="text-gray-800 no-underline border-b-2 border-green-500 hover:text-green-500" href="https://www.ghost.org">Ghost</a> fan.  This starter template is an attempt to replicate the default Ghost theme <a className="text-gray-800 no-underline border-b-2 border-green-500 hover:text-green-500" href="https://demo.ghost.io/welcome">"Casper"</a> using Tailwind CSS and vanilla Javascript.
				</p> */}

                        <p className="mt-20 py-6n md-2"> {documentToReactComponents(content.json)}</p>

                        {/* <p className="py-6">Sed dignissim lectus ut tincidunt vulputate. Fusce tincidunt lacus purus, in mattis tortor sollicitudin pretium. Phasellus at diam posuere, scelerisque nisl sit amet, tincidunt urna. Cras nisi diam, pulvinar ut molestie eget, eleifend ac magna. Sed at lorem condimentum, dignissim lorem eu, blandit massa. Phasellus eleifend turpis vel erat bibendum scelerisque. Maecenas id risus dictum, rhoncus odio vitae, maximus purus. Etiam efficitur dolor in dolor molestie ornare. Aenean pulvinar diam nec neque tincidunt, vitae molestie quam fermentum. Donec ac pretium diam. Suspendisse sed odio risus. Nunc nec luctus nisi. className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis nec nulla eget sem dictum elementum.</p>

                        <ol>
                            <li className="py-3">Maecenas accumsan lacus sit amet elementum porta. Aliquam eu libero lectus. Fusce vehicula dictum mi. In non dolor at sem ullamcorper venenatis ut sed dui. Ut ut est quam. Suspendisse quam quam, commodo sit amet placerat in, interdum a ipsum. Morbi sit amet tellus scelerisque tortor semper posuere.</li>
                            <li className="py-3">Morbi varius posuere blandit. Praesent gravida bibendum neque eget commodo. Duis auctor ornare mauris, eu accumsan odio viverra in. Proin sagittis maximus pharetra. Nullam lorem mauris, faucibus ut odio tempus, ultrices aliquet ex. Nam id quam eget ipsum luctus hendrerit. Ut eros magna, eleifend ac ornare vulputate, pretium nec felis.</li>
                            <li className="py-3">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc vitae pretium elit. Cras leo mauris, tristique in risus ac, tristique rutrum velit. Mauris accumsan tempor felis vitae gravida. Cras egestas convallis malesuada. Etiam ac ante id tortor vulputate pretium. Maecenas vel sapien suscipit, elementum odio et, consequat tellus.</li>
                        </ol> */}

                        {/* <blockquote className="pl-8 my-8 italic border-l-4 border-green-500 md:pl-12">Example of blockquote - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.</blockquote> */}

                        {/* <p className="py-6">Example code block:</p> */}
                        {/* <pre className="p-4 font-mono text-base text-white bg-gray-900 rounded">
                                <code className="break-words whitespace-pre-wrap">
                                    &lt;header className="site-header outer"&gt;
                                    &lt;div className="inner"&gt;
    {{& gt; "site-nav"}}
  &lt;/div&gt;
&lt;/header&gt;
					</code>
                            </pre> */}


                        {/* <!--/ Post Content--> */}

                    </div>


                    {/* <!--Subscribe--> */}
                    <div className="container p-4 mt-8 font-sans text-center bg-green-100 rounded md:p-24">
                        <h2 className="text-2xl font-bold break-normal md:text-4xl">Subscribe to Blog Page</h2>
                        <h3 className="text-base font-bold text-gray-600 break-normal md:text-xl">Get the latest posts delivered right to your inbox</h3>
                        <div className="w-full pt-4 text-center">
                            <form action="#">
                                <div className="flex flex-wrap items-center max-w-sm p-1 pr-0 mx-auto">
                                    <input type="email" placeholder="youremail@example.com" className="flex-1 p-3 mr-2 text-gray-600 rounded shadow appearance-none focus:outline-none" />
                                    <button type="submit" className="flex-1 block py-4 mt-4 text-base font-semibold tracking-wider text-white uppercase bg-green-500 rounded shadow appearance-none md:mt-0 md:inline-block hover:bg-green-400">Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    {/* <!-- /Subscribe--> */}


                    {/* <!--Author--> */}
                    <div className="flex items-center w-full p-8 font-sans md:p-24">
                        <img className="w-10 h-10 mr-4 rounded-full" src={author.picture.url} alt="Avatar of Author" />
                        <div className="flex-1">
                        <p className="text-base font-bold leading-none md:text-xl">{author.name}</p>
                            <p className="text-xs text-gray-600 md:text-base">Powered by <a className="text-gray-800 no-underline border-b-2 border-green-500 hover:text-green-500" href='https://rikaweb.com/'>Rikaweb.com</a></p>
                        </div>
                        <div className="justify-end">
                            <button className="px-4 py-2 text-xs font-bold text-gray-500 bg-transparent border border-gray-500 rounded-full hover:border-green-500 hover:text-green-500">Read More</button>
                        </div>
                    </div>
                    {/* <!--/Author--> */}

                </div>


            </div>

                            <PostPreview/>


           


        </>
    )
}