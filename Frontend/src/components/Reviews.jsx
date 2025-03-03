export default function Reviews() {
  const reviews = [
    {
      id: 1,
      user: "John Doe",
      rating: 5,
      date: "March 2024",
      comment:
        "Amazing place! The photos don't do it justice. Perfect location and the host was very responsive.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto py-8 border-t border-gray-300 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-[180px]">
      <h2 className="text-2xl font-semibold mb-6">Reviews</h2>
      <div className="space-y-8">
        {reviews.map((review) => (
          <div key={review.id} className="border-b pb-6">
            <div className="flex items-center gap-3 sm:gap-4 mb-4">
              <img
                src="https://a0.muscache.com/im/pictures/user/c6be4ad1-330d-4927-9da7-00a9027d52f2.jpg?im_w=240&im_format=avif"
                alt="User Avatar"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold text-sm sm:text-base">{review.user}</h3>
                <p className="text-gray-600 text-xs sm:text-sm">{review.date}</p>
              </div>
            </div>
            <div className="flex items-center gap-1 mb-2 text-lg sm:text-xl">
              {"★".repeat(review.rating)}
            </div>
            <p className="text-gray-800 text-sm sm:text-base">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}