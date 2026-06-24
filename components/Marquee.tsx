import { SUBURBS } from "@/lib/projects";

export default function Marquee() {
  const items = [...SUBURBS, ...SUBURBS];
  return (
    <div className="marquee">
      <div className="track">
        {items.map((s, i) => (
          <span key={i}>{s}</span>
        ))}
      </div>
    </div>
  );
}
