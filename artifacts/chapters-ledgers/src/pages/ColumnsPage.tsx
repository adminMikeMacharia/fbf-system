import { foundersArenaColumns } from "@/data/columns";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Newspaper, ExternalLink, Calendar } from "lucide-react";

export default function ColumnsPage() {
  const sorted = [...foundersArenaColumns].sort((a, b) => a.sortDate.localeCompare(b.sortDate));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-display font-bold uppercase tracking-wide mb-3">Founders Arena Columns</h1>
        <p className="text-muted-foreground max-w-2xl font-body">
          Archive of {foundersArenaColumns.length} Business Daily newspaper columns written by
          Mike Macharia. Published weekly from June 2025.
        </p>
        <div className="flex items-center gap-3 mt-4">
          <Badge variant="outline" className="text-sm font-label">
            <Newspaper className="w-3.5 h-3.5 mr-1.5" />
            {foundersArenaColumns.length} Columns
          </Badge>
          <Badge variant="outline" className="text-sm font-label">
            <Calendar className="w-3.5 h-3.5 mr-1.5" />
            June 2025 – March 2026
          </Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {sorted.map((col, i) => (
          <a
            key={i}
            href="https://foundersbattlefield.org"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline"
          >
            <Card className="hover:shadow-md transition-all hover:border-[#003153]/30 cursor-pointer group border-l-4 border-l-[#F40009]">
              <CardContent className="p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#003153]/10 flex items-center justify-center shrink-0">
                  <Newspaper className="w-5 h-5 text-[#003153]" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-label font-medium truncate">{col.title}</p>
                  <p className="text-xs text-muted-foreground font-body">{col.date}</p>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-[#F40009] transition-colors shrink-0" />
              </CardContent>
            </Card>
          </a>
        ))}
      </div>
    </div>
  );
}
