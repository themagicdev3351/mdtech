"use client";
import { redirect } from "next/navigation";
import { signout } from "@/actions/auth/actions";
import { Button } from "@/components/ui/button";

export default function SignOutButton() {
  return (
    <Button
      variant="outline"
      onClick={async () => {
        await signout();
        redirect("/signin")
      }}
    >
      Sign Out
    </Button>
  );
}
