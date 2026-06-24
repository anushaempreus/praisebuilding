// Single source of truth for colours + fonts.
// The same values are mirrored as CSS variables in app/globals.css.
export const C = {
  forest: "#0C3B2E",
  forest2: "#082A20",
  cream: "#F4EEE2",
  cream2: "#EAE2D2",
  amber: "#D99A3D",
  amberLt: "#E9B765",
  clay: "#B5532A",
  ink: "#16150F",
} as const;

export const F = {
  serif: "'Fraunces', Georgia, serif",
  sans: "'Archivo', system-ui, sans-serif",
  mono: "'Space Mono', ui-monospace, Menlo, monospace",
} as const;
