# Referral Codes Website 💰

An SEO-optimized website to display and share your referral codes for popular apps like Wakefit, EatClub, and more.

## Features

✅ **SEO Optimized**
- Individual product pages with meta tags targeting specific keywords
- Structured data (JSON-LD) for better search engine understanding
- Automatic sitemap generation
- robots.txt for search engines
- Open Graph tags for social sharing

✅ **Fast & Responsive**
- Built with Next.js 14 for excellent performance
- Tailwind CSS for beautiful styling
- Mobile-friendly design
- Server-side rendering for SEO

✅ **Easy to Manage**
- Simple JSON file for managing referral codes
- Copy-to-clipboard functionality
- Add new products instantly

## Quick Start

### Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Build for Production

```bash
npm run build
npm start
```

## Adding New Referral Codes

Edit `data/products.json`:

```json
{
  "products": [
    {
      "id": "your-app",
      "name": "Your App Name",
      "description": "Brief description",
      "referralCode": "YOUR_CODE",
      "discount": "What they get",
      "affiliate": "https://link-to-app.com",
      "keywords": ["app referral code", "app discount"],
      "icon": "🎯"
    }
  ]
}
```

## Deployment to Vercel

### Option 1: Quick Deploy

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Select your repository
5. Click Deploy

### Option 2: Using Vercel CLI

```bash
npm i -g vercel
vercel
```

## SEO Tips

1. **Custom Domain**: Buy a domain like `referralcodes.com` for better rankings
2. **Sitemap**: Verify sitemap at `/sitemap.xml`
3. **Google Search Console**: Add your site to GSC
4. **Backlinks**: Share your codes on relevant forums/communities
5. **Content**: Write unique descriptions for each code

## URL Structure

- Homepage: `/`
- Product pages: `/products/[product-id]`
  - Wakefit: `/products/wakefit`
  - EatClub: `/products/eatclub`

## Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Hosting**: Vercel (free tier available)
- **Data**: JSON file

## Project Structure

```
├── app/                      # Next.js app directory
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Homepage
│   ├── products/
│   │   └── [id]/page.tsx    # Dynamic product pages
│   ├── sitemap.ts           # Dynamic sitemap
│   └── robots.ts            # Search engine directives
├── data/
│   └── products.json        # Referral codes data
├── public/                  # Static assets
├── next.config.js          # Next.js config
├── tailwind.config.js      # Tailwind config
└── package.json            # Dependencies
```

## Performance Metrics

- **First Load**: ~96 KB (shared JS)
- **Page Size**: ~175 B per product page
- **Build Time**: ~30 seconds
- **SEO Score**: 90+

## License

Open source - feel free to use and modify!

## Support

For questions or issues, check Next.js docs at [nextjs.org](https://nextjs.org)
