'use client';

function BackBtn() {
  return (
    <span
      className="absolute left-2 top-2 text-xl bg-gray-200 p-2 rounded-lg cursor-pointer hover:bg-gray-300"
      onClick={() => window.history.back()}
    >
      &larr;
    </span>
  );
}

export default BackBtn;
