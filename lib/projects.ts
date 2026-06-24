// The project catalogue — single source of truth.
// The home page, the /work index and each /work/[slug] case study all read
// from here, so adding a project is one entry below and nothing else changes.
//
// Photos are local, optimised JPEGs in /public/projects/<suburb>/
// (cover.jpg + 01.jpg, 02.jpg …). Drop replacements in the same folder
// and update the paths below to swap a shot.

export type Project = {
  slug: string;
  suburb: string;
  title: string;
  scope: string;
  brief: string;
  cover: string;
  gallery: string[];
};

export const projects: Project[] = [
  {
    slug: "paddington",
    suburb: "Paddington",
    title: "The Paddington House",
    scope: "Heritage restoration",
    brief:
      "A grand Paddington terrace brought back to life — ornate ceilings, arched hallways and marble fireplaces restored over honey-toned timber floors, then paired with a quiet, contemporary kitchen and bathrooms.",
    cover: "/projects/paddington/cover.jpg",
    gallery: [
      "/projects/paddington/01.jpg",
      "/projects/paddington/02.jpg",
      "/projects/paddington/03.jpg",
      "/projects/paddington/04.jpg",
      "/projects/paddington/05.jpg",
      "/projects/paddington/06.jpg",
      "/projects/paddington/07.jpg",
    ],
  },
  {
    slug: "maroubra",
    suburb: "Maroubra",
    title: "Maroubra Residence",
    scope: "New residence",
    brief:
      "A bold contemporary home built around a marble waterfall island and black timber joinery — a floating stair beneath the void, terrazzo bathrooms with brass fittings, and rooms framed to catch the afternoon light.",
    cover: "/projects/maroubra/cover.jpg",
    gallery: [
      "/projects/maroubra/01.jpg",
      "/projects/maroubra/02.jpg",
      "/projects/maroubra/03.jpg",
      "/projects/maroubra/04.jpg",
      "/projects/maroubra/05.jpg",
      "/projects/maroubra/06.jpg",
      "/projects/maroubra/07.jpg",
    ],
  },
  {
    slug: "hunters-hill",
    suburb: "Hunters Hill",
    title: "Park Road, Hunters Hill",
    scope: "New build",
    brief:
      "A pair of dark-clad contemporary homes — vertical shadow-line cladding, a tiled lap pool and planted courtyard, a floating timber stair and crisp white interiors that open to the garden.",
    cover: "/projects/hunters-hill/cover.jpg",
    gallery: [
      "/projects/hunters-hill/01.jpg",
      "/projects/hunters-hill/02.jpg",
      "/projects/hunters-hill/03.jpg",
      "/projects/hunters-hill/04.jpg",
      "/projects/hunters-hill/05.jpg",
      "/projects/hunters-hill/06.jpg",
      "/projects/hunters-hill/07.jpg",
    ],
  },
  {
    slug: "annandale",
    suburb: "Annandale",
    title: "Alfred Street, Annandale",
    scope: "Extension + renovation",
    brief:
      "A rear extension to a weatherboard cottage — a warm, timber-lined living room under an exposed-beam ceiling, a green-and-timber kitchen, and full-height glazing onto a sheltered northern garden.",
    cover: "/projects/annandale/cover.jpg",
    gallery: [
      "/projects/annandale/01.jpg",
      "/projects/annandale/02.jpg",
      "/projects/annandale/03.jpg",
      "/projects/annandale/04.jpg",
      "/projects/annandale/05.jpg",
      "/projects/annandale/06.jpg",
      "/projects/annandale/07.jpg",
    ],
  },
  {
    slug: "redfern",
    suburb: "Redfern",
    title: "Zamia Street, Redfern",
    scope: "Terrace renovation",
    brief:
      "A whole-of-house terrace renovation — a timber-and-stone kitchen under a sculptural pendant, a calm freestanding-tub bathroom, and a rear that folds open to the courtyard.",
    cover: "/projects/redfern/cover.jpg",
    gallery: [
      "/projects/redfern/01.jpg",
      "/projects/redfern/02.jpg",
      "/projects/redfern/03.jpg",
      "/projects/redfern/04.jpg",
      "/projects/redfern/05.jpg",
      "/projects/redfern/06.jpg",
    ],
  },
  {
    slug: "greenacre",
    suburb: "Greenacre",
    title: "Northcote, Greenacre",
    scope: "New build",
    brief:
      "A substantial face-brick family home — a cathedral great room beneath exposed timber beams and brass chandeliers, a walnut island set on tessellated tile, brass fittings throughout, opening to a pool and courtyard.",
    cover: "/projects/greenacre/cover.jpg",
    gallery: [
      "/projects/greenacre/01.jpg",
      "/projects/greenacre/02.jpg",
      "/projects/greenacre/03.jpg",
      "/projects/greenacre/04.jpg",
      "/projects/greenacre/05.jpg",
      "/projects/greenacre/06.jpg",
      "/projects/greenacre/07.jpg",
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

export const HERO_IMG = "/projects/greenacre/cover.jpg";
export const CTA_IMG = "/projects/maroubra/cover.jpg";

export const SUBURBS = projects.map((p) => p.suburb);
