import { create } from "zustand";

export type Execution = {
  id: string;
  agentId: string;
  status: "idle" | "running" | "completed" | "failed";
  output: string;
  updatedAt: string;
};

export type ExecutionStore = {
  executions: Map<string, Execution>;
  addExecution: (agentId: string, execution: Execution) => void;
  updateStream: (agentId: string, chunk: string) => void;
};

export const useExecutionStore = create<ExecutionStore>((set, get) => ({
  executions: new Map(),
  addExecution: (agentId, execution) =>
    set((state) => {
      const next = new Map(state.executions);
      next.set(agentId, execution);
      return { executions: next };
    }),
  updateStream: (agentId, chunk) => {
    const execution = get().executions.get(agentId);
    if (!execution) return;
    const nextExecution = {
      ...execution,
      output: `${execution.output}${chunk}`,
      updatedAt: new Date().toISOString(),
    };
    set((state) => {
      const next = new Map(state.executions);
      next.set(agentId, nextExecution);
      return { executions: next };
    });
  },
}));
