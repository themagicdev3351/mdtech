import { createServerSide } from "@/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const supabase = createServerSide();

  const { password, passwordConfirm, code } = await req.json();

  if (code) {
    NextResponse.json({ error: "token/code is missing" }, { status: 500 });
  }
  if (password !== passwordConfirm) {
    NextResponse.json({ error: "not match password" }, { status: 500 });
  }

  const session = await supabase.auth.exchangeCodeForSession(code);
  const { data: user } = await supabase.auth.getUser();
  console.log(code, password, "password");

  try {
    const { data: user, error } = await supabase.auth.updateUser({
      password: password,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 401 });
    }

    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
