import { useState } from "react";
import {
  Users,
  UserCheck,
  UserPlus,
  ChevronDown,
  ChevronUp,
  Crown,
  Star,
  Camera,
  Mic2,
  Palette,
  Utensils,
  Truck,
  Shield,
  Wrench,
  Monitor,
  Music,
  Megaphone,
  Scale,
  FileText,
  Lightbulb,
  Clapperboard,
  Building2,
  Phone,
  Mail,
  MapPin,
  DollarSign,
  Clock,
  CheckCircle2,
  AlertCircle,
  Search,
  Package,
  ArrowRight,
  CircleDot,
  Filter,
  ListChecks,
  ClipboardCheck,
  Handshake,
  Eye,
  MessageSquare,
  ThumbsUp,
  ThumbsDown,
  Timer,
  Briefcase,
  GraduationCap,
  CircleCheck,
  CircleX,
  ArrowDown,
} from "lucide-react";

type TeamMember = {
  name: string;
  title: string;
  department: string;
  status: "confirmed" | "to-hire" | "to-source";
  responsibilities: string[];
  reportingTo: string;
  notes?: string;
};

type Department = {
  name: string;
  icon: typeof Users;
  color: string;
  description: string;
  members: TeamMember[];
};

type Supplier = {
  category: string;
  name: string;
  service: string;
  status: "confirmed" | "shortlisted" | "to-source";
  priority: "critical" | "high" | "medium";
  notes?: string;
};

