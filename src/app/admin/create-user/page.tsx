"use client";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { courseData } from "@/app/api/data";

export default function AdminCreateUserPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    role: "student",
    mobile: ""
  });
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  // Webinar slot states
  const [webinarSlot, setWebinarSlot] = useState({
    course: "",
    date: "",
    time: ""
  });
  const [webinarLoading, setWebinarLoading] = useState(false);
  const [webinarSuccess, setWebinarSuccess] = useState("");
  const [webinarError, setWebinarError] = useState("");

  // Only allow admins
  if (status === "loading") return <div>Checking permissions...</div>;
  if (!session || (session.user as any)?.role !== "admin") {
    if (typeof window !== "undefined") router.replace("/dashboard");
    return <div>Redirecting...</div>;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg("");
    setErrorMsg("");
    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });
    const data = await res.json();
    setLoading(false);
    if (data.success) {
      toast.success("User created successfully");
      setSuccessMsg("User created successfully!");
      setForm({ name: "", email: "", username: "", password: "", role: "student", mobile: "" });
    } else {
      toast.error(data.error || "Failed to create user");
      setErrorMsg(data.error || "Failed to create user");
    }
  };

  const handleWebinarSlotChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setWebinarSlot({ ...webinarSlot, [e.target.name]: e.target.value });
  };

  const handleWebinarSlotSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setWebinarLoading(true);
    setWebinarSuccess("");
    setWebinarError("");
    try {
      const res = await fetch("/api/webinar-register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slot: webinarSlot, adminSlot: true }),
      });
      const data = await res.json();
      if (data.success) {
        setWebinarSuccess("Webinar slot added successfully!");
        setWebinarSlot({ course: "", date: "", time: "" });
      } else {
        setWebinarError(data.error || "Failed to add webinar slot");
      }
    } catch (err: any) {
      setWebinarError(err.message || "Unknown error");
    }
    setWebinarLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-3xl font-bold text-center mt-8">Admin: Create User</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md mt-8 space-y-4">
        <input name="name" value={form.name} onChange={handleChange} required placeholder="Name" className="w-full px-4 py-2 border rounded" />
        <input name="email" value={form.email} onChange={handleChange} required type="email" placeholder="Email" className="w-full px-4 py-2 border rounded" />
        <input name="username" value={form.username} onChange={handleChange} required placeholder="Username" className="w-full px-4 py-2 border rounded" />
        <input name="mobile" value={form.mobile} onChange={handleChange} required placeholder="Mobile Number" className="w-full px-4 py-2 border rounded" />
        <input name="password" value={form.password} onChange={handleChange} required type="password" placeholder="Password" className="w-full px-4 py-2 border rounded" />
        <select name="role" value={form.role} onChange={handleChange} className="w-full px-4 py-2 border rounded">
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit" className="w-full bg-primary text-white py-2 rounded" disabled={loading}>
          {loading ? "Creating..." : "Create User"}
        </button>
      </form>
      {successMsg && <div className="text-green-600 mt-4 text-lg">{successMsg}</div>}
      {errorMsg && <div className="text-red-600 mt-4 text-lg">{errorMsg}</div>}

      {/* Webinar Slot Management */}
      <div className="w-full max-w-md mt-12 p-6 border rounded bg-white shadow">
        <h2 className="text-2xl font-bold mb-4 text-center">Add Webinar Slot</h2>
        <form onSubmit={handleWebinarSlotSubmit} className="space-y-4">
          <select name="course" value={webinarSlot.course} onChange={handleWebinarSlotChange} required className="w-full px-4 py-2 border rounded">
            <option value="">Select Course</option>
            {courseData.map((course, idx) => (
              <option key={idx} value={course.heading}>{course.heading}</option>
            ))}
          </select>
          <input type="date" name="date" value={webinarSlot.date} onChange={handleWebinarSlotChange} required className="w-full px-4 py-2 border rounded" />
          <input type="time" name="time" value={webinarSlot.time} onChange={handleWebinarSlotChange} required className="w-full px-4 py-2 border rounded" />
          <button type="submit" className="w-full bg-primary text-white py-2 rounded" disabled={webinarLoading}>
            {webinarLoading ? "Adding..." : "Add Webinar Slot"}
          </button>
        </form>
        {webinarSuccess && <div className="text-green-600 mt-4 text-lg text-center">{webinarSuccess}</div>}
        {webinarError && <div className="text-red-600 mt-4 text-lg text-center">{webinarError}</div>}
      </div>
    </div>
  );
}
