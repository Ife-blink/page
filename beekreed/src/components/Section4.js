import React from 'react'




function Section4({ post }) {
  console.log(post)
  return (
    <section className=' w-[100%] h-[100%] bg-black py-[3%] pb-8 px-[3%]'>
        <h3 className='font-sans font-semibold text-white md:mb-[3rem] md:text-[5rem] sm:text-[3rem] sm:mb-[2rem] '>the latest.</h3>
        <div className='md:grid grid-cols-3 md:grid-flow-row gap-10 sm:flex flex-col'>
        <div className='col-span-1 h-[20rem] w-[100%] bg-white'>
        </div>
        <div className='h-[100%] w-[100%] md:col-span-2'>
         <div className='border-white border-b-[0.5px] py-[3%]  text-white flex flex-row'>
         <h3 className='font-sans text-[#ac41f8] font-normal'>News</h3>
         <p className='font-sans px-[5%] text-white font-normal'> Beekreed it's time to creed the fact of life</p>
         </div>
         
         {post?.length > 0 && (
          <ul>
            {post.map((pet) => (
              <li key={post._id}>{post?.name}</li>
            ))}
          </ul>)}
         <div className='border-white border-b-[0.5px] py-[3%] text-white flex flex-row'>
         <h3 className='font-sans text-[#ac41f8] font-normal'>News</h3>
         <p className='font-sans px-[5%] text-white font-normal'> Beekreed it's time to creed the fact of life</p>
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

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params
  const post = await client.fetch(`*[_type == "post" ]`)
  return {
    props: {
      post
    }
  }
}