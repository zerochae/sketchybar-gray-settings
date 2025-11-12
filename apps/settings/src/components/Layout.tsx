import type { ReactNode } from "react";
import { css } from "@sketchybar-gray/panda/css";
import Sidebar from "@/components/Sidebar";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div
      className={css({
        display: "flex",
        flexDirection: "column",
        height: "100%",
        background: "bg",
        color: "text",
        padding: "16px",
        overscrollBehavior: "none",
        overscrollBehaviorY: "none",
        WebkitOverflowScrolling: "auto",
        touchAction: "none",
      })}
    >
      <div
        className={css({
          display: "flex",
          flex: 1,
          overflow: "hidden",
          flexDirection: "row",
          height: "calc(100vh - 32px)",
        })}
      >
        <Sidebar />
        <main
          className={css({
            flex: 1,
            overflowY: "auto",
            paddingLeft: "20px",
            paddingRight: "4px",
          })}
        >
          {children}
        </main>
      </div>
    </div>
  );
}
