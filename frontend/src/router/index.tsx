import DefaultLayout from "@/layouts/default";
import UserLayout from "@/layouts/UserLayout";
import Home from "@/pages";
import CreateAuction from "@/pages/auction/CreateAuction";
import { Route, Routes } from "react-router";
export default function Router() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />

        <Route element={<UserLayout />}>
          <Route path="/auction/create" element={<CreateAuction />} />
        </Route>
      </Route>
    </Routes>
  );
}
