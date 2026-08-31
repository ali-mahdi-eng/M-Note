import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'M-Note',
    short_name: 'M-Note',
    description: 'A simple note-taking app that allows you to create, edit, and organize your notes with ease. It provides a clean and intuitive interface for managing your notes efficiently.',
    start_url: `${basePath}/`,
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#1c1c1c',
    icons: [
      { src: `${basePath}/icon-192x192.png`, sizes: '192x192', type: 'image/png' },
      { src: `${basePath}/icon-512x512.png`, sizes: '512x512', type: 'image/png' },
      { src: `${basePath}/icon-1024x1024.png`, sizes: '1024x1024', type: 'image/png' },
      { src: `${basePath}/icon-512x512.png`, sizes: '512x512', type: 'image/png', purpose: 'maskable' },

     ]

  }
}   