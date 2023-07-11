import './global.css'

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
