import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSessionStore } from '../../stores/session.store';

const AuthWrapper = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const { setSession } = useSessionStore();

  const router = useRouter();
  let intervalId;

  const checkSession = async () => {
    try {
      const response = await fetch('/api/v1/secure/validate-console');
      const data = await response.json();
      if (data.ok) {
        setLoading(false);
        setSession(data);
      } else {
        setLoading(false);
        setSession(null);
        router.push('/log-in');
      }
    } catch (error) {
      console.error('Error while checking session:', error);
    }
  };

  useEffect(() => {
    checkSession();
    intervalId = setInterval(checkSession, 30000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center">
            <img
              className="h-16 w-auto"
              src="https://bhoyxrelzzohrygasyjt.supabase.co/storage/v1/object/public/public/logo.png"
              alt="NineMbs Studio"
            />
          </div>
          <div className="mt-4 text-2xl font-bold txt1">NineMbs Studio</div>
        </div>
        <div className="mt-4 text-sm font-medium txt1">Loading...</div>
      </div>
    )
  }

  return children;
}

export default AuthWrapper;