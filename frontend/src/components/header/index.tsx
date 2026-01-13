import logoText from "@/assets/EAH.png";
import { Link } from "react-router";
import SignInButton from "./SignInButton";
import { useAuthIsAuthenticated } from "@/stores/auth";
import MyPageButton from "./MyPageButton";
export default function Header() {
  const isAuthenticated = useAuthIsAuthenticated();

  return (
    <header className="border-border bg-background sticky top-0 z-50 border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* 로고 */}
          <Link
            to="/"
            className="text-primary flex items-center gap-2 text-xl font-bold transition-opacity hover:opacity-80"
          >
            <span>EAH</span>
          </Link>

          {/* 중앙 제목 */}
          <h1 className="text-foreground flex items-center gap-2 text-xl font-semibold">
            <img src={logoText} alt="logo" className="size-30" />
          </h1>

          {isAuthenticated ? <MyPageButton /> : <SignInButton />}
        </div>
      </div>
    </header>
  );
}
