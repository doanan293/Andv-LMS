import { headers } from "next/headers";
import { LoginForm } from "./_components/LoginForm";
import { auth } from "@/lib/auth";

export default async function LoginPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  return <LoginForm />;
}
