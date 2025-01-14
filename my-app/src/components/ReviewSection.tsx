import { useState, useEffect } from "react";
import { Card } from "./ui/card.tsx";
import { Button } from "./ui/button.tsx";
import { Star, Send, Reply, Trash2 } from "lucide-react";
import emailjs from "@emailjs/browser";

const LoanCalculator = () => {
  const [reviews, setReviews] = useState<Review[]>(() => {
    const savedReviews = localStorage.getItem("emiCalculatorReviews");
    return savedReviews ? JSON.parse(savedReviews) : [];
  });

  const [newReview, setNewReview] = useState({
    name: "",
    rating: 5,
    comment: "",
  });

  const [currentUser, setCurrentUser] = useState<string>("");
  const [replyStates, setReplyStates] = useState<{ [key: number]: string }>({});
  const [showReplyInput, setShowReplyInput] = useState<{
    [key: number]: boolean;
  }>({});

  useEffect(() => {
    localStorage.setItem("emiCalculatorReviews", JSON.stringify(reviews));
  }, [reviews]);

  interface Reply {
    id: number;
    name: string;
    comment: string;
    date: string;
  }

  interface Review {
    id: number;
    name: string;
    rating: number;
    comment: string;
    date: string;
    replies: Reply[];
  }

  const sendEmailNotification = async (review: Review) => {
    const templateParams = {
      to_email: "itsrahul.trtr@gmail.com",
      from_name: review.name,
      message: `New Review Submitted
Rating: ${review.rating}/5 stars
Comment: ${review.comment}
Date: ${review.date}`,
    };

    try {
      const response = await emailjs.send(
        "service_xxxxxxx",
        "template_xxxxxx",
        templateParams,
        "public_key_xxxxxx"
      );
      console.log("Email notification sent successfully", response);
    } catch (error) {
      console.error("Failed to send email notification:", error);
      alert(
        "Failed to send email notification. Please check your EmailJS configuration."
      );
    }
  };

  const handleReviewSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newReviewObject: Review = {
      id: Date.now(),
      ...newReview,
      date: new Date().toISOString().split("T")[0],
      replies: [],
    };

    setReviews([newReviewObject, ...reviews]);
    setCurrentUser(newReview.name);

    await sendEmailNotification(newReviewObject);

    setNewReview({ name: "", rating: 5, comment: "" });

    alert("Thank you for your review! It has been submitted successfully.");
  };

  const handleReplySubmit = (reviewId: number) => {
    const replyText = replyStates[reviewId];
    if (!replyText?.trim()) return;

    setReviews(
      reviews.map((review) => {
        if (review.id === reviewId) {
          const newReply: Reply = {
            id: Date.now(),
            name: "Rahul",
            comment: replyText,
            date: new Date().toISOString().split("T")[0],
          };
          return {
            ...review,
            replies: [...review.replies, newReply],
          };
        }
        return review;
      })
    );

    setReplyStates((prev) => ({ ...prev, [reviewId]: "" }));
    setShowReplyInput((prev) => ({ ...prev, [reviewId]: false }));
  };

  const handleDeleteReview = (reviewId: number, authorName: string) => {
    if (currentUser !== authorName) {
      alert("You can only delete your own reviews.");
      return;
    }

    if (window.confirm("Are you sure you want to delete this review?")) {
      setReviews(reviews.filter((review) => review.id !== reviewId));
    }
  };

  return (
    <Card className="w-full md:max-w-[70%] max-w-[95%] mb-[72px] mx-auto">
      <div className=" md:p-[16px] p-[10px]">
        <div className="flex justify-center items-center mb-8">
          <h3 className="text-2xl font-semibold text-center text-[#1D2D35]">
            Leave A Review
          </h3>
        </div>

        <form
          onSubmit={handleReviewSubmit}
          className=" bg-white rounded-lg shadow-sm"
        >
          <div className="space-y-4 p-[8px] ">
            <div>
              <label className="block text-sm font-medium text-[#1D2D35] mb-[12px]">
                Your Name
              </label>
              <input
                type="text"
                value={newReview.name}
                onChange={(e) =>
                  setNewReview({ ...newReview, name: e.target.value })
                }
                required
                className="w-full p-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1D2D35] mb-[12px]">
                Your Review
              </label>
              <textarea
                value={newReview.comment}
                onChange={(e) =>
                  setNewReview({ ...newReview, comment: e.target.value })
                }
                required
                rows={4}
                className="w-full p-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Share your experience with our EMI calculator"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1D2D35] mb-[12px]">
                Rating
              </label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setNewReview({ ...newReview, rating: star })}
                    className="focus:outline-none"
                  >
                    <Star
                      className={`w-6 h-6 ${
                        star <= newReview.rating
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>
            <Button
              type="submit"
              className="w-full bg-[#27ae60] hover:bg-[#219653] text-white flex items-center justify-center gap-2 mt-[24px]"
            >
              <Send className="w-4 h-4" />
              Submit Review
            </Button>
          </div>
        </form>

        <div className="space-y-6  mb-[32px] mt-[32px]">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-gray-100 md:p-[24px] p-[12px] rounded-lg shadow-sm"
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-semibold text-[#1D2D35]">
                    {review.name}
                  </h4>
                  <div className="flex gap-1 mt-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-4 h-4 ${
                          star <= review.rating
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-500">{review.date}</span>
                  {currentUser === review.name && (
                    <Button
                      onClick={() => handleDeleteReview(review.id, review.name)}
                      variant="ghost"
                      className="text-red-500 hover:text-red-700 p-1 h-auto"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              </div>
              <p className="text-gray-600 mt-2">{review.comment}</p>

              <div className="mt-4">
                <Button
                  onClick={() =>
                    setShowReplyInput((prev) => ({
                      ...prev,
                      [review.id]: !prev[review.id],
                    }))
                  }
                  variant="outline"
                  className="text-sm flex items-center gap-2"
                >
                  <Reply className="w-4 h-4" />
                  Reply
                </Button>

                {showReplyInput[review.id] && (
                  <div className="mt-3 space-y-2">
                    <textarea
                      value={replyStates[review.id] || ""}
                      onChange={(e) =>
                        setReplyStates((prev) => ({
                          ...prev,
                          [review.id]: e.target.value,
                        }))
                      }
                      className="w-full p-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Write your reply..."
                      rows={2}
                    />
                    <Button
                      onClick={() => handleReplySubmit(review.id)}
                      className="bg-[#27ae60] hover:bg-[#219653] text-white"
                    >
                      Submit Reply
                    </Button>
                  </div>
                )}

                {review.replies.length > 0 && (
                  <div className="mt-4 space-y-3">
                    {review.replies.map((reply) => (
                      <div
                        key={reply.id}
                        className="bg-gray-50 p-3 rounded-md ml-4 border-l-2 border-[#27ae60]"
                      >
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-medium text-sm">
                            {reply.name}
                          </span>
                          <span className="text-xs text-gray-500">
                            {reply.date}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600">{reply.comment}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default LoanCalculator;
