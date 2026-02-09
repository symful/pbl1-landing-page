import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  async GET(_req) {
    const audioDir = "./static/audio/player";
    const files: string[] = [];

    try {
      for await (const entry of Deno.readDir(audioDir)) {
        if (entry.isFile && (entry.name.endsWith(".mp3") || entry.name.endsWith(".wav") || entry.name.endsWith(".ogg"))) {
          files.push(`/audio/player/${entry.name}`);
        }
      }
    } catch (err) {
      console.error("Error reading audio directory:", err);
    }

    return new Response(JSON.stringify(files.sort()), {
      headers: { "Content-Type": "application/json" },
    });
  },
};
