import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const publicDir = join(root, 'public');

const ogSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0A0A1A"/>
      <stop offset="100%" stop-color="#12121F"/>
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#06B6D4"/>
      <stop offset="55%" stop-color="#22D3EE"/>
      <stop offset="100%" stop-color="#7C3AED"/>
    </linearGradient>
    <radialGradient id="glowCyan" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#06B6D4" stop-opacity="0.45"/>
      <stop offset="100%" stop-color="#06B6D4" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glowPurple" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#7C3AED" stop-opacity="0.4"/>
      <stop offset="100%" stop-color="#7C3AED" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="ring1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#7C3AED"/>
      <stop offset="100%" stop-color="#4CC9F0"/>
    </linearGradient>
    <linearGradient id="ring2" x1="100%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#B5179E"/>
      <stop offset="100%" stop-color="#4895EF"/>
    </linearGradient>
  </defs>

  <rect width="1200" height="630" fill="url(#bg)"/>
  <circle cx="1020" cy="120" r="320" fill="url(#glowCyan)"/>
  <circle cx="140" cy="560" r="300" fill="url(#glowPurple)"/>

  <!-- Badge -->
  <rect x="72" y="78" rx="24" ry="24" width="430" height="48" fill="#FFFFFF" fill-opacity="0.08" stroke="#FFFFFF" stroke-opacity="0.18"/>
  <circle cx="102" cy="102" r="7" fill="#22D3EE"/>
  <text x="122" y="109" font-family="Helvetica, Arial, sans-serif" font-size="19" font-weight="700" letter-spacing="3" fill="#22D3EE">PREMIUM .COM — FOR SALE</text>

  <!-- Headline -->
  <text x="72" y="270" font-family="Helvetica, Arial, sans-serif" font-size="76" font-weight="800" fill="#FFFFFF">quantumnestcast</text>
  <text x="72" y="352" font-family="Helvetica, Arial, sans-serif" font-size="76" font-weight="800" fill="url(#accent)">.com</text>

  <!-- Tagline -->
  <text x="72" y="418" font-family="Helvetica, Arial, sans-serif" font-size="30" font-weight="600" fill="#E4E4E7">The Nest Where the Quantum Future Takes Flight</text>
  <text x="72" y="464" font-family="Helvetica, Arial, sans-serif" font-size="22" font-weight="400" fill="#A1A1AA">Domain acquisition • Escrow.com protected transfer</text>

  <!-- Accent bar -->
  <rect x="72" y="510" width="180" height="6" rx="3" fill="url(#accent)"/>
  <text x="72" y="566" font-family="Helvetica, Arial, sans-serif" font-size="20" font-weight="700" letter-spacing="2" fill="#71717A">SECOND QUANTUM REVOLUTION BRAND</text>

  <!-- Atom graphic -->
  <g transform="translate(960, 330)">
    <ellipse rx="150" ry="80" fill="none" stroke="url(#ring1)" stroke-width="5" opacity="0.9" transform="rotate(-18)"/>
    <ellipse rx="138" ry="95" fill="none" stroke="url(#ring2)" stroke-width="4.5" opacity="0.8" transform="rotate(28)"/>
    <ellipse rx="160" ry="60" fill="none" stroke="url(#ring1)" stroke-width="4" opacity="0.6" transform="rotate(68)"/>
    <ellipse rx="145" ry="110" fill="none" stroke="url(#ring2)" stroke-width="4" opacity="0.5" transform="rotate(-52)"/>
    <circle r="34" fill="url(#ring1)"/>
    <circle r="13" fill="#FFFFFF"/>
  </g>
</svg>`;

const iconSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 180 180">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0A0A1A"/>
      <stop offset="100%" stop-color="#12121F"/>
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#06B6D4"/>
      <stop offset="100%" stop-color="#22D3EE"/>
    </linearGradient>
  </defs>
  <rect width="180" height="180" rx="40" fill="url(#bg)"/>
  <circle cx="90" cy="90" r="62" fill="url(#accent)"/>
  <text x="90" y="112" font-family="Helvetica, Arial, sans-serif" font-size="52" font-weight="800" text-anchor="middle" fill="#0A0A1A">QN</text>
</svg>`;

await sharp(Buffer.from(ogSvg)).png({ compressionLevel: 9 }).toFile(join(publicDir, 'og-image.png'));
await sharp(Buffer.from(iconSvg)).png({ compressionLevel: 9 }).toFile(join(publicDir, 'apple-touch-icon.png'));
await sharp(Buffer.from(iconSvg)).resize(512, 512).png({ compressionLevel: 9 }).toFile(join(publicDir, 'icon-512.png'));

console.log('Generated og-image.png, apple-touch-icon.png, icon-512.png');
