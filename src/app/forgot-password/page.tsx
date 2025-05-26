"use client";
import { useState } from "react";
import Link from "next/link";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSubmitted(false);
    if (!email) {
      setError("Please enter your email address.");
      return;
    }
    try {
      const res = await fetch("/api/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setError(data.error || "Something went wrong.");
      }
    } catch (err: any) {
      setError(err.message || "Something went wrong.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-3xl font-bold text-center mt-8">Forgot Password</h1>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md mt-8 space-y-4"
      >
        <input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-2 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-primary text-white py-2 rounded"
        >
          Send Reset Link
        </button>
      </form>
      {error && <div className="text-red-500 mt-4">{error}</div>}
      {submitted && (
        <div className="text-green-600 mt-4">
          If an account with that email exists, a password reset link has been sent.
          <br />
          <a
            href={`/forgot-password/reset?email=${encodeURIComponent(email)}`}
            className="text-primary underline"
          >
            Click here to reset your password (demo)
          </a>
        </div>
      )}
      <Link
        href="/signin"
        className="mt-6 text-primary underline"
      >
        Back to Sign In
      </Link>
    </div>
  );
}
