import Link from "next/link";
import { redirect } from "next/navigation";
import { signin } from "@/actions/auth/actions";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card"; 
import { createServerSide } from "@/utils/supabase/server";

export default async function SignInPage() {
  const supabase = createServerSide();
  const { data } = await supabase.auth.getUser();

  if (data?.user) {
    redirect("/");
  }

  // const signinWithGoogle = async () => {
  //   const { data, error } = await supabase.auth.signInWithOAuth({
  //     provider: 'google',
  //     options: {
  //       redirectTo: 'http://localhost:3000/profile',
  //       queryParams: {
  //         access_type: 'offline',
  //         prompt: 'consent',
  //       },
  //     },
  //   })

  // }

  return (
    <main className="flex min-h-[calc(100vh-74px)] flex-col items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <div className="flex flex-col items-center space-y-2">
            <h1 className="text-3xl font-bold">Welcome</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Enter your email below to login to your account
            </p>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                placeholder="m@example.com"
                required
                type="email"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" name="password" required type="password" />
            </div>
            <Button formAction={signin} className="w-full">Sign in</Button>
            {/* <Button onClick={signinWithGoogle} className="w-full">Google</Button> */}
          </form>
          <Separator />
          {/* <div className="space-y-4">
            <Button className="w-full" variant="outline">
              Sign in with Google
            </Button>
          </div> */}
        </CardContent>
        <CardFooter className="flex flex-col md:flex-row">
          <Link className="text-sm underline" href="/forgotpassword">
            Reset your password
          </Link>
          <Link className="text-sm md:ml-auto underline" href="/signup">
            Don&apos;t have an account? Sign up here
          </Link>
        </CardFooter>
      </Card>
    </main>
  );
}
