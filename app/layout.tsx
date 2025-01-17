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
      <body className='min-h-screen flex-col '>
        <header className='bg-[lightblue] p-[1rem] '>
          <h1>Header</h1>
        </header>

        {children}

        <footer className='bg-[ghostwhite] p-[1rem]' >
          <p>Footer</p>
        </footer>
      </body>
    </html>
  );
}
