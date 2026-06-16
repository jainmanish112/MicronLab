# Materials Science Research Webpage

A professional webpage for Materials Science research at New Mexico Institute of Mining and Technology.

## Files

- `index.html` - Main HTML structure
- `styles.css` - Styling and layout
- `script.js` - JavaScript functionality

## Features

- Responsive design that works on all devices
- Sections for:
  - Profile and biography
  - Research areas
  - Publications
  - Education
  - Professional experience
  - Awards & honors
  - Contact information
- Smooth scrolling navigation
- Modern, professional design with New Mexico Tech colors

## Customization

To populate the webpage with CV information:

1. Open `script.js`
2. Update the `exampleCVData` object with your information
3. Uncomment the line: `populateFromCV(exampleCVData);`

Alternatively, you can directly edit the HTML file to replace placeholder text.

## Viewing the Webpage

Simply open `index.html` in a web browser, or use a local server:

```bash
# Using Python 3
python3 -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server
```

Then navigate to `http://localhost:8000` in your browser.

