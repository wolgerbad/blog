export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
          About Our Blog
        </h1>

        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="text-lg leading-relaxed mb-6">
            Welcome to our blog! We are passionate about sharing insightful
            articles and engaging stories on a wide range of topics. Our goal is
            to create a community where ideas are exchanged, knowledge is
            shared, and discussions thrive.
          </p>

          <p className="text-lg leading-relaxed mb-8">
            Our team consists of enthusiastic writers, experienced editors, and
            dedicated readers who all contribute to making this platform a
            vibrant space. We believe in the power of words to inspire, educate,
            and entertain.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b-2 border-blue-200 pb-2">
            Our Mission
          </h2>
          <p className="text-lg leading-relaxed mb-8">
            To deliver high-quality, thought-provoking content that enriches the
            lives of our readers and fosters a love for learning and discovery.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b-2 border-blue-200 pb-2">
            Join Our Community
          </h2>
          <p className="text-lg leading-relaxed">
            We encourage you to explore our articles, leave comments, and share
            your thoughts. Your feedback is invaluable to us as we continue to
            grow and improve.
          </p>
        </div>
      </div>
    </div>
  );
}
