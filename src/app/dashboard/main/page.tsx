import { SimpleWidget, WidgetGrid } from "@/components";

export default function MainPage() {
  return (
    <div className="text-black p-3">
      <h1 className="mt-2 text-3xl">Dashboard</h1>

      <span className="text-xl">Descripción general</span>

      <div className="flex flex-wrap items-center justify-center">
        <WidgetGrid />
      </div>
    </div>
  );
}
