import { AnalyzerReport, DecoderInsight, PlatformPlan, Project } from "@/lib/types";

export const demoProjects: Project[] = [
  {
    id: "luma-skin",
    name: "Luma Skin Launch",
    productName: "LumaBiome Serum",
    category: "DTC Skincare",
    description:
      "Barrier-repair serum for acne-prone skin positioned around microbiome support, clarity, and low-irritation daily use.",
    pricePoint: "$42",
    region: "United States",
    businessType: "ecommerce",
    stage: "Scaling paid social",
    score: 91,
    confidence: 94,
    lastUpdated: "2 hours ago",
    channels: ["Instagram Ads", "TikTok Ads", "Google Ads"],
    metrics: {
      ctr: "2.9%",
      cvr: "4.8%",
      cac: "$31",
      roas: "3.9x",
    },
  },
  {
    id: "campus-rally",
    name: "Campus Rally 2026",
    productName: "Student Creator Summit",
    category: "Event Promotion",
    description:
      "Regional student event designed to drive registrations, local awareness, and creator community traction on campus.",
    pricePoint: "$25",
    region: "Northeast US",
    businessType: "event",
    stage: "Audience buildout",
    score: 76,
    confidence: 88,
    lastUpdated: "Yesterday",
    channels: ["Instagram Ads", "TikTok Ads", "YouTube Ads"],
    metrics: {
      ctr: "1.8%",
      cvr: "2.6%",
      cac: "$18",
      roas: "2.1x",
    },
  },
  {
    id: "flowpilot",
    name: "FlowPilot Growth Engine",
    productName: "FlowPilot",
    category: "SaaS Productivity",
    description:
      "AI productivity workspace for founders and lean teams focused on automated task orchestration and meeting reduction.",
    pricePoint: "$29/mo",
    region: "North America + UK",
    businessType: "app",
    stage: "Pipeline acceleration",
    score: 84,
    confidence: 90,
    lastUpdated: "5 hours ago",
    channels: ["LinkedIn Ads", "Google Ads", "YouTube Ads"],
    metrics: {
      ctr: "3.4%",
      cvr: "6.1%",
      cac: "$74",
      roas: "4.6x",
    },
  },
];

