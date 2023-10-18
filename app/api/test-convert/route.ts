import { NextResponse } from "next/server";
import { exec } from "node:child_process";

export const runtime = "nodejs";

const handler = async () => {
  const pathResult = await execAsync("echo $PATH");
  const whoamiResult = await execAsync("whoami");
  const pwdResult = await execAsync("pwd");

  // Execute the command
  const convertResult = await execAsync(`convert version`);

  return NextResponse.json({
    pathResult,
    whoamiResult,
    pwdResult,
    convertResult,
  });
};

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

export const GET = handler as any;
