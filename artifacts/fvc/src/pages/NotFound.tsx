import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#003153] text-white flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-display mb-2">Page Not Found</h2>
        <Link href="/" className="text-[#F40009] text-sm no-underline">← Back to FVC Home</Link>
      </div>
    </div>
  );
}
