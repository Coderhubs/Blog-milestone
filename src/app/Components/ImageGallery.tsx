import Image from 'next/image'

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-6 grid-rows-3 aspect-[3/2]">
        <div className="col-span-4 row-span-3 relative">
          <Image
            alt={images[0].alt}
            className="w-full h-full object-cover"
            src={images[0].src}
            width={1200}
            height={800}
            priority
          />
          <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2">
            {images[0].category}
          </div>
        </div>
        {images.slice(1).map((image, index) => (
          <div key={index} className={`relative ${index < 3 ? 'col-span-2' : ''}`}>
            <Image
              alt={image.alt}
              className="w-full h-full object-cover"
              src={image.src}
              width={index < 3 ? 400 : 200}
              height={267}
            />
            <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-1 text-sm">
              {image.category}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

