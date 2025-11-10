import { ReactNode } from "react";
import { ModalProvider } from "@/contexts/ModalContext";
import { ConfigProvider } from "@/contexts/ConfigContext";
import { CategoryProvider } from "@/contexts/CategoryContext";

interface ProvidersProps {
  children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <ModalProvider>
      <CategoryProvider>
        <ConfigProvider>
          {children}
        </ConfigProvider>
      </CategoryProvider>
    </ModalProvider>
  );
}
