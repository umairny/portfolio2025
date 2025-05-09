"use client";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h1 className="text-4xl sm:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
        Hi, I'm Umair
      </h1>
      <p className="text-lg sm:text-2xl text-gray-600 dark:text-gray-300 mb-6 max-w-2xl">
        I’m a passionate web developer building modern, responsive, and
        accessible web applications.
      </p>
      <a
        href="#projects"
        className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
      >
        View My Work
      </a>
    </section>
  );
};

export default Hero;
