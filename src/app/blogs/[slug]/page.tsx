import CommentForm from "@/app/Components/CommentForm";
import client from "@/sanity/lib/client";
import { PortableText } from "next-sanity";
import Image from "next/image";



const BlogPostServerComponent = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params; // Extract the slug from params

  const post = await client.fetch(` *[_type == "blog" && slug.current=="${slug}"][0]{
      title,
      slug,
      content,
      views,
      categories,
       "Image":mainImage.asset-> url,
      publishedAt
    }
  `);

  console.log(post);

  return (
    <main className=" bg-yellow-50 text-black flex flex-col items-center py-12 px-6 pt-36">
      <article className="max-w-5xl w-full bg-yellow-50 p-8 rounded-lg shadow-sm mb-10">
        <div className="relative mb-6">
          {/* Display the category in the title */}
          {post.categories && post.categories.length > 0 && (
            <div className="absolute top-0 left-0 text-xs text-gray-500 px-3 py-1 bg-gray-200 rounded-full uppercase">
              {post.categories[0]} {/* Display the first category */}
            </div>
          )}

          {/* Blog image */}
          <Image
            src={post.Image}
            alt={post.title}
            height={600}
            width={1200}
            className="w-full h-80 object-cover rounded-lg shadow-lg mb-6"
          />

          {/* Blog title */}
          <h1 className="text-4xl font-semibold text-center text-black mb-4">{post.title}</h1>
          
          {/* Post metadata */}

        {/* Blog content */}
        <section className="text-lg leading-relaxed text-black text-justify mt-11 space-y-4">
          {/* Adding spacing between paragraphs and justify alignment */}
          <PortableText value={post.content} />
        </section>
        <div className="text-center text-sm italic font-serif text-gray-500 mb-4 mt-8 justify-between">
            <p>Published on {new Date(post.publishedAt).toLocaleDateString()}</p>
            <p>Views: {post.views}</p>
          </div>
        </div>
        <CommentForm /> 
      </article>
    </main>
  );
};

export default BlogPostServerComponent;
