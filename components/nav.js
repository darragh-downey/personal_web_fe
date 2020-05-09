import Link from 'next/link'

const name = 'Darragh Downey'
export const siteTitle = 'Next.js BLOG'

const links = [
    { href: 'https://github.com/zeit/next.js', label: 'GitHub' },
    { href: 'https://nextjs.org/docs', label: 'Docs' },
  ]

export default function Nav() {
    return (
        <>
        <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <Link href="/">
                <a>
                    <img
                    src="/images/profile.jpg"
                    className="h-16 w-16 rounded-full"
                    alt={name}
                    />
                </a>
                </Link>
                <div>
                    <div>
                        <span className="font-semibold text-xl tracking-tight">SwirlsCounterClockwise</span>
                    </div>
                    <div>
                        <small>Wrangling Technology</small>
                    </div>
                </div>
            </div>
            <ul className="flex justify-between items-center p-8">
                <div className="block lg:hidden">
                    <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                    </button>
                </div>
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-sm lg:flex-grow">
                    <ul className="flex justify-between items-center space-x-4">
                        {links.map(({ href, label }) => (
                            <li key={`${href}${label}`}>
                            <a href={href} className="block mt-4 lg:inline-block lg:mt-0 text-blue-500 mr-4">
                                {label}
                            </a>
                            </li>
                        ))}
                        </ul>
                    </div>    
                </div>  
            </ul> 
            <div>
                <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white bg-blue hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 lg:mt-0">Resume</a>
            </div>
    </nav>
    </>
    )
}


