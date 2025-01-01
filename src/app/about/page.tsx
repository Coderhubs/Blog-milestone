import Image from "next/image";

export default function About() {
  return (
    <div className="bg-gray-50 min-h-screen">
       {/* Hero Section */}
      <section className="bg-gray-50">
        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center pt-36 px-28 lg:px-16">
          <div className="lg:w-1/2 text-center lg:text-left px-16">

            <h1 className="text-4xl font-extrabold text-gray-800 leading-tight">
              About <span className="text-orange-700">Penaura</span>
            </h1>
            <p className="mt-4 text-gray-600 text-lg">
              Discover our journey, mission, and the passion that drives us to create meaningful content.
            </p>
            <button className="mt-6 px-6 py-3 bg-orange-700 text-white rounded-md shadow-lg hover:bg-orange-600 transition-colors duration-300">
              Learn More
            </button>
          </div>
          <div className="lg:max-w-3xl px-24 h-full">
  <Image
    src="/images/hero.jpg"
    alt="About Penaura"
    layout="responsive"
    width={700} // Adjust these values as needed
    height={375} // Adjust these values as needed
    className="rounded-lg shadow-lg object-cover"
  />
</div>

        </div>
      </section>

      {/* Mission Section */}
      <section className=" py-24">
        <div className="container mx-auto text-center px-6 lg:px-16">
          <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            At Penaura, we aim to empower creators and thinkers by providing a platform that values creativity and innovation.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6 lg:px-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "✨", title: "Innovation", description: "Pushing boundaries in storytelling." },
              { icon: "📚", title: "Knowledge", description: "Sharing expertise through quality content." },
              { icon: "🌍", title: "Community", description: "Connecting readers around the globe." },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-2xl transition-shadow duration-300"
              >
                <span className="text-4xl">{value.icon}</span>
                <h3 className="text-xl font-bold text-gray-800 mt-4">
                  {value.title}
                </h3>
                <p className="mt-2 text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
