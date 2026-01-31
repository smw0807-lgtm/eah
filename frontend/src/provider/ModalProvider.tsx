import AlertModal from "@/components/modal/AlertModal";
import SignInModal from "@/components/modal/SignInModal";
import SignUpModal from "@/components/modal/SignUpModal";
import BidModal from "@/components/modal/BidModal";
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
          <AlertModal />
          <BidModal />
        </>,
        document.getElementById("modal-root")!,
      )}
      {children}
    </>
  );
}
