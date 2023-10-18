import { exec } from "node:child_process";

export const preferredRegion = "iad1";

export const runtime = "nodejs";

function execAsync(command: string) {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout) => {
      if (error) {
        resolve(`Error: ${error}`);
      } else {
        resolve(stdout);
      }
    });
  });
}

export async function DELETE() {
  return new Response((await execAsync("convert --version")) + "");
}
