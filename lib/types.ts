export type Project = {
  id: string;
  name: string;
  productName: string;
  category: string;
  description: string;
  pricePoint: string;
  region: string;
  businessType: string;
  stage: string;
  score: number;
  confidence: number;
  lastUpdated: string;
  channels: string[];
  metrics: {
    ctr: string;
    cvr: string;
    cac: string;
    roas: string;
  };
};

export type DecoderInsight = {
  label: string;
  detail: string;
};

export type PlatformPlan = {
  platform: string;
  objective: string;
  score: number;
  kpiFocus: string;
  recommendations: string[];
};

export type AnalyzerReport = {
  status: "strong" | "optimize";
  summary: string;
  strengths: string[];
  weaknesses: string[];
  optimizations: string[];
  kpiInterpretation: string[];
};
