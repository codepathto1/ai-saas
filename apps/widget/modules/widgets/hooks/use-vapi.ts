import { useEffect, useState } from "react";
import Vapi from "@vapi-ai/web";

interface TranscriptMessage {
  role: "user" | "assistant";
  text: string;
}

export const useVapi = () => {
  const [vapi, setVapi] = useState<Vapi | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [transcript, setTranscript] = useState<TranscriptMessage[]>([]);

  useEffect(() => {
    // Vapi public api
    const vapiInstace = new Vapi("3765085a-6d7c-42b9-9c83-ff42f8096bf6");
    setVapi(vapiInstace);
    vapiInstace.on("call-start", () => {
      setIsConnected(true);
      setIsConnecting(false);
      setTranscript([]);
    });
    vapiInstace.on("call-end", () => {
      setIsConnected(false);
      setIsConnecting(false);
      setIsSpeaking(false);
    });
    vapiInstace.on("speech-start", () => {
      setIsSpeaking(true);
    });
    vapiInstace.on("speech-end", () => {
      setIsSpeaking(false);
    });
    vapiInstace.on("error", (error) => {
      console.log(error);
      setIsConnecting(false);
    });
    vapiInstace.on("message", (message) => {
      if (message.type === "transcript" && message.transcriptType === "final") {
        setTranscript((prev) => [
          ...prev,
          {
            role: message.role === "user" ? "user" : "assistant",
            text: message.transcript,
          },
        ]);
      }
    });
    return () => {
      vapiInstace?.stop();
    };
  }, []);
  const startCall = () => {
    setIsConnecting(true);
    // Vitural assistant api
    if (vapi) {
      vapi.start("13978f2e-d1e8-4433-b281-7a4668d3c702");
    }
  };
  const endCall = () => {
    if (vapi) {
      vapi.stop();
    }
  };
  return {
    isConnected,
    isConnecting,
    isSpeaking,
    transcript,
    startCall,
    endCall,
  };
};
