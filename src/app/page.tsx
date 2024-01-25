import { redirect } from "next/navigation";

export default function HomePage() {
  // Redirecciona automaticamente al path asignado
  redirect("/dashboard/main");
}
