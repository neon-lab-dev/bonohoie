import { Header } from '../components/Header'
import { IMAGES } from '../assets'

export const Home = () => {
    
  return (
    <div>home
        <Header />

        <div>
            <div className='mx-4 relative opacity-80 md:opacity-100'>
                <img src={IMAGES.hero} alt='hero' className='h-[550px] md:h-[640px] object-cover md:w-full rounded-2xl'/>

                <div className='absolute top-1/3 md:top-0 md:right-0 md:w-[300px] m-6'>
                    <p className='text-white text-sm font- mb-4 '>Supplying your child with the prettiest, coziest clothes possible at the most affordable prices.</p>
                    <div className='flex justify-center gap-2'>
                        <button className='border-white border-2 rounded-lg p-2 text-white'>2023 collection</button>
                        <button className='border-white border-2 rounded-lg p-2 text-white flex'>Shop now<img src={IMAGES.arrow_white} className='mt-1 ml-1'/></button>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <p>2024</p>
                    <p>PREMIUM KIDS WEAR</p>
                </div>
            </div>

        </div>

    {/* latest arrivals starts here */}
        <div>
            <div className='flex justify-between mb-5'>
                <p className='text-[#333333] text-2xl md:text-5xl'>LATEST ARRIVALS</p>
                <button className='border-[#333333] border-[1px] p-2 rounded-xl flex text-[#333333]'>See All Products <img src={IMAGES.arrow_black} className='mt-1 ml-1'/> </button>
            </div>

            <ul className='flex justify-between overflow-x-scroll mb-10'>
                <li className='mx-2 relative'>
                    <div className='bg-[#F8EBDC] w-[220px] h-[280px] md:w-[300px] md:h-[350px] rounded-xl'>
                        <img src={IMAGES.child1} className=' h-[280px] md:h-[350px] object-cover' />
                    </div>
                    <img src={IMAGES.heart} className='absolute top-3 right-3 hidden md:block' />
                    <div className='rounded-md bg-white absolute top-3 right-3 md:hidden'>
                        <img src={IMAGES.plus_black} className='p-3'/>
                    </div>
                    <p>Beige Co-ord set</p>
                </li>
                <li className='mx-2 relative'>
                    <div className='bg-[#F8EBDC] w-[220px] h-[280px] md:w-[300px] md:h-[350px]  rounded-xl'>
                        <img src={IMAGES.child2} className=' h-[280px] md:h-[350px] object-cover ' />
                    </div>
                    <img src={IMAGES.heart} className='absolute top-3 right-3 hidden md:block' />
                    <div className='rounded-md bg-white absolute top-3 right-3 md:hidden'>
                        <img src={IMAGES.plus_black} className='p-3'/>
                    </div>
                    <p>Blue Co-ord set</p>
                </li>
                <li className='mx-2 relative'>
                    <div className='bg-[#F8EBDC] w-[220px] h-[280px] md:w-[300px] md:h-[350px]  rounded-xl'>
                        <img src={IMAGES.child3} className=' h-[280px] md:h-[350px] object-cover' />
                    </div>
                    <img src={IMAGES.heart} className='absolute top-3 right-3 hidden md:block' />
                    <div className='rounded-md bg-white absolute top-3 right-3 md:hidden'>
                        <img src={IMAGES.plus_black} className='p-3'/>
                    </div>
                    <p>Grey Co-ord set</p>
                </li>
                <li className='mx-2 relative'>
                    <div className='bg-[#F8EBDC] w-[220px] h-[280px] md:w-[300px] md:h-[350px]  rounded-xl'>
                        <img src={IMAGES.child4} className=' h-[280px] md:h-[350px] object-cover ' />
                    </div>
                    <img src={IMAGES.heart} className='absolute top-3 right-3 hidden md:block' />
                    <div className='rounded-md bg-white absolute top-3 right-3 md:hidden'>
                        <img src={IMAGES.plus_black} className='p-3'/>
                    </div>
                    <p>White Co-ord set</p>
                </li>
                
            </ul>
        </div>

    {/* why are we loved starts here */}
        <div>
            <div className='bg-[#F6F6F6] '>
                <div className='flex flex-col md:flex-row'>
                    <p>Why are we loved</p>
                    <div>
                        <p className='text-2xl'>Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio </p>
                        <div>
                            <p>+200 happy children</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* for smaller devices */}
            <div className='mt-10 md:hidden'>
                <div className='h-[240px] overflow-hidden mx-4 rounded-3xl mb-4 relative'>
                    <img src={IMAGES.infant} alt='child1' className='' />
                    <div className='flex absolute bottom-10 justify-between px-6 w-full'>
                        <div>
                            <p className='text-white'>Infants</p>
                            <p className='text-white'>00-02 yrs</p>
                        </div>
                        <button className='border-white border-2 rounded-lg p-2 text-white flex bg-white/40'>Shop now<img src={IMAGES.arrow_white} className='mt-1 ml-1'/></button>
                    </div>
                </div>
                <div className='h-[240px] overflow-hidden mx-4 rounded-3xl mb-4 relative'>
                    <img src={IMAGES.girls2} alt='child1' className='h-[240px] object-cover w-full' />
                    <div className='flex absolute bottom-10 justify-between px-6 w-full'>
                        <div>
                            <p className='text-white'>Girls</p>
                            <p className='text-white'>03-08 yrs</p>
                        </div>
                        <button className='border-white border-2 rounded-lg p-2 text-white flex bg-white/40'>Shop now<img src={IMAGES.arrow_white} className='mt-1 ml-1'/></button>
                    </div>
                </div>
                <div className='h-[240px] overflow-hidden mx-4 rounded-3xl mb-4 relative'>
                    <img src={IMAGES.boys1} alt='child1' className='' />
                    <div className='flex absolute bottom-10 justify-between px-6 w-full'>
                        <div>
                            <p className='text-white'>Boys</p>
                            <p className='text-white'>03-08 yrs</p>
                        </div>
                        <button className='border-white border-2 rounded-lg p-2 text-white flex bg-white/40'>Shop now<img src={IMAGES.arrow_white} className='mt-1 ml-1'/></button>
                    </div>
                </div>
                <div className='bg-[#F82456] h-[200px] overflow-hidden mx-4 rounded-3xl mb-4 relative'>
                    <p className='text-white text-xl m-6 '>Find the <strong className='italic'>best deals</strong> on comfortable child co-ord sets for your little ones.</p>
                    <button className='border-white border-2 rounded-lg p-2 text-white flex m-6'>Shop now<img src={IMAGES.arrow_white} className='mt-1 ml-1'/></button>
                </div>
            </div>

            {/* for medium and higher devices */}
            <div className='md:mt-10 hidden md:grid md:grid-cols-[25%_25%_50%] md:h-[570px] mb-7'>
                <div className='h-full overflow-hidden mx-4 rounded-3xl mb-4 relative'>
                    <img src={IMAGES.boys1} alt='child1' className='h-full object-cover' />
                    <div className='flex absolute bottom-10 justify-between px-6 w-full'>
                        <div>
                            <p className='text-white text-4xl'>Boys</p>
                            <p className='text-white text-xl'>03-08 yrs</p>
                        </div>
                        <button className='border-none rounded-xl p-4 text-white flex bg-white/40 mt-5'>Shop now<img src={IMAGES.arrow_white} className='mt-1 ml-1'/></button>
                    </div>
                </div>
                <div className='h-full grid grid-rows-[50%_50%] justify-between'>
                    <div className='bg-[#F82456] h-[90%] overflow-hidden mx-4 rounded-3xl mb-4 relative'>
                        <p className='text-white text-xl m-6 mt-9'>Find the <strong className='italic'>best deals</strong> on comfortable child co-ord sets for your little ones.</p>
                        <button className='border-white border-2 rounded-xl p-4 text-white flex m-6'>Shop now<img src={IMAGES.arrow_white} className='mt-1 ml-1'/></button>
                    </div>
                    <div className='h-full overflow-hidden mx-4 rounded-3xl mb-4 relative'>
                        <img src={IMAGES.infant} alt='child1' className='' />
                        <div className='absolute bottom-10 justify-between px-6 w-full'>
                            <div>
                                <p className='text-white text-4xl'>Infants</p>
                                <p className='text-white text-xl'>00-02 yrs</p>
                            </div>
                            <button className='border-none rounded-xl p-4 text-white flex bg-white/40 mt-5'>Shop now<img src={IMAGES.arrow_white} className='mt-1 ml-1'/></button>
                        </div>
                    </div>
                    
                </div>
                
                <div className='h-full overflow-hidden mx-4 rounded-3xl mb-4 relative'>
                    <img src={IMAGES.girls1} alt='child1' className='h-full object-cover w-full' />
                    <div className='flex absolute bottom-10 justify-between px-6 w-full'>
                        <div>
                            <p className='text-white text-4xl'>Girls</p>
                            <p className='text-white text-xl'>03-08 yrs</p>
                        </div>
                        <button className='border-none rounded-xl p-4 text-white flex bg-white/40 mt-5'>Shop now<img src={IMAGES.arrow_white} className='mt-1 ml-1'/></button>
                    </div>
                </div>
                
                
            </div>
        </div>
        

    {/* bestsellers starts here */}
        <div>
            <div className='flex justify-between mb-5'>
                <p className='text-[#333333] text-2xl md:hidden'>Summer Essentials</p>
                <p className='text-[#333333] hidden md:block md:text-5xl'>Bestsellers</p>
                <p className='hidden md:block md:w-[350px]'>Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit </p>
                <button className='border-[#333333] border-[1px] p-2 rounded-xl flex text-[#333333] md:hidden'>See All Products <img src={IMAGES.arrow_black} className='mt-1 ml-1'/> </button>
            </div>

            <ul className='flex justify-between overflow-x-scroll mb-10'>
                <li className='mx-2 relative'>
                    <div className='bg-[#F8EBDC] w-[220px] h-[280px] md:w-[300px] md:h-[350px] rounded-xl'>
                        <img src={IMAGES.child1} className=' h-[280px] md:h-[350px] object-cover' />
                    </div>
                    <img src={IMAGES.heart} className='absolute top-3 right-3 hidden md:block' />
                    <div className='rounded-md bg-white absolute top-3 right-3 md:hidden'>
                        <img src={IMAGES.plus_black} className='p-3'/>
                    </div>
                    <p>Beige Co-ord set</p>
                </li>
                <li className='mx-2 relative'>
                    <div className='bg-[#F8EBDC] w-[220px] h-[280px] md:w-[300px] md:h-[350px]  rounded-xl'>
                        <img src={IMAGES.child2} className=' h-[280px] md:h-[350px] object-cover ' />
                    </div>
                    <img src={IMAGES.heart} className='absolute top-3 right-3 hidden md:block' />
                    <div className='rounded-md bg-white absolute top-3 right-3 md:hidden'>
                        <img src={IMAGES.plus_black} className='p-3'/>
                    </div>
                    <p>Blue Co-ord set</p>
                </li>
                <li className='mx-2 relative'>
                    <div className='bg-[#F8EBDC] w-[220px] h-[280px] md:w-[300px] md:h-[350px]  rounded-xl'>
                        <img src={IMAGES.child3} className=' h-[280px] md:h-[350px] object-cover' />
                    </div>
                    <img src={IMAGES.heart} className='absolute top-3 right-3 hidden md:block' />
                    <div className='rounded-md bg-white absolute top-3 right-3 md:hidden'>
                        <img src={IMAGES.plus_black} className='p-3'/>
                    </div>
                    <p>Grey Co-ord set</p>
                </li>
                <li className='mx-2 relative'>
                    <div className='bg-[#F8EBDC] w-[220px] h-[280px] md:w-[300px] md:h-[350px]  rounded-xl'>
                        <img src={IMAGES.child4} className=' h-[280px] md:h-[350px] object-cover ' />
                    </div>
                    <img src={IMAGES.heart} className='absolute top-3 right-3 hidden md:block' />
                    <div className='rounded-md bg-white absolute top-3 right-3 md:hidden'>
                        <img src={IMAGES.plus_black} className='p-3'/>
                    </div>
                    <p>White Co-ord set</p>
                </li>
                
            </ul>
        </div>

    </div>
  )
}
