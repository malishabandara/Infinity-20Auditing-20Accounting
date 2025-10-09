import { cn } from "@/lib/utils";
import { Bot, User } from "lucide-react";
import * as React from "react";

export type ChatRole = "user" | "assistant";

export interface ChatMessageData {
  id: string;
  role: ChatRole;
  content: string;
  timestamp: number;
}

interface ChatMessageProps {
  message: ChatMessageData;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isUser = message.role === "user";
  return (
    <div className={cn("flex w-full items-start gap-2", isUser ? "justify-end" : "justify-start")}
      aria-label={isUser ? "User message" : "Assistant message"}
    >
      {!isUser && (
        <div className="mt-1 inline-flex size-6 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Bot className="size-4" />
        </div>
      )}

      <div
        className={cn(
          "max-w-[80%] rounded-2xl px-3 py-2 text-sm shadow-sm ring-1",
          isUser
            ? "bg-primary text-primary-foreground ring-primary/20"
            : "bg-card text-foreground ring-border/60",
        )}
      >
        <p className="whitespace-pre-wrap leading-relaxed">{message.content}</p>
        <span className={cn("mt-1 block text-[10px] opacity-70", isUser ? "text-primary-foreground" : "text-muted-foreground")}
          aria-hidden
        >
          {new Date(message.timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
        </span>
      </div>

      {isUser && (
        <div className="mt-1 inline-flex size-6 items-center justify-center rounded-full bg-secondary text-secondary-foreground ring-1 ring-border/80">
          <User className="size-4" />
        </div>
      )}
    </div>
  );
};