export const decoderInsights: Record<string, DecoderInsight[]> = {
  "luma-skin": [
    {
      label: "Best-fit niche",
      detail:
        "Sensitive-skin millennials seeking dermatologist-adjacent products with premium ingredient credibility and visible texture improvement.",
    },
    {
      label: "Primary target audience",
      detail:
        "Women 24-34 with recurring acne, high skincare literacy, and active consideration behavior across TikTok reviews and Reddit beauty threads.",
    },
    {
      label: "Secondary audience",
      detail:
        "Post-acne recovery buyers focused on redness reduction, barrier repair, and preventative routines with mid-premium willingness to pay.",
    },
    {
      label: "Consumer motivations",
      detail:
        "Desire for confidence restoration, lower irritation risk, and progress that feels clinically grounded rather than trend-driven.",
    },
    {
      label: "Pain points",
      detail:
        "Trial fatigue, fear of flare-ups, skepticism toward influencer-led claims, and frustration with products that overpromise clarity.",
    },
    {
      label: "Buying triggers",
      detail:
        "Before-and-after social proof, ingredient education, derm-inspired language, and reviews mentioning calmer skin within 2-3 weeks.",
    },
    {
      label: "Barriers to conversion",
      detail:
        "Price sensitivity versus mass-market serums, uncertainty around regimen compatibility, and concern about delayed results.",
    },
    {
      label: "Best value proposition angle",
      detail:
        "Position the serum as a calm-performance treatment: visible texture support without aggressive irritation tradeoffs.",
    },
    {
      label: "Recommended brand voice",
      detail:
        "Measured, intelligent, clinically fluent, and reassuring. Avoid hype language; anchor messaging in precision and skin confidence.",
    },
    {
      label: "Suggested positioning strategy",
      detail:
        "Own the intersection of microbiome education and sensitive-skin performance, with messaging designed around lower conversion friction.",
    },
    {
      label: "Suggested messaging themes",
      detail:
        "Barrier-first clarity, calm reset for breakout-prone skin, proof-led ritual design, and smarter long-term skin resilience.",
    },
    {
      label: "Customer awareness stage",
      detail:
        "Mostly problem-aware to solution-aware. Prospecting creative should bridge irritation anxiety to an evidence-backed treatment pathway.",
    },
    {
      label: "Likely objections",
      detail:
        "Will this break me out? Is it worth the premium? Can I use it with retinol? How long until I see less redness?",
    },
    {
      label: "Recommended creative direction",
      detail:
        "Clean ingredient close-ups, bathroom-shelf realism, short-form derm explainer cuts, and UGC testimonials centered on relief and trust.",
    },
  ],
  "campus-rally": [
    {
      label: "Best-fit niche",
      detail:
        "Ambitious college students seeking community, career momentum, and creator-style identity signals without formal networking fatigue.",
    },
    {
      label: "Primary target audience",
      detail:
        "Undergraduates 18-22 interested in entrepreneurship, media, startups, and personal brand building on campus.",
    },
    {
      label: "Secondary audience",
      detail:
        "Student org leaders and early-career recent grads who can amplify attendance through community-driven referral behavior.",
    },
    {
      label: "Consumer motivations",
      detail:
        "Belonging, social status, momentum, and fear of missing a formative career opportunity peers will talk about later.",
    },
    {
      label: "Pain points",
      detail:
        "Low attention span, event overload, vague value props, and skepticism toward generic campus promotion posters.",
    },
    {
      label: "Buying triggers",
      detail:
        "Peer validation, lineup teasers, creator-style event recaps, and messaging that signals insider access rather than a lecture.",
    },
    {
      label: "Barriers to conversion",
      detail:
        "Schedule conflicts, low urgency, unclear differentiation, and low perceived payoff compared with free campus alternatives.",
    },
    {
      label: "Best value proposition angle",
      detail:
        "Sell momentum and access: a high-energy room where students meet collaborators, opportunities, and practical growth ideas fast.",
    },
    {
      label: "Recommended brand voice",
      detail:
        "Energetic, culturally current, and aspirational with crisp directness. It should feel insider, not institutional.",
    },
    {
      label: "Suggested positioning strategy",
      detail:
        "Frame the summit as the most relevant student growth room in the region, driven by identity and community proof.",
    },
    {
      label: "Suggested messaging themes",
      detail:
        "Meet your people, build career signal, get tactical inspiration, and step into the next version of your campus identity.",
    },
    {
      label: "Customer awareness stage",
      detail:
        "Largely unaware to problem-aware. Creative should create aspiration before detailing schedule, speakers, and registration details.",
    },
    {
      label: "Likely objections",
      detail:
        "Will this actually be worth my time? Is it just another campus event? Are the speakers relevant to me?",
    },
    {
      label: "Recommended creative direction",
      detail:
        "Fast-cut social reels, creator cam interviews, student reactions, kinetic type, and campus-specific proof to boost purchase intent.",
    },
  ],
  flowpilot: [
    {
      label: "Best-fit niche",
      detail:
        "Founder-led teams with operational complexity, repeated coordination work, and a high appetite for AI leverage in decision cycles.",
    },
    {
      label: "Primary target audience",
      detail:
        "Startup founders, operators, and heads of growth with 5-50 person teams and visible meeting overload across multiple tools.",
    },
    {
      label: "Secondary audience",
      detail:
        "Freelancers and agencies managing cross-client execution who need repeatable task orchestration with lower manual overhead.",
    },
    {
      label: "Consumer motivations",
      detail:
        "Time recovery, operational clarity, better execution velocity, and a stronger sense of control over fragmented workstreams.",
    },
    {
      label: "Pain points",
      detail:
        "Tool sprawl, meeting drag, hidden follow-up work, and skepticism around AI products that feel broad but shallow.",
    },
    {
      label: "Buying triggers",
      detail:
        "Workflow demos, quantified time savings, competitive replacement messaging, and proof of faster handoff execution.",
    },
    {
      label: "Barriers to conversion",
      detail:
        "Perceived setup cost, integration anxiety, risk of team non-adoption, and unclear differentiation from generic productivity suites.",
    },
    {
      label: "Best value proposition angle",
      detail:
        "Position FlowPilot as an execution-control layer that shortens the distance between decisions and completed work.",
    },
    {
      label: "Recommended brand voice",
      detail:
        "Sharp, competent, operations-literate, and no-nonsense. Messaging should reward high-intent evaluators with specificity.",
    },
    {
      label: "Suggested positioning strategy",
      detail:
        "Lead with operational throughput and customer journey efficiency rather than broad AI assistance claims.",
    },
    {
      label: "Suggested messaging themes",
      detail:
        "Recover hours, reduce coordination drag, route work intelligently, and improve team throughput without process bloat.",
    },
    {
      label: "Customer awareness stage",
      detail:
        "Problem-aware to most-aware. Search and retargeting should capture high purchase intent with high-clarity solution framing.",
    },
    {
      label: "Likely objections",
      detail:
        "How long does setup take? Does this work with my stack? Is this another AI layer my team will ignore?",
    },
    {
      label: "Recommended creative direction",
      detail:
        "Product-led motion, workflow snapshots, decision-to-action visual metaphors, and ROI framing tied to reduced operational drag.",
    },
  ],
};

