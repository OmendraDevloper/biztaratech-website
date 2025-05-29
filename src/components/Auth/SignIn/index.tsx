"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import Logo from "@/components/Layout/Header/Logo"
import Loader from "@/components/Common/Loader";

const Signin = () => {
  const router = useRouter();

  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
    checkboxToggle: false,
  });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const loginUser = (e: any) => {
    e.preventDefault();

    setLoading(true);
    setErrorMessage("");
    
    // For testing purposes, simulate login error if no credentials
    if (!loginData.username || !loginData.password) {
      setLoading(false);
      const errorMsg = "Please enter both username and password";
      setErrorMessage(errorMsg);
      toast.error(errorMsg);
      return;
    }
    
    // First check if user exists with this username or email
    fetch(`/api/check-user?identifier=${encodeURIComponent(loginData.username)}`)
      .then(res => res.json())
      .then(data => {
        if (!data.exists) {
          setLoading(false);
          const errorMsg = "User not found";
          setErrorMessage(errorMsg);
          toast.error(errorMsg);
          console.log("User not found for:", loginData.username);
          return;
        }
        
        console.log("User exists, attempting sign in");
        // If user exists, try to sign in
        signIn("credentials", { ...loginData, redirect: false })
          .then((callback) => {
            console.log("Sign in callback:", callback);
            
            if (callback?.ok) {
              toast.success("Login successful");
              setLoading(false);
              // Fetch session to get user role
              import('next-auth/react').then(({ getSession }) => {
                getSession().then(session => {
                  const role = (session?.user as any)?.role;
                  if (role === 'admin') {
                    router.push('/dashboard');
                  } else {
                    router.push('/dashboard');
                  }
                });
              });
            } else {
              // If sign-in wasn't successful, password was wrong
              console.log("Password incorrect for user:", loginData.username);
              const errorMsg = "Wrong password";
              setErrorMessage(errorMsg);
              toast.error(errorMsg);
              setLoading(false);
            }
          })
          .catch((err) => {
            setLoading(false);
            console.log("Authentication error:", err.message);
            const errorMsg = "Authentication error. Please try again.";
            setErrorMessage(errorMsg);
            toast.error(errorMsg);
          });
      })
      .catch(err => {
        setLoading(false);
        console.error("Error checking user:", err);
        const errorMsg = "Authentication error. Please try again.";
        setErrorMessage(errorMsg);
        toast.error(errorMsg);
      });
  };

  return (
    <>
      <div className="mb-10 text-center mx-auto inline-block max-w-[160px]">
        <Logo />
      </div>
      <form onSubmit={loginUser}>
        <div className="mb-[22px]">
          <input
            type="text"
            placeholder="Username or Email"
            onChange={(e) =>
              setLoginData({ ...loginData, username: e.target.value })
            }
            required
            className="w-full rounded-md border border-black/20 border-solid bg-transparent px-5 py-3 text-base text-dark outline-none transition placeholder:text-grey focus:border-primary focus-visible:shadow-none text-black dark:focus:border-primary"
          />
        </div>
        <div className="mb-[22px]">
          <input
            type="password"
            placeholder="Password"
            onChange={(e) =>
              setLoginData({ ...loginData, password: e.target.value })
            }
            required
            className="w-full rounded-md border border-black/20 border-solid bg-transparent px-5 py-3 text-base text-dark outline-none transition placeholder:text-grey focus:border-primary focus-visible:shadow-none text-black dark:focus:border-primary"
          />
        </div>
        {errorMessage && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md">
            <p className="text-red-500 text-sm flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {errorMessage}
            </p>
          </div>
        )}
        <div className="mb-9">
          <button
            type="submit"
            className="bg-primary w-full py-3 rounded-lg text-18 font-medium border border-primary hover:text-primary hover:bg-transparent"
          >
            Sign In {loading && <Loader />}
          </button>
        </div>
      </form>
    </>
  );
};

export default Signin;