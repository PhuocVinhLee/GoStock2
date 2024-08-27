"use client"

import { useRouter } from "next/navigation";


const useLogout = () => {
  const router = useRouter();

  const logout = async () => {
    try {
      await fetch('/api/auth/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // Redirect to login or home page after successful logout
      router.push('/login'); // Change to the route where you want to redirect
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return { logout };
};

export default useLogout;
