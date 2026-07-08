/**
 * data.js
 * Single source of truth for every piece of content on the site.
 * Edit the objects/arrays below to update the portfolio — script.js reads from here.
 */

const profile = {
  fullName: 'Deover "Deo" P. Pasco Jr.',
  role: 'Aspiring Programmer & IT Specialist',
  subrole: 'BSIT — Major in Information Security',
  location: 'Tagum City, Davao Region, PH',
  bio: "I'm Deo — a college student majoring in Information Security who spends most nights either writing code or chasing light with a camera. I co-run 3P IT Services, a small IT start-up where we build and fix systems for real local businesses, and I shoot for FLT Collective on the side. Still learning, still shipping.",
  status: 'AVAILABLE_FOR_PROJECTS',
  email: 'deoverpascojr@gmail.com',
};

const socials = [
  { label: 'Instagram — Main', handle: '@lil.deoo', url: 'https://instagram.com/lil.deoo' },
  { label: 'GitHub', handle: 'de0-14', url: 'https://github.com/de0-14' },
  { label: '3P IT Services', handle: '@3p.it_8100', url: 'https://instagram.com/3p.it_8100' },
  { label: 'FLT Collective', handle: '@flt.collective', url: 'https://instagram.com/flt.collective' },
  { label: 'Email', handle: 'deoverpascojr@gmail.com', url: 'mailto:deoverpascojr@gmail.com' },
];

const ventures = [
  {
    name: '3P IT Services',
    tag: '3P.IT_8100',
    status: 'ACTIVE',
    role: 'Co-Founder',
    desc: 'A small IT start-up taking on real clients — we code custom systems from scratch and handle hardware repair/troubleshooting for local businesses.',
    stack: ['Client Systems', 'Hardware Repair', 'Custom Software'],
    url: 'https://instagram.com/3p.it_8100',
    cta: 'View on Instagram',
  },
  {
    name: 'FLT Collective',
    tag: 'FLT.COLLECTIVE',
    status: 'ACTIVE',
    role: 'Founder / Photographer',
    desc: 'A photography outlet for the flicks I take for fun — street, events, and whatever catches the eye. Non-professional, but never careless.',
    stack: ['Photography', 'Visual Archive', 'Community'],
    url: 'https://instagram.com/flt.collective',
    cta: 'View Gallery',
  },
];

const skills = [
  { name: 'PHP', note: 'Backend logic, systems' },
  { name: 'JavaScript', note: 'Interactivity, front-end' },
  { name: 'HTML', note: 'Structure & markup' },
  { name: 'CSS', note: 'Styling & layout' },
  { name: 'Java', note: 'OOP fundamentals' },
  { name: 'Python', note: 'Scripting & logic' },
  { name: 'Photography', note: 'FLT Collective' },
  { name: 'Graphic Design', note: 'Visuals & branding' },
  { name: 'and more...', note: 'Always picking up something new' },
];

const projects = [
  {
    name: 'Manaklay Multisystem',
    desc: 'Full-on accounting/inventory, cashier, and logbook system commissioned for a local beach resort.',
    tags: ['PHP', 'MySQL', 'Point of Sale', 'Inventory'],
    url: 'https://github.com/disCarl20829/Manaklay-System',
    icon: '💻',
  },
  {
    name: 'Mr. Tarpz Inventory & Accounting',
    desc: 'A local system used by a printing shop, built on core PHP fundamentals.',
    tags: ['PHP', 'Accounting', 'Inventory'],
    url: 'https://github.com/de0-14/MrTarpz-Accounting-and-Inventory-System',
    icon: '💻',
  },
  {
    name: 'DRMC Intercom Directory',
    desc: 'A secure, hierarchical, real-time intercom directory and internal messaging platform for hospital organizational communication — spanning Divisions, Departments, Units, and Offices. Includes an automated background conversation archiver to keep the database lean and the active workspace clear.',
    tags: ['Real-Time', 'Security', 'System Design'],
    url: 'https://github.com/de0-14/Intercom-System',
    icon: '🧠',
  },
];

/**
 * Accomplishments log — grouped, not forced into a false timeline.
 * Each entry keeps its year only where one was actually given.
 */
const accomplishments = {
  'Academics & Leadership': [
    { y: null, text: 'Consistent Honor Student since elementary' },
    { y: '2024-2025', text: 'Top 2 (Q1) and Top 3 (Q2–Q4) in Computer Programming, Tagum National Trade School' },
    { y: null, text: 'Former LDDI Tagum Music Club President' },
    { y: null, text: 'Former LDDI Tagum Technical Team member' },
    { y: '2024-2025', text: 'Former active BKD member, Tagum National Trade School' },
    { y: '2024-2025', text: 'Former active HearTeens member, Tagum National Trade School' },
  ],
  'Competitions & Research': [
    { y: '2019', text: '3rd Placer, DACET DaMath' },
    { y: '2023', text: 'CSAA Takraw Player' },
    { y: '2025', text: 'DSPC Placer, Technical Application' },
    { y: '2025', text: '1st Place, Smart Talking and Interviewing (Smart Talker) — TNTS Intramurals' },
    { y: null, text: 'Excellence Awardee — led the team to 1st Place Best Paper in Category (ICT), The Groundwork Intra-School Research Congress' },
    { y: null, text: 'Excellence Awardee — led the team to 1st Place Best Paper Presentation in Category (ICT), The Groundwork Intra-School Research Congress' },
  ],
  'Community & Service': [
    { y: '2024', text: 'Organized stands and booths — LDDI Tagum TLE Fair' },
    { y: null, text: 'Took part in TNTS IncluSave and Leadership Program' },
    { y: null, text: 'ASP (Alliance of Student Programmers) Service Awardee, Tagum National Trade School' },
  ],
  'Training & Certifications': [
    { y: null, text: 'Completed AI Ready ASEAN — Hour of Code Training, by Limitless Lab with support from Google.org' },
    { y: null, text: 'Completed AI for Oceans — Hour of Code, by Code.org, demonstrating core Computer Science concepts' },
  ],
  'Ventures': [
    { y: null, text: 'Started FLT Collective — a photography portfolio and outlet' },
    { y: null, text: 'Started 3P IT Services — client systems and hardware repair' },
  ],
};

/**
 * Photography gallery.
 * Static sites can't scan a folder on their own — so just list your filenames here.
 * Drop the actual image files into assets/photos/ and add their filenames below.
 * Example: 'assets/photos/street-01.jpg'
 */
const galleryPhotos = [
  // 'assets/photos/your-photo-1.jpg',
  // 'assets/photos/your-photo-2.jpg',
];
