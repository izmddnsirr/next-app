import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm text-center">
        <h1 className="text-2xl font-bold mb-4">Login Page</h1>
        <form className="flex flex-col gap-4 mb-4">
          <input
            type="email"
            placeholder="Email"
            className="border px-4 py-2 rounded"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="border px-4 py-2 rounded"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white rounded py-2 hover:bg-blue-700"
          >
            Login
          </button>
        </form>
        <Link href="/">
          <span className="text-sm text-blue-600 hover:underline">
            ← Back to Home
          </span>
        </Link>
      </div>
    </div>
  );
}
