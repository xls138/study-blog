import { CircleCheck } from "lucide-react";

export default function ContentSection() {
  return (
    <div className="bg-white px-6 py-16 lg:px-8 dark:bg-gray-900">
      <div className="mx-auto max-w-3xl">
        <p className="text-base font-semibold text-indigo-600 dark:text-indigo-400">
          Introducing
        </p>
        <h1 className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl dark:text-white">
          JavaScript for beginners
        </h1>
        <p className="mt-6 text-xl text-gray-600 dark:text-gray-300">
          Learn JavaScript fundamentals through hands-on examples and practical
          exercises.
        </p>

        <div className="mt-10 text-gray-600 dark:text-gray-400">
          <p className="mb-8">
            This comprehensive guide covers everything you need to start your
            JavaScript journey, from basic syntax to advanced concepts.
          </p>

          <ul className="space-y-4">
            <li className="flex gap-x-3">
              <CircleCheck className="mt-1 h-5 w-5 text-indigo-600 dark:text-indigo-400" />
              <span>
                <strong className="text-gray-900 dark:text-white">
                  Data types
                </strong>{" "}
                - Learn about strings, numbers, booleans, and objects.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CircleCheck className="mt-1 h-5 w-5 text-indigo-600 dark:text-indigo-400" />
              <span>
                <strong className="text-gray-900 dark:text-white">Loops</strong>{" "}
                - Master for loops, while loops, and array methods.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CircleCheck className="mt-1 h-5 w-5 text-indigo-600 dark:text-indigo-400" />
              <span>
                <strong className="text-gray-900 dark:text-white">
                  Events
                </strong>{" "}
                - Handle user interactions and DOM manipulation.
              </span>
            </li>
          </ul>

          <h2 className="mt-12 text-2xl font-bold text-gray-900 dark:text-white">
            From beginner to expert in 3 hours
          </h2>
          <p className="mt-4">
            Our structured approach helps you build confidence quickly with
            real-world examples and immediate feedback on your progress.
          </p>

          <blockquote className="mt-8 border-l-4 border-indigo-600 pl-4 italic text-gray-700 dark:text-gray-300 dark:border-indigo-400">
            The best way to learn JavaScript is by doing. This tutorial gets you
            coding from day one.
          </blockquote>
        </div>
      </div>
    </div>
  );
}
