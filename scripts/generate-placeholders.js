const fs = require('fs');
const path = require('path');

// Create placeholder SVG for team members
const teamMemberSVG = (name) => `
<svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="400" fill="#f3f4f6"/>
  <text x="50%" y="50%" font-family="Arial" font-size="24" fill="#4b5563" text-anchor="middle" dominant-baseline="middle">
    ${name}
  </text>
</svg>
`;

// Create placeholder SVG for partners
const partnerSVG = (name) => `
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="200" fill="#f3f4f6"/>
  <text x="50%" y="50%" font-family="Arial" font-size="16" fill="#4b5563" text-anchor="middle" dominant-baseline="middle">
    ${name}
  </text>
</svg>
`;

// Generate team member placeholders
const teamMembers = [
  { name: 'John Doe', file: 'ceo.jpg' },
  { name: 'Jane Smith', file: 'operations.jpg' },
  { name: 'Mike Johnson', file: 'claims.jpg' },
  { name: 'Sarah Williams', file: 'customer.jpg' }
];

teamMembers.forEach(member => {
  fs.writeFileSync(
    path.join(__dirname, '../public/team', member.file),
    teamMemberSVG(member.name)
  );
});

// Generate partner placeholders
const partners = [
  { name: 'Partner 1', file: 'partner1.png' },
  { name: 'Partner 2', file: 'partner2.png' },
  { name: 'Partner 3', file: 'partner3.png' },
  { name: 'Partner 4', file: 'partner4.png' },
  { name: 'Partner 5', file: 'partner5.png' }
];

partners.forEach(partner => {
  fs.writeFileSync(
    path.join(__dirname, '../public/partners', partner.file),
    partnerSVG(partner.name)
  );
});

console.log('Placeholder images generated successfully!'); 