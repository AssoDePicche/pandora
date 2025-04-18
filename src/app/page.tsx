import Link from "next/link"

export default function App() {
  return (
    <div className="hero">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">
            Your inventory at your fingertips
          </h1>
          <p className="py-6">
            Box Inc provides software that makes life as easy as possible for entrepreneurs in the new world. <Link href="/signup" className="underline">Sign up</Link> and start managing your business in just a few clicks.
          </p>
        </div>
      </div>
    </div>
  );
}
