"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Signup() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("receptionist");
  const [message, setMessage] = useState("");
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const handleSignup = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password, role }),
    });
    const data = await res.json();
    if (res.ok) {
      setMessage(data.message);
      setTimeout(() => router.push("/login"), 1500);
    } else {
      setMessage(data.error);
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
          Create Account
        </h2>
        {message && (
          <p className="text-center text-red-500 mb-4 font-medium animate-pulse">{message}</p>
        )}
        <form onSubmit={handleSignup} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="p-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-300 outline-none transition duration-300 shadow-sm hover:shadow-md"
          />
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
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="p-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-300 outline-none transition duration-300 shadow-sm hover:shadow-md"
          >
            <option value="admin">Admin</option>
            <option value="receptionist">Receptionist</option>
          </select>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-xl shadow-lg transform transition duration-300 hover:scale-105"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center text-gray-500 mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-blue-500 font-medium hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
