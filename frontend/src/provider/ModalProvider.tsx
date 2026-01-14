import SignInModal from "@/components/modal/SignInModal";
import SignUpModal from "@/components/modal/SignUpModal";
import { createPortal } from "react-dom";

export default function ModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {createPortal(
        <>
          <SignInModal />
          <SignUpModal />
        </>,
        document.getElementById("modal-root")!,
      )}
      {children}
    </>
  );
}
