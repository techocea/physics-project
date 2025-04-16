export default function Magazine(){
    return (
        <div className="wrapper">
            <div className="flex flex-col space-y-4">
                <h1 className="font-bold text-3xl underline">The Horizon Magazine Revival</h1>
                <p>We are thrilled to announce the revival of The Horizon Magazine, our very own Physics Society magazine, making its comeback after a 28-year hiatus since its last publication in 1996. This historic return allows both students and faculty members to contribute their articles, artistic works, and other creative content, offering a platform to share knowledge, ideas, and artistic expression within the Physics Society.</p>
                <p>
                    The magazine’s previous edition was published by Prof. G. D. K. Mahanama when he was a student, marking a memorable chapter in the society’s history. With its revival, The Horizon promises to be an exciting avenue for creativity and academic collaboration, enriching the society’s legacy.</p>
            </div>
            <div className="flex items-center justify-center mt-8">
                <button className='bg-white text-black rounded-full py-2 px-4 font-bold'>
                    View Magazine
                </button>
            </div>
        </div>
    )
}