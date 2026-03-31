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
  Crown,
  Bot,
  Users,
  Lightbulb,
  BookOpen,
  Brain,
  MessageSquare,
  Zap,
  RefreshCw,
  Eye,
  Sparkles,
  FileText,
  Target,
  Link2,
} from "lucide-react";

const pipelineSteps = [
  {
    step: 1,
    title: "Source",
    description: "Record Founders Battlefield podcast episodes with real founders sharing raw, unfiltered stories across the 40 AFOS episode themes.",
    icon: Mic,
    team: "Mike Macharia (Host)",
    roleType: "visionary" as const,
    color: "#C45A3C",
  },
  {
    step: 2,
    title: "Transcribe",
    description: "AI-assisted transcription of full episodes using speech-to-text models, producing accurate text from multi-speaker podcast recordings.",
    icon: FileAudio,
    team: "AI Pipeline + Editorial",
    roleType: "ai" as const,
    color: "#003153",
  },
  {
    step: 3,
    title: "Structure",
    description: "Map transcribed content to the AFOS matrix — identifying ARC themes, mindset dimensions, emotional threads, strategic insights, and spiritual elements.",
    icon: LayoutList,
    team: "Mugumo (Narrative Architect)",
    roleType: "ai" as const,
    color: "#2AAF6A",
  },
  {
    step: 4,
    title: "Ledger Entry",
    description: "Create the formal Founder Ledger entry — cataloguing each episode's data across all 11 matrix columns with suggested books and case studies.",
    icon: Database,
    team: "Mugumo + Mike",
    roleType: "ai" as const,
    color: "#3A8ACA",
  },
  {
    step: 5,
    title: "Editorial",
    description: "Transform raw transcript and ledger data into polished book chapters. Narrative editing, voice consistency, and story architecture for each volume.",
    icon: PenTool,
    team: "Mugumo (Creative Director)",
    roleType: "ai" as const,
    color: "#8A5ABF",
  },
  {
    step: 6,
    title: "Design",
    description: "Book cover design, interior layout, typography, and visual identity for each volume. ARC color theming and brand consistency across the series.",
    icon: Palette,
    team: "John Gikanga (Design Lead)",
    roleType: "production" as const,
    color: "#F4C430",
  },
  {
    step: 7,
    title: "Review",
    description: "Executive review of complete chapters, editorial quality, factual accuracy, and alignment with the AFOS framework and FBF brand standards.",
    icon: CheckCircle2,
    team: "Mike Macharia (Final Approval)",
    roleType: "visionary" as const,
    color: "#C45A3C",
  },
  {
    step: 8,
    title: "Publish",
    description: "Final production, printing, digital distribution, and launch coordination. Business Daily column syndication and reading club programming.",
    icon: Send,
    team: "Full Team",
    roleType: "production" as const,
    color: "#003153",
  },
];

const roleTypeColors = {
  visionary: { bg: "#C45A3C", light: "#FEF2F2", border: "#FECACA", text: "#991B1B" },
  ai: { bg: "#2AAF6A", light: "#F0FDF4", border: "#BBF7D0", text: "#166534" },
  production: { bg: "#003153", light: "#EFF6FF", border: "#BFDBFE", text: "#1E3A5F" },
};