export const platformPlans: Record<string, PlatformPlan[]> = {
  "luma-skin": [
    {
      platform: "Instagram Ads",
      objective: "Conversions",
      score: 93,
      kpiFocus: "ROAS, CTR, landing-page conversion rate",
      recommendations: [
        "Run a split between Advantage+ prospecting and manual retargeting audiences to protect scaling efficiency while maintaining message control.",
        "Use short-form skincare ritual creative with strong first-3-second sensory hooks and comment-led proof to reduce conversion friction.",
        "Build 5-7 creative angles before scale to delay creative fatigue, including ingredient authority, calm-skin outcomes, and dermatologist-adjacent trust.",
        "Retarget viewers at 25%, site visitors, and cart abandoners with benefit-stacked copy centered on sensitivity-safe performance.",
      ],
    },
    {
      platform: "TikTok Ads",
      objective: "Followers",
      score: 86,
      kpiFocus: "Thumb-stop rate, profile visits, incremental CTR",
      recommendations: [
        "Keep targeting broad and let creative do behavioral targeting; over-constraining early will limit algorithmic learning.",
        "Use UGC-style routines, stitch reactions, and low-production authenticity to make the brand feel native to the feed.",
        "Open with a skin frustration statement, then pivot into a credible reset narrative and lightweight CTA to learn more.",
        "Rotate creator personas to cover breakout-prone, sensitive-skin, and ingredient-aware subsegments.",
      ],
    },
    {
      platform: "Google Ads",
      objective: "Website traffic",
      score: 79,
      kpiFocus: "CPC, impression share, high-intent CVR",
      recommendations: [
        "Prioritize commercial-intent queries around sensitive skin serum, barrier repair acne serum, and redness-friendly treatments.",
        "Tighten ad group theming so copy maps directly to landing page claims and ingredient relevance.",
        "Layer negative keywords for free, DIY, and unrelated dermatology content to preserve purchase intent quality.",
        "Ensure conversion tracking captures view content, add-to-cart, and purchase to support downstream bid optimization.",
      ],
    },
  ],
  "campus-rally": [
    {
      platform: "Instagram Ads",
      objective: "Engagement",
      score: 81,
      kpiFocus: "Post saves, shares, registration CTR",
      recommendations: [
        "Use creator-style event teasers with location-specific proof and social momentum cues to elevate audience segmentation quality.",
        "Lean into story placements and reels for reach, then retarget engagers with direct registration pushes and urgency.",
        "Pair student testimonials with speaker reveals to strengthen perceived event value and reduce hesitation.",
        "Test copy framed around community access versus career payoff to identify the strongest purchase intent driver.",
      ],
    },
    {
      platform: "TikTok Ads",
      objective: "Video views",
      score: 88,
      kpiFocus: "View-through rate, watch time, cost per engaged view",
      recommendations: [
        "Start with a high-energy hook that dramatizes campus sameness before showing the event as the standout option.",
        "Keep pacing quick, captions bold, and visuals people-first to feel native and boost top-funnel retention.",
        "Use broad audience strategy and iterate creative clusters by school identity, ambition, and social belonging cues.",
        "Retarget viewers with registration deadline creative once view depth crosses 50% to tighten the funnel stage handoff.",
      ],
    },
  ],
  flowpilot: [
    {
      platform: "LinkedIn Ads",
      objective: "Lead generation",
      score: 89,
      kpiFocus: "Lead quality, cost per SQL, demo-book rate",
      recommendations: [
        "Use founder, ops, and revenue leadership job-function segments rather than overly narrow title targeting to preserve scale.",
        "Creative should quantify operational drag reduction and frame FlowPilot as an acquisition strategy multiplier for lean teams.",
        "Pair thought-leadership carousels with direct-response lead forms to bridge awareness and conversion more efficiently.",
        "Retarget site visitors with case-study proof and comparative messaging versus generic productivity tools.",
      ],
    },
    {
      platform: "Google Ads",
      objective: "Conversions",
      score: 92,
      kpiFocus: "Search impression share, CPL, demo CVR",
      recommendations: [
        "Own high-intent commercial keyword clusters like AI workflow automation software and operations productivity platform.",
        "Separate informational from commercial intent campaigns so bid strategies align with customer journey stage.",
        "Tighten landing pages around use-case-specific proof, integration reassurance, and above-the-fold demo conversion paths.",
        "Use offline conversion imports where possible to optimize toward pipeline quality instead of form volume alone.",
      ],
    },
  ],
};

