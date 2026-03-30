import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Mic,
  FileAudio,
  LayoutList,
  Database,
  PenTool,
  Palette,
  CheckCircle2,
  Send,
  ArrowRight,
} from "lucide-react";

const pipelineSteps = [
  {
    step: 1,
    title: "Source",
    description: "Record Founders Battlefield podcast episodes with real founders sharing raw, unfiltered stories across the 40 AFOS episode themes.",
    icon: Mic,
    team: "Mike Macharia (Host)",
    color: "#C45A3C",
  },
  {
    step: 2,
    title: "Transcribe",
    description: "AI-assisted transcription of full episodes using speech-to-text models, producing accurate text from multi-speaker podcast recordings.",
    icon: FileAudio,
    team: "AI Pipeline + Editorial",
    color: "#003153",
  },
  {
    step: 3,
    title: "Structure",
    description: "Map transcribed content to the AFOS matrix — identifying ARC themes, mindset dimensions, emotional threads, strategic insights, and spiritual elements.",
    icon: LayoutList,
    team: "Mugumo (Narrative Architect)",
    color: "#2AAF6A",
  },
  {
    step: 4,
    title: "Ledger Entry",
    description: "Create the formal Founder Ledger entry — cataloguing each episode's data across all 11 matrix columns with suggested books and case studies.",
    icon: Database,
    team: "Mugumo + Mike",
    color: "#3A8ACA",
  },
  {
    step: 5,
    title: "Editorial",
    description: "Transform raw transcript and ledger data into polished book chapters. Narrative editing, voice consistency, and story architecture for each volume.",
    icon: PenTool,
    team: "Mugumo (Creative Director)",
    color: "#8A5ABF",
  },
  {
    step: 6,
    title: "Design",
    description: "Book cover design, interior layout, typography, and visual identity for each volume. ARC color theming and brand consistency across the series.",
    icon: Palette,
    team: "John Gikanga (Design Lead)",
    color: "#F4C430",
  },
  {
    step: 7,
    title: "Review",
    description: "Executive review of complete chapters, editorial quality, factual accuracy, and alignment with the AFOS framework and FBF brand standards.",
    icon: CheckCircle2,
    team: "Mike Macharia (Final Approval)",
    color: "#C45A3C",
  },
  {
    step: 8,
    title: "Publish",
    description: "Final production, printing, digital distribution, and launch coordination. Business Daily column syndication and reading club programming.",
    icon: Send,
    team: "Full Team",
    color: "#003153",
  },
];

export default function PipelinePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-display font-bold uppercase tracking-wide mb-3">Production Pipeline</h1>
        <p className="text-muted-foreground max-w-2xl">
          The 8-step AI-assisted workflow that transforms raw podcast conversations
          into published books and Business Daily columns.
        </p>
      </div>

      <div className="relative">
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

        <div className="space-y-6 lg:space-y-0">
          {pipelineSteps.map((step, i) => {
            const Icon = step.icon;
            const isLeft = i % 2 === 0;

            return (
              <div key={step.step} className="lg:grid lg:grid-cols-2 lg:gap-8 lg:py-6 relative">
                <div className={`hidden lg:flex absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full items-center justify-center text-white text-sm font-bold z-10`} style={{ backgroundColor: step.color }}>
                  {step.step}
                </div>

                <div className={`${isLeft ? "" : "lg:col-start-2"}`}>
                  <Card className="border-l-4 hover:shadow-md transition-shadow" style={{ borderLeftColor: step.color }}>
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3">
                        <div className="lg:hidden w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ backgroundColor: step.color }}>
                          {step.step}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <Icon className="w-4 h-4" style={{ color: step.color }} />
                            <CardTitle className="text-lg font-label font-semibold">{step.title}</CardTitle>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-3">{step.description}</p>
                      <Badge variant="outline" className="text-xs">
                        {step.team}
                      </Badge>
                    </CardContent>
                  </Card>
                </div>

                {isLeft && <div className="hidden lg:block" />}
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-12 bg-muted/30 rounded-xl p-6 border border-border/50">
        <h3 className="text-lg font-label font-semibold mb-4">Pipeline Summary</h3>
        <div className="flex flex-wrap items-center gap-2">
          {pipelineSteps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={step.step} className="flex items-center gap-2">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-white" style={{ backgroundColor: step.color }}>
                  <Icon className="w-3.5 h-3.5" />
                  {step.title}
                </div>
                {i < pipelineSteps.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-muted-foreground" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
