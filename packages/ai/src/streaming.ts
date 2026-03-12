export type StreamChunk = {
  id: string;
  delta: string;
  done: boolean;
};

export type StreamTransport = (chunk: StreamChunk) => void;

export const streamChunks = (chunks: StreamChunk[], transport: StreamTransport) => {
  chunks.forEach((chunk) => transport(chunk));
};
