import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  FileText,
  Users,
  DollarSign,
  Camera,
  Film,
  Clapperboard,
  Megaphone,
  Calendar,
  CheckCircle2,
  Clock,
  MapPin,
  Mic2,
  Palette,
  Target,
  TrendingUp,
  Tv,
  Award,
  Globe,
  Shield,
  Lightbulb,
  Music,
  Utensils,
  Truck,
  Scale,
  BarChart3,
  Sparkles,
  Play,
  MonitorPlay,
  Handshake,
} from "lucide-react";

type Phase = {
  id: string;
  title: string;
  subtitle: string;
  icon: typeof FileText;
  color: string;
  duration: string;
  tracks: Track[];
};

type Track = {
  title: string;
  icon: typeof FileText;
  tasks: Task[];
};

type Task = {
  name: string;
  detail: string;
  duration: string;
  deliverable: string;
  status: "not-started" | "in-progress" | "done";
};

const PHASES: Phase[] = [
  {
    id: "development",
    title: "Phase 1: Development",
    subtitle: "From idea to greenlight",
    icon: Lightbulb,
    color: "#6366F1",
    duration: "3-6 months",
    tracks: [
      {
        title: "Concept & Format",
        icon: FileText,
        tasks: [
          {
            name: "Show Bible",
            detail: "The master document. Defines the world: show title, logline (one sentence that sells), tone, visual identity, target audience (age, demo, psychographic), episode format (duration, structure), season arc, recurring segments, and what makes this show different from everything else on air. For FK: a cooking show where the kitchen IS the brand — every surface, product and ingredient is a sponsorship opportunity baked into the narrative.",
            duration: "4-6 weeks",
            deliverable: "40-60 page Show Bible PDF",
            status: "in-progress",
          },
          {
            name: "Pitch Deck",
            detail: "A visual, concise version of the Bible designed for network executives, streamers, and brand partners. Covers the hook, the host, the format, comparable shows (with ratings), target audience size, monetisation model, and why NOW is the time. Include mood boards, sample episode breakdowns, and a sizzle reel link.",
            duration: "2-3 weeks",
            deliverable: "20-slide pitch deck + 2-min sizzle reel",
            status: "not-started",
          },
          {
            name: "Format Structure",
            detail: "Lock the episode format: cold open (2 min) → title sequence (30 sec) → Act 1: Ingredient Story (8 min) → Act 2: Cook (12 min) → Act 3: Table/Tasting (5 min) → End tag / next episode tease (2 min). Define segment lengths, commercial break points (for linear), and natural product placement windows. Netflix doesn't have ad breaks — so integration must be organic.",
            duration: "2 weeks",
            deliverable: "Episode format template document",
            status: "not-started",
          },
          {
            name: "Competitive Analysis",
            detail: "Map the landscape: what cooking shows exist in Kenya, East Africa, Africa, and globally? Where is the gap? Analyse MasterChef, The Great British Bake Off, Salt Fat Acid Heat, Chef's Table, Somebody Feed Phil. What works, what doesn't, and where does FK sit? Identify the whitespace — a show that is equal parts cooking, architecture, brand storytelling, and African identity.",
            duration: "2 weeks",
            deliverable: "Competitive landscape report with positioning matrix",
            status: "not-started",
          },
        ],
      },
      {
        title: "Business & Legal",
        icon: Scale,
        tasks: [
          {
            name: "IP & Rights Structure",
            detail: "Define who owns what: format rights, music rights, brand integration rights, merchandise rights, clip licensing, international distribution. Register the show title. Set up the production company entity (or use FBF). Decide: is this a format that can be licensed to other markets (FK Nigeria, FK UK)?",
            duration: "3-4 weeks",
            deliverable: "IP ownership matrix + trademark filing",
            status: "not-started",
          },
          {
            name: "Budget Framework",
            detail: "Build the master budget: above-the-line (talent, director, writers, producers), below-the-line (crew, equipment, location, catering, transport), post-production (edit, colour, sound, music licensing, graphics), and delivery (format conversion, QC, closed captions). A Netflix-level cooking show runs USD 150K-500K per episode depending on scale. FK's advantage: the set is permanent, which cuts location costs.",
            duration: "3 weeks",
            deliverable: "Per-episode and full-season budget spreadsheet",
            status: "not-started",
          },
          {
            name: "Financing & Distribution Strategy",
            detail: "Identify the money sources: broadcaster licence fee (e.g. NTV, Citizen), streaming platform deal (Showmax, Netflix Africa), brand sponsorship (Naivas, Carrefour, appliance brands), government film fund (Kenya Film Commission), international co-production treaties. A hybrid model — brand-funded production with streaming distribution — gives maximum creative control.",
            duration: "4-6 weeks",
            deliverable: "Financing plan with waterfall + term sheets",
            status: "not-started",
          },
          {
            name: "Contracts & Agreements",
            detail: "Draft: talent agreements (host, guest chefs), crew deal memos, brand integration agreements (what they get, what they don't), location agreements, music licensing, insurance (production liability, equipment, errors & omissions). Everything signed before a camera rolls.",
            duration: "Ongoing",
            deliverable: "Contract templates + executed agreements",
            status: "not-started",
          },
        ],
      },
      {
        title: "Talent & Team Assembly",
        icon: Users,
        tasks: [
          {
            name: "Host Casting",
            detail: "The host IS the show. Requirements: camera-comfortable, genuine cooking skill (not necessarily trained chef), storytelling ability, brand-safe but with edge, relatable to the target demographic. For FK: someone who embodies the Founders Brand — young, African, ambitious, authentic. Could be an existing personality or a discovery. Audition process: chemistry read, cooking demo on camera, improvisation test.",
            duration: "4-8 weeks",
            deliverable: "Host shortlist (3-5) → final selection with screen test footage",
            status: "not-started",
          },
          {
            name: "Core Production Team",
            detail: "Hire: Showrunner (runs the creative — this is the most important hire), Director (visual style), Director of Photography (camera language), Line Producer (logistics + budget), Food Stylist (makes food look incredible on camera), Production Designer (the set), Sound Recordist, 1st AD (runs the floor). For a 10-episode season: 6-week shoot block, crew of 25-35.",
            duration: "4-6 weeks",
            deliverable: "Crew list with deal memos",
            status: "not-started",
          },
          {
            name: "Writers Room",
            detail: "Even 'unscripted' shows are written. The writers room develops: episode themes, guest profiles, story arcs within each episode, interview questions, segment transitions, the host's voice and personality (what they would and wouldn't say), cultural context notes, and the running order. For a 10-episode season: head writer + 2-3 segment writers, 6-week room before shooting starts.",
            duration: "6 weeks",
            deliverable: "10 episode outlines + running orders",
            status: "not-started",
          },
        ],
      },
    ],
  },
  {
    id: "pre-production",
    title: "Phase 2: Pre-Production",
    subtitle: "Building the machine before you switch it on",
    icon: Clapperboard,
    color: "#F59E0B",
    duration: "2-4 months",
    tracks: [
      {
        title: "Set & Location",
        icon: MapPin,
        tasks: [
          {
            name: "Set Build / Renovation",
            detail: "The FK studio is a permanent set — this is a massive advantage. The kitchen must work for both cooking AND camera. Requirements: multiple camera positions (minimum 3), overhead camera rig, natural light supplemented by controlled studio lighting, enough depth for medium and wide shots, a 'hero counter' that faces the main camera, background shelving styled with sponsor products, gas/electric cooking stations, running water with silent plumbing, dedicated prep area out of frame.",
            duration: "8-12 weeks",
            deliverable: "Completed, dressed, lit set ready for camera test",
            status: "in-progress",
          },
          {
            name: "Technical Infrastructure",
            detail: "Install: multi-camera system (3-4 cameras — two manned, one locked wide, one overhead), audio setup (boom + wireless lavs), lighting grid (LED panels on dimmers — daylight balanced), video village (monitors for director, showrunner, food stylist), playback system, talkback/comms for crew. Internet for live streaming capability. Power: dedicated circuits for kitchen appliances and production equipment — they cannot share.",
            duration: "4-6 weeks",
            deliverable: "Technical rider + completed installation + test footage",
            status: "not-started",
          },
          {
            name: "Set Dressing & Brand Integration Zones",
            detail: "Every visible surface is an opportunity. Map the set into brand zones: Hero Counter (main cooking surface — appliance brand), Background Shelves (FMCG products — arranged by colour/height, not brand blocking), Fridge (branded, stocked with sponsor products each episode), Pantry Wall (dry goods — cereal brands, spices, oils), Outdoor Grill Area (charcoal/gas brand), Drink Station (beverages — coffee, juice, water). Each zone has a 'dwell time' on camera — measured in seconds per episode. This is what you sell to sponsors.",
            duration: "3-4 weeks",
            deliverable: "Brand zone map with camera dwell-time estimates",
            status: "in-progress",
          },
        ],
      },
      {
        title: "Creative Preparation",
        icon: Palette,
        tasks: [
          {
            name: "Visual Style Guide",
            detail: "Define: colour palette (warm, natural — not sterile), camera movement language (handheld for energy, locked for beauty shots), aspect ratio (16:9 standard, but consider 2:1 for cinematic feel), title card design, lower thirds, transition graphics, end card. The look should feel premium but warm — Chef's Table meets Saturday morning in a Nairobi kitchen.",
            duration: "3 weeks",
            deliverable: "Visual style bible with reference stills + motion graphics package",
            status: "not-started",
          },
          {
            name: "Music & Sound Design",
            detail: "Commission: main title theme (30 seconds, distinctive, hummable), segment transition stings (5-10 seconds each, 4-5 variations), background score beds (cooking energy, emotional story moments, tasting/reveal), end credits theme. All original composition OR fully licensed. No library music for a premium show. Sound design: sizzle, chop, pour, bubble — the ASMR of cooking. These sounds are as important as the music.",
            duration: "4-6 weeks",
            deliverable: "Music package (theme + 15-20 cues) + sound design library",
            status: "not-started",
          },
          {
            name: "Recipe Development & Testing",
            detail: "Every recipe cooked on camera must be tested 3-4 times before shoot day. The food stylist and host cook together during prep weeks. Each recipe has a 'camera cook' plan: what can be prepped in advance, where are the swap-outs (pre-cooked versions ready for the reveal), timing (a 2-hour braise becomes a 2-minute segment with swap), beauty plating specifications. Build the recipe book that becomes a companion product.",
            duration: "6-8 weeks",
            deliverable: "10 episode recipe packs (3-4 recipes each) fully tested",
            status: "not-started",
          },
          {
            name: "Episode Scripts & Running Orders",
            detail: "Each episode gets a running order: minute-by-minute breakdown of every segment, every camera position, every prop, every product placement, every guest entrance, every music cue. The 1st AD runs the floor from this document. Include: pre-cook prep list, ingredient shopping list, sponsor product call sheet, wardrobe notes, hair/makeup brief, guest briefing notes.",
            duration: "4 weeks",
            deliverable: "10 running orders (8-12 pages each)",
            status: "not-started",
          },
        ],
      },
      {
        title: "Logistics & Operations",
        icon: Truck,
        tasks: [
          {
            name: "Production Schedule",
            detail: "Build the master schedule: 10 episodes over 6 weeks (shooting 2 episodes per week, allowing for setup days, guest travel, and buffer). Each shoot day: call time 6am (crew), 7am (talent), camera ready 9am, shoot 9am-6pm, wrap by 7pm. Allow 1 rest day per week. Build in 2 contingency days for reshoots or weather (if outdoor segments).",
            duration: "2 weeks",
            deliverable: "Master production calendar + daily call sheets template",
            status: "not-started",
          },
          {
            name: "Ingredient & Prop Sourcing",
            detail: "For each episode: full ingredient list (sourced 48hrs before shoot), backup ingredients (in case of quality issues), all props and serving ware, sponsor products (confirmed delivery from brand partners), wardrobe for host and guests. Designate a dedicated Art Department buyer — this person sources everything that appears on camera.",
            duration: "Ongoing (per episode)",
            deliverable: "Per-episode procurement checklist system",
            status: "not-started",
          },
          {
            name: "Insurance & Permits",
            detail: "Production insurance: general liability, equipment (cameras, lenses, grip), errors & omissions (E&O — required for distribution), workers compensation, auto (for any production vehicles). Filming permits if shooting on location outside the studio. Food handling permits/certification for the kitchen.",
            duration: "2-3 weeks",
            deliverable: "Insurance certificates + permits file",
            status: "not-started",
          },
        ],
      },
    ],
  },
  {
    id: "production",
    title: "Phase 3: Production",
    subtitle: "Cameras rolling — this is where it happens",
    icon: Camera,
    color: "#EF4444",
    duration: "6-8 weeks (shooting block)",
    tracks: [
      {
        title: "Principal Photography",
        icon: Film,
        tasks: [
          {
            name: "Studio Shoot Days",
            detail: "The core of the show. Each episode requires 1 full shoot day (10-12 hours). Typical day: 6am crew call → 7am lighting/camera setup → 8am food prep begins (off camera) → 9am talent in hair/makeup → 10am first setup rolls → noon lunch break → 1pm afternoon block → 5pm final beauty shots → 6pm wrap. The 1st AD keeps everything on schedule. The director calls the shots. The showrunner protects the story.",
            duration: "10 shoot days (5 weeks)",
            deliverable: "Raw footage: 6-10 hours per episode → edited to 28-45 min",
            status: "not-started",
          },
          {
            name: "Multi-Camera Operation",
            detail: "Camera 1 (A-cam): Main host coverage — medium shot, follows action. Camera 2 (B-cam): Guest/reaction shots + alternative angles. Camera 3: Locked wide — establishes the space, catches spontaneous moments. Camera 4 (overhead): Mounted above the main cooking surface — the signature cooking show angle. Beauty cam: used between segments for macro food shots (steam rising, oil sizzling, garnish falling). Each camera operator has a shot list per segment.",
            duration: "Per shoot day",
            deliverable: "Multi-angle footage synced via timecode",
            status: "not-started",
          },
          {
            name: "Sound Recording",
            detail: "Production sound is critical in a cooking show — you need the conversation AND the cooking sounds. Setup: wireless lavalier on host + each guest, boom mic for ambient/cooking sounds, dedicated overhead mic above the cooking surface for close-up food audio (sizzle, chop, pour). Record to multi-track (minimum 4 channels). The sound recordist monitors live and calls for retakes if audio is compromised by kitchen noise.",
            duration: "Per shoot day",
            deliverable: "Multi-track audio per episode (synced to video)",
            status: "not-started",
          },
          {
            name: "Food Styling & Swap Management",
            detail: "The food stylist is the unsung hero. Their job: make every dish look perfect on camera. They manage 'swap-outs' — pre-cooked versions of dishes at various stages (the raw version, the halfway version, the finished beauty version). When the host puts something in the oven on camera, the stylist swaps in the pre-cooked version for the reveal. They also plate every dish for the final beauty shot. They have a dedicated prep kitchen off-set.",
            duration: "Per shoot day",
            deliverable: "Camera-ready food at every stage + beauty plates",
            status: "not-started",
          },
        ],
      },
      {
        title: "B-Roll & Inserts",
        icon: Sparkles,
        tasks: [
          {
            name: "Market & Source Footage",
            detail: "Each episode opens with or includes a segment at a real market, farm, or supplier. Shoot: Nairobi's markets (Maasai Market, City Market, Wakulima), farms (for hero ingredients), Naivas/Carrefour store runs (branded — this is sponsorship gold). These shoots are 1 crew (DP + sound + host + driver), half-day each. 2-3 location shoots per week during the production block.",
            duration: "5-8 location days",
            deliverable: "Location B-roll library: 2-3 hours per location",
            status: "not-started",
          },
          {
            name: "Macro Food Photography",
            detail: "The beauty shots that make cooking shows irresistible: extreme close-up of oil hitting a hot pan, slow-motion herb chop, steam rising from a pot, chocolate being tempered, bread being torn. These are shot with a macro lens, often at high frame rate (60fps or 120fps for slow motion). Usually shot at the end of each cook segment while the dish is at its peak. Some are shot as dedicated insert days with the food stylist.",
            duration: "Built into shoot days + 2 dedicated insert days",
            deliverable: "Beauty shot library: 50-100 shots per season",
            status: "not-started",
          },
          {
            name: "Drone & Exterior Footage",
            detail: "Establish the world: aerial shots of Nairobi, the FK studio exterior and garden, the neighbourhood, the drive to market. These are used in title sequences, episode opens, and transitions. Drone operation requires a licensed pilot and KCAA permit in Kenya. Best shot at golden hour (6-7am or 5-6pm).",
            duration: "2-3 days",
            deliverable: "Aerial footage library: 20-30 usable shots",
            status: "not-started",
          },
        ],
      },
      {
        title: "On-Set Management",
        icon: Clapperboard,
        tasks: [
          {
            name: "Daily Production Reports",
            detail: "The line producer or production manager files a daily report: scenes completed, footage shot (hours), issues/delays, cost overruns, accident/incident log, next day's call sheet. These reports become the paper trail for the entire production and are essential for insurance, accounting, and post-production scheduling.",
            duration: "Daily during shoot",
            deliverable: "Daily production report + next-day call sheet",
            status: "not-started",
          },
          {
            name: "Dailies Review",
            detail: "At the end of each shoot day (or next morning), the director, showrunner, and editor review selected takes — the 'dailies.' This is where problems get caught early: bad audio, unflattering angles, missed product placements, host performance issues. Notes go back to the floor for the next shoot day. Dailies also go to the network/streamer exec if they have approval rights.",
            duration: "1-2 hours daily",
            deliverable: "Dailies notes + selects for editor",
            status: "not-started",
          },
          {
            name: "Brand Integration Verification",
            detail: "A dedicated person (usually the line producer or a brand liaison) verifies on set: all sponsor products are visible in their designated zones, labels face camera, no competitor products are in frame, product usage feels natural (not forced), host mentions/interactions hit the contractual requirements. This person has the brand integration schedule and checks off each obligation per episode.",
            duration: "Per shoot day",
            deliverable: "Brand integration compliance log per episode",
            status: "not-started",
          },
        ],
      },
    ],
  },
  {
    id: "post-production",
    title: "Phase 4: Post-Production",
    subtitle: "Where the raw becomes refined",
    icon: MonitorPlay,
    color: "#8B5CF6",
    duration: "3-5 months",
    tracks: [
      {
        title: "Editorial",
        icon: Film,
        tasks: [
          {
            name: "Offline Edit (Assembly → Rough → Fine)",
            detail: "The editor builds each episode in stages. Assembly cut: all footage laid out in order (60-90 min). Rough cut: tightened to near-final length (35-50 min), story structure locked. Fine cut: every frame polished, timing perfected, music placed, graphics roughed in. Each stage gets notes from the showrunner, director, and network. Typical: 3-5 rounds of notes per episode. For 10 episodes: 1 lead editor + 1 assistant editor working in parallel, staggered 1 week apart.",
            duration: "8-12 weeks",
            deliverable: "10 locked fine cuts approved by all stakeholders",
            status: "not-started",
          },
          {
            name: "Motion Graphics & Titles",
            detail: "Design and animate: main title sequence (15-30 sec), episode title cards, lower thirds (name supers, recipe names, ingredient callouts), segment bumpers, recipe step overlays, end cards, 'next on' teasers. All must match the visual style guide. The graphics package should feel ownable — when someone sees that lower third, they know it's FK.",
            duration: "4-6 weeks (parallel with edit)",
            deliverable: "Full graphics package: 30-40 individual elements",
            status: "not-started",
          },
          {
            name: "Colour Grade",
            detail: "A colourist takes the locked edit and makes it look like a million dollars. Cooking shows need warm, appetising colour: skin tones glow, food pops, the kitchen feels inviting. Shot-to-shot matching across multi-camera coverage. Create a show LUT (look-up table) that becomes the FK colour signature. Grade in DaVinci Resolve or Baselight. Allow 1-2 days per episode.",
            duration: "3-4 weeks",
            deliverable: "10 colour-graded episodes + show LUT",
            status: "not-started",
          },
        ],
      },
      {
        title: "Sound & Music",
        icon: Music,
        tasks: [
          {
            name: "Sound Mix",
            detail: "A dubbing mixer balances: dialogue (clear, present, warm), cooking sounds (enhanced but not overwhelming), ambient room tone, music (under dialogue, never competing). The mix is done in a calibrated studio. Deliverables: stereo mix (streaming), 5.1 surround mix (if required by platform), M&E (music and effects only — for international versioning). Allow 1 day per episode in the mix suite.",
            duration: "3-4 weeks",
            deliverable: "10 final mixes (stereo + 5.1 + M&E)",
            status: "not-started",
          },
          {
            name: "Music Score & Licensing",
            detail: "Lay the commissioned music into the locked edit. If any additional cues are needed, the composer writes to picture. Clear all music rights: original score (work-for-hire or licensed), any needle-drop tracks (sync license + master license), any traditional/cultural music (verify public domain or get clearance). Music cue sheet filed per episode — this is a legal requirement for broadcast.",
            duration: "2-3 weeks (parallel with mix)",
            deliverable: "Music cue sheets + clearance certificates",
            status: "not-started",
          },
        ],
      },
      {
        title: "Delivery & QC",
        icon: CheckCircle2,
        tasks: [
          {
            name: "Quality Control & Mastering",
            detail: "A QC house checks every frame of every episode: audio levels within broadcast spec (-24 LUFS), video levels legal (no crushed blacks or blown highlights), no glitches/dropouts, graphics readable, captions synced. Any failures go back for fixes. Once QC passes, the master file is created in the delivery spec required by the platform (Netflix: IMF package; broadcast: ProRes 422 HQ; streaming: H.264/H.265 at multiple bitrates).",
            duration: "2-3 weeks",
            deliverable: "10 QC-passed master files in delivery spec",
            status: "not-started",
          },
          {
            name: "Closed Captions & Subtitles",
            detail: "English captions (mandatory for accessibility and Netflix). Swahili subtitles (for Kenyan market). French subtitles (for pan-African distribution). Timed to frame, following platform style guides (Netflix has a very specific caption spec: 42 characters per line, 2 lines max, minimum 5/6 seconds gap). Budget for professional captioning — auto-generated captions are not broadcast quality.",
            duration: "2-3 weeks",
            deliverable: "Caption files (.srt/.vtt) in 3 languages per episode",
            status: "not-started",
          },
          {
            name: "Deliverables Package",
            detail: "What the platform/broadcaster receives: master video files, audio stems, caption files, key art (poster/thumbnail in multiple sizes), episode synopses (short + long), talent bios, behind-the-scenes stills (minimum 20 per episode), press kit, trailer(s), social media cutdowns. This package is specified in the distribution agreement — missing deliverables delay the launch.",
            duration: "1-2 weeks",
            deliverable: "Complete delivery package per platform spec",
            status: "not-started",
          },
        ],
      },
    ],
  },
  {
    id: "release",
    title: "Phase 5: Release & Distribution",
    subtitle: "Getting the show to the audience",
    icon: Globe,
    color: "#10B981",
    duration: "2-3 months (launch window)",
    tracks: [
      {
        title: "Marketing & Press",
        icon: Megaphone,
        tasks: [
          {
            name: "Marketing Campaign",
            detail: "Build the campaign in three waves. Wave 1 (8 weeks before): announce the show — key art reveal, first teaser (15 sec), talent announcement. Wave 2 (4 weeks before): full trailer (90 sec), behind-the-scenes content, influencer seeding, podcast interviews, press junket. Wave 3 (launch week): premiere event, social media blitz, episode 1 available free on YouTube as a hook, branded content with sponsor partners.",
            duration: "8-10 weeks",
            deliverable: "Marketing plan + campaign assets + media buy schedule",
            status: "not-started",
          },
          {
            name: "Social Media Content Strategy",
            detail: "For every episode: 3-5 short-form clips (15-60 sec for Instagram Reels/TikTok/YouTube Shorts), 1 recipe card (static or carousel), 1 behind-the-scenes piece, 1 quote/wisdom graphic. A dedicated social media editor cuts these from the raw footage during post-production. Cross-promote with guest chefs' and sponsors' social channels. Target: build to 100K followers across platforms within Season 1.",
            duration: "Ongoing from post-production through air",
            deliverable: "Content calendar + 50-70 social assets per season",
            status: "not-started",
          },
          {
            name: "Press & PR",
            detail: "Hire a publicist (or agency) with entertainment and food media contacts in Kenya and pan-Africa. Targets: newspaper features (Daily Nation, The Standard), TV interviews (morning shows), food/lifestyle magazines (True Love, Parents), digital outlets (Kenyans.co.ke, Tuko), international press (CNN Africa, BBC Africa, Variety Africa). A premiere screening event in Nairobi — invite industry, sponsors, media, influencers.",
            duration: "6-8 weeks",
            deliverable: "Press kit + 15-20 press placements + premiere event",
            status: "not-started",
          },
        ],
      },
      {
        title: "Distribution",
        icon: Tv,
        tasks: [
          {
            name: "Platform Launch Strategy",
            detail: "Release model depends on the platform. Netflix/Showmax: full season drop (all episodes at once) or weekly cadence (builds conversation). Linear TV (NTV/Citizen): weekly primetime slot, usually Saturday or Sunday evening. YouTube: weekly free episodes with delayed premium content. Hybrid model for FK: streaming platform gets first window, YouTube gets a delayed second window, linear TV gets a third window. Windowing maximises reach AND revenue.",
            duration: "Negotiated during financing",
            deliverable: "Distribution agreement with window schedule",
            status: "not-started",
          },
          {
            name: "International Sales",
            detail: "A sales agent or distributor takes the show to international markets: MIPCOM (Cannes), DISCOP (Africa's content market), ATF (Asia). For a Kenyan cooking show: target African streaming platforms first (Showmax, Canal+, StarTimes), then global (Netflix, Amazon). The show bible and a 3-minute sales reel are the tools. International revenue can equal or exceed domestic revenue for a well-formatted show.",
            duration: "Ongoing (12-18 months)",
            deliverable: "International sales agent agreement + territory deal tracker",
            status: "not-started",
          },
          {
            name: "Ancillary Revenue Streams",
            detail: "The show is the engine, but the revenue extends far beyond: recipe book (companion to the series), live events (FK Live — cooking demonstrations), merchandise (branded aprons, utensils, spice kits), cooking classes (in the FK studio), licensing (FK-branded products at Naivas/Carrefour), YouTube ad revenue, podcast (extended guest interviews). Each stream has its own P&L but shares the FK brand equity.",
            duration: "Ongoing from launch",
            deliverable: "Ancillary revenue plan with projected P&L per stream",
            status: "not-started",
          },
        ],
      },
      {
        title: "Performance & Renewal",
        icon: TrendingUp,
        tasks: [
          {
            name: "Audience Analytics & Reporting",
            detail: "Track everything: viewership (total, per episode, completion rate), social engagement (impressions, shares, saves, comments), website traffic, recipe downloads, sponsor ROI metrics (brand recall, purchase intent — measured via post-campaign survey), press coverage volume and sentiment. Weekly dashboard during the airing window, monthly thereafter. These numbers determine Season 2.",
            duration: "Ongoing from launch",
            deliverable: "Weekly analytics dashboard + monthly summary report",
            status: "not-started",
          },
          {
            name: "Sponsor ROI Reporting",
            detail: "Each brand partner gets a post-season report: total screen time (seconds per episode and cumulative), social media mentions and impressions, audience demographics, brand sentiment analysis, comparison to contracted deliverables. This report is what secures renewed and increased sponsorship for Season 2. Include case study format — shareable by the brand's marketing team internally.",
            duration: "4 weeks post-finale",
            deliverable: "Per-sponsor ROI report + Season 2 proposal",
            status: "not-started",
          },
          {
            name: "Season 2 Greenlight",
            detail: "If the numbers work: pitch Season 2 with audience data, sponsor renewal commitments, and creative evolution (new segments, guest format changes, location specials). Season 2 is cheaper than Season 1 (set exists, team is trained, brand is established). The goal: become a multi-season franchise that grows in value every year. The kitchen becomes a landmark. The host becomes a star. The brand becomes a platform.",
            duration: "2-3 months post-finale",
            deliverable: "Season 2 greenlight + renewed contracts",
            status: "not-started",
          },
        ],
      },
    ],
  },
];

