import { useState } from 'react';
import { Search, Calendar, Clock, ChevronRight, Star, TrendingUp, ArrowLeft } from 'lucide-react';
interface Post {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  featured?: boolean;
}

const BlogDetailPage = ({ post, onBack }: { post: Post; onBack: () => void }) => {
  if (!post) return null;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <button 
        onClick={onBack}
        className="flex items-center text-blue-600 hover:text-blue-700 mb-6"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Articles
      </button>
      
      <img src={post.image} alt={post.title} className="w-full h-72 object-cover rounded-2xl mb-8" />
      
      <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
        <Calendar className="h-4 w-4" />
        <span>{post.date}</span>
        <Clock className="h-4 w-4 ml-3" />
        <span>{post.readTime}</span>
        {post.featured && (
          <>
            <Star className="h-4 w-4 ml-3 text-yellow-500" />
            <span className="text-yellow-500">Featured</span>
          </>
        )}
      </div>

      <h1 className="text-3xl font-bold text-gray-900 mb-4">{post.title}</h1>
      
      {/* Extended content for the detailed view */}
      <div className="prose max-w-none">
        <p className="text-gray-600 mb-6">{post.excerpt}</p>
        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <h2 className="text-xl font-bold text-gray-900 mb-4">Key Points</h2>
        <ul className="list-disc pl-6 mb-6">
          <li className="text-gray-600 mb-2">Understanding the basics of EMI calculation</li>
          <li className="text-gray-600 mb-2">Factors affecting your EMI payments</li>
          <li className="text-gray-600 mb-2">Tips for managing your EMI effectively</li>
        </ul>
      </div>
    </div>
  );
};

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

   const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'loans', name: 'Loan Basics', href: '/loanBasics' },
    { id: 'tips', name: 'EMI Tips' },
    { id: 'finance', name: 'Personal Finance' },
    { id: 'investing', name: 'Investing' },
  ];

  const featuredPosts = [
    {
      id: 1,
      title: "Understanding EMI: A Complete Guide for Beginners",
      excerpt: "Learn the basics of EMI calculations and how they affect your loan payments...",
      category: "loans",
      readTime: "5 min read",
      date: "Jan 5, 2025",
      image: "./src/assets/blog-image/what-is-emi.png",
      featured: true,
    },
    {
      id: 2,
      title: "5 Smart Ways to Reduce Your EMI Burden",
      excerpt: "Discover practical strategies to lower your monthly EMI payments...",
      category: "tips",
      readTime: "4 min read",
      date: "Jan 4, 2025",
      image: "./src/assets/blog-image/reduce-burden.png"
    },
  ];

  const recentPosts = [
    {
      id: 3,
      title: "Home Loan vs Car Loan: Understanding EMI Differences",
      excerpt: "Compare the EMI structures of different loan types and make informed decisions...",
      category: "finance",
      readTime: "6 min read",
      date: "Jan 3, 2025",
      image: "./src/assets/blog-image/Home-and-car-loan.png"
    },
    {
      id: 4,
      title: "The Impact of Credit Score on Your EMI",
      excerpt: "Learn how your credit score affects your loan interest rates and EMI...",
      category: "finance",
      readTime: "4 min read",
      date: "Jan 2, 2025",
      image: "./src/assets/blog-image/credit-score.png"
    },
    {
      id: 5,
      title: "EMI Calculator: Making Informed Financial Decisions",
      excerpt: "Master the use of EMI calculators for better loan planning...",
      category: "tips",
      readTime: "5 min read",
      date: "Jan 1, 2025",
      image: "./src/assets/blog-image/Copy-calculator.png"
    }
  ];


interface PostClickHandler {
    (post: Post): void;
}

const handlePostClick: PostClickHandler = (post) => {
    setSelectedPost(post);
    window.scrollTo(0, 0);
};

  if (selectedPost) {
    return <BlogDetailPage post={selectedPost} onBack={() => setSelectedPost(null)} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">EMI Knowledge Hub</h1>
            <div className="mt-4 md:mt-0 relative">
              <input
                type="text"
                placeholder="Search articles..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
          
          {/* Categories */}
          <div className="mt-6 flex space-x-4 overflow-x-auto pb-2">
            {categories.map(category => (
              category.href ? (
                <a
                  key={category.id}
                  href={category.href}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </a>
              ) : (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              )
            ))}
          </div>
        </div>
      </div>

      {/* Featured Post */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredPosts.map(post => (
            <div 
              key={post.id} 
              className="bg-white rounded-2xl overflow-hidden shadow-lg transition-transform hover:transform hover:scale-[1.02] cursor-pointer"
              onClick={() => handlePostClick(post)}
            >
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                  <Calendar className="h-4 w-4" />
                  <span>{post.date}</span>
                  <Clock className="h-4 w-4 ml-3" />
                  <span>{post.readTime}</span>
                  {post.featured && (
                    <>
                      <Star className="h-4 w-4 ml-3 text-yellow-500" />
                      <span className="text-yellow-500">Featured</span>
                    </>
                  )}
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="text-blue-600 font-medium flex items-center hover:text-blue-700">
                  Read More <ChevronRight className="h-4 w-4 ml-1" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Posts */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <TrendingUp className="h-6 w-6 mr-2" />
            Latest Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map(post => (
              <div 
                key={post.id} 
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => handlePostClick(post)}
              >
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                    <Clock className="h-4 w-4 ml-3" />
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="text-blue-600 font-medium flex items-center hover:text-blue-700">
                    Read More <ChevronRight className="h-4 w-4 ml-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-16 bg-[#ecfff4] border-[#27ae60]  border-[2px] p-6 text-gray-900 rounded-lg">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Stay Updated with EMI Tips</h2>
            <p className="mb-6 text-gray-900">Get the latest financial advice and EMI calculation tips delivered to your inbox.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 border-[#27ae60]  border-[1px] rounded-lg text-gray-900 flex-grow max-w-md"
              />
              <button className=" bg-[#27ae60] text-white px-6 py-2 rounded-[8px] hover:bg-[#27ae50] transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;