const roleTypeBadgeLabel = {
  visionary: "Visionary",
  ai: "AI Agent",
  production: "Production",
};

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

      <div className="mb-10 flex flex-wrap gap-4">
        {(["visionary", "ai", "production"] as const).map((type) => (
          <div key={type} className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold" style={{ backgroundColor: roleTypeColors[type].light, color: roleTypeColors[type].text, border: `1px solid ${roleTypeColors[type].border}` }}>
            <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: roleTypeColors[type].bg }} />
            {roleTypeBadgeLabel[type]}
            <span className="text-muted-foreground font-normal ml-1">
              Steps {pipelineSteps.filter(s => s.roleType === type).map(s => s.step).join(", ")}
            </span>
          </div>
        ))}
      </div>

      <div className="relative">
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

        <div className="space-y-6 lg:space-y-0">
          {pipelineSteps.map((step, i) => {
            const Icon = step.icon;
            const isLeft = i % 2 === 0;
            const rtc = roleTypeColors[step.roleType];

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
                      <div className="flex items-center gap-2 flex-wrap">
                        <Badge variant="outline" className="text-xs">
                          {step.team}
                        </Badge>
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold" style={{ backgroundColor: rtc.light, color: rtc.text, border: `1px solid ${rtc.border}` }}>
                          <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ backgroundColor: rtc.bg }} />
                          {roleTypeBadgeLabel[step.roleType]}
                        </span>
                      </div>
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

      <div className="mt-16 mb-4">
        <h2 className="text-2xl sm:text-3xl font-display font-bold uppercase tracking-wide mb-2">Roles & Responsibilities</h2>
        <p className="text-muted-foreground max-w-3xl">
          Three distinct forces drive the Chapters & Ledgers production pipeline. Understanding who does what — and how the AI agents bridge the visionary to the production team — is the key to the system working at scale.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">

        <div className="rounded-2xl border-2 overflow-hidden" style={{ borderColor: "#FECACA", backgroundColor: "#FFFBFB" }}>
          <div className="px-6 pt-6 pb-4" style={{ background: "linear-gradient(135deg, #C45A3C 0%, #A03D2A 100%)" }}>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                <Crown className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-white uppercase tracking-wide">The Visionary</h3>
                <p className="text-white/70 text-xs font-label">Mike Macharia</p>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              The origin of every idea, story, and strategic direction. The visionary sets the course — the rest of the system ensures it reaches the world.
            </p>
          </div>
          <div className="px-6 py-5 space-y-4">
            <div className="flex items-start gap-3">
              <Mic className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#C45A3C" }} />
              <div>
                <p className="text-sm font-semibold text-foreground">Content Creation</p>
                <p className="text-xs text-muted-foreground">Records podcast episodes, hosts conversations with founders, and generates the raw intellectual property that feeds the entire pipeline.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Lightbulb className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#C45A3C" }} />
              <div>
                <p className="text-sm font-semibold text-foreground">Strategic Vision</p>
                <p className="text-xs text-muted-foreground">Defines which themes matter, which stories to tell, and how the AFOS framework evolves. Every major editorial and brand decision traces back here.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Eye className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#C45A3C" }} />
              <div>
                <p className="text-sm font-semibold text-foreground">Final Approval</p>
                <p className="text-xs text-muted-foreground">Reviews completed chapters, editorial quality, and brand alignment before anything goes to print or distribution. The last checkpoint.</p>
              </div>
            </div>
            <div className="pt-3 border-t" style={{ borderColor: "#FECACA" }}>
              <p className="text-[11px] font-semibold uppercase tracking-wider mb-2" style={{ color: "#C45A3C" }}>Pipeline Presence</p>
              <div className="flex gap-2">
                <span className="px-2 py-1 rounded text-[10px] font-semibold text-white" style={{ backgroundColor: "#C45A3C" }}>Step 1 — Source</span>
                <span className="px-2 py-1 rounded text-[10px] font-semibold text-white" style={{ backgroundColor: "#C45A3C" }}>Step 7 — Review</span>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border-2 overflow-hidden relative" style={{ borderColor: "#BBF7D0", backgroundColor: "#F7FFF9" }}>
          <div className="absolute top-0 right-0 px-3 py-1 rounded-bl-lg text-[9px] font-bold uppercase tracking-wider text-white" style={{ backgroundColor: "#2AAF6A" }}>
            The Bridge
          </div>
          <div className="px-6 pt-6 pb-4" style={{ background: "linear-gradient(135deg, #2AAF6A 0%, #1D8A52 100%)" }}>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-white uppercase tracking-wide">AI Agents</h3>
                <p className="text-white/70 text-xs font-label">Mugumo & AI Pipeline</p>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              The critical bridge between the visionary and the production team. AI agents capture, interpret, structure, and translate Mike's thoughts into production-ready material — ensuring nothing is lost in translation.
            </p>
          </div>
          <div className="px-6 py-5 space-y-4">
            <div className="flex items-start gap-3">
              <Link2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#2AAF6A" }} />
              <div>
                <p className="text-sm font-semibold text-foreground">Visionary-to-Team Relay</p>
                <p className="text-xs text-muted-foreground">Continuously captures Mike's content, ideas, and strategic thinking — then translates it into structured briefs, frameworks, and directives the production team can act on immediately.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Brain className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#2AAF6A" }} />
              <div>
                <p className="text-sm font-semibold text-foreground">AFOS Intelligence</p>
                <p className="text-xs text-muted-foreground">Maps every conversation to the AFOS matrix — extracting mindset, emotional, strategic, social, and spiritual dimensions so the production team inherits a fully structured foundation.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FileText className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#2AAF6A" }} />
              <div>
                <p className="text-sm font-semibold text-foreground">Narrative Architecture</p>
                <p className="text-xs text-muted-foreground">Mugumo shapes raw transcripts into story architecture — building chapter outlines, identifying narrative arcs, matching books and case studies, and drafting editorial content.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <RefreshCw className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#2AAF6A" }} />
              <div>
                <p className="text-sm font-semibold text-foreground">Keeping Everyone Current</p>
                <p className="text-xs text-muted-foreground">AI agents keep the production team updated on Mike's latest thinking, priorities, and content shifts — acting as a persistent, always-on communication layer between the visionary and the team.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Sparkles className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#2AAF6A" }} />
              <div>
                <p className="text-sm font-semibold text-foreground">Scale Without Compromise</p>
                <p className="text-xs text-muted-foreground">Enables the visionary to operate at scale — one person's ideas processed into multiple formats, volumes, and distribution channels without losing depth or nuance.</p>
              </div>
            </div>
            <div className="pt-3 border-t" style={{ borderColor: "#BBF7D0" }}>
              <p className="text-[11px] font-semibold uppercase tracking-wider mb-2" style={{ color: "#2AAF6A" }}>Pipeline Presence</p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-2 py-1 rounded text-[10px] font-semibold text-white" style={{ backgroundColor: "#003153" }}>Step 2 — Transcribe</span>
                <span className="px-2 py-1 rounded text-[10px] font-semibold text-white" style={{ backgroundColor: "#2AAF6A" }}>Step 3 — Structure</span>
                <span className="px-2 py-1 rounded text-[10px] font-semibold text-white" style={{ backgroundColor: "#3A8ACA" }}>Step 4 — Ledger</span>
                <span className="px-2 py-1 rounded text-[10px] font-semibold text-white" style={{ backgroundColor: "#8A5ABF" }}>Step 5 — Editorial</span>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border-2 overflow-hidden" style={{ borderColor: "#BFDBFE", backgroundColor: "#F8FBFF" }}>
          <div className="px-6 pt-6 pb-4" style={{ background: "linear-gradient(135deg, #003153 0%, #001F3F 100%)" }}>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-white uppercase tracking-wide">Production Team</h3>
                <p className="text-white/70 text-xs font-label">Design, Print & Distribution</p>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              The execution engine. The production team receives structured, AI-processed material and transforms it into final published products — books, columns, and digital content.
            </p>
          </div>
          <div className="px-6 py-5 space-y-4">
            <div className="flex items-start gap-3">
              <Palette className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#003153" }} />
              <div>
                <p className="text-sm font-semibold text-foreground">Visual Design & Layout</p>
                <p className="text-xs text-muted-foreground">Book covers, interior typography, ARC color theming, and visual identity. John Gikanga leads design execution using brand guidelines established through the FBF brand system.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <BookOpen className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#003153" }} />
              <div>
                <p className="text-sm font-semibold text-foreground">Print & Production</p>
                <p className="text-xs text-muted-foreground">Final typesetting, print coordination, digital formatting, and quality assurance across all distribution formats — physical books, e-books, and syndicated columns.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Target className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#003153" }} />
              <div>
                <p className="text-sm font-semibold text-foreground">Distribution & Launch</p>
                <p className="text-xs text-muted-foreground">Business Daily column syndication, reading club programming, digital distribution, and launch coordination. Getting the finished product to the audience.</p>
              </div>
            </div>
            <div className="pt-3 border-t" style={{ borderColor: "#BFDBFE" }}>
              <p className="text-[11px] font-semibold uppercase tracking-wider mb-2" style={{ color: "#003153" }}>Pipeline Presence</p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-2 py-1 rounded text-[10px] font-semibold text-white" style={{ backgroundColor: "#F4C430", color: "#1a1a1a" }}>Step 6 — Design</span>
                <span className="px-2 py-1 rounded text-[10px] font-semibold text-white" style={{ backgroundColor: "#003153" }}>Step 8 — Publish</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 rounded-2xl border overflow-hidden" style={{ borderColor: "#D1FAE5" }}>
        <div className="px-6 py-5" style={{ background: "linear-gradient(90deg, #F0FDF4 0%, #ECFDF5 50%, #F0FDF4 100%)" }}>
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#2AAF6A" }}>
              <Zap className="w-5 h-5 text-white" />
            </div>
            <div>
              <h4 className="text-sm font-display font-bold uppercase tracking-wide mb-1" style={{ color: "#166534" }}>
                Why AI Agents Are the Critical Link
              </h4>
              <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>
                Without the AI layer, the visionary's ideas stay trapped in recordings and conversations. The production team would receive unstructured, ambiguous material. AI agents solve this by <strong>continuously processing Mike's content and thinking</strong> into structured, actionable formats — AFOS-mapped frameworks, narrative architectures, ledger entries, and editorial drafts. They ensure the production team always has current, organised material to work with, and that Mike's vision is faithfully preserved at every stage. The AI agents are the system's memory, translator, and quality backbone — running in the background so the visionary can focus on creating and the production team can focus on executing.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 rounded-xl border border-border/50 overflow-hidden">
        <div className="px-6 py-4 bg-muted/30">
          <h4 className="text-sm font-display font-bold uppercase tracking-wide mb-3">How the Flow Works</h4>
          <div className="flex items-center gap-3 flex-wrap">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: "#C45A3C" }}>
                <Crown className="w-4 h-4 text-white" />
              </div>
              <span className="text-xs font-semibold">Mike creates</span>
            </div>
            <ArrowRight className="w-4 h-4 text-muted-foreground" />
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: "#2AAF6A" }}>
                <Bot className="w-4 h-4 text-white" />
              </div>
              <span className="text-xs font-semibold">AI processes & structures</span>
            </div>
            <ArrowRight className="w-4 h-4 text-muted-foreground" />
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: "#003153" }}>
                <Users className="w-4 h-4 text-white" />
              </div>
              <span className="text-xs font-semibold">Team designs</span>
            </div>
            <ArrowRight className="w-4 h-4 text-muted-foreground" />
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: "#C45A3C" }}>
                <CheckCircle2 className="w-4 h-4 text-white" />
              </div>
              <span className="text-xs font-semibold">Mike approves</span>
            </div>
            <ArrowRight className="w-4 h-4 text-muted-foreground" />
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: "#003153" }}>
                <Send className="w-4 h-4 text-white" />
              </div>
              <span className="text-xs font-semibold">Team publishes</span>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            The AI agents keep the production team continuously updated on Mike's latest content, thinking, and priorities — so the team is never working from stale information and the visionary never has to repeat themselves.
          </p>
        </div>
      </div>

    </div>
  );
}
