import { Link } from "wouter";
import { BookOpen } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center space-y-4">
        <BookOpen className="w-16 h-16 mx-auto text-muted-foreground/40" />
        <h1 className="text-3xl font-display font-bold uppercase">Page Not Found</h1>
        <p className="text-muted-foreground">This chapter hasn't been written yet.</p>
        <Link href="/" className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium no-underline hover:bg-primary/90 transition-colors">
          Back to Vision Board
        </Link>
      </div>
    </div>
  );
}
