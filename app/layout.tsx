import React, { ReactNode } from 'react'
import Header from './components/Header'
import './globals.css'

function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en" className="dark-theme">
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <script src="https://kit.fontawesome.com/bb488c4407.js" async></script>
            </head>
            <body >
                <Header />
                <main>{children}</main>
            </body>
        </html>
    )
}

export default RootLayout