export const analyzerReports: Record<string, AnalyzerReport> = {
  "luma-skin": {
    status: "strong",
    summary:
      "No recommendations at this time. The campaign structure appears well-aligned with the selected objective.",
    strengths: [
      "Prospecting and retargeting architecture are cleanly separated, reducing optimization event confusion.",
      "Creative angles cover both problem-aware and solution-aware audiences, supporting stronger acquisition efficiency.",
      "Copy, landing page, and price anchoring are tightly aligned with purchase intent and sensitive-skin reassurance.",
    ],
    weaknesses: [],
    optimizations: [
      "Maintain creative refresh cadence every 10-14 days to prevent fatigue as spend rises.",
      "Keep monitoring new-customer CAC by placement to ensure Advantage+ expansion remains efficient.",
    ],
    kpiInterpretation: [
      "CTR is healthy for beauty prospecting, suggesting the hook-to-offer relationship is resonating.",
      "Conversion rate supports the current promise-match between ads and destination experience.",
      "ROAS indicates room to scale cautiously while preserving margin discipline.",
    ],
  },
  "campus-rally": {
    status: "optimize",
    summary:
      "The campaign has strong top-of-funnel energy, but conversion friction is showing up between social engagement and completed registrations.",
    strengths: [
      "The campaign has a compelling social identity and strong relevance for the student audience.",
      "Video creative feels native to the platforms and drives efficient engagement at the awareness stage.",
    ],
    weaknesses: [
      "The CTA is too soft relative to the event timeline, reducing urgency for mid-intent viewers.",
      "Audience targeting is broad without enough retargeting segmentation for engagers and site visitors.",
      "Landing-page messaging focuses on logistics before payoff, creating funnel mismatch for colder traffic.",
    ],
    optimizations: [
      "Introduce deadline-led retargeting sequences with social proof and a single registration action.",
      "Shift more budget toward the highest watch-time creatives and pause formats with weak click-through rate.",
      "Rebuild the landing page hero around transformation, peer presence, and speaker payoff before schedule detail.",
      "Test creator-hosted invitation ads against generic brand promos to raise conversion rate optimization potential.",
    ],
    kpiInterpretation: [
      "CTR suggests curiosity, but lower CVR implies the handoff from social interest to registration confidence needs work.",
      "Cost per click remains reasonable, so message-market fit is not the core issue; conversion friction is.",
      "Reach is healthy, but the current audience mix is under-leveraging warm traffic behavior.",
    ],
  },
  flowpilot: {
    status: "optimize",
    summary:
      "The campaign is strategically sound, but several mid-funnel inefficiencies are limiting conversion rate optimization and lead quality.",
    strengths: [
      "Keyword intent strategy is strong and captures high-commercial-value demand.",
      "The offer is positioned clearly around operational throughput rather than generic AI productivity claims.",
    ],
    weaknesses: [
      "Ad copy leans feature-forward before business outcome, which weakens click quality for founder audiences.",
      "Landing-page sections bury integration reassurance too low, increasing hesitation during evaluation.",
      "Retargeting coverage is too narrow for non-converting visitors with pricing-page depth.",
    ],
    optimizations: [
      "Test outcome-led headlines focused on recovered execution hours and reduced coordination drag.",
      "Bring customer proof, integration compatibility, and onboarding speed above the fold to lower CAC.",
      "Build segmented retargeting around pricing viewers, demo abandoners, and case-study readers.",
      "Introduce side-by-side competitor replacement messaging for high-intent search traffic.",
    ],
    kpiInterpretation: [
      "CTR is above baseline, indicating search-message alignment is healthy.",
      "Lead conversion softness suggests hesitation after the click rather than low purchase intent before it.",
      "ROAS remains attractive, but scaling efficiency depends on stronger post-click reassurance.",
    ],
  },
};

