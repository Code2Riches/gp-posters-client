import React from "react";


const posters = [
    {
      id: 1,
      name: 'Zip Tote Basket',
      color: 'White and black',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg',
      imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
      price: '$140',
    },
    {
        id: 2,
        name: 'Zip Tote Basket',
        color: 'White and black',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg',
        imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
        price: '$140',
      },
      {
        id: 3,
        name: 'Zip Tote Basket',
        color: 'White and black',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg',
        imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
        price: '$140',
      },
      {
        id: 4,
        name: 'Zip Tote Basket',
        color: 'White and black',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg',
        imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
        price: '$140',
      },
      {
        id: 5,
        name: 'Zip Tote Basket',
        color: 'White and black',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg',
        imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
        price: '$140',
      },
      {
          id: 6,
          name: 'Zip Tote Basket',
          color: 'White and black',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg',
          imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
          price: '$140',
        },
        {
          id: 7,
          name: 'Zip Tote Basket',
          color: 'White and black',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg',
          imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
          price: '$140',
        },
        {
          id: 8,
          name: 'Zip Tote Basket',
          color: 'White and black',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg',
          imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
          price: '$140',
        },


    // More products...
  ]
  
  export default function PosterPage() {
    return (
      <div name='posters' className='w-full mt-16 pt-20 pb-20 bg-zinc-200 dark:bg-zinc-700'>
      <h2 className='text-6xl font-bold text-center dark:text-white'>Select from your favorite GP race memories!
      </h2>
  
          <div className="mt-16 mx-20 grid gap-y-12 sm:grid-cols-1 sm:gap-x-6 md:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {posters.map((image) => (
              <div key={image.id}>
                <div className=''>
                  <div className=" h-72 w-72  rounded-lg">
                    <img
                      src={image.imageSrc}
                      alt={image.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="relative mt-4">
                    <h3 className="text-sm font-medium text-gray-900">{image.name}</h3>
                    <p className="mt-1 text-sm text-gray-500">{image.color}</p>
                  </div>
                  <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                    />
                    <p className="relative text-lg font-semibold text-white">{image.price}</p>
                  </div>
                </div>
                <div className="mt-6">
                  <a
                    href={image.href}
                    className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
                  >
                    Add to bag<span className="sr-only">, {image.name}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        {/* </div> */}
      </div>
    )
  }
  