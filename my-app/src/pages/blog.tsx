import { useState } from "react";
import {
  Calendar,
  Clock,
  Star,
  ArrowLeft,
  Share2,
  Bookmark,
} from "lucide-react";

interface Post {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  featured?: boolean;
  content: {
    introduction: string;
    sections: Array<{
      title: string;
      content: string;
      keyPoints?: string[];
    }>;
    conclusion: string;
  };
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  tags: string[];
}

const categories = [
  { id: "all", name: "All Posts" },
  { id: "loans", name: "Loan Basics", href: "/loanBasics" },
  { id: "tips", name: "EMI Tips", href: "/emiTips" },
  { id: "finance", name: "Personal Finance", href: "/personalFinance" },
  { id: "investing", name: "Investing", href: "/investing" },
];

const BlogDetailPage = ({
  post,
  onBack,
}: {
  post: Post;
  onBack: () => void;
}) => {
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

      <img
        src={post.image}
        alt={post.title}
        className="w-full h-96 object-cover rounded-2xl mb-8"
      />

      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-2 text-sm text-gray-500">
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
        <div className="flex space-x-4">
          <button className="text-gray-500 hover:text-blue-600">
            <Share2 className="h-5 w-5" />
          </button>
          <button className="text-gray-500 hover:text-blue-600">
            <Bookmark className="h-5 w-5" />
          </button>
        </div>
      </div>

      <h1 className="text-4xl font-bold text-gray-900 mb-6">{post.title}</h1>

      <div className="flex items-center mb-8">
        <img
          src={post.author.avatar}
          alt={post.author.name}
          className="h-12 w-12 rounded-full mr-4"
        />
        <div>
          <p className="font-medium text-gray-900">{post.author.name}</p>
          <p className="text-sm text-gray-500">{post.author.role}</p>
        </div>
      </div>

      <div className="prose max-w-none">
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          {post.content.introduction}
        </p>

        {post.content.sections.map((section, index) => (
          <div key={index} className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {section.title}
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {section.content}
            </p>
            {section.keyPoints && (
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Key Takeaways:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  {section.keyPoints.map((point, idx) => (
                    <li key={idx} className="text-gray-600">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}

        <div className="border-t border-gray-200 pt-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Conclusion</h2>
          <p className="text-gray-600 leading-relaxed">
            {post.content.conclusion}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mt-8">
          {post.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const BlogPage = () => {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const featuredPosts: Post[] = [
    {
      id: 1,
      title: "Understanding EMI: A Complete Guide for Beginners",
      excerpt:
        "Learn the basics of EMI calculations and how they affect your loan payments...",
      category: "loans",
      readTime: "8 min read",
      date: "Jan 15, 2025",
      image: "./src/assets/blog-image/what-is-emi.png",
      featured: true,
      author: {
        name: "Sarah Johnson",
        role: "Financial Analyst",
        avatar: "/api/placeholder/48/48",
      },
      tags: ["EMI Basics", "Loan Management", "Financial Planning"],
      content: {
        introduction:
          "Equated Monthly Installment (EMI) is a fixed payment amount made by a borrower to a lender at a specified date each calendar month. Understanding how EMIs work is crucial for making informed financial decisions and managing your loans effectively.",
        sections: [
          {
            title: "What is EMI?",
            content:
              "An EMI consists of two parts: principal and interest. The principal is the original loan amount, while the interest is the cost of borrowing. The EMI formula combines these components to create fixed monthly payments that gradually reduce your loan balance while covering the interest cost.",
            keyPoints: [
              "EMI makes loan repayment more manageable through fixed monthly payments",
              "Each payment includes both principal and interest components",
              "EMIs help in systematic debt reduction over the loan tenure",
            ],
          },
          {
            title: "How is EMI Calculated?",
            content:
              "The EMI calculation follows a standard mathematical formula: EMI = P × r × (1 + r)^n / ((1 + r)^n - 1), where P is the principal amount, r is the interest rate per month, and n is the total number of months. This formula ensures that your monthly payments remain constant throughout the loan tenure.",
            keyPoints: [
              "Understanding the EMI formula helps in loan comparison",
              "Interest rates significantly impact your EMI amount",
              "Loan tenure affects both monthly payments and total interest paid",
            ],
          },
        ],
        conclusion:
          "Understanding EMI calculations is essential for making informed borrowing decisions. By grasping these concepts, you can better manage your loans, compare different loan options, and plan your finances more effectively.",
      },
    },
    {
      id: 2,
      title: "5 Smart Ways to Reduce Your EMI Burden",
      excerpt:
        "Discover practical strategies to lower your monthly EMI payments and manage your loan better...",
      category: "tips",
      readTime: "6 min read",
      date: "Jan 14, 2025",
      image: "./src/assets/blog-image/reduce-burden.png",
      author: {
        name: "Michael Chen",
        role: "Loan Specialist",
        avatar: "/api/placeholder/48/48",
      },
      tags: ["EMI Reduction", "Loan Management", "Money Saving Tips"],
      content: {
        introduction:
          "Managing EMI payments can be challenging, but there are several effective strategies to reduce your EMI burden without compromising your financial stability. This guide explores practical approaches to lower your monthly payments and manage your loans more efficiently.",
        sections: [
          {
            title: "Prepayment Strategies",
            content:
              "Making prepayments whenever possible can significantly reduce your overall interest burden. Even small additional payments can make a big difference over the loan tenure. Consider using bonuses, tax refunds, or other windfall gains for loan prepayment.",
            keyPoints: [
              "Prepayment reduces the principal amount quickly",
              "Lower principal means reduced interest payments",
              "Check prepayment charges before making extra payments",
            ],
          },
          {
            title: "Refinancing Options",
            content:
              "Loan refinancing involves replacing your existing loan with a new one at a lower interest rate. This can lead to lower EMIs or a shorter loan tenure. Monitor market rates and your credit score to identify refinancing opportunities.",
            keyPoints: [
              "Compare refinancing costs with potential savings",
              "Consider both interest rates and processing fees",
              "Evaluate the impact on loan tenure",
            ],
          },
        ],
        conclusion:
          "Reducing your EMI burden requires a combination of strategic planning and disciplined execution. By implementing these strategies and staying informed about your loan terms, you can effectively manage your EMIs and improve your financial health.",
      },
    },
    {
      id: 3,
      title: "Home Loan vs Car Loan: Understanding EMI Differences",
      excerpt:
        "Compare the EMI structures of different loan types and make informed decisions...",
      category: "finance",
      readTime: "6 min read",
      date: "Jan 14, 2025",
      image: "./src/assets/blog-image/Home-and-car-loan.png",
      author: {
        name: "Michael Chen",
        role: "Loan Specialist",
        avatar: "/api/placeholder/48/48",
      },
      tags: ["EMI Reduction", "Loan Management", "Money Saving Tips"],
      content: {
        introduction:
          "Managing EMI payments can be challenging, but there are several effective strategies to reduce your EMI burden without compromising your financial stability. This guide explores practical approaches to lower your monthly payments and manage your loans more efficiently.",
        sections: [
          {
            title: "Prepayment Strategies",
            content:
              "Making prepayments whenever possible can significantly reduce your overall interest burden. Even small additional payments can make a big difference over the loan tenure. Consider using bonuses, tax refunds, or other windfall gains for loan prepayment.",
            keyPoints: [
              "Prepayment reduces the principal amount quickly",
              "Lower principal means reduced interest payments",
              "Check prepayment charges before making extra payments",
            ],
          },
          {
            title: "Refinancing Options",
            content:
              "Loan refinancing involves replacing your existing loan with a new one at a lower interest rate. This can lead to lower EMIs or a shorter loan tenure. Monitor market rates and your credit score to identify refinancing opportunities.",
            keyPoints: [
              "Compare refinancing costs with potential savings",
              "Consider both interest rates and processing fees",
              "Evaluate the impact on loan tenure",
            ],
          },
        ],
        conclusion:
          "Reducing your EMI burden requires a combination of strategic planning and disciplined execution. By implementing these strategies and staying informed about your loan terms, you can effectively manage your EMIs and improve your financial health.",
      },
    },
    {
      id: 4,
      title: "The Impact of Credit Score on Your EMI",
      excerpt:
        "Learn how your credit score affects your loan interest rates and EMI...",
      category: "finance",
      readTime: "6 min read",
      date: "Jan 14, 2025",
      image: "./src/assets/blog-image/credit-score.png",
      author: {
        name: "Michael Chen",
        role: "Loan Specialist",
        avatar: "/api/placeholder/48/48",
      },
      tags: ["EMI Reduction", "Loan Management", "Money Saving Tips"],
      content: {
        introduction:
          "Managing EMI payments can be challenging, but there are several effective strategies to reduce your EMI burden without compromising your financial stability. This guide explores practical approaches to lower your monthly payments and manage your loans more efficiently.",
        sections: [
          {
            title: "Prepayment Strategies",
            content:
              "Making prepayments whenever possible can significantly reduce your overall interest burden. Even small additional payments can make a big difference over the loan tenure. Consider using bonuses, tax refunds, or other windfall gains for loan prepayment.",
            keyPoints: [
              "Prepayment reduces the principal amount quickly",
              "Lower principal means reduced interest payments",
              "Check prepayment charges before making extra payments",
            ],
          },
          {
            title: "Refinancing Options",
            content:
              "Loan refinancing involves replacing your existing loan with a new one at a lower interest rate. This can lead to lower EMIs or a shorter loan tenure. Monitor market rates and your credit score to identify refinancing opportunities.",
            keyPoints: [
              "Compare refinancing costs with potential savings",
              "Consider both interest rates and processing fees",
              "Evaluate the impact on loan tenure",
            ],
          },
        ],
        conclusion:
          "Reducing your EMI burden requires a combination of strategic planning and disciplined execution. By implementing these strategies and staying informed about your loan terms, you can effectively manage your EMIs and improve your financial health.",
      },
    },
  ];

  return (
    <div className="min-h-screen bg-black bg-opacity-10 backdrop-blur">
      {selectedPost ? (
        <BlogDetailPage
          post={selectedPost}
          onBack={() => setSelectedPost(null)}
        />
      ) : (
        <>
          <div className="max-w-7xl mx-auto px-4 py-[90px]">
            <h1 className="text-3xl font-bold text-gray-900 mb-[38px]">
              Featured Articles
            </h1>

            <div className="mt-6 flex space-x-4 overflow-x-auto pb-[50px]">
              {categories.map((category) =>
                category.href ? (
                  <a
                    key={category.id}
                    href={category.href}
                    className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                      selectedCategory === category.id
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
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
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {category.name}
                  </button>
                )
              )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
                  onClick={() => setSelectedPost(post)}
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h2 className="text-xl font-semibold text-gray-900">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mt-2">{post.excerpt}</p>
                    <div className="flex items-center mt-4 text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{post.date}</span>
                      <Clock className="h-4 w-4 ml-3 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 bg-[#ecfff4] border-[#27ae60]  border-[2px] p-6 text-gray-900 rounded-lg">
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">
                  Stay Updated with EMI Tips
                </h2>
                <p className="mb-6 text-gray-900">
                  Get the latest financial advice and EMI calculation tips
                  delivered to your inbox.
                </p>
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
        </>
      )}
    </div>
  );
};

export default BlogPage;