export const dashboardStats = [
  { label: "Active projects", value: "12", change: "+3 this month" },
  { label: "Avg. campaign score", value: "84", change: "+6.2 pts" },
  { label: "Predicted ROAS lift", value: "18%", change: "Modeled uplift" },
  { label: "Insight confidence", value: "91%", change: "Across live reports" },
];

export const testimonials = [
  {
    quote:
      "It behaves like a strategist, not a generic assistant. The audience logic and campaign recommendations are immediately actionable.",
    name: "Maya Lin",
    role: "Growth Lead, North Harbor Studio",
  },
  {
    quote:
      "We used it to sharpen positioning and rebuild our paid social structure. The language feels like it came from a seasoned performance team.",
    name: "Jordan Patel",
    role: "Founder, FlowPilot",
  },
  {
    quote:
      "Our student marketing team finally had a system for segmenting audiences and fixing weak campaign setups without guessing.",
    name: "Avery Brooks",
    role: "Campus Marketing Director",
  },
];

export const pricingTiers = [
  {
    name: "Starter",
    price: "$29",
    blurb: "For students and solo operators who need fast strategic direction.",
    items: ["3 active projects", "Consumer Decoder", "Channel plans", "AI campaign analysis"],
  },
  {
    name: "Growth",
    price: "$99",
    blurb: "For teams actively optimizing paid acquisition and messaging strategy.",
    items: ["Unlimited projects", "Saved reports", "Team collaboration", "Priority analysis pipelines"],
    featured: true,
  },
  {
    name: "Scale",
    price: "Custom",
    blurb: "For agencies and performance teams operating across brands and regions.",
    items: ["Multi-brand workspace", "Custom scorecards", "Strategy exports", "Advanced data integrations"],
  },
];
