import type { CSSProperties } from "react";
import Reveal from "./Reveal";

export default function Dim({
  label,
  dark = false,
  style,
}: {
  label: string;
  dark?: boolean;
  style?: CSSProperties;
}) {
  return (
    <Reveal className={`dim${dark ? " dark" : ""}`} style={style}>
      <span className="tk l" />
      <span className="lb">{label}</span>
      <span className="tk r" />
    </Reveal>
  );
}
