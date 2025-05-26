"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useState } from "react";
import Loader from "@/components/Common/Loader";
import { hash } from "bcryptjs";

const SignUp = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState("student");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    const data = new FormData(e.currentTarget);
    const value = Object.fromEntries(data.entries());
    // Ensure role is included from state
    value.role = role;
    // Hash the password before sending to API
    const hashedPassword = await hash(value.password as string, 10);
    const finalData = { ...value, password: hashedPassword };

    fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(finalData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success("Successfully registered");
          setLoading(false);
          router.push("/signin");
        } else {
          toast.error(data.error || "Registration failed");
          setLoading(false);
        }
      })
      .catch((err) => {
        toast.error(err.message);
        setLoading(false);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-3xl font-bold text-center mt-8">Sign Up Disabled</h1>
      <p className="mt-6 text-lg text-center text-primary">
        Account creation is only available to administrators. Please contact your
        admin to get access.
      </p>
      <Link
        href="/signin"
        className="mt-4 text-primary underline"
      >
        Go to Sign In
      </Link>
    </div>
  );
};

export default SignUp;
