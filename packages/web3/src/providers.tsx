export type Web3ProviderProps = {
  children: unknown;
  ready?: boolean;
};

export const Web3Provider = ({ children }: Web3ProviderProps) => {
  return children ?? null;
};
