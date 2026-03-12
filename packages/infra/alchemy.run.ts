import alchemy from "alchemy";
import { Nextjs } from "alchemy/cloudflare";
import { config } from "dotenv";

config({ path: "./.env" });
config({ path: "../../apps/web/.env" });

const app = await alchemy("agentx-app");

export const web = await Nextjs("web", {
  cwd: "../../apps/web",
  bindings: {
    DATABASE_URL: alchemy.secret.env.DATABASE_URL!,
    CORS_ORIGIN: alchemy.env.CORS_ORIGIN!,
    NEXT_PUBLIC_SUPABASE_URL: alchemy.env.NEXT_PUBLIC_SUPABASE_URL!,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: alchemy.secret.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  },
  dev: {
    env: {
      PORT: "9000",
    },
  },
});

console.log(`Web    -> ${web.url}`);

await app.finalize();
