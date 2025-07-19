# Testing Your Goals App Marketing Website

## Quick Start Methods

### Method 1: Python HTTP Server (Recommended)
```bash
cd /Users/danhogan/Documents/Goals/marketing-website
python3 -m http.server 8000
```
Then open: http://localhost:8000

### Method 2: Node.js HTTP Server
```bash
# Install if you have Node.js
npx http-server . -p 8080
```
Then open: http://localhost:8080

### Method 3: PHP Built-in Server
```bash
php -S localhost:8000
```
Then open: http://localhost:8000

### Method 4: Direct File Opening
Simply double-click `index.html` in Finder
(Note: Some features may not work due to CORS restrictions)

## Testing Checklist

### ✅ Desktop Testing
- [ ] Open http://localhost:8000 in Chrome
- [ ] Test navigation menu links
- [ ] Scroll through all sections
- [ ] Check responsive design by resizing window
- [ ] Test all buttons and hover effects
- [ ] Verify smooth scrolling works

### ✅ Mobile Testing
- [ ] Open Developer Tools (F12)
- [ ] Click device toolbar icon
- [ ] Test iPhone/iPad views
- [ ] Check touch interactions
- [ ] Verify mobile menu (hamburger menu)
- [ ] Test form inputs on mobile

### ✅ Cross-Browser Testing
- [ ] Chrome (primary)
- [ ] Safari
- [ ] Firefox
- [ ] Edge

### ✅ Performance Testing
- [ ] Check page load speed
- [ ] Test image loading
- [ ] Verify animations are smooth
- [ ] Check console for errors

### ✅ Content Review
- [ ] All text is readable
- [ ] Images load properly (placeholder text for now)
- [ ] Links work correctly
- [ ] Contact information is accurate

## Browser Developer Tools

### Chrome DevTools
1. Right-click → "Inspect" or press F12
2. Use "Device Toolbar" for mobile testing
3. Check "Console" tab for JavaScript errors
4. Use "Network" tab to check loading times

### Mobile Simulation
1. Open DevTools
2. Click device icon (📱)
3. Select device: iPhone 14 Pro, iPad, etc.
4. Test portrait and landscape orientations

## Common Issues to Check

### Images Not Loading
- Check that image paths are correct
- Verify images exist in `/assets/` folder
- Currently using placeholder text - this is expected

### JavaScript Errors
- Open Console tab in DevTools
- Look for red error messages
- Most common: missing image files (expected for now)

### CSS Issues
- Check if styles are loading
- Verify responsive breakpoints work
- Test hover effects on desktop

### Performance Issues
- Large images (when added) should be optimized
- Check loading times in Network tab
- Verify smooth scrolling and animations

## Mobile Testing on Real Device

### Option 1: Local Network Access
1. Find your computer's IP address:
   ```bash
   ifconfig | grep "inet " | grep -v 127.0.0.1
   ```
2. Start server: `python3 -m http.server 8000`
3. On phone, visit: http://[YOUR-IP]:8000

### Option 2: ngrok (Public URL)
1. Install ngrok: https://ngrok.com/
2. Run: `ngrok http 8000`
3. Use the public URL on any device

## Testing Specific Features

### Navigation
- Click all nav links
- Verify smooth scrolling to sections
- Test mobile menu toggle

### Animations
- Scroll down to trigger fade-in animations
- Check confetti animation in hero
- Verify parallax effects

### Forms (Future)
- Test any contact forms
- Check validation messages
- Verify submission handling

### Responsive Design
- Test at different screen widths:
  - 320px (small mobile)
  - 768px (tablet)
  - 1024px (desktop)
  - 1440px (large desktop)

## Performance Optimization

### Before Launch
- Compress all images
- Minify CSS and JavaScript
- Test loading speed
- Optimize for mobile

### Tools to Use
- Google PageSpeed Insights
- GTmetrix
- WebPageTest
- Chrome DevTools Lighthouse

## Next Steps After Testing

1. **Fix any issues found**
2. **Add real app screenshots**
3. **Update App Store links**
4. **Test again with real content**
5. **Deploy to hosting service**

## Hosting Options for Final Deployment

### Free Options
- **GitHub Pages**: Push to GitHub, enable Pages
- **Netlify**: Drag & drop deployment
- **Vercel**: Connect GitHub repository
- **Firebase Hosting**: Google's free tier

### Paid Options
- **AWS S3 + CloudFront**: Professional CDN
- **Digital Ocean**: Simple cloud hosting
- **Namecheap**: Domain + hosting combo

## Quick Command Reference

```bash
# Start testing server
cd /Users/danhogan/Documents/Goals/marketing-website
python3 -m http.server 8000

# Open in browser
open http://localhost:8000

# Stop server
Ctrl + C
```

Happy testing! 🚀