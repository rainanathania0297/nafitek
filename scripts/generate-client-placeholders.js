// This script generates placeholder images for client logos
// Run with: node scripts/generate-client-placeholders.js

const fs = require('fs');
const path = require('path');
const { createCanvas } = require('canvas');

// Client data from the image
const clients = [
  { name: 'TACI', color: '#0047AB', textColor: '#FFFFFF' },
  { name: 'Stanley', color: '#FF6600', textColor: '#FFFFFF' },
  { name: 'Panasonic', color: '#0048B3', textColor: '#FFFFFF' },
  { name: 'TRSS', color: '#FF0000', textColor: '#FFFFFF' },
  { name: 'PTS', color: '#4CAF50', textColor: '#FFFFFF' },
  { name: 'PT Lotte Indonesia', color: '#FF0000', textColor: '#FFFFFF' },
  { name: 'PT Jonan Indonesia', color: '#0047AB', textColor: '#FFFFFF' },
  { name: 'Presisi', color: '#0047AB', textColor: '#FFFFFF' },
  { name: 'PT Astra Juoku Indonesia', color: '#4682B4', textColor: '#FFFFFF' },
  { name: 'Santosa Hospital', color: '#0047AB', textColor: '#FFFFFF' },
  { name: 'Kencar', color: '#0047AB', textColor: '#FFFFFF' },
  { name: 'SMC', color: '#0047AB', textColor: '#FFFFFF' },
  { name: 'Koito', color: '#FF0000', textColor: '#FFFFFF' },
];

// Create the clients directory if it doesn't exist
const clientsDir = path.join(__dirname, '../public/clients');
if (!fs.existsSync(clientsDir)) {
  fs.mkdirSync(clientsDir, { recursive: true });
}

// Generate placeholder images
clients.forEach((client) => {
  const width = 300;
  const height = 150;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Fill background
  ctx.fillStyle = client.color;
  ctx.fillRect(0, 0, width, height);

  // Add text
  ctx.fillStyle = client.textColor;
  ctx.font = 'bold 30px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  
  // Handle long names
  const name = client.name;
  if (name.length > 15) {
    const words = name.split(' ');
    const firstLine = words.slice(0, Math.ceil(words.length / 2)).join(' ');
    const secondLine = words.slice(Math.ceil(words.length / 2)).join(' ');
    
    ctx.fillText(firstLine, width / 2, height / 2 - 20);
    ctx.fillText(secondLine, width / 2, height / 2 + 20);
  } else {
    ctx.fillText(name, width / 2, height / 2);
  }

  // Save the image
  const fileName = client.name.toLowerCase().replace(/\s+/g, '-').replace(/\./g, '');
  const out = fs.createWriteStream(path.join(clientsDir, `${fileName}-logo.png`));
  const stream = canvas.createPNGStream();
  stream.pipe(out);
  
  out.on('finish', () => {
    console.log(`Created ${fileName}-logo.png`);
  });
});

console.log('Placeholder images generation script completed.');