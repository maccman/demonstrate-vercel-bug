import { exec } from "node:child_process";

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

export async function GET() {
  return new Response((await execAsync("convert --version")) + "");
}

export async function POST() {
  return new Response((await execAsync("convert --version")) + "");
}