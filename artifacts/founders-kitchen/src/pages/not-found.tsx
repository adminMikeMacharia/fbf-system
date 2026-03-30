import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background">
      <div className="text-center px-4">
        <h1 className="text-4xl font-display font-bold text-foreground mb-2">404</h1>
        <p className="text-sm text-muted-foreground mb-6">Page not found</p>
        <Link href="/" className="text-sm text-[#F40009] hover:text-[#F40009]/80 underline underline-offset-4">
          Back to Vision Board
        </Link>
      </div>
    </div>
  );
}
