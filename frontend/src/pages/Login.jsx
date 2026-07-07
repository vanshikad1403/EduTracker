import { GraduationCap } from "lucide-react";

export default function Login() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex">

      {/* Left Side */}
      <div className="hidden lg:flex w-1/2 items-center justify-center p-16">

        <div>

          <div className="flex items-center gap-4 mb-8">

            <div className="bg-blue-600 p-4 rounded-2xl">
              <GraduationCap size={45} color="white" />
            </div>

            <div>
              <h1 className="text-5xl font-bold text-blue-700">
                EduTracker
              </h1>

              <p className="text-gray-600 mt-2 text-lg">
                Centralized Course Tracking System
              </p>
            </div>

          </div>

          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900"
            className="rounded-3xl shadow-2xl"
            alt="Students"
          />

        </div>

      </div>

      {/* Right Side */}

      <div className="flex-1 flex justify-center items-center">

        <div className="bg-white w-[450px] rounded-3xl shadow-2xl p-12">

          <h2 className="text-4xl font-bold text-gray-800">
            Welcome Back 👋
          </h2>

          <p className="text-gray-500 mt-2">
            Login to continue
          </p>

          <div className="mt-10">

            <label className="text-sm font-semibold">
              University Email
            </label>

            <input
              type="email"
              placeholder="faculty@krmu.edu.in"
              className="w-full mt-2 border rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-500"
            />

          </div>

          <div className="mt-6">

            <label className="text-sm font-semibold">
              Password
            </label>

            <input
              type="password"
              placeholder="********"
              className="w-full mt-2 border rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-500"
            />

          </div>

          <button className="w-full bg-blue-600 text-white py-4 rounded-xl mt-8 hover:bg-blue-700 transition text-lg font-semibold">
            Login
          </button>

          <p className="text-center mt-6 text-gray-500">
            Faculty • Admin • Student
          </p>

        </div>

      </div>

    </div>
  );
}