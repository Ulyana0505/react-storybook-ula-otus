import { ReactNode } from "react";

export default function CollapseBlock({
  heading,
  children,
}: {
  heading: string;
  children: ReactNode;
}) {
  return (
    <details>
      <summary>{heading}</summary>
      <p>{children}</p>
    </details>
  );
}
