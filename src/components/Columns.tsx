import { ReactNode } from "react";

export default function Columns({ cols }: { cols: ReactNode[] }) {
    return <div style={{ display: "flex" }}>{cols}</div>;
  }
