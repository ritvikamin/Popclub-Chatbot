import './tailwind.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'POPCLUB Replica',
  description: 'A modern replica of popclub.co built with Next.js 14, Tailwind CSS, and shadcn/ui.'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>POPCLUB Replica</title>
      </head>
      <body className="font-sans bg-darkBg text-darkText dark:bg-darkBg dark:text-darkText min-h-screen">
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(d, t) {
                  var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
                  v.onload = function() {
                    window.voiceflow.chat.load({
                      verify: { projectID: '6866649b8fe6d30413964bac' },
                      url: 'https://general-runtime.voiceflow.com',
                      versionID: 'production',
                      voice: {
                        url: "https://runtime-api.voiceflow.com"
                      }
                    });
                  }
                  v.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs"; v.type = "text/javascript"; s.parentNode.insertBefore(v, s);
              })(document, 'script');
            `
          }}
        />
      </body>
    </html>
  );
} 