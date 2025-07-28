import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-gray-100">
      <h1 className="text-3xl font-bold">Welcome to My App</h1>
      <div className="flex gap-4">
        <Link href="/login">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Go to Login
          </button>
        </Link>
        <Link href="/dashboard">
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
            Go to Dashboard
          </button>
        </Link>
      </div>
    </div>
  );
}