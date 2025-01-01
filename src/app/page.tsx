import BlogSection from "./Components/BlogSection";
import ImageGallery from "./Components/ImageGallery";
import "./globals.css";

const images = [
  { src: "/images/Travel.jpg", alt: "Travels", category: "Traveling" },
  { src: "/images/Food.jpg", alt: "Food Lovers", category: "Foods" },
  { src: "/images/designer.jpeg", alt: "Designers", category: "Designers" },
  { src: "/images/E-commerce.jpg", alt: "Online-business", category: "e-commerce" },
  { src: "/images/culture.jpg", alt: "All cultures", category: "culture" },
  { src: "/images/coding.jpg", alt: "Programmers", category: "Coding" },
  { src: "/images/Nature.jpeg", alt: "Lush green forest", category: "Nature" },
  { src: "/images/Education.jpg", alt: "Education", category: "Education" },
  { src: "/images/Adventure.jpg", alt: "Adventurous", category: "Adventures" },
  { src: "/images/socialmedia.jpg", alt: "Social Media", category: "Social Media" },
];

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      {/* Background video */}
      <div className="relative w-full flex justify-center items-center">
        {/* <video
          id="bg-video"
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/videos/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
        <div className="relative z-10 flex justify-center items-center w-full">
          <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl sm:text-2xl md:text-2xl lg:text-4xl text-white text-center font-bold mt-40 sm:mt-40 md:mt-40 w-full max-w-3xl">
            <span className="block sm:inline">Hey, Welcome to PenAura <br /> Blogging Site</span>
          </h1>
        </div>
      </div>

      {/* Description text */}
      <div className="w-auto px-4 sm:px-10 py-8 flex place-items-center items-center">
        <p className="text-white
        font-thin w-full place-items-center justify-center sm:text-2xl text-justify p-6 sm:p-24">
    
        At PENAURA, we curate high-quality blogs that offer valuable perspectives and in-depth analysis across a wide range of industries and disciplines. Whether you are looking to stay ahead of the curve or seeking knowledge in a specific field, our content is designed to inspire, inform, and engage professionals like you. Join our community today and start exploring the resources that will help shape your next success. 
              </p>
      </div>

      {/* Image Gallery */}
      <div className="w-full px-3  flex justify-center items-center">
        <ImageGallery images={images} />
      </div>
      <BlogSection />
      
    </main>
  );
}
