import React, { useEffect } from 'react'
import { Cloudinary } from '@cloudinary/url-gen'
import { AdvancedImage, lazyload, responsive, placeholder, accessibility } from '@cloudinary/react';
import { scale } from "@cloudinary/url-gen/actions/resize";
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Home = () => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dkar2rexr'
    }
  })

  const orangeSunset = cld.image('images/memories/bike-on-a-sunset');
  orangeSunset.resize(scale().width(500));
  orangeSunset.format('auto').quality('auto')

  return (
    <div>
      <section>
        <div className='flex py-10 flex-col md:flex-col lg:flex-row gap-4'>
          <div className='flex items-center'>
            <div>
              <h1 className='text-3xl'>"Unraveling the layers of my thoughts, dreams, and the raw essence of my existence."</h1>
              <div className='mt-4 flex justify-start md:justify-center lg:justify-start'>
                <Button variant='outline' className='bg-transparent border-2 border-[#97978D] rounded-full px-10' asChild>
                  <Link to='/about'>About</Link>
                </Button>
              </div>
            </div>
          </div>
          <div className='w-fit md:w-full lg:w-full flex justify-center'>
            <AdvancedImage
              className=' rounded-md grayscale hover:grayscale-0 transition-all'
              cldImg={orangeSunset}
              plugins={
                [
                  lazyload(),
                  responsive(),
                  placeholder({ mode: 'predominant' })
                ]
              }
            />
          </div>
        </div>
      </section>
      <Separator />
      <section>
        <div className='py-10'>
          <h2 className='text-2xl mb-4'>Recent Journal</h2>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
            <div className="h-32 rounded-lg bg-gray-200 lg:col-span-2"></div>
            <div className="h-32 rounded-lg bg-gray-200"></div>
            <div className="h-32 rounded-lg bg-gray-200"></div>
          </div>
          <div className='mt-4 flex justify-center md:justify-center lg:justify-start'>
            <Button variant='outline' className='bg-transparent border-2 border-[#97978D] rounded-full px-10' asChild>
              <Link to='/journal'>See More</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home