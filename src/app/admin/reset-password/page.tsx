"use client";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function AdminResetPasswordPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [form, setForm] = useState({ username: "", newPassword: "" });
  const [loading, setLoading] = useState(false);

  // Only allow admins
  if (status === "loading") return <div>Checking permissions...</div>;
  if (!session || (session.user as any)?.role !== "admin") {
    if (typeof window !== "undefined") router.replace("/dashboard");
    return <div>Redirecting...</div>;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch("/api/admin-reset-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });
    const data = await res.json();
    setLoading(false);
    if (data.success) {
      toast.success("Password reset successfully");
      setForm({ username: "", newPassword: "" });
    } else {
      toast.error(data.error || "Failed to reset password");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-3xl font-bold text-center mt-8">Admin: Reset User Password</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md mt-8 space-y-4">
        <input name="username" value={form.username} onChange={handleChange} required placeholder="Username" className="w-full px-4 py-2 border rounded" />
        <input name="newPassword" value={form.newPassword} onChange={handleChange} required type="password" placeholder="New Password" className="w-full px-4 py-2 border rounded" />
        <button type="submit" className="w-full bg-primary text-white py-2 rounded" disabled={loading}>
          {loading ? "Resetting..." : "Reset Password"}
        </button>
      </form>
    </div>
  );
}
