'use client';

function BackBtn() {
  return (
    <button
      className="absolute left-4 top-4 z-10 bg-white/90 backdrop-blur-sm text-gray-700 p-3 rounded-full shadow-lg hover:bg-white hover:shadow-xl transition-all duration-200 group"
      onClick={() => window.history.back()}
    >
      <span className="text-xl group-hover:-translate-x-1 transition-transform duration-200">
        ←
      </span>
    </button>
  );
}

export default BackBtn;