function statusColor(s: Task["status"]) {
  if (s === "done") return "bg-emerald-500/20 text-emerald-300 border-emerald-500/30";
  if (s === "in-progress") return "bg-amber-500/20 text-amber-300 border-amber-500/30";
  return "bg-white/5 text-white/50 border-white/10";
}

function statusLabel(s: Task["status"]) {
  if (s === "done") return "Done";
  if (s === "in-progress") return "In Progress";
  return "Not Started";
}

function TaskCard({ task }: { task: Task }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white/5 border border-white/10 rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-4 py-3 flex items-center gap-3 hover:bg-white/5 transition-colors"
      >
        <span className={`shrink-0 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border ${statusColor(task.status)}`}>
          {statusLabel(task.status)}
        </span>
        <span className="font-semibold text-sm text-white flex-1">{task.name}</span>
        <span className="text-xs text-white/40 hidden sm:inline">{task.duration}</span>
        {open ? <ChevronUp className="w-4 h-4 text-white/40 shrink-0" /> : <ChevronDown className="w-4 h-4 text-white/40 shrink-0" />}
      </button>
      {open && (
        <div className="px-4 pb-4 space-y-3 border-t border-white/5">
          <p className="text-sm text-white/70 leading-relaxed pt-3">{task.detail}</p>
          <div className="flex flex-wrap gap-4 text-xs">
            <div className="flex items-center gap-1.5 text-white/50">
              <Clock className="w-3.5 h-3.5" />
              <span>{task.duration}</span>
            </div>
            <div className="flex items-center gap-1.5 text-white/50">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{task.deliverable}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function TrackSection({ track }: { track: Track }) {
  const Icon = track.icon;
  const done = track.tasks.filter((t) => t.status === "done").length;
  const inProg = track.tasks.filter((t) => t.status === "in-progress").length;
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <Icon className="w-4 h-4 text-white/60" />
        <h4 className="text-sm font-bold text-white/80 uppercase tracking-wider">{track.title}</h4>
        <span className="text-xs text-white/30 ml-auto">
          {done > 0 && <span className="text-emerald-400">{done} done</span>}
          {done > 0 && inProg > 0 && " / "}
          {inProg > 0 && <span className="text-amber-400">{inProg} active</span>}
          {done === 0 && inProg === 0 && `${track.tasks.length} tasks`}
        </span>
      </div>
      <div className="space-y-2">
        {track.tasks.map((task) => (
          <TaskCard key={task.name} task={task} />
        ))}
      </div>
    </div>
  );
}

function PhaseCard({ phase, isOpen, onToggle }: { phase: Phase; isOpen: boolean; onToggle: () => void }) {
  const Icon = phase.icon;
  const totalTasks = phase.tracks.reduce((s, t) => s + t.tasks.length, 0);
  const doneTasks = phase.tracks.reduce((s, t) => s + t.tasks.filter((tk) => tk.status === "done").length, 0);
  const inProgTasks = phase.tracks.reduce((s, t) => s + t.tasks.filter((tk) => tk.status === "in-progress").length, 0);
  const pct = totalTasks > 0 ? Math.round(((doneTasks + inProgTasks * 0.5) / totalTasks) * 100) : 0;

  return (
    <div className="border border-white/10 rounded-xl overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full text-left px-6 py-5 flex items-center gap-4 hover:bg-white/5 transition-colors"
      >
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
          style={{ backgroundColor: phase.color + "20", color: phase.color }}
        >
          <Icon className="w-6 h-6" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-bold text-white">{phase.title}</h3>
          <p className="text-sm text-white/50">{phase.subtitle}</p>
        </div>
        <div className="hidden sm:flex items-center gap-4 shrink-0">
          <div className="text-right">
            <div className="text-xs text-white/40">{phase.duration}</div>
            <div className="text-xs text-white/40">{totalTasks} tasks</div>
          </div>
          <div className="w-16 h-2 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all"
              style={{ width: `${pct}%`, backgroundColor: phase.color }}
            />
          </div>
        </div>
        {isOpen ? <ChevronUp className="w-5 h-5 text-white/40 shrink-0" /> : <ChevronDown className="w-5 h-5 text-white/40 shrink-0" />}
      </button>
      {isOpen && (
        <div className="px-6 pb-6 space-y-6 border-t border-white/5 pt-4">
          {phase.tracks.map((track) => (
            <TrackSection key={track.title} track={track} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function ProductionPlanPage() {
  const [openPhases, setOpenPhases] = useState<Record<string, boolean>>({ development: true });

  const toggle = (id: string) =>
    setOpenPhases((prev) => ({ ...prev, [id]: !prev[id] }));

  const allTasks = PHASES.flatMap((p) => p.tracks.flatMap((t) => t.tasks));
  const total = allTasks.length;
  const done = allTasks.filter((t) => t.status === "done").length;
  const inProg = allTasks.filter((t) => t.status === "in-progress").length;
  const notStarted = total - done - inProg;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center gap-3">
            <Clapperboard className="w-8 h-8 text-[#F40009]" />
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight">
              TV Show Production Plan
            </h1>
          </div>
          <p className="text-white/60 max-w-2xl mx-auto text-sm leading-relaxed">
            Everything it takes to build, produce, and release a professional TV series — from blank page to global audience.
            Modeled on Netflix-level production standards, adapted for the Founders Kitchen.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
            <div className="text-2xl font-black text-white">{total}</div>
            <div className="text-xs text-white/50 mt-1">Total Tasks</div>
          </div>
          <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4 text-center">
            <div className="text-2xl font-black text-emerald-400">{done}</div>
            <div className="text-xs text-emerald-300/60 mt-1">Completed</div>
          </div>
          <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 text-center">
            <div className="text-2xl font-black text-amber-400">{inProg}</div>
            <div className="text-xs text-amber-300/60 mt-1">In Progress</div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
            <div className="text-2xl font-black text-white/50">{notStarted}</div>
            <div className="text-xs text-white/40 mt-1">Not Started</div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 justify-center">
          {PHASES.map((p) => {
            const Icon = p.icon;
            return (
              <button
                key={p.id}
                onClick={() => toggle(p.id)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-white/10 hover:border-white/30 transition-colors"
                style={{
                  backgroundColor: openPhases[p.id] ? p.color + "20" : "transparent",
                  color: openPhases[p.id] ? p.color : "rgba(255,255,255,0.5)",
                }}
              >
                <Icon className="w-3.5 h-3.5" />
                {p.title.replace(/Phase \d: /, "")}
              </button>
            );
          })}
        </div>

        <div className="space-y-4">
          {PHASES.map((phase) => (
            <PhaseCard
              key={phase.id}
              phase={phase}
              isOpen={!!openPhases[phase.id]}
              onToggle={() => toggle(phase.id)}
            />
          ))}
        </div>

        <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4">
          <h3 className="text-lg font-bold flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-[#F40009]" />
            Master Timeline Summary
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-white/40 text-xs uppercase tracking-wider">
                  <th className="pb-3 pr-4">Phase</th>
                  <th className="pb-3 pr-4">Duration</th>
                  <th className="pb-3 pr-4">Key Milestone</th>
                  <th className="pb-3">Tasks</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {PHASES.map((p) => {
                  const Icon = p.icon;
                  const tc = p.tracks.reduce((s, t) => s + t.tasks.length, 0);
                  const milestones: Record<string, string> = {
                    development: "Show Bible + financing secured",
                    "pre-production": "Set built, crew hired, scripts locked",
                    production: "10 episodes shot",
                    "post-production": "10 episodes delivered to platform",
                    release: "Season 1 live + Season 2 greenlit",
                  };
                  return (
                    <tr key={p.id} className="text-white/70">
                      <td className="py-3 pr-4 flex items-center gap-2">
                        <Icon className="w-4 h-4" style={{ color: p.color }} />
                        <span className="font-medium text-white">{p.title.replace(/Phase \d: /, "")}</span>
                      </td>
                      <td className="py-3 pr-4 text-white/50">{p.duration}</td>
                      <td className="py-3 pr-4">{milestones[p.id]}</td>
                      <td className="py-3 text-white/50">{tc}</td>
                    </tr>
                  );
                })}
                <tr className="text-white font-bold">
                  <td className="pt-3 pr-4">Total</td>
                  <td className="pt-3 pr-4 text-white/60">12-18 months</td>
                  <td className="pt-3 pr-4">Concept to screen</td>
                  <td className="pt-3">{total}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
