// Duplicated from shannon/src/temporal/shared.ts to avoid importing workflow runtime code.
// Keep in sync with the canonical types when the pipeline changes.

export interface PipelineInput {
  webUrl: string;
  repoPath: string;
  configPath?: string;
  outputPath?: string;
  pipelineTestingMode?: boolean;
  workflowId?: string;
}

export interface AgentMetrics {
  durationMs: number;
  inputTokens: number | null;
  outputTokens: number | null;
  costUsd: number | null;
  numTurns: number | null;
  model?: string;
}

export interface PipelineProgress {
  status: "running" | "completed" | "failed";
  currentPhase: string | null;
  currentAgent: string | null;
  completedAgents: string[];
  failedAgent: string | null;
  error: string | null;
  startTime: number;
  agentMetrics: Record<string, AgentMetrics>;
  workflowId: string;
  elapsedMs: number;
}
