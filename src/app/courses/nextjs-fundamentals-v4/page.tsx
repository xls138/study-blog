import { CircleCheck, Info } from "lucide-react";
import Image from "next/image";

export default function NextJsFundamentalsV4Page() {
  return (
    <>
      <div className="bg-white px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-base font-semibold text-indigo-600">React & Next.js</p>
          <h1 className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl">
            Next.js Fundamentals, v4
          </h1>
          <p className="mt-6 text-xl text-gray-600">
            Learn JavaScript fundamentals through hands-on examples and
            practical exercises.
          </p>

          <div className="mt-10 text-gray-600">
            <p className="mb-8">
              This comprehensive guide covers everything you need to start your
              JavaScript journey, from basic syntax to advanced concepts.
            </p>

            <ul className="space-y-4">
              <li className="flex gap-x-3">
                <CircleCheck className="mt-1 h-5 w-5 text-indigo-600" />
                <span>
                  <strong className="text-gray-900">Data types</strong> - Learn
                  about strings, numbers, booleans, and objects.
                </span>
              </li>
              <li className="flex gap-x-3">
                <CircleCheck className="mt-1 h-5 w-5 text-indigo-600" />
                <span>
                  <strong className="text-gray-900">Loops</strong> - Master for
                  loops, while loops, and array methods.
                </span>
              </li>
              <li className="flex gap-x-3">
                <CircleCheck className="mt-1 h-5 w-5 text-indigo-600" />
                <span>
                  <strong className="text-gray-900">Events</strong> - Handle
                  user interactions and DOM manipulation.
                </span>
              </li>
            </ul>

            <h2 className="mt-12 text-2xl font-bold text-gray-900">
              From beginner to expert in 3 hours
            </h2>
            <p className="mt-4">
              Our structured approach helps you build confidence quickly with
              real-world examples and immediate feedback on your progress.
            </p>

            <blockquote className="mt-8 border-l-4 border-indigo-600 pl-4 italic text-gray-700">
              The best way to learn JavaScript is by doing. This tutorial gets
              you coding from day one.
            </blockquote>
          </div>
          <figure className="mt-16">
            <Image
              alt="JavaScript learning environment"
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3"
              width={1310}
              height={873}
              className="aspect-video rounded-xl bg-gray-50 object-cover"
            />
            <figcaption className="mt-4 flex gap-x-2 text-sm/6 text-gray-500">
              <Info
                aria-hidden="true"
                className="mt-0.5 size-5 flex-none text-gray-300"
              />
              Faucibus commodo massa rhoncus, volutpat.
            </figcaption>
          </figure>
        </div>
      </div>
    </>
  );
}
