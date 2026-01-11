import DefaultLayout from "@/layouts/default";
import Home from "@/pages";
import { Route, Routes } from "react-router";
export default function Router() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}
