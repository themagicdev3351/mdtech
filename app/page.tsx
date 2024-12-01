import { redirect } from "next/navigation";
import { createServerSide } from "@/utils/supabase/server";

export default async function Home() {
  const supabase = createServerSide();

  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user) {
    redirect("/signin");
  }

  return (
    <main className="min-h-[calc(100vh-74px)] flex flex-col gap-4 items-center justify-center">
      <div className="flex flex-col max-w-2xl border rounded-lg shadow-lg p-4">
        login user email: {" "}
        {
          data.user.email
        }
        final
      </div>
    </main>
  );
}  