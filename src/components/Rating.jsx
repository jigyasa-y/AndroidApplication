
export default function Rating({ rating = 4, total = 5, count = 4 }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-1">
        {[...Array(total)].map((_, index) => (
          <svg
            key={index}
            className={`w-6 h-6 ${index < rating ? "text-yellow-500" : "text-gray-300"
              }`}
            fill={index < rating ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.122 6.54a1 1 0 00.95.69h6.873c.969 0 1.371 1.24.588 1.81l-5.562 4.042a1 1 0 00-.364 1.118l2.122 6.54c.3.921-.755 1.688-1.54 1.118l-5.562-4.042a1 1 0 00-1.176 0l-5.562 4.042c-.784.57-1.838-.197-1.539-1.118l2.122-6.54a1 1 0 00-.364-1.118L.49 11.967c-.783-.57-.38-1.81.588-1.81h6.873a1 1 0 00.95-.69l2.148-6.54z"
            />
          </svg>
        ))}
      </div>
      <span className="text-gray-700 text-lg font-medium">
        ({count})
      </span>
    </div>
  );
}