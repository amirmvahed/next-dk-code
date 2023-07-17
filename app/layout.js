import './global.css'

export const metadata = {
    title: 'Introduction to NextJS 13.4',
    description: 'Discover NextJS, the powerful React framework, in this introductory course. Learn the basics of Next.js development, including setting up the environment, server-side rendering, and static site generation. Gain practical experience building basic applications and exploring styling options. Elevate your front-end development skills with Next.js and unlock the potential of creating dynamic web experiences.',
}

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body>
        <nav>Root layout</nav>
        {children}
        </body>
        </html>
    )
}
