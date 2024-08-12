export default function manifest() {
  return {
    name: 'Bikin Twibbon',
    short_name: 'Bikin Twibbon',
    description: 'Next.js App',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
