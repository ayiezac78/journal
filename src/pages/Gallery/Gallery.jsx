import Fancybox from '@/components/FancyBox'
import { Image } from '@unpic/react'
import React from 'react'
import { images } from '../../js/imgData'
import { blurhashToCssGradientString } from '@unpic/placeholder';
import { Separator } from '@/components/ui/separator';

function blurHashPlaceholder(hashString) {
  return blurhashToCssGradientString(hashString);
}

const Gallery = () => {
  return (
    <div>
      <h1 className='py-10 text-4xl'>Gallery</h1>
      <section>
        <p className='font-semibold'>{images.nov_18_2021.dateTaken}</p>
        <Separator className='my-4' />
        <Fancybox
          options={{
            Images: {
              protected: true
            },
            Carousel: {
              infinite: false
            }
          }}>
          {
            images.nov_18_2021.img.map((imgs, index) => (
              <a className='rounded-sm' data-fancybox="gallery" key={index} href={`${imgs.imgUrl}`}>
                <Image className='rounded mb-4' layout='fullWidth' src={`${imgs.imgUrl}`} background={blurHashPlaceholder(`${imgs.hashString}`)} />
              </a>
            ))
          }
        </Fancybox>
      </section>
    </div>
  )
}

export default Gallery