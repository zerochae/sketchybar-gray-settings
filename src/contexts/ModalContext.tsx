import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react";

interface ModalState {
  isOpen: boolean;
  title: string;
  message: string;
  type: "info" | "success" | "warning" | "error";
}

interface ModalContextType {
  modal: ModalState;
  showModal: (
    title: string,
    message: string,
    type?: ModalState["type"],
  ) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [modal, setModal] = useState<ModalState>({
    isOpen: false,
    title: "",
    message: "",
    type: "info",
  });

  const showModal = useCallback(
    (title: string, message: string, type: ModalState["type"] = "info") => {
      setModal({ isOpen: true, title, message, type });
    },
    [],
  );

  const closeModal = useCallback(() => {
    setModal((prev) => ({ ...prev, isOpen: false }));
  }, []);

  return (
    <ModalContext.Provider value={{ modal, showModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within ModalProvider");
  }
  return context;
}
