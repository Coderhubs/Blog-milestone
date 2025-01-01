// "use client";

// import Image from "next/image";
// // import { PortableText } from "@portabletext/react";


// // Interface for blog post data
// interface BlogPost {
//   title: string;
//   content: object;
//   views: number;
//   imageUrl: string;
// }

// const BlogPostPage = ({ post }: { post: BlogPost }) => {

//   console.log(post);
  
//   return (
//     <main className="text-white flex flex-col items-center p-6">
//       <article className="max-w-4xl w-full bg-gray-800 p-6 rounded shadow-md">
//         <Image
//           src={post.imageUrl}
//           alt={post.title}
//           height={100}
//           width={100}
//           className="w-full h-64 object-cover rounded-md mb-4"
//         />
//         <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
//         <p className="text-sm text-zinc-500 mb-6">Views: {post.views}</p>
       
//       </article>
//       <section className="text-lg leading-normal text-dark/80 dark:text-light/80
//       prose-h4:text-accentDarkPrimary prose-h4:text-3xl prose-h4:font-bold
//       prose-li:list-disc prose-li:list-inside prose-li:marker:text-accentDarkSecondary
//       prose-strong:text-dark dark:prose-strong:text-white
      
//       ">
//         {/* <p>
//           {post.content}
//         </p> */}
        
//       </section>
//     </main>
//   );
// };

// export default BlogPostPage;
