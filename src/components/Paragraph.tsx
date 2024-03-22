import { ReactNode } from "react";

export default function Paragraph({
  style,
  children,
}: {
  style: "normal" | "quote" | "semi-bold";
  children: ReactNode;
}) {
  if (style === "normal") {
    return <p>{children}</p>;
  } else if (style === "quote") {
    return (
      <p>
        <q>{children}</q>
      </p>
    );
  } else if (style === "semi-bold") {
    return <p style={{ fontWeight: "600" }}>{children}</p>;
  }
}
