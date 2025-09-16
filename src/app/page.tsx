"use client";

import { Button } from "@/components/ui/button";
import { useAuthActions } from "@convex-dev/auth/react";
import { useConvexAuth } from "convex/react";
import { useEffect } from "react";

export default function Home() {
  const { signOut } = useAuthActions();
  const { isAuthenticated, isLoading } = useConvexAuth();

  useEffect(() => {
    console.log("=== CLIENT AUTH STATE ===");
    console.log("isAuthenticated:", isAuthenticated);
    console.log("isLoading:", isLoading);
  }, [isAuthenticated, isLoading]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    console.log(
      "Client thinks user is NOT authenticated, this might cause redirects"
    );
  }

  return (
    <div>
      <div>Logged in!</div>
      <div>
        Auth state: {isAuthenticated ? "Authenticated" : "Not authenticated"}
      </div>
      <div>Loading: {isLoading ? "Yes" : "No"}</div>
      <Button onClick={() => signOut()}>Sign Out</Button>
    </div>
  );
}
