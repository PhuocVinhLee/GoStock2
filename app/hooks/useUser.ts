"use client"
import { useEffect, useState } from 'react';

interface UserInfo {
  email: string;
}

function useUser() {
  const [user, setUser] = useState<UserInfo | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/auth/user');
        const data = await response.json();

        if (data.authenticated) {
          setUser(data.user); // Set user data
        } else {
          setUser(null); // User is not authenticated
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user info:', error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return { user, loading };
}

export default useUser;
