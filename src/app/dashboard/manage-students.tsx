"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

export default function ManageStudents() {
  const [students, setStudents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [uploadMsg, setUploadMsg] = useState("");
  const [uploadedFileUrl, setUploadedFileUrl] = useState("");
  const { data: session } = useSession();

  useEffect(() => {
    fetch("/api/students")
      .then((res) => res.json())
      .then((data) => {
        setStudents(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load students");
        setLoading(false);
      });
  }, []);

  const removeStudent = async (id: string) => {
    if (!window.confirm("Are you sure you want to remove this student?")) return;
    const res = await fetch("/api/students/remove", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ studentId: id }),
    });
    const data = await res.json();
    if (data.success) {
      setStudents(students.filter((s) => s._id !== id));
    } else {
      alert(data.error || "Failed to remove student");
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setUploadMsg("");
    setUploadedFileUrl("");
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append('file', file);
      const res = await fetch('/api/students/upload', {
        method: 'POST',
        body: formData
      });
      const data = await res.json();
      if (data.success) {
        setUploadMsg(`File '${file.name}' uploaded successfully!`);
        setUploadedFileUrl(data.url);
      } else {
        setUploadMsg(data.error || 'File upload failed.');
      }
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Manage Students</h2>
      {loading && <div>Loading students...</div>}
      {error && <div className="text-red-600">{error}</div>}
      <ul className="mb-4">
        {students.map((s, i) => (
          <li key={i} className="mb-2 flex items-center justify-between">
            <span>
              {s.name} ({s.email})
            </span>
            <button
              className="ml-4 bg-red-500 text-white px-2 py-1 rounded"
              onClick={() => removeStudent(s._id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <div className="mb-4">
        <label className="block mb-2 font-semibold">Upload File for Students:</label>
        <input type="file" onChange={handleFileUpload} className="mb-2" />
        {uploadMsg && <div className="text-green-600">{uploadMsg}</div>}
        {uploadedFileUrl && (
          <div className="mt-2">
            <a href={uploadedFileUrl} target="_blank" rel="noopener noreferrer" className="text-primary underline">View Uploaded File</a>
          </div>
        )}
      </div>
      <div className="mb-4">Feedback features coming soon.</div>
    </div>
  );
}
