import Fancybox from '@/components/FancyBox'
import React from 'react'
import { images } from '../../js/imgData'
import { Separator } from '@/components/ui/separator';
import ImageColorDominant from '@/components/ImageColorDominant';
const Gallery = () => {
  return (
    <div>
      <h1 className='py-10 text-4xl'>Gallery</h1>
      <section className='mb-5'>
        <p>{images.dec_18_2021.dateTaken}</p>
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
            images.dec_18_2021.img.map((imgs, index) => (
              <a data-caption={imgs.caption} className='rounded-sm' data-fancybox="gallery" key={index} href={`${imgs.imgUrl}`}>
                <ImageColorDominant layout="constrained" width={800} height={600} blurhash={imgs.hashString} src={imgs.imgUrl} />
              </a>
            ))
          }
        </Fancybox>
      </section>
      <section>
        <p>{images.nov_18_2021.dateTaken}</p>
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
              <a data-caption={imgs.caption} className='rounded-sm' data-fancybox="gallery" key={index} href={`${imgs.imgUrl}`}>
                <ImageColorDominant layout="constrained" width={800} height={600} blurhash={imgs.hashString} src={imgs.imgUrl} />
              </a>
            ))
          }
        </Fancybox>
      </section>
    </div>
  )
}

export default Gallery