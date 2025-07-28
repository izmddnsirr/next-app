import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-green-100">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <p className="text-gray-700">You are now logged in (simulated).</p>
      <Link href="/">
        <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900">
          ← Back to Home
        </button>
      </Link>
    </div>
  );
}