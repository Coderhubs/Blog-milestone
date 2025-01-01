import React from 'react'
import Card from "../ui/card"

const BlogSection: React.FC = () => {

const generateSlug = (title: string) => {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
};

const articles = [
  {
    "imageUrl": "/images/coding.jpg",
    "category": "Tech Innovators",
    "title": "Master the Future: Top Skills Every Web Developer Needs in 2024",
    "description": "Explore the cutting-edge technologies and tools that are redefining web development. Stay ahead with tips and tricks to elevate your career!",
    "date": "June 1, 2020",
    "views": "2.1K",
    "slug": generateSlug("Master the Future: Top Skills Every Web Developer Needs in 2024")
  },
  {
    "imageUrl": "/images/Food.jpg",
    "category": "Nutrition Gurus",
    "title": "Eating Smart: Your Guide to a Balanced Diet",
    "description": "Discover how simple dietary changes can transform your health. From superfoods to mindful eating tips, start your journey today!",
    "date": "June 2, 2020",
    "views": "2.2K",
    "slug": generateSlug("Eating Smart: Your Guide to a Balanced Diet")
  },
  {
    "imageUrl": "/images/E-commerce.jpg",
    "category": "Digital Market Trends",
    "title": "The Rise of E-Commerce: Trends You Can't Ignore",
    "description": "Learn about the latest trends shaping the e-commerce industry, from AI-driven personalization to eco-friendly practices.",
    "date": "June 3, 2020",
    "views": "2.3K",
    "slug": generateSlug("The Rise of E-Commerce: Trends You Can't Ignore")
  },
  {
    "imageUrl": "/images/Nature.jpeg",
    "category": "Eco Explorers",
    "title": "Hidden Wonders: Discovering Nature's Secret Treasures",
    "description": "Embark on a journey through some of nature's most stunning landscapes and learn how to preserve them for future generations.",
    "date": "June 4, 2020",
    "views": "2.4K",
    "slug": generateSlug("Hidden Wonders: Discovering Nature's Secret Treasures")
  },
  {
    "imageUrl": "/images/Travel.jpg",
    "category": "Wanderlust Chronicles",
    "title": "Top Travel Destinations to Explore in 2024",
    "description": "Pack your bags and set out on a journey to the most stunning and adventurous travel destinations. Discover hidden gems and travel tips to make your trips unforgettable.",
    "date": "June 1, 2020",
    "views": "2.1K",
    "slug": generateSlug("Top Travel Destinations to Explore in 2024")
  },
  {
    "imageUrl": "/images/Socialmedia.jpg",
    "category": "Social Media Insights",
    "title": "The Impact of Social Media: Trends and Strategies",
    "description": "Delve into the evolving world of social media. Learn how platforms influence lifestyles, businesses, and connections, and uncover tips to thrive in the digital realm.",
    "date": "June 2, 2020",
    "views": "2.2K",
    "slug": generateSlug("The Impact of Social Media: Trends and Strategies")
  },
  {
    "imageUrl": "/images/Education.jpg",
    "category": "Learning Horizons",
    "title": "Revolutionizing Education: Modern Learning Techniques",
    "description": "Explore how technology is transforming education. From e-learning platforms to AI-driven tools, find out what's shaping the future of learning.",
    "date": "June 3, 2020",
    "views": "2.3K",
    "slug": generateSlug("Revolutionizing Education: Modern Learning Techniques")
  },
  {
    "imageUrl": "/images/culture.jpg",
    "category": "Cultural Connections",
    "title": "Preserving Heritage: The Importance of Culture Today",
    "description": "Celebrate the richness of global cultures and their traditions. Discover why preserving cultural heritage is vital in our fast-paced modern world.",
    "date": "June 4, 2020",
    "views": "2.4K",
    "slug": generateSlug("Preserving Heritage: The Importance of Culture Today")
  }
];

  return (
    <section className="py-6 sm:py-12 dark:bg-gray-100 dark:text-gray-800">
      <div className="container p-6 mx-auto space-y-8">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold mt-14 mb-4 text-white"> CATEGORIES BLOG POST</h2>
          <p className="font-serif text-md text-white">
            Explore diverse topics and insights curated just for you. 
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {articles.map((article, index) => (
            <Card key={index} imageUrl={article.imageUrl} category={article.category} title={article.title} description={article.description} date={article.date} views={article.views} slug={article.slug} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogSection
