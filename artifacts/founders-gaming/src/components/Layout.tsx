import { ReactNode } from "react";
import Nav from "./Nav";
import EcosystemBar from "./EcosystemBar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#001e38" }}>
      <Nav />
      <main className="flex-1">
        {children}
      </main>
      <EcosystemBar />
    </div>
  );
}
