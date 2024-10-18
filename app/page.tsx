import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

export default async function Home() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user) {
    redirect("/signin");
  }

  return (
    <main className="min-h-screen flex flex-col gap-4 items-center justify-center">
      <div className="flex flex-col max-w-2xl border rounded-lg shadow-lg p-4">
        {
          data.user.id
        }
      </div>
    </main>
  );
}  