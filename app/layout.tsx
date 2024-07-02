import { Metadata } from 'next'
import "./globals.css";




export const metadata : Metadata = {
  title: {
    default: 'Next.js Tutorial', // it's a title that can be passed throught parent to children
    template: '%s | Next.js Tutorials' // set the template for child title
  },
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={
        {
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }
      }>
        <header
          style={{
            backgroundColor: "lightblue",
            padding: "1rem",
          }}
        >
          <p>Header</p>
        </header>

        {children}

        <footer
          style={{
            backgroundColor: "ghostwhite",
            padding: "1rem",
          }}
        >
          <p>Footer</p>
        </footer>
      </body>
    </html>
  );
}
