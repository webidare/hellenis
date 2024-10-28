import Link from 'next/link'
import { Command } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-background py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">Proudly Open Source</h2>
        <p className="text-xl text-muted-foreground mb-8">
          Hellenis is open source and powered by open source software.
          The code is available on{' '}
          <Link href="https://github.com/yourusername/hellenis" className="underline hover:text-primary">
            GitHub
          </Link>
          .
        </p>
        <Command className="w-12 h-12 mx-auto mb-8 text-foreground" />
        <p className="text-sm text-muted-foreground">
          Built by{' '}
          <Link href="https://github.com/yourusername" className="underline hover:text-primary">
            yourusername
          </Link>
          . Hosted on{' '}
          <Link href="https://vercel.com" className="underline hover:text-primary">
            Vercel
          </Link>
          .
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          Illustrations by{' '}
          <Link href="https://popsy.co" className="underline hover:text-primary">
            Popsy
          </Link>
          . The source code is available on{' '}
          <Link href="https://github.com/yourusername/hellenis" className="underline hover:text-primary">
            GitHub
          </Link>
          .
        </p>
      </div>
    </footer>
  )
}
