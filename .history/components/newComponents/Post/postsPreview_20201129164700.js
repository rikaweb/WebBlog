import DateComponent from "../Home/date";


export default function PostPreview({
    newKey,
    newTitle,
    newCoverImage,
    newDate,
    newName,
    newAuthorImage,
    newSlug,
    newExcerpt,
}) {

    return (
        <>
            <div className="bg-blue-200">

                <div className="container w-full max-w-6xl mx-auto px-2 py-8">
                    <div className="flex flex-wrap -mx-2">
                        <div className="w-full md:w-1/3 px-2 pb-12">
                            <div className="h-full bg-white rounded overflow-hidden shadow-md hover:shadow-lg relative smooth">
                                <a href="#" className="no-underline hover:no-underline">
                                    <img src={newCoverImage} className="h-48 w-full rounded-t shadow-lg" />
                                    <div className="p-6 h-auto md:h-48">
                                        <p className="text-gray-600 text-xs md:text-sm">{newTitle}</p>
                                        <div className="font-bold text-xl text-gray-900"></div>
                                        <p className="text-gray-800 font-serif text-base mb-5">
                                            {newExcerpt}									</p>
                                    </div>
                                    <div className="flex items-center justify-between inset-x-0 bottom-0 p-6">
                                        <img src={newAuthorImage} className="w-8 h-8 rounded-full mr-4" alt="No Image" />
                                        <p className="text-gray-600 text-xs md:text-sm">{newDate}</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 px-2 pb-12">
                            <div className="h-full bg-white rounded overflow-hidden shadow-md hover:shadow-lg relative smooth">
                                <a href="#" className="no-underline hover:no-underline">
                                    <img src="https://source.unsplash.com/DEa8_vxKlEo/400x200" className="h-48 w-full rounded-t shadow" />
                                    <div className="p-6 h-auto md:h-48">
                                        <p className="text-gray-600 text-xs md:text-sm">FOREST</p>
                                        <div className="font-bold text-xl text-gray-900">Biolumini algae diatomeae ecology.</div>
                                        <p className="text-gray-800 font-serif text-base mb-5">
                                            Lorem ipsum dolor sit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
									</p>
                                    </div>
                                    <div className="flex items-center justify-between inset-x-0 bottom-0 p-6">
                                        <img className="w-8 h-8 rounded-full mr-4" src="http://i.pravatar.cc/300" alt="Avatar of Author" />
                                        <p className="text-gray-600 text-xs md:text-sm">4 MIN READ</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 px-2 pb-12">
                            <div className="h-full bg-white rounded overflow-hidden shadow-md hover:shadow-lg relative smooth">
                                <Link 
                                <a href="#" className="no-underline hover:no-underline">
                                    <img src="https://source.unsplash.com/DEa8_vxKlEo/400x200" className="h-48 w-full rounded-t shadow" />
                                    <div className="p-6 h-auto md:h-48">
                                        <p className="text-gray-600 text-xs md:text-sm">FOREST</p>
                                        <div className="font-bold text-xl text-gray-900">What is life but a teardrop in the eye of infinity?</div>
                                        <p className="text-gray-800 font-serif text-base mb-5">
                                            Mollis pretium integer eros et dui orci, lectus nec elit sagittis neque. Dignissim ac nullam semper aliquet volutpat, ut scelerisque.
									</p>
                                    </div>
                                    <div className="flex items-center justify-between inset-x-0 bottom-0 p-6">
                                        <img className="w-8 h-8 rounded-full mr-4" src="http://i.pravatar.cc/300" alt="Avatar of Author" />
                                        <p className="text-gray-600 text-xs md:text-sm">7 MIN READ</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

          
        </>
    )
}