"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function TeachPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return;
    // Only allow teachers and admins
    const role = (session?.user as any)?.role;
    if (!role || (role !== "teacher" && role !== "admin")) {
      router.replace("/dashboard");
    }
  }, [session, status, router]);

  if (status === "loading") {
    return <div className="flex items-center justify-center min-h-[60vh]">Checking permissions...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-3xl font-bold text-center mt-8">Live Teaching Room</h1>
      <div className="flex flex-col items-center gap-6 mt-8">
        <Link href="/dashboard">
          <button className="bg-primary text-white px-6 py-3 rounded-lg text-lg font-semibold">
            Go to Dashboard
          </button>
        </Link>
        <iframe
          src="https://meet.jit.si/MulesoftWebinaar"
          allow="camera; microphone; fullscreen; display-capture"
          style={{
            width: "100%",
            maxWidth: "900px",
            height: "70vh",
            border: 0,
            marginTop: "2rem",
            borderRadius: "1rem"
          }}
          title="Live Teaching Room"
        />
      </div>
    </div>
  );
}
