"use client";
import { useState, useEffect } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res.error) {
      setError(res.error);
      console.log("error arh ah ",error)
    } else {
      if (res.ok) {
        // Redirect based on role
      console.log("hogyaaaa ",res.ok)

        const role = res?.user?.role;
        if (role === "admin") router.push("/dashboard");
        else if (role === "receptionist") router.push("/receptionist-dashboard");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-50 p-6">
      <div
        className={`bg-gradient-to-tr from-white to-blue-50 rounded-3xl shadow-2xl max-w-md w-full p-8 transform transition duration-700 ${
          animate ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        }`}
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6 tracking-wide">
          Welcome Back
        </h2>
        {error && (
          <p className="text-center text-red-500 mb-4 font-medium animate-pulse">{error}</p>
        )}
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="p-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-300 outline-none transition duration-300 shadow-sm hover:shadow-md"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="p-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-300 outline-none transition duration-300 shadow-sm hover:shadow-md"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-xl shadow-lg transform transition duration-300 hover:scale-105"
          >
            Login
          </button>
        </form>
        <p className="text-center text-gray-500 mt-4">
          Don't have an account?{" "}
          <a href="/signup" className="text-blue-500 font-medium hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}
