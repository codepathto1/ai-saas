"use client";

import { Button } from "@workspace/ui/components/button";
import { useVapi } from "@/modules/widgets/hooks/use-vapi";
export default function Page() {
  const { isConnected, isConnecting, isSpeaking, transcript, startCall, endCall } = useVapi();

  return (
    <div className="flex  flex-colitems-center justify-center my-10 max-w-md mx-auto">
      <h1 className="text-2xl font-bold">apps/Web</h1>

      <div className="flex flex-col gap-y-5">
        <Button onClick={() => startCall()}>Start call</Button>
        <Button onClick={() => endCall()} variant="destructive">
          End call
        </Button>
        <p>Connecting:{`${isConnecting}`}</p>
        <p>Connected:{`${isConnected}`}</p>
        <p>{JSON.stringify(transcript, null, 2)}</p>
      </div>
    </div>
  );
}
