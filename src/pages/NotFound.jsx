// pages/NotFound.jsx  or  components/NotFound.jsx
import { Link } from 'react-router-dom'; // or use <a> if no router

export default function NotFound() {
  return (
    <>
      <div 
        className="not-found-page"
      >
        <div className="text-center max-w-xl">
          {/* Large 404 */}
          <h1 className="text-9xl font-bold text-gray-800 mb-4 tracking-tight">
            404
          </h1>

          {/* Message */}
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
            Page Not Found
          </h2>

          <p className="text-lg text-gray-600 mb-10">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>

          {/* Suggestions */}
          <p className="text-gray-500 mb-8">
            You might want to check the URL or go back to our homepage.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center px-8 py-4 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition-colors text-lg shadow-md hover:shadow-lg"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}