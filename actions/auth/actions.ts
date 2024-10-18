"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createServerSide } from "@/utils/supabase/server";

export async function signup(formData: FormData) {
  const supabase = createServerSide();

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signUp(data);
  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/", "layout");
  redirect("/signin");
}

export async function signin(formData: FormData) {
  const supabase = createServerSide();

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { data: user, error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/profile", "layout");
  redirect("/profile");
}

export async function resetPassword(formData: FormData) {
  const supabase = createServerSide();

  const data = {
    email: formData.get("email") as string,
  };

  const { error } = await supabase.auth.resetPasswordForEmail(data.email, {
    redirectTo: `${process.env.NEXT_PUBLIC_API_URL}/updatepassword`,
  });

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/", "layout");
  redirect("/signin");
}

export async function updatePassword(formData: FormData, code: string) {
  const supabase = createServerSide();

  const password = String(formData.get("password")).trim();
  const passwordConfirm = String(formData.get("passwordConfirm")).trim();

  if (password !== passwordConfirm) {
    throw new Error("not match your password");
  }
  const session = await supabase.auth.exchangeCodeForSession(code);
  const { data: user } = await supabase.auth.getUser();
  console.log(password, user, "password");

  const { error } = await supabase.auth.updateUser({
    password: password,
  });

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/", "layout");
  redirect("/signin");
}

export async function signout() {
  const supabase = createServerSide();

  let { error } = await supabase.auth.signOut();

  if (error) {
    throw new Error(error.message);
  }

  redirect("/signin");
}
