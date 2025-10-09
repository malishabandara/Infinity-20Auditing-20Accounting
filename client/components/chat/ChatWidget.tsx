import * as React from "react";
import { MessageCircle, Send, X, ChevronDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ChatMessage, ChatMessageData } from "./ChatMessage";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "infinity-chat";

const suggestedPrompts = [
  "What audit & assurance services do you offer?",
  "How does UAE corporate tax apply to my business?",
  "Can you act as our outsourced CFO?",
  "How do I book a consultation?",
];

function siteAwareReply(input: string): string {
  const text = input.toLowerCase();

  if (/consult|book|schedule|call|meeting/.test(text)) {
    return "You can schedule a consultation anytime. Visit the Contact page or use 'Schedule Consultation' on the home hero. We also offer WhatsApp advisory at +971 50 123 4567.";
  }

  if (
    /audit|assurance|ifrs|internal|external|due diligence|review/.test(text)
  ) {
    return "Our Audit & Assurance covers external and internal audits, IFRS alignment, due diligence, controls evaluation, and special-purpose reviews. We focus on revealing opportunities, not just risks.";
  }

  if (/tax|vat|corporate.*tax|filing|registration/.test(text)) {
    return "Taxation Advisory includes corporate tax planning, VAT registration and filing, and tax health checks tailored to UAE regulations. We help you stay compliant and future-ready.";
  }

  if (/cfo|accounting|bookkeeping|reporting|management/.test(text)) {
    return "Our Accounting & CFO services provide bookkeeping automation, management reporting, and CFO-as-a-Service for strategic finance leadership.";
  }

  if (/uae|gcc|dubai|abu dhabi|regulatio|compliance/.test(text)) {
    return "We blend international standards with UAE regulatory knowledge. Clients across the GCC trust us for resilient finance operations and always-on compliance.";
  }

  if (/service|offer|capabilit|what do you do/.test(text)) {
    return "We partner on three pillars: Audit & Assurance, Taxation Advisory, and Accounting & CFO. Ask about any area and I’ll share specifics.";
  }

  if (/client|trusted|who.*work|industry/.test(text)) {
    return "We serve mid-market groups and innovators across finance, construction, logistics, and technology, with 18+ years advisory and 320+ clients across the GCC.";
  }

  return "Happy to help. Ask me about audit, corporate tax, VAT, IFRS, or CFO-as-a-Service. If you prefer, I can help you book a strategy call.";
}

export const ChatWidget: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const [messages, setMessages] = React.useState<ChatMessageData[]>([]);
  const [input, setInput] = React.useState("");
  const viewportRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as ChatMessageData[];
        setMessages(parsed);
        return;
      }
    } catch {}

    const initial: ChatMessageData[] = [
      {
        id: crypto.randomUUID(),
        role: "assistant",
        content:
          "Welcome to Infinity Auditing & Accounting. Precision. Clarity. Confidence.",
        timestamp: Date.now(),
      },
      {
        id: crypto.randomUUID(),
        role: "assistant",
        content:
          "We help UAE businesses with Audit & Assurance, Taxation Advisory, and Accounting & CFO services. Ask about corporate tax, VAT, IFRS, or CFO-as-a-Service.",
        timestamp: Date.now(),
      },
    ];
    setMessages(initial);
  }, []);

  React.useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    } catch {}
    if (viewportRef.current) {
      viewportRef.current.scrollTop = viewportRef.current.scrollHeight;
    }
  }, [messages]);

  function sendMessage() {
    const trimmed = input.trim();
    if (!trimmed) return;
    const userMsg: ChatMessageData = {
      id: crypto.randomUUID(),
      role: "user",
      content: trimmed,
      timestamp: Date.now(),
    };
    const reply: ChatMessageData = {
      id: crypto.randomUUID(),
      role: "assistant",
      content: siteAwareReply(trimmed),
      timestamp: Date.now() + 300,
    };
    setMessages((prev) => [...prev, userMsg, reply]);
    setInput("");
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  return (
    <div className="pointer-events-none fixed bottom-4 right-4 z-50">
      {/* Floating toggle button */}
      <div
        className={cn("flex justify-end", open ? "hidden" : "block")}
        aria-hidden={open}
      >
        <Button
          className="pointer-events-auto shadow-lg shadow-primary/30"
          size="lg"
          onClick={() => setOpen(true)}
        >
          <MessageCircle className="size-4" />
          Chat with us
        </Button>
      </div>

      {/* Chat panel */}
      <div
        className={cn(
          "pointer-events-auto w-[92vw] max-w-sm overflow-hidden rounded-2xl border border-border/70 bg-card shadow-soft transition-all",
          open
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-6 opacity-0",
        )}
        role="dialog"
        aria-label="Chat assistant"
      >
        <div className="flex items-center justify-between gap-2 border-b border-border/60 bg-gradient-to-r from-gradient-start/15 to-gradient-end/15 px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="inline-flex size-6 items-center justify-center rounded-full bg-primary/15 text-primary ring-1 ring-primary/30">
              <Sparkles className="size-4" />
            </div>
            <div>
              <p className="text-sm font-semibold leading-4">
                Infinity Assistant
              </p>
              <p className="text-[11px] text-muted-foreground leading-3">
                UAE audit, tax, and CFO guidance
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <button
              type="button"
              className="inline-flex size-8 items-center justify-center rounded-md hover:bg-secondary text-muted-foreground"
              onClick={() => setOpen(false)}
              aria-label="Minimize chat"
            >
              <ChevronDown className="size-4" />
            </button>
            <button
              type="button"
              className="inline-flex size-8 items-center justify-center rounded-md hover:bg-secondary text-muted-foreground"
              onClick={() => {
                setOpen(false);
              }}
              aria-label="Close chat"
            >
              <X className="size-4" />
            </button>
          </div>
        </div>

        <div className="flex max-h-[60vh] flex-col">
          <div
            ref={viewportRef}
            className="flex-1 space-y-3 overflow-y-auto p-4"
          >
            {messages.map((m) => (
              <ChatMessage key={m.id} message={m} />
            ))}
          </div>

          <div className="border-t border-border/60 p-3">
            <div className="mb-2 flex flex-wrap gap-2">
              {suggestedPrompts.map((p) => (
                <button
                  key={p}
                  onClick={() => {
                    setInput(p);
                  }}
                  className="rounded-full border border-border/70 bg-secondary/60 px-3 py-1 text-xs font-medium text-secondary-foreground hover:bg-secondary"
                >
                  {p}
                </button>
              ))}
            </div>
            <div className="flex items-end gap-2">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKeyDown}
                rows={2}
                placeholder="Ask about audit, tax, VAT, or CFO services"
                className="min-h-[42px] w-full resize-none rounded-lg border border-border/60 bg-background px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
              <Button
                type="button"
                onClick={sendMessage}
                className="shrink-0"
                disabled={!input.trim()}
                aria-label="Send message"
              >
                <Send className="size-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
