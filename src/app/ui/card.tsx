
import Image from 'next/image'
import Link from 'next/link'


interface CardProps {

  imageUrl: string;
  category: string;
  title: string;
  slug:string;
  description: string;
  date: string;
  views: string;
}

const Card: React.FC<CardProps> = ({ imageUrl, category, title, slug, description, date, views }) => {



  return (
    <article className="flex flex-col bg-zinc-950 shadow-md shadow-gray-900 rounded-lg border-solid transition-all duration-700 hover:scale-110 hover:bg-zinc-900">
      <Link href={`/blogs/${slug}`} aria-label={title}>
        <Image
          alt={title}
          className="object-cover w-full h-52 mt-1 rounded-sm"
          src={imageUrl}
          width={200}
          height={200}
        />
      </Link>
      <div className="flex flex-col flex-1 p-6">
        <span className="text-xs tracking-wider uppercase hover:underline text-orange-300">
          {category}
        </span>
        <h3 className="flex-1 py-2 text-lg font-semibold text-slate-200 leading-snug">{title}</h3>
        <p className="text-sm text-white font-thin mb-4">{description}</p>
        <Link 
          href={`/blogs/${slug}`}
          className="w-full border border-white p-2 text-cyan-400 mb-4 hover:underline hover:bg-zinc-700 rounded-lg text-center"
        >
          Read more
        </Link>
        <div className="flex flex-wrap justify-between pt-3 space-x-2 text-zinc-400 hover:text-white hover:cursor-pointer">
          <span>{date}</span>
          <span>{views} views</span>
        </div>
      </div>
    </article>
  );
}

export default Card
