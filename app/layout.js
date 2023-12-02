import './globals.css'
import Footer from './components/footer'

export const metadata = {
  title: 'Nindo Task',
  description: 'Become a task management ninja',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <main className="flex-grow max-w-7xl mx-auto p-4 md:p-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