const DEPARTMENTS: Department[] = [
  {
    name: "Executive Leadership",
    icon: Crown,
    color: "#F40009",
    description: "Creative and strategic direction of the show",
    members: [
      {
        name: "Leo Macharia",
        title: "Host & Content Director",
        department: "Executive Leadership",
        status: "confirmed",
        responsibilities: [
          "On-camera host — the face of Founders Kitchen",
          "Creative vision and content direction for all episodes",
          "Final approval on episode scripts, running orders, and guest selection",
          "Brand voice and tone authority — defines what FK sounds and feels like",
          "Approves all brand integration placements and partner activations",
          "Works with Showrunner on season arc and episode themes",
        ],
        reportingTo: "—",
        notes: "Executive Producer credit. The show is built around this person's vision and personality.",
      },
      {
        name: "Maurice",
        title: "Communications & Brand Director",
        department: "Executive Leadership",
        status: "confirmed",
        responsibilities: [
          "Overall brand strategy for FK across all touchpoints",
          "Communications plan — press, PR, media relations",
          "Brand partnership negotiations and sponsor relationship management",
          "Social media strategy and content calendar oversight",
          "Cross-promotion with other FBF ecosystem portals",
          "Brand compliance — ensures all content aligns with FBF brand manual",
        ],
        reportingTo: "Leo Macharia",
        notes: "Works closely with Marketing Lead and Brand Integration Manager. Owns the external narrative.",
      },
    ],
  },
  {
    name: "Production Leadership",
    icon: Clapperboard,
    color: "#F59E0B",
    description: "Day-to-day creative and operational control of production",
    members: [
      {
        name: "To be hired",
        title: "Showrunner / Executive Producer",
        department: "Production Leadership",
        status: "to-hire",
        responsibilities: [
          "Overall creative and operational lead — runs the show day-to-day",
          "Manages the writers room, approves scripts and running orders",
          "Hires and manages all department heads",
          "Controls the budget alongside the Line Producer",
          "Liaison between the creative team and network/platform executives",
          "On set during all shoot days — final call on creative decisions",
          "Manages the edit — notes on every cut from assembly to fine",
        ],
        reportingTo: "Leo Macharia",
        notes: "The most important hire. Needs experience running unscripted/food content. Ideally someone who has delivered a full season of television in East Africa or internationally.",
      },
      {
        name: "To be hired",
        title: "Director",
        department: "Production Leadership",
        status: "to-hire",
        responsibilities: [
          "Visual storytelling — defines the camera language, shot design, and visual rhythm",
          "Directs talent (host + guests) on set — performance, blocking, energy",
          "Works with DP to create the shot list per episode",
          "Calls shots during multi-camera studio shoots",
          "Reviews dailies and provides notes for the edit",
          "Collaborates with Showrunner on tone and pacing",
        ],
        reportingTo: "Showrunner",
        notes: "Could be one director for all 10 episodes, or 2-3 directors rotating. Food/lifestyle TV directing experience essential.",
      },
      {
        name: "To be hired",
        title: "Line Producer",
        department: "Production Leadership",
        status: "to-hire",
        responsibilities: [
          "Production logistics — schedule, budget, crew management",
          "Creates and manages the master production schedule",
          "Issues daily call sheets and production reports",
          "Manages all vendor and supplier relationships",
          "Insurance, permits, and compliance",
          "On-set operations: catering, transport, equipment logistics",
          "Tracks spend against budget — flags overruns early",
        ],
        reportingTo: "Showrunner",
        notes: "The operational engine. Must be hyper-organised with Kenya production experience. Manages 25-35 crew and multiple vendors.",
      },
    ],
  },
  {
    name: "Camera & Lighting",
    icon: Camera,
    color: "#3B82F6",
    description: "Visual capture — making the food and the kitchen look extraordinary",
    members: [
      {
        name: "To be hired",
        title: "Director of Photography (DP)",
        department: "Camera & Lighting",
        status: "to-hire",
        responsibilities: [
          "Designs the visual look of the show — lighting, lens choice, camera movement",
          "Creates the shot list with the Director per episode",
          "Operates A-camera (main host coverage)",
          "Manages the camera and lighting crew",
          "Ensures visual consistency across all 10 episodes",
          "Works with colourist in post to set the show LUT",
        ],
        reportingTo: "Director",
        notes: "Food cinematography is a speciality. The DP must understand how to make food look appetising on camera — warm light, shallow depth of field, macro capability.",
      },
      {
        name: "To be hired",
        title: "B-Camera Operator",
        department: "Camera & Lighting",
        status: "to-hire",
        responsibilities: [
          "Operates B-camera — guest coverage, alternative angles, reaction shots",
          "Works from the Director's shot list and responds to live direction via comms",
          "Captures spontaneous moments and behind-the-scenes content",
        ],
        reportingTo: "Director of Photography",
      },
      {
        name: "To be hired",
        title: "Gaffer (Chief Lighting Technician)",
        department: "Camera & Lighting",
        status: "to-hire",
        responsibilities: [
          "Designs and rigs the studio lighting setup with the DP",
          "Manages lighting changes between segments (daylight vs warm evening)",
          "Maintains lighting equipment — LED panels, dimmers, diffusion",
          "Manages 1-2 lighting assistants",
        ],
        reportingTo: "Director of Photography",
      },
    ],
  },
  {
    name: "Sound & Music",
    icon: Music,
    color: "#8B5CF6",
    description: "Everything the audience hears — dialogue, cooking ASMR, score",
    members: [
      {
        name: "To be hired",
        title: "Production Sound Mixer",
        department: "Sound & Music",
        status: "to-hire",
        responsibilities: [
          "Captures all on-set audio — dialogue, ambient, cooking sounds",
          "Manages wireless lavalieres on host and guests",
          "Operates boom mic for overhead cooking audio",
          "Records multi-track (minimum 4 channels) synced to video",
          "Monitors live audio and calls for retakes when compromised",
        ],
        reportingTo: "Director",
        notes: "Kitchen environments are noisy — extractor fans, sizzling, running water. The sound mixer must be experienced in managing these challenges.",
      },
      {
        name: "To be hired",
        title: "Composer / Music Supervisor",
        department: "Sound & Music",
        status: "to-hire",
        responsibilities: [
          "Composes the main title theme and all score cues",
          "Creates segment transition stings and background beds",
          "Supervises all music licensing and clearances",
          "Delivers music cue sheets per episode",
        ],
        reportingTo: "Showrunner",
        notes: "Can be a single composer or a music production house. Must deliver original, ownable music that becomes the FK sonic identity.",
      },
    ],
  },
  {
    name: "Art & Food",
    icon: Utensils,
    color: "#10B981",
    description: "Set dressing, props, food styling — everything the camera sees",
    members: [
      {
        name: "John Gikanga",
        title: "Production Designer / Art Director",
        department: "Art & Food",
        status: "confirmed",
        responsibilities: [
          "Designs and oversees the physical set — surfaces, materials, colours",
          "Manages set dressing and brand integration zone placement",
          "Sources and manages all props, servingware, and kitchen equipment",
          "Coordinates with brand partners on product placement aesthetics",
          "Ensures visual continuity across all episodes",
          "Works with DP on how set elements interact with lighting",
        ],
        reportingTo: "Showrunner",
        notes: "Confirmed team member. Deep understanding of spatial design and camera-ready environments.",
      },
      {
        name: "To be hired",
        title: "Food Stylist",
        department: "Art & Food",
        status: "to-hire",
        responsibilities: [
          "Makes every dish look extraordinary on camera",
          "Manages food swap-outs — pre-cooked versions at each stage",
          "Plates the final beauty shots",
          "Runs the off-camera prep kitchen",
          "Tests every recipe 3-4 times before shoot day with the host",
          "Sources hero ingredients that photograph well",
        ],
        reportingTo: "Production Designer",
        notes: "This is the unsung hero of any cooking show. A great food stylist is the difference between 'looks nice' and 'I need to eat that right now.' Must understand camera angles and lighting.",
      },
      {
        name: "To be hired",
        title: "Art Department Buyer / Props",
        department: "Art & Food",
        status: "to-hire",
        responsibilities: [
          "Sources all ingredients, props, and styling items per episode",
          "Manages procurement schedules — 48hr lead on perishables",
          "Coordinates sponsor product deliveries to set",
          "Maintains props storage and inventory",
        ],
        reportingTo: "Production Designer",
      },
    ],
  },
  {
    name: "Post-Production",
    icon: Monitor,
    color: "#EC4899",
    description: "Edit, colour, graphics, sound mix — turning raw footage into a show",
    members: [
      {
        name: "To be hired",
        title: "Lead Editor",
        department: "Post-Production",
        status: "to-hire",
        responsibilities: [
          "Edits all 10 episodes from assembly through fine cut",
          "Works with Showrunner on story structure and pacing",
          "Manages 3-5 rounds of notes per episode",
          "Integrates graphics, music, and sound design into the edit",
          "Delivers locked cuts for colour grade and sound mix",
        ],
        reportingTo: "Showrunner",
        notes: "Must be proficient in Premiere Pro or DaVinci Resolve. Food/lifestyle editing experience essential — the rhythm of cooking content is specific.",
      },
      {
        name: "To be hired",
        title: "Assistant Editor",
        department: "Post-Production",
        status: "to-hire",
        responsibilities: [
          "Syncs and organises all multi-camera footage",
          "Creates selects reels from dailies",
          "Manages the media library and project structure",
          "Cuts social media content from raw footage",
          "Supports Lead Editor on assembly cuts",
        ],
        reportingTo: "Lead Editor",
      },
      {
        name: "To be hired",
        title: "Motion Graphics Designer",
        department: "Post-Production",
        status: "to-hire",
        responsibilities: [
          "Designs the main title sequence, lower thirds, segment bumpers",
          "Creates recipe step overlays and ingredient callouts",
          "Animates episode title cards and end cards",
          "Delivers the full graphics package (30-40 individual elements)",
        ],
        reportingTo: "Showrunner",
        notes: "After Effects / Cinema 4D proficiency. Must create a graphics package that is instantly recognisable as FK.",
      },
      {
        name: "To be hired",
        title: "Colourist",
        department: "Post-Production",
        status: "to-hire",
        responsibilities: [
          "Colour grades all 10 locked episodes",
          "Creates the show LUT (FK colour signature)",
          "Ensures shot-to-shot matching across multi-camera coverage",
          "Makes food pop and skin tones glow",
        ],
        reportingTo: "Lead Editor",
        notes: "DaVinci Resolve specialist. Can be freelance — 1-2 days per episode.",
      },
    ],
  },
  {
    name: "Marketing & Digital",
    icon: Megaphone,
    color: "#F97316",
    description: "Getting the show to the audience — digital, social, press",
    members: [
      {
        name: "To be hired",
        title: "Marketing Lead",
        department: "Marketing & Digital",
        status: "to-hire",
        responsibilities: [
          "Executes the marketing campaign across all three waves (announce, build, launch)",
          "Manages media buying and advertising spend",
          "Coordinates the premiere event",
          "Tracks audience analytics and builds the weekly dashboard",
          "Delivers sponsor ROI reports post-season",
        ],
        reportingTo: "Maurice",
        notes: "Reports to the Comms & Brand Director. Must understand both traditional media (TV, print) and digital marketing in Kenya.",
      },
      {
        name: "To be hired",
        title: "Social Media Editor",
        department: "Marketing & Digital",
        status: "to-hire",
        responsibilities: [
          "Cuts 3-5 short-form clips per episode (Reels, TikTok, YouTube Shorts)",
          "Creates recipe cards, behind-the-scenes content, quote graphics",
          "Manages posting schedule and community engagement",
          "Cross-promotes with guest and sponsor channels",
        ],
        reportingTo: "Marketing Lead",
        notes: "Part editor, part content creator. Needs to work fast — content cut during post-production for release alongside episodes.",
      },
      {
        name: "To be hired",
        title: "Publicist / PR Agency",
        department: "Marketing & Digital",
        status: "to-source",
        responsibilities: [
          "Press strategy — newspaper features, TV interviews, digital outlets",
          "Manages the premiere screening event",
          "Secures 15-20 press placements around launch",
          "Media training for host and key talent",
        ],
        reportingTo: "Maurice",
        notes: "Can be an individual publicist or PR agency. Must have entertainment and food media contacts in Kenya and pan-Africa.",
      },
    ],
  },
  {
    name: "Writing & Content",
    icon: FileText,
    color: "#06B6D4",
    description: "Episode development, scripts, running orders, research",
    members: [
      {
        name: "To be hired",
        title: "Head Writer",
        department: "Writing & Content",
        status: "to-hire",
        responsibilities: [
          "Runs the writers room — develops episode themes and story arcs",
          "Writes the host's voice — what they would and wouldn't say",
          "Creates running orders with segment transitions",
          "Develops guest profiles and interview angles",
          "Cultural context research for each episode's food story",
        ],
        reportingTo: "Showrunner",
        notes: "Even 'unscripted' shows are meticulously written. The Head Writer shapes the narrative of every episode. Needs food and cultural knowledge of Kenya/East Africa.",
      },
      {
        name: "To be hired",
        title: "Segment Writers (2-3)",
        department: "Writing & Content",
        status: "to-hire",
        responsibilities: [
          "Develop individual segments within each episode",
          "Research ingredient stories, supplier backgrounds, cultural context",
          "Draft interview questions for guest chefs",
          "Write recipe introductions and transitions",
        ],
        reportingTo: "Head Writer",
      },
    ],
  },
  {
    name: "Legal & Business Affairs",
    icon: Scale,
    color: "#64748B",
    description: "Contracts, rights, compliance, insurance",
    members: [
      {
        name: "To be sourced",
        title: "Entertainment Lawyer",
        department: "Legal & Business Affairs",
        status: "to-source",
        responsibilities: [
          "Drafts and reviews all talent agreements, crew deal memos",
          "Brand integration contracts — what sponsors get and don't get",
          "Music licensing and IP clearance",
          "Distribution agreements and windowing terms",
          "Errors & Omissions (E&O) insurance coordination",
        ],
        reportingTo: "Leo Macharia",
        notes: "External counsel — retainer or per-project. Must understand Kenyan entertainment law and international distribution rights.",
      },
      {
        name: "To be hired",
        title: "Brand Integration Manager",
        department: "Legal & Business Affairs",
        status: "to-hire",
        responsibilities: [
          "Manages all sponsor relationships on a day-to-day basis",
          "Ensures brand integration obligations are met per episode",
          "On-set brand compliance — correct product placement, no competitors in frame",
          "Tracks screen time per brand for ROI reporting",
          "Coordinates product deliveries with Art Department Buyer",
        ],
        reportingTo: "Maurice",
        notes: "The bridge between brand partners and the production. Part account manager, part on-set supervisor.",
      },
    ],
  },
  {
    name: "Production Support",
    icon: Wrench,
    color: "#A3A3A3",
    description: "The people who make the machine run — floor, transport, catering",
    members: [
      {
        name: "To be hired",
        title: "1st Assistant Director (1st AD)",
        department: "Production Support",
        status: "to-hire",
        responsibilities: [
          "Runs the floor on shoot days — keeps everything on schedule",
          "Manages the running order minute by minute",
          "Calls 'rolling,' 'cut,' 'reset,' 'moving on'",
          "Coordinates between all departments on set",
          "Issues safety briefings and manages set protocols",
        ],
        reportingTo: "Director",
        notes: "The 1st AD is the heartbeat of the set. They don't make creative decisions — they make sure creative decisions happen on time.",
      },
      {
        name: "To be hired",
        title: "Production Coordinator",
        department: "Production Support",
        status: "to-hire",
        responsibilities: [
          "Administrative hub — call sheets, crew contacts, vendor coordination",
          "Manages travel and accommodation for guests",
          "Handles catering for crew (25-35 people, 10-12 hour days)",
          "Maintains production paperwork and filing",
        ],
        reportingTo: "Line Producer",
      },
      {
        name: "To be hired",
        title: "Runner / Production Assistant (2)",
        department: "Production Support",
        status: "to-hire",
        responsibilities: [
          "On-set support — fetching, carrying, setting up, cleaning",
          "Drives for pickups and deliveries",
          "Assists any department that needs hands",
          "First point of contact for visitors and guests arriving on set",
        ],
        reportingTo: "Production Coordinator",
        notes: "Entry-level positions — great for film school graduates or aspiring production professionals.",
      },
    ],
  },
];

