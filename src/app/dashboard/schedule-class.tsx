"use client";
import { useState } from "react";
import { useSession } from "next-auth/react";

export default function ScheduleClass() {
  const { data: session } = useSession();
  const [form, setForm] = useState({
    title: "",
    date: "",
    time: ""
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);
    if (!session?.user) {
      setError("You must be logged in as a teacher to schedule a class.");
      return;
    }
    const res = await fetch("/api/classes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, teacher: session.user.name || session.user.email })
    });
    const data = await res.json();
    if (data.success) {
      setSuccess(true);
      setForm({ title: "", date: "", time: "" });
    } else {
      setError(data.error || "Failed to schedule class.");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Schedule New Class</h2>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <input name="title" value={form.title} onChange={handleChange} required placeholder="Class Title" className="w-full px-4 py-2 border rounded" />
        <input name="date" value={form.date} onChange={handleChange} required type="date" className="w-full px-4 py-2 border rounded" />
        <input name="time" value={form.time} onChange={handleChange} required type="time" className="w-full px-4 py-2 border rounded" />
        <button type="submit" className="w-full bg-primary text-white py-2 rounded">Schedule</button>
      </form>
      {success && <div className="text-green-600 mt-4">Class scheduled successfully!</div>}
      {error && <div className="text-red-600 mt-4">{error}</div>}
    </div>
  );
}
