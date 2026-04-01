import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Referral Codes - Get Best Discounts',
  description: 'Find the best referral codes for Wakefit, EatClub, and more popular apps. Get discounts with verified referral codes.',
  keywords: 'referral codes, discount codes, wakefit referral, eatclub referral',
  authors: [{ name: 'Referral Codes' }],
  openGraph: {
    title: 'Referral Codes - Get Best Discounts',
    description: 'Find the best referral codes for Wakefit, EatClub, and more.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://referral-codes.vercel.app" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Referral Codes',
              description: 'Find the best referral codes for popular apps',
              url: 'https://referral-codes.vercel.app',
            }),
          }}
        />
      </head>
      <body className="bg-gradient-to-br from-purple-50 to-blue-50">
        {children}
      </body>
    </html>
  );
}

