import '@/styles/globals.scss';
import React from 'react';
import Navigation from 'src/components/molecules/Navigation/Navigation';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>Dictionary</title>
      </head>
      <body>
        <header>
          <Navigation />
        </header>
        <div>{children}</div>
      </body>
    </html>
  );
}
