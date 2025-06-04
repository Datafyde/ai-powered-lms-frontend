"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

type Props = {};

const Register = (props: Props) => {
  const router = useRouter();
  const [form, setForm] = useState({
    orgName: "",
    email: "",
    password: "",
    contactPerson: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/verification/tenant");
  };

  return (
    <div className="max-w-md mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold mb-6">Register Your Organization</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="orgName"
          placeholder="Organization Name"
          className="w-full border p-2 rounded"
          onChange={handleChange}
          required
        />
        <input
          name="contactPerson"
          placeholder="Contact Person Name"
          className="w-full border p-2 rounded"
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email Address"
          className="w-full border p-2 rounded"
          onChange={handleChange}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          className="w-full border p-2 rounded"
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
