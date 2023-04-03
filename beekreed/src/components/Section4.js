import React from 'react'
import Image from 'next/image'
import createImageUrlBuilder from '@sanity/image-url'
import { client } from '@/pages'


export const imageBuilder = createImageUrlBuilder(
  {
    projectId: "btynjh54",
    dataset: "production",
    apiVersion: "2023-04-03",
    useCdn: false,
    token: "sk2xzUUXgX6faoPOe5zLKKGjpGXvtbbazWi8iWOWhWqfejLeoAEDOx4YCqmjv9KmHjAve6UamPknIlZY8w2Bdkb8KhD7uD5Qt5GeczS0wdDsw45VoM1iOtd0Hjj7Ic1j5onYHgsGE8dA5BdjeCodlZZRuvtJ3D1lRKLqPBE52GuMTrJt4BSK"
  }
)

export const urlForImage = (source) =>
  imageBuilder.image(source).auto('format').fit('max')

function Section4({ post }) {
  console.log(post)
  return (
    <section className=' w-[100%] text-white h-[100%] bg-black py-[3%] pb-8 px-[3%]'>
        <h3 className='font-sans font-semibold text-white md:mb-[3rem] md:text-[5rem] sm:text-[3rem] sm:mb-[2rem] '>the latest.</h3>
        <div className='md:grid grid-cols-3 md:grid-flow-row gap-10 sm:flex flex-col'>
        <div className='col-span-1 h-[20rem] w-[100%] bg-white'>
          <Image
          width={1600}
          height={800}
          className="object-cover"
          src={urlForImage(post[0].coverImage?.asset?._ref).height(1000).width(2000).url()}
          />
        </div>
        <div className='h-[100%] w-[100%] md:col-span-2'>
         <div className='border-white border-b-[0.5px] py-[3%]  text-white flex flex-row'>
         <h3 className='font-sans text-[#ac41f8] font-normal'>Blog</h3>
         {post? 
          <p className='font-sans px-[5%] text-white font-normal'>{post[0].title}</p>
          : <p className='font-sans px-[5%] text-white font-normal'> Beekreed it's time to creed the fact of life</p>
         }
        </div>
         
         <div className='border-white border-b-[0.5px] py-[3%] text-white flex flex-row'>
         <h3 className='font-sans text-[#ac41f8] font-normal'>Blog</h3>
         {post? 
          <p className='font-sans px-[5%] text-white font-normal'>{post[1].title}</p>
          : <p className='font-sans px-[5%] text-white font-normal'> Beekreed it's time to creed the fact of life</p>
         }
         </div>
         </div>
        </div>
         
      </section>
  )
}

export default Section4

// export async function getStaticProps() {
//   const pets = [
//     /* {
//       _createdAt: "2022-03-08T09:28:00Z",
//       _id: "1f69c53d-418a-452f-849a-e92466bb9c75",
//       _rev: "xnBg0xhUDzo561jnWODd5e",
//       _type: "pet",
//       _updatedAt: "2022-03-08T09:28:00Z",
//       name: "Capybara"
//     } */
//   ];

//   return {
//     props: {
//       pets
//     }
//   };
// }