const SUPPLIERS: Supplier[] = [
  {
    category: "Equipment & Cameras",
    name: "To be sourced",
    service: "Camera rental house — multi-camera package (4 cameras, lenses, grip, monitors, overhead rig)",
    status: "to-source",
    priority: "critical",
    notes: "Need a Nairobi-based rental house with broadcast-quality cinema cameras (Sony FX6/FX9, RED Komodo, or ARRI). Package: 4 bodies, prime lens set, tripods, sliders, overhead rig, video village monitors.",
  },
  {
    category: "Equipment & Cameras",
    name: "To be sourced",
    service: "Lighting rental — LED panel kit, dimmers, diffusion, stands",
    status: "to-source",
    priority: "critical",
    notes: "Studio lighting rig that stays installed for the season. Daylight-balanced LED panels (Aputure, ARRI SkyPanel), dimmers on every fixture, diffusion frames.",
  },
  {
    category: "Equipment & Cameras",
    name: "To be sourced",
    service: "Sound equipment rental — wireless lavs, boom, multi-track recorder",
    status: "to-source",
    priority: "critical",
  },
  {
    category: "Post-Production Facilities",
    name: "To be sourced",
    service: "Edit suite — offline and online editing facility with storage",
    status: "to-source",
    priority: "critical",
    notes: "Need: edit suite with calibrated monitor, high-speed storage (minimum 20TB for 10 episodes of multi-cam), DaVinci Resolve or Premiere Pro license, quiet room.",
  },
  {
    category: "Post-Production Facilities",
    name: "To be sourced",
    service: "Sound mix studio — calibrated dubbing theatre for final mix",
    status: "to-source",
    priority: "high",
    notes: "1 day per episode. Stereo + 5.1 mix capability. Can be a Nairobi-based studio or remote mix with calibrated monitoring.",
  },
  {
    category: "Post-Production Facilities",
    name: "To be sourced",
    service: "Colour grading suite — DaVinci Resolve with calibrated HDR monitor",
    status: "to-source",
    priority: "high",
  },
  {
    category: "Set & Construction",
    name: "To be sourced",
    service: "Set construction company — kitchen build-out, surfaces, cabinetry",
    status: "to-source",
    priority: "critical",
    notes: "Must be able to build a broadcast-quality kitchen set that is functional for real cooking AND beautiful on camera. Work with John Gikanga on design execution.",
  },
  {
    category: "Set & Construction",
    name: "To be sourced",
    service: "Kitchen appliance supplier — cooktops, ovens, refrigeration (potential sponsor)",
    status: "to-source",
    priority: "critical",
    notes: "Dual opportunity: functional requirement AND sponsorship deal. Target premium appliance brands for hero placement.",
  },
  {
    category: "Food & Ingredients",
    name: "Naivas / Carrefour",
    service: "Primary grocery and ingredient supplier (potential sponsor partner)",
    status: "shortlisted",
    priority: "critical",
    notes: "Already mapped in the Possible Partners section. Store runs become content AND sponsorship. Preferred partner provides ingredients at cost or gratis in exchange for screen time.",
  },
  {
    category: "Food & Ingredients",
    name: "To be sourced",
    service: "Specialty ingredient suppliers — artisanal, imported, seasonal items",
    status: "to-source",
    priority: "medium",
  },
  {
    category: "Catering & Craft Services",
    name: "To be sourced",
    service: "Crew catering — breakfast, lunch, snacks for 25-35 people on 10 shoot days",
    status: "to-source",
    priority: "high",
    notes: "Feed the crew well and they will work well. Budget KES 1,500-2,000 per person per day. Minimum: hot breakfast, hot lunch, afternoon snack, unlimited tea/coffee/water.",
  },
  {
    category: "Transport & Logistics",
    name: "To be sourced",
    service: "Production vehicles — equipment truck, crew van, talent car",
    status: "to-source",
    priority: "high",
  },
  {
    category: "Transport & Logistics",
    name: "To be sourced",
    service: "Drone operator — licensed KCAA pilot with 4K drone for aerials",
    status: "to-source",
    priority: "medium",
    notes: "2-3 days of aerial shooting. Must have valid KCAA Remote Pilot Licence and commercial drone insurance.",
  },
  {
    category: "Insurance & Legal",
    name: "To be sourced",
    service: "Production insurance — general liability, equipment, E&O, workers comp",
    status: "to-source",
    priority: "critical",
    notes: "Cannot shoot without insurance. Need a broker experienced in film/TV production cover in Kenya.",
  },
  {
    category: "Insurance & Legal",
    name: "To be sourced",
    service: "Entertainment law firm — contracts, IP, music clearance, distribution",
    status: "to-source",
    priority: "critical",
  },
  {
    category: "Distribution & Sales",
    name: "To be sourced",
    service: "International sales agent / distributor",
    status: "to-source",
    priority: "high",
    notes: "Takes the show to MIPCOM, DISCOP, and international platforms. Commission-based (typically 20-30% of international sales).",
  },
  {
    category: "Digital & Marketing",
    name: "To be sourced",
    service: "Digital marketing agency — social media management, paid ads, analytics",
    status: "to-source",
    priority: "high",
  },
  {
    category: "Digital & Marketing",
    name: "To be sourced",
    service: "Photography — behind-the-scenes stills, key art, press kit images",
    status: "to-source",
    priority: "medium",
    notes: "Minimum 20 production stills per episode. Key art shoot (host portrait, ensemble, set beauty) separate from production.",
  },
];

function statusBadge(status: string) {
  if (status === "confirmed") return "bg-emerald-500/20 text-emerald-300 border-emerald-500/30";
  if (status === "shortlisted") return "bg-blue-500/20 text-blue-300 border-blue-500/30";
  if (status === "to-hire") return "bg-amber-500/20 text-amber-300 border-amber-500/30";
  return "bg-white/5 text-white/50 border-white/10";
}

