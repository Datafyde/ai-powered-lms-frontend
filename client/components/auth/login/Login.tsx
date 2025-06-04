"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

type Props = {};

const Login = (props: Props) => {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    router.push("/dashboard/tenant");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Admin Login</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="email"
            type="email"
            placeholder="Email address"
            className="w-full border px-3 py-2 rounded"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="w-full border px-3 py-2 rounded"
            value={form.password}
            onChange={handleChange}
            required
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Login
          </button>
          <p className="text-sm text-center mt-4">
            <Link
              href="/forgot-password/tenant"
              className="text-blue-600 hover:underline"
            >
              Forgot your password?
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
