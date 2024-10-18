import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
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
import { updatePassword } from "@/actions/auth/actions";

export default async function ForgotPasswordPage() {
    const supabase = createClient();
    const { data } = await supabase.auth.getUser();

    if (data?.user) {
        redirect("/");
    }


    return (
        <main className="flex min-h-screen flex-col items-center justify-center">
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
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" name="password" required type="password" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="passwordConfirm">Confirm Password </Label>
                            <Input id="passwordConfirm" name="passwordConfirm" required type="password" />
                        </div>
                        <Button formAction={updatePassword} className="w-full">Update Password</Button>
                    </form>
                    <Separator />
                    {/* <div className="space-y-4">
            <Button className="w-full" variant="outline">
              Sign in with Google
            </Button>
          </div> */}
                </CardContent>
                <CardFooter className="flex flex-col space-y-2">
                    <Link className="text-sm underline" href="/signin">
                        have an account? Sign in here
                    </Link>
                </CardFooter>
            </Card>
        </main>
    );
}