function statusText(status: string) {
  if (status === "confirmed") return "Confirmed";
  if (status === "shortlisted") return "Shortlisted";
  if (status === "to-hire") return "To Hire";
  return "To Source";
}

function priorityBadge(p: string) {
  if (p === "critical") return "bg-red-500/20 text-red-300 border-red-500/30";
  if (p === "high") return "bg-amber-500/20 text-amber-300 border-amber-500/30";
  return "bg-white/5 text-white/50 border-white/10";
}

function MemberCard({ member }: { member: TeamMember }) {
  const [open, setOpen] = useState(false);
  const isConfirmed = member.status === "confirmed";

  return (
    <div className={`border rounded-lg overflow-hidden ${isConfirmed ? "border-emerald-500/30 bg-emerald-500/5" : "border-white/10 bg-white/5"}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-4 py-3 flex items-center gap-3 hover:bg-white/5 transition-colors"
      >
        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${isConfirmed ? "bg-emerald-500/20" : "bg-white/10"}`}>
          {isConfirmed ? <UserCheck className="w-4 h-4 text-emerald-400" /> : <UserPlus className="w-4 h-4 text-white/40" />}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className={`font-semibold text-sm ${isConfirmed ? "text-white" : "text-white/60 italic"}`}>{member.name}</span>
            <span className={`px-1.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider border ${statusBadge(member.status)}`}>
              {statusText(member.status)}
            </span>
          </div>
          <div className="text-xs text-white/50">{member.title}</div>
        </div>
        {open ? <ChevronUp className="w-4 h-4 text-white/30 shrink-0" /> : <ChevronDown className="w-4 h-4 text-white/30 shrink-0" />}
      </button>
      {open && (
        <div className="px-4 pb-4 space-y-3 border-t border-white/5">
          <div className="pt-3">
            <div className="text-[10px] uppercase tracking-wider text-white/30 mb-1.5">Responsibilities</div>
            <ul className="space-y-1">
              {member.responsibilities.map((r, i) => (
                <li key={i} className="text-xs text-white/60 flex gap-2">
                  <span className="text-white/20 shrink-0">-</span>
                  {r}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex gap-4 text-xs text-white/40">
            <span>Reports to: <span className="text-white/60">{member.reportingTo}</span></span>
          </div>
          {member.notes && (
            <p className="text-xs text-white/50 italic bg-white/5 rounded p-2">{member.notes}</p>
          )}
        </div>
      )}
    </div>
  );
}

function DepartmentSection({ dept }: { dept: Department }) {
  const [open, setOpen] = useState(true);
  const Icon = dept.icon;
  const confirmed = dept.members.filter((m) => m.status === "confirmed").length;
  const total = dept.members.length;

  return (
    <div className="border border-white/10 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-5 py-4 flex items-center gap-4 hover:bg-white/5 transition-colors"
      >
        <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: dept.color + "20", color: dept.color }}>
          <Icon className="w-5 h-5" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-bold text-white">{dept.name}</h3>
          <p className="text-xs text-white/50">{dept.description}</p>
        </div>
        <div className="text-xs text-white/40 shrink-0 hidden sm:block">
          {confirmed > 0 && <span className="text-emerald-400">{confirmed} confirmed</span>}
          {confirmed > 0 && confirmed < total && " / "}
          {confirmed < total && <span className="text-amber-400">{total - confirmed} open</span>}
        </div>
        {open ? <ChevronUp className="w-4 h-4 text-white/30 shrink-0" /> : <ChevronDown className="w-4 h-4 text-white/30 shrink-0" />}
      </button>
      {open && (
        <div className="px-5 pb-5 space-y-2 border-t border-white/5 pt-3">
          {dept.members.map((m) => (
            <MemberCard key={m.title} member={m} />
          ))}
        </div>
      )}
    </div>
  );
}

type WorkflowStage = {
  id: string;
  name: string;
  icon: typeof Search;
  color: string;
  duration: string;
  owner: string;
  description: string;
  actions: string[];
  deliverables: string[];
  goNoGo: string;
};

type RoleWorkflow = {
  role: string;
  category: "creative-leadership" | "technical-crew" | "post-production" | "support" | "external";
  priority: "critical-path" | "high" | "standard";
  stages: WorkflowStage[];
  selectionCriteria: string[];
  redFlags: string[];
};

const PIPELINE_STAGES: WorkflowStage[] = [
  {
    id: "sourcing",
    name: "1. Sourcing & Outreach",
    icon: Search,
    color: "#6366F1",
    duration: "1-2 weeks",
    owner: "Line Producer / Showrunner",
    description: "Cast the widest net to build the initial candidate pool. Use every channel — industry contacts, production guilds, film schools, social media, and referrals from confirmed team members.",
    actions: [
      "Post role brief on Kenya Film Commission job board and KFCB network",
      "Reach out to production guilds and unions (KMPDU for sound, KFPA for camera)",
      "Contact Nairobi-based production companies for crew recommendations",
      "Check LinkedIn and industry Facebook groups (Kenya Film & TV Crew)",
      "Ask confirmed team members for personal referrals — John Gikanga, Maurice",
      "Contact film schools: Kenya Institute of Mass Communication, Kenyatta University Film, USIU",
      "For senior roles: approach known professionals directly with the show bible",
      "Post on international networks for specialised roles (food stylist, colourist)",
    ],
    deliverables: [
      "Role brief document (1 page per role — title, responsibilities, dates, rate range)",
      "Candidate long list (10-20 names per role with source and contact)",
      "Outreach tracker — who was contacted, when, response status",
    ],
    goNoGo: "Minimum 8 candidates identified per role before moving to pre-screening",
  },
  {
    id: "prescreening",
    name: "2. Pre-Screening",
    icon: Filter,
    color: "#F59E0B",
    duration: "1 week",
    owner: "Line Producer",
    description: "Filter the long list to a manageable shortlist. This is a desk-based review — no meetings yet. The goal is to eliminate candidates who clearly don't meet the minimum requirements before investing time in interviews.",
    actions: [
      "Review CVs/portfolios against role requirements (experience, credits, availability)",
      "Check showreels and previous work samples — minimum 2 relevant credits",
      "Verify availability for the production window (6-week shoot block + prep)",
      "Confirm rate expectations are within budget range",
      "Check references informally — call one mutual contact per candidate",
      "Assess location — Nairobi-based or willing to relocate/travel",
      "For creative roles: review 3 work samples for style alignment with FK",
      "Flag any conflicts of interest (working for competitor shows, brand conflicts)",
    ],
    deliverables: [
      "Shortlist: 3-5 candidates per role with summary notes",
      "Pre-screening scorecard (experience, portfolio, availability, rate, location)",
      "Rejected candidates notified with professional thank-you email",
    ],
    goNoGo: "Minimum 3 qualified candidates per role on the shortlist",
  },
  {
    id: "interview",
    name: "3. First Interview",
    icon: MessageSquare,
    color: "#3B82F6",
    duration: "1-2 weeks",
    owner: "Showrunner + Department Head",
    description: "Face-to-face or video interviews with shortlisted candidates. This is where you assess fit — not just skill, but personality, communication style, and whether they understand the vision. Every candidate meets the Showrunner. Senior roles also meet Leo.",
    actions: [
      "Schedule 45-60 minute interviews (in person preferred, video acceptable)",
      "Showrunner leads the interview — assesses creative alignment and vision fit",
      "Department head assesses technical competence and working style",
      "Walk through the candidate's best 2-3 credits in detail — what was their specific contribution",
      "Present the FK show bible and gauge their reaction and ideas",
      "Discuss working style, pressure handling, and team dynamics",
      "For on-camera roles: record a 5-minute camera test",
      "For creative roles: discuss how they would approach a specific FK episode scenario",
    ],
    deliverables: [
      "Interview notes per candidate (structured form — not freeform)",
      "Interview scorecard: vision fit, technical skill, communication, team energy (1-5 each)",
      "Candidate ranking: strong yes / yes / maybe / no",
    ],
    goNoGo: "At least 2 'strong yes' or 'yes' candidates per role",
  },
  {
    id: "practical",
    name: "4. Practical Assessment / Test",
    icon: ClipboardCheck,
    color: "#10B981",
    duration: "1 week",
    owner: "Department Head + Showrunner",
    description: "The interview tells you what they say they can do. The practical test shows you what they actually do. Every role gets a test — adapted to the discipline. This is non-negotiable for a professional production.",
    actions: [
      "Director: direct a 5-minute cooking segment with stand-in talent on the FK set",
      "DP: shoot a 3-minute food beauty reel on the FK set with available light + 1 LED panel",
      "Editor: cut a 90-second sizzle reel from provided raw multi-cam footage",
      "Food Stylist: prep and plate 3 dishes for camera in 2 hours",
      "Sound Mixer: record a cooking segment and deliver clean multi-track audio",
      "Head Writer: write a running order for Episode 1 from the show bible",
      "Motion Graphics: design 3 lower thirds and 1 segment bumper in FK brand style",
      "1st AD: create a call sheet and running order for a sample shoot day",
      "Production Coordinator: build a 1-week production schedule from provided brief",
    ],
    deliverables: [
      "Completed practical test output (footage, document, edit, design — varies by role)",
      "Assessment scorecard: quality, speed, problem-solving, initiative, attention to detail",
      "Comparative evaluation against other candidates who completed the same test",
    ],
    goNoGo: "Practical test output meets professional broadcast standard",
  },
  {
    id: "final",
    name: "5. Final Interview & Chemistry Read",
    icon: Handshake,
    color: "#EC4899",
    duration: "3-5 days",
    owner: "Leo Macharia + Showrunner",
    description: "The final candidates (1-2 per role) meet Leo and the core team. This is about chemistry — can this person work with the people already confirmed? Do they add energy or drain it? For on-camera roles, this includes a chemistry read with the host.",
    actions: [
      "30-minute meeting with Leo — vision alignment, personal values, long-term thinking",
      "For key creative roles: meet Maurice to discuss brand and comms alignment",
      "Chemistry session: final candidate works alongside confirmed team for 2-3 hours",
      "For on-camera roles: 15-minute chemistry read with Leo on camera",
      "Reference check — 2 professional references called by Line Producer",
      "Final rate/terms negotiation — align on compensation, credit, and schedule",
      "Discuss Season 2 potential and long-term commitment appetite",
    ],
    deliverables: [
      "Final recommendation memo (1 page: who, why, rate, start date)",
      "Reference check notes (2 references per finalist)",
      "Proposed deal terms for approval",
    ],
    goNoGo: "Leo and Showrunner both approve. No unresolved red flags.",
  },
  {
    id: "offer",
    name: "6. Offer & Onboarding",
    icon: CheckCircle2,
    color: "#22C55E",
    duration: "1 week",
    owner: "Line Producer + Entertainment Lawyer",
    description: "Make the offer, sign the paperwork, and bring them into the team. Onboarding is not just admin — it's about immersing the new hire in the FK world so they hit the ground running.",
    actions: [
      "Issue formal offer letter with role, dates, compensation, and credit",
      "Execute deal memo / employment agreement (reviewed by entertainment lawyer)",
      "NDA and confidentiality agreement signed",
      "Add to production communication channels (WhatsApp group, email list, shared drive)",
      "Issue FK Show Bible, brand manual, and any existing episode materials",
      "Schedule orientation session: set tour, meet confirmed team, production timeline walkthrough",
      "For department heads: briefing on budget, team, and deliverables expectations",
      "Set up first working session with their reporting line within 48 hours of start",
    ],
    deliverables: [
      "Signed deal memo / contract",
      "Signed NDA",
      "Completed onboarding checklist",
      "Added to all production systems and communication channels",
    ],
    goNoGo: "All paperwork signed. Candidate confirmed on the production calendar.",
  },
];

const ROLE_WORKFLOWS: RoleWorkflow[] = [
  {
    role: "Showrunner / Executive Producer",
    category: "creative-leadership",
    priority: "critical-path",
    stages: PIPELINE_STAGES,
    selectionCriteria: [
      "Minimum 3 seasons of unscripted/food TV as showrunner or senior producer",
      "Demonstrated ability to manage a writers room and editorial team",
      "Budget management experience (USD 500K+ production budgets)",
      "Experience working with brand sponsors and integration deals",
      "Strong vision alignment with FK — understands African storytelling",
      "References from at least 2 previous productions in a leadership role",
      "Available for 6-month commitment (3 months pre-production + 3 months production/post)",
    ],
    redFlags: [
      "Only scripted drama credits — unscripted is a fundamentally different discipline",
      "Cannot articulate a clear creative vision when shown the FK bible",
      "History of budget overruns without mitigation",
      "Poor references from crew — the showrunner sets the culture",
      "Unwillingness to collaborate with host on creative direction",
    ],
  },
  {
    role: "Director",
    category: "creative-leadership",
    priority: "critical-path",
    stages: PIPELINE_STAGES,
    selectionCriteria: [
      "Minimum 2 seasons of food/lifestyle TV direction",
      "Strong visual eye — showreel demonstrates cinematic food coverage",
      "Experience directing talent (not just observational documentary)",
      "Comfortable with multi-camera live-to-tape shooting",
      "Collaborative working style with DP and Showrunner",
    ],
    redFlags: [
      "Showreel looks great but all post-production magic — no evidence of on-set craft",
      "Cannot work at the pace of unscripted TV (2 episodes per week)",
      "Overly controlling style that clashes with spontaneous cooking moments",
    ],
  },
  {
    role: "Director of Photography",
    category: "technical-crew",
    priority: "critical-path",
    stages: PIPELINE_STAGES,
    selectionCriteria: [
      "Food/product cinematography in showreel — not just documentary or drama",
      "Multi-camera experience (minimum 3-camera setups)",
      "Lighting design skills — can make food look warm and appetising",
      "Comfortable with both manned and remote camera operation",
      "Experience with overhead camera rigs",
      "Can create a consistent look across 10 episodes",
    ],
    redFlags: [
      "No food-specific work in portfolio — food cinematography is a speciality",
      "Only single-camera experience — multi-cam is a different workflow",
      "Cannot work within existing lighting infrastructure (wants to rebuild everything)",
    ],
  },
  {
    role: "Food Stylist",
    category: "technical-crew",
    priority: "critical-path",
    stages: PIPELINE_STAGES,
    selectionCriteria: [
      "Professional food styling credits — TV, advertising, or editorial",
      "Can cook and style (not just style pre-made food)",
      "Understanding of camera angles and how food reads on screen",
      "Experience with food swap-outs and multi-stage cooking for camera",
      "Fast and calm under pressure — shoot days are long",
      "Knowledge of East African cuisine and ingredients",
    ],
    redFlags: [
      "Only print/still photography styling — TV pace is much faster",
      "Cannot cook under pressure or improvise when ingredients change",
      "No understanding of how overhead cameras change plating requirements",
    ],
  },
  {
    role: "Lead Editor",
    category: "post-production",
    priority: "high",
    stages: PIPELINE_STAGES,
    selectionCriteria: [
      "Minimum 1 season of food/lifestyle TV editing",
      "Proficient in Premiere Pro or DaVinci Resolve",
      "Can handle multi-cam sync, selects, and assembly under time pressure",
      "Strong storytelling instinct — can find the story in unscripted footage",
      "Comfortable receiving and incorporating 3-5 rounds of notes per episode",
      "Can cut social media content alongside long-form episodes",
    ],
    redFlags: [
      "Only corporate or short-form experience — TV episode pacing is different",
      "Defensive about notes — the edit process is collaborative",
      "Cannot manage media from 4+ cameras efficiently",
    ],
  },
  {
    role: "Head Writer",
    category: "creative-leadership",
    priority: "high",
    stages: PIPELINE_STAGES,
    selectionCriteria: [
      "Experience writing for unscripted TV — running orders, segment outlines, host voice",
      "Deep knowledge of food culture, particularly East African cuisine",
      "Strong research skills — can build compelling ingredient and guest stories",
      "Can write in the host's voice — captures personality without scripting",
      "Comfortable working in a writers room under time pressure",
    ],
    redFlags: [
      "Only scripted writing credits — unscripted writing is structurally different",
      "Cannot write concise, camera-ready running orders",
      "No food or cultural knowledge of the region",
    ],
  },
];

const SUPPLIER_PIPELINE: WorkflowStage[] = [
  {
    id: "identify",
    name: "1. Identify & Research",
    icon: Search,
    color: "#6366F1",
    duration: "1 week",
    owner: "Line Producer",
    description: "Research and identify potential suppliers in each category. Get recommendations from industry contacts, check previous production credits, and verify they serve the Nairobi market.",
    actions: [
      "Compile list of 3-5 vendors per category from industry contacts",
      "Check online presence, reviews, and previous production credits",
      "Verify they serve the Nairobi market and are available for the production window",
      "Request initial rate cards or price lists",
    ],
    deliverables: [
      "Vendor long list with contact details and rate cards",
    ],
    goNoGo: "Minimum 3 vendors identified per critical category",
  },
  {
    id: "rfq",
    name: "2. Request for Quote (RFQ)",
    icon: FileText,
    color: "#F59E0B",
    duration: "1-2 weeks",
    owner: "Line Producer",
    description: "Send a detailed brief to shortlisted vendors. The brief must include: production dates, equipment/service specifications, quantity, duration, delivery location, and any special requirements.",
    actions: [
      "Prepare detailed RFQ document per category",
      "Send to 3-5 shortlisted vendors per category",
      "Allow 5-7 business days for responses",
      "Follow up on non-responses",
      "Compile comparison matrix: price, terms, availability, inclusions/exclusions",
    ],
    deliverables: [
      "RFQ documents sent",
      "Comparison matrix per category with all quotes side by side",
    ],
    goNoGo: "Minimum 2 complete quotes received per category",
  },
  {
    id: "evaluate",
    name: "3. Evaluate & Site Visit",
    icon: Eye,
    color: "#3B82F6",
    duration: "1 week",
    owner: "Line Producer + Department Head",
    description: "Evaluate quotes, visit vendor premises, and test equipment where possible. The cheapest option is rarely the best — reliability and quality matter more on a professional production.",
    actions: [
      "Score each vendor: price (30%), quality (30%), reliability (20%), terms (20%)",
      "Visit top 2 vendors per critical category — inspect equipment, meet the team",
      "For camera/lighting: request a test day with the equipment at the FK set",
      "For catering: request a sample meal for 10 people",
      "Check insurance and liability cover",
      "Verify backup/contingency plan if equipment fails during the shoot",
    ],
    deliverables: [
      "Vendor evaluation scorecard",
      "Site visit notes and photos",
      "Equipment test results (where applicable)",
    ],
    goNoGo: "Top vendor scores above 70% on evaluation criteria",
  },
  {
    id: "negotiate",
    name: "4. Negotiate & Contract",
    icon: Handshake,
    color: "#10B981",
    duration: "1 week",
    owner: "Line Producer + Entertainment Lawyer",
    description: "Negotiate final terms with the selected vendor. Key negotiation points: total price, payment schedule, cancellation terms, equipment replacement guarantee, and whether the deal includes an operator/technician.",
    actions: [
      "Negotiate final price — aim for 10-15% below initial quote for season commitments",
      "Agree payment terms: 30% deposit, 40% mid-production, 30% on wrap",
      "Define cancellation/postponement terms (COVID, weather, force majeure)",
      "Confirm equipment replacement guarantee (backup within 4 hours if failure)",
      "For recurring suppliers: negotiate season rate vs daily rate",
      "Draft and execute service agreement (reviewed by entertainment lawyer)",
    ],
    deliverables: [
      "Signed service agreement / purchase order",
      "Payment schedule confirmed",
      "Insurance certificates on file",
    ],
    goNoGo: "Contract signed and first payment scheduled",
  },
  {
    id: "onboard",
    name: "5. Onboard & Integrate",
    icon: CheckCircle2,
    color: "#22C55E",
    duration: "3-5 days",
    owner: "Line Producer + Production Coordinator",
    description: "Bring the vendor into the production ecosystem. They need to know the schedule, the set, the team contacts, and the quality expectations.",
    actions: [
      "Add vendor to production contact sheet",
      "Schedule delivery/setup dates on the master production calendar",
      "Provide set access details and security protocols",
      "Introduce to relevant department heads",
      "Confirm emergency contact and escalation process",
      "For equipment: schedule pre-production test/setup day",
    ],
    deliverables: [
      "Vendor added to production contact sheet",
      "Delivery/setup dates confirmed on calendar",
      "Pre-production test completed (equipment vendors)",
    ],
    goNoGo: "Vendor confirmed on the production calendar with all deliverables scheduled",
  },
];

function PipelineStageCard({ stage, index, total }: { stage: WorkflowStage; index: number; total: number }) {
  const [open, setOpen] = useState(false);
  const Icon = stage.icon;

  return (
    <div className="relative">
      <div className="border border-white/10 rounded-xl overflow-hidden">
        <button
          onClick={() => setOpen(!open)}
          className="w-full text-left px-5 py-4 flex items-center gap-4 hover:bg-white/5 transition-colors"
        >
          <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: stage.color + "20", color: stage.color }}>
            <Icon className="w-5 h-5" />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-sm font-bold text-white">{stage.name}</h4>
            <div className="flex items-center gap-3 mt-0.5">
              <span className="text-xs text-white/40 flex items-center gap-1"><Timer className="w-3 h-3" />{stage.duration}</span>
              <span className="text-xs text-white/40 flex items-center gap-1"><Users className="w-3 h-3" />{stage.owner}</span>
            </div>
          </div>
          {open ? <ChevronUp className="w-4 h-4 text-white/30 shrink-0" /> : <ChevronDown className="w-4 h-4 text-white/30 shrink-0" />}
        </button>
        {open && (
          <div className="px-5 pb-5 space-y-4 border-t border-white/5 pt-4">
            <p className="text-sm text-white/60 leading-relaxed">{stage.description}</p>

            <div>
              <div className="text-[10px] uppercase tracking-wider text-white/30 mb-2">Actions</div>
              <ul className="space-y-1.5">
                {stage.actions.map((a, i) => (
                  <li key={i} className="text-xs text-white/60 flex gap-2">
                    <CircleDot className="w-3 h-3 text-white/20 shrink-0 mt-0.5" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="text-[10px] uppercase tracking-wider text-white/30 mb-2">Deliverables</div>
              <ul className="space-y-1.5">
                {stage.deliverables.map((d, i) => (
                  <li key={i} className="text-xs text-white/60 flex gap-2">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400/60 shrink-0 mt-0.5" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/5 rounded-lg p-3">
              <div className="text-[10px] uppercase tracking-wider text-white/30 mb-1">Go / No-Go Gate</div>
              <p className="text-xs text-white/70 font-medium">{stage.goNoGo}</p>
            </div>
          </div>
        )}
      </div>
      {index < total - 1 && (
        <div className="flex justify-center py-1">
          <ArrowDown className="w-4 h-4 text-white/15" />
        </div>
      )}
    </div>
  );
}

function RoleWorkflowCard({ rw }: { rw: RoleWorkflow }) {
  const [open, setOpen] = useState(false);
  const priorityStyle = rw.priority === "critical-path"
    ? "bg-red-500/20 text-red-300 border-red-500/30"
    : rw.priority === "high"
    ? "bg-amber-500/20 text-amber-300 border-amber-500/30"
    : "bg-white/5 text-white/50 border-white/10";

  return (
    <div className="border border-white/10 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-5 py-4 flex items-center gap-3 hover:bg-white/5 transition-colors"
      >
        <Briefcase className="w-5 h-5 text-white/40 shrink-0" />
        <div className="flex-1 min-w-0">
          <span className="text-sm font-bold text-white">{rw.role}</span>
        </div>
        <span className={`px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider border ${priorityStyle}`}>
          {rw.priority.replace("-", " ")}
        </span>
        {open ? <ChevronUp className="w-4 h-4 text-white/30 shrink-0" /> : <ChevronDown className="w-4 h-4 text-white/30 shrink-0" />}
      </button>
      {open && (
        <div className="px-5 pb-5 space-y-4 border-t border-white/5 pt-4">
          <div>
            <div className="text-[10px] uppercase tracking-wider text-white/30 mb-2 flex items-center gap-1">
              <ThumbsUp className="w-3 h-3" /> Selection Criteria
            </div>
            <ul className="space-y-1.5">
              {rw.selectionCriteria.map((c, i) => (
                <li key={i} className="text-xs text-white/60 flex gap-2">
                  <CircleCheck className="w-3 h-3 text-emerald-400/60 shrink-0 mt-0.5" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-wider text-white/30 mb-2 flex items-center gap-1">
              <ThumbsDown className="w-3 h-3" /> Red Flags
            </div>
            <ul className="space-y-1.5">
              {rw.redFlags.map((r, i) => (
                <li key={i} className="text-xs text-white/60 flex gap-2">
                  <CircleX className="w-3 h-3 text-red-400/60 shrink-0 mt-0.5" />
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

function SelectionWorkflowTab() {
  const [section, setSection] = useState<"team-pipeline" | "supplier-pipeline" | "role-criteria">("team-pipeline");

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap justify-center gap-2">
        <button
          onClick={() => setSection("team-pipeline")}
          className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold transition-colors ${
            section === "team-pipeline" ? "bg-indigo-500/20 text-indigo-300 border border-indigo-500/30" : "bg-white/5 text-white/50 hover:bg-white/10 border border-white/10"
          }`}
        >
          <ListChecks className="w-3.5 h-3.5" />
          Team Hiring Pipeline
        </button>
        <button
          onClick={() => setSection("supplier-pipeline")}
          className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold transition-colors ${
            section === "supplier-pipeline" ? "bg-indigo-500/20 text-indigo-300 border border-indigo-500/30" : "bg-white/5 text-white/50 hover:bg-white/10 border border-white/10"
          }`}
        >
          <Package className="w-3.5 h-3.5" />
          Supplier Selection Pipeline
        </button>
        <button
          onClick={() => setSection("role-criteria")}
          className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold transition-colors ${
            section === "role-criteria" ? "bg-indigo-500/20 text-indigo-300 border border-indigo-500/30" : "bg-white/5 text-white/50 hover:bg-white/10 border border-white/10"
          }`}
        >
          <ClipboardCheck className="w-3.5 h-3.5" />
          Role-Specific Criteria
        </button>
      </div>

      {section === "team-pipeline" && (
        <div className="space-y-6">
          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <h3 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
              <ListChecks className="w-4 h-4 text-indigo-400" />
              Team Hiring Pipeline — 6 Stages
            </h3>
            <p className="text-xs text-white/50 leading-relaxed mb-1">
              Every team member — from Showrunner to Runner — goes through this pipeline. The depth of each stage scales with seniority: a Showrunner gets a full 60-minute chemistry read with Leo; a Runner gets a 15-minute practical task. But every hire passes every gate.
            </p>
            <div className="flex flex-wrap gap-3 mt-3">
              <div className="flex items-center gap-1.5 text-xs text-white/40">
                <Timer className="w-3.5 h-3.5" />
                Total: 6-8 weeks per role
              </div>
              <div className="flex items-center gap-1.5 text-xs text-white/40">
                <Users className="w-3.5 h-3.5" />
                Run by: Line Producer + Showrunner
              </div>
              <div className="flex items-center gap-1.5 text-xs text-white/40">
                <Crown className="w-3.5 h-3.5" />
                Final approval: Leo Macharia
              </div>
            </div>
          </div>

          <div className="space-y-1">
            {PIPELINE_STAGES.map((stage, i) => (
              <PipelineStageCard key={stage.id} stage={stage} index={i} total={PIPELINE_STAGES.length} />
            ))}
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-400" />
              Hiring Priority Order
            </h4>
            <p className="text-xs text-white/50 mb-3">Roles must be filled in this order — each hire depends on the one before it.</p>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-3 p-2 bg-red-500/10 border border-red-500/20 rounded-lg">
                <span className="font-bold text-red-300 w-16 shrink-0">Week 1-3</span>
                <span className="text-white/70">Showrunner / Executive Producer — everything else flows from this hire</span>
              </div>
              <div className="flex items-center gap-3 p-2 bg-red-500/10 border border-red-500/20 rounded-lg">
                <span className="font-bold text-red-300 w-16 shrink-0">Week 2-4</span>
                <span className="text-white/70">Line Producer — manages budget, schedule, and all subsequent hiring logistics</span>
              </div>
              <div className="flex items-center gap-3 p-2 bg-amber-500/10 border border-amber-500/20 rounded-lg">
                <span className="font-bold text-amber-300 w-16 shrink-0">Week 3-5</span>
                <span className="text-white/70">Director + DP + Head Writer — the creative core that defines the show's look and voice</span>
              </div>
              <div className="flex items-center gap-3 p-2 bg-amber-500/10 border border-amber-500/20 rounded-lg">
                <span className="font-bold text-amber-300 w-16 shrink-0">Week 4-6</span>
                <span className="text-white/70">Food Stylist + Production Sound Mixer — must be locked before recipe testing begins</span>
              </div>
              <div className="flex items-center gap-3 p-2 bg-white/5 border border-white/10 rounded-lg">
                <span className="font-bold text-white/50 w-16 shrink-0">Week 5-7</span>
                <span className="text-white/70">Lead Editor + Motion Graphics + Composer — post-production team prepped before shoot</span>
              </div>
              <div className="flex items-center gap-3 p-2 bg-white/5 border border-white/10 rounded-lg">
                <span className="font-bold text-white/50 w-16 shrink-0">Week 6-8</span>
                <span className="text-white/70">1st AD + B-Cam + Gaffer + Coordinator + Runners + Marketing — final team assembly</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {section === "supplier-pipeline" && (
        <div className="space-y-6">
          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <h3 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
              <Package className="w-4 h-4 text-indigo-400" />
              Supplier Selection Pipeline — 5 Stages
            </h3>
            <p className="text-xs text-white/50 leading-relaxed">
              Every supplier and vendor — from camera rental to catering — follows this procurement pipeline. The Line Producer owns the process. Critical-path suppliers (cameras, lighting, set construction) must be locked 6 weeks before the first shoot day.
            </p>
            <div className="flex flex-wrap gap-3 mt-3">
              <div className="flex items-center gap-1.5 text-xs text-white/40">
                <Timer className="w-3.5 h-3.5" />
                Total: 4-5 weeks per category
              </div>
              <div className="flex items-center gap-1.5 text-xs text-white/40">
                <Users className="w-3.5 h-3.5" />
                Run by: Line Producer
              </div>
            </div>
          </div>

          <div className="space-y-1">
            {SUPPLIER_PIPELINE.map((stage, i) => (
              <PipelineStageCard key={stage.id} stage={stage} index={i} total={SUPPLIER_PIPELINE.length} />
            ))}
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-amber-400" />
              Supplier Negotiation Principles
            </h4>
            <ul className="space-y-2 text-xs text-white/60">
              <li className="flex gap-2"><span className="text-white/20">1.</span> Never accept the first quote — always negotiate, but respect the vendor's value</li>
              <li className="flex gap-2"><span className="text-white/20">2.</span> Season deals beat daily rates — commit to 10 episodes for 15-20% discount</li>
              <li className="flex gap-2"><span className="text-white/20">3.</span> Payment terms protect cash flow: 30/40/30 split (deposit / mid / wrap)</li>
              <li className="flex gap-2"><span className="text-white/20">4.</span> Always have a backup vendor identified for critical categories</li>
              <li className="flex gap-2"><span className="text-white/20">5.</span> Equipment replacement guarantee is non-negotiable — 4-hour swap if failure</li>
              <li className="flex gap-2"><span className="text-white/20">6.</span> Get credit on the show for suppliers willing to reduce rates — screen credit has value</li>
              <li className="flex gap-2"><span className="text-white/20">7.</span> Separate the deal from the relationship — professional contracts protect both sides</li>
            </ul>
          </div>
        </div>
      )}

      {section === "role-criteria" && (
        <div className="space-y-6">
          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <h3 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
              <ClipboardCheck className="w-4 h-4 text-indigo-400" />
              Role-Specific Selection Criteria & Red Flags
            </h3>
            <p className="text-xs text-white/50 leading-relaxed">
              Each role has specific criteria that go beyond the generic pipeline. These are the things that separate a good hire from a great one — and the red flags that should stop the process immediately.
            </p>
          </div>

          <div className="space-y-3">
            {ROLE_WORKFLOWS.map((rw) => (
              <RoleWorkflowCard key={rw.role} rw={rw} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function TeamPage() {
  const [tab, setTab] = useState<"team" | "suppliers" | "workflow">("team");

  const allMembers = DEPARTMENTS.flatMap((d) => d.members);
  const confirmed = allMembers.filter((m) => m.status === "confirmed").length;
  const toHire = allMembers.filter((m) => m.status === "to-hire").length;
  const toSource = allMembers.filter((m) => m.status === "to-source").length;
  const totalRoles = allMembers.length;

  const supplierConfirmed = SUPPLIERS.filter((s) => s.status === "confirmed").length;
  const supplierShortlisted = SUPPLIERS.filter((s) => s.status === "shortlisted").length;
  const supplierToSource = SUPPLIERS.filter((s) => s.status === "to-source").length;

  const supplierCategories = [...new Set(SUPPLIERS.map((s) => s.category))];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center gap-3">
            <Users className="w-8 h-8 text-[#F40009]" />
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight">Team & Suppliers</h1>
          </div>
          <p className="text-white/60 max-w-2xl mx-auto text-sm leading-relaxed">
            The complete organisation structure, team roster, and supplier partnerships needed to deliver Founders Kitchen Season 1.
          </p>
        </div>

        <div className="flex justify-center gap-2">
          <button
            onClick={() => setTab("team")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
              tab === "team" ? "bg-[#F40009] text-white" : "bg-white/5 text-white/60 hover:bg-white/10"
            }`}
          >
            <Users className="w-4 h-4" />
            Team ({totalRoles} roles)
          </button>
          <button
            onClick={() => setTab("suppliers")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
              tab === "suppliers" ? "bg-[#F40009] text-white" : "bg-white/5 text-white/60 hover:bg-white/10"
            }`}
          >
            <Package className="w-4 h-4" />
            Suppliers ({SUPPLIERS.length})
          </button>
          <button
            onClick={() => setTab("workflow")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
              tab === "workflow" ? "bg-[#F40009] text-white" : "bg-white/5 text-white/60 hover:bg-white/10"
            }`}
          >
            <ListChecks className="w-4 h-4" />
            Selection Workflow
          </button>
        </div>

        {tab === "team" && (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                <div className="text-2xl font-black text-white">{totalRoles}</div>
                <div className="text-xs text-white/50 mt-1">Total Roles</div>
              </div>
              <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4 text-center">
                <div className="text-2xl font-black text-emerald-400">{confirmed}</div>
                <div className="text-xs text-emerald-300/60 mt-1">Confirmed</div>
              </div>
              <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 text-center">
                <div className="text-2xl font-black text-amber-400">{toHire}</div>
                <div className="text-xs text-amber-300/60 mt-1">To Hire</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                <div className="text-2xl font-black text-white/50">{toSource}</div>
                <div className="text-xs text-white/40 mt-1">To Source</div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-5">
              <h3 className="text-sm font-bold text-white/80 uppercase tracking-wider mb-3 flex items-center gap-2">
                <Crown className="w-4 h-4 text-[#F40009]" />
                Reporting Structure
              </h3>
              <div className="text-xs text-white/60 space-y-1 font-mono">
                <div className="text-white font-bold">Leo Macharia — Host & Content Director</div>
                <div className="ml-4">Maurice — Communications & Brand Director</div>
                <div className="ml-8">Marketing Lead</div>
                <div className="ml-12">Social Media Editor</div>
                <div className="ml-8">Publicist / PR Agency</div>
                <div className="ml-8">Brand Integration Manager</div>
                <div className="ml-4">Showrunner / Executive Producer</div>
                <div className="ml-8">Director</div>
                <div className="ml-12">Director of Photography</div>
                <div className="ml-16">B-Camera Operator</div>
                <div className="ml-16">Gaffer</div>
                <div className="ml-12">Production Sound Mixer</div>
                <div className="ml-12">1st Assistant Director</div>
                <div className="ml-8">Line Producer</div>
                <div className="ml-12">Production Coordinator</div>
                <div className="ml-16">Runners / PAs (2)</div>
                <div className="ml-8">Head Writer</div>
                <div className="ml-12">Segment Writers (2-3)</div>
                <div className="ml-8">John Gikanga — Production Designer</div>
                <div className="ml-12">Food Stylist</div>
                <div className="ml-12">Art Dept Buyer / Props</div>
                <div className="ml-8">Lead Editor</div>
                <div className="ml-12">Assistant Editor</div>
                <div className="ml-12">Colourist</div>
                <div className="ml-8">Motion Graphics Designer</div>
                <div className="ml-8">Composer / Music Supervisor</div>
                <div className="ml-4">Entertainment Lawyer (external)</div>
              </div>
            </div>

            <div className="space-y-4">
              {DEPARTMENTS.map((dept) => (
                <DepartmentSection key={dept.name} dept={dept} />
              ))}
            </div>
          </>
        )}

        {tab === "suppliers" && (
          <>
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4 text-center">
                <div className="text-2xl font-black text-emerald-400">{supplierConfirmed}</div>
                <div className="text-xs text-emerald-300/60 mt-1">Confirmed</div>
              </div>
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4 text-center">
                <div className="text-2xl font-black text-blue-400">{supplierShortlisted}</div>
                <div className="text-xs text-blue-300/60 mt-1">Shortlisted</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                <div className="text-2xl font-black text-white/50">{supplierToSource}</div>
                <div className="text-xs text-white/40 mt-1">To Source</div>
              </div>
            </div>

            <div className="space-y-6">
              {supplierCategories.map((cat) => {
                const items = SUPPLIERS.filter((s) => s.category === cat);
                return (
                  <div key={cat} className="border border-white/10 rounded-xl overflow-hidden">
                    <div className="px-5 py-3 bg-white/5 border-b border-white/5">
                      <h3 className="text-sm font-bold text-white uppercase tracking-wider">{cat}</h3>
                    </div>
                    <div className="divide-y divide-white/5">
                      {items.map((s, i) => (
                        <div key={i} className="px-5 py-4">
                          <div className="flex items-start gap-3">
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 flex-wrap">
                                <span className={`font-semibold text-sm ${s.status === "to-source" ? "text-white/50 italic" : "text-white"}`}>
                                  {s.name}
                                </span>
                                <span className={`px-1.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider border ${statusBadge(s.status)}`}>
                                  {statusText(s.status)}
                                </span>
                                <span className={`px-1.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider border ${priorityBadge(s.priority)}`}>
                                  {s.priority}
                                </span>
                              </div>
                              <p className="text-xs text-white/60 mt-1">{s.service}</p>
                              {s.notes && (
                                <p className="text-xs text-white/40 mt-2 italic bg-white/5 rounded p-2">{s.notes}</p>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}

        {tab === "workflow" && <SelectionWorkflowTab />}
      </div>
    </div>
  );
}
