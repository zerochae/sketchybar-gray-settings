import type { ReactNode } from "react";
import Sidebar from "@/components/Sidebar";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div
      className="flex flex-col h-full"
      style={{
        background: "var(--colors-bg)",
        color: "var(--colors-text)",
        padding: "16px",
        overscrollBehavior: "none",
        overscrollBehaviorY: "none",
        WebkitOverflowScrolling: "auto",
        touchAction: "none",
      }}
    >
      <div
        style={{
          display: "flex",
          flex: 1,
          overflow: "hidden",
          flexDirection: "row",
          height: "calc(100vh - 32px)",
        }}
      >
        <Sidebar />
        <main
          style={{
            flex: 1,
            overflowY: "auto",
            paddingLeft: "20px",
            paddingRight: "4px",
          }}
        >
          {children}
        </main>
      </div>
    </div>
  );
}
