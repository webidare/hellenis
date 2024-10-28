import Link from 'next/link'
import { Command } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="w-full max-w-3xl mx-auto px-4 py-12 text-center">
      <h2 className="text-4xl font-bold mb-4 text-slate-900">Proudly Open Source</h2>
      <p className="text-xl text-slate-600 mb-8">
        Taxonomy is open source and powered by open source software.{' '}
        <Link href="https://github.com/your-repo-link" className="underline">
          The code is available on GitHub.
        </Link>
      </p>
      <Command className="w-12 h-12 mx-auto mb-4 text-slate-900" />
      <p className="text-sm text-slate-600">
        Built by{' '}
        <Link href="https://ui.shadcn.com/" className="underline">
          shadcn
        </Link>
        . Hosted on{' '}
        <Link href="https://vercel.com" className="underline">
          Vercel
        </Link>
        . Illustrations by{' '}
        <Link href="https://popsy.co" className="underline">
          Popsy
        </Link>
        . The source code is available on{' '}
        <Link href="https://github.com/your-repo-link" className="underline">
          GitHub
        </Link>
        .
      </p>
    </footer>
  )
}
