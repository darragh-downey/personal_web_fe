
const links = [
    { href: 'https://github.com/zeit/next.js', label: 'GitHub' },
    { href: 'https://nextjs.org/docs', label: 'Docs' },
    { href: '/contact-me', label: 'Contact me'}
  ]

export default function Nav() {
    return (
        <>
            <footer>
                <small>
                    Built with{' '}
                    <a href="https://nextjs.org">Next.js</a> and{' '}
                    <a href="https://tailwindcss.com">TailwindCSS</a>
                </small>
            </footer>
        </>
    )
}