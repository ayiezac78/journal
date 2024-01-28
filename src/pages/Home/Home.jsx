import React, { useEffect, useState } from 'react'
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Image } from '@unpic/react';
import { blurhashToCssGradientString } from '@unpic/placeholder';
const Home = () => {
  const blurPlaceholder = blurhashToCssGradientString('LoGbbZE3kBae~pIpayjbx]V@affl')
  return (
    <>
      <section>
        <div className='flex my-10 flex-col md:flex-row lg:flex-row gap-4'>
          <div className='flex items-center'>
            <div>
              <h1 className='text-3xl'>"Unraveling the layers of my thoughts, dreams, and the raw essence of my existence"</h1>
              <div className='mt-4 flex justify-start md:justify-start lg:justify-start'>
                <Button variant='outline' className='bg-transparent border-2 border-[#97978D] rounded-full px-10' asChild>
                  <Link to='/about'>About</Link>
                </Button>
              </div>
            </div>
          </div>
          <div className='flex justify-center'>
            <Image className='rounded-md' src="https://res.cloudinary.com/dkar2rexr/image/upload/v1706416149/images/memories/bike-on-a-sunset.webp" background={blurPlaceholder} layout='constrained' width={800} height={600} />
          </div>
        </div>
      </section>
      <Separator />
      <section>
        <div className='py-10'>
          <h2 className='text-2xl mb-4'>Recent Journal</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
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
      <Separator />
      <section>
        <div className='py-10'>
          <h2 className='text-2xl'>Recent Uploads</h2>
        </div>
      </section>
    </>
  )
}

export default Home