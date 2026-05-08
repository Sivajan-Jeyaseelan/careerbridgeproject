import "./globals.css";


export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {

    return (

        <html
            lang="en"
            className={`h-full antialiased`}
        >

            <body className="tag-body">{children}</body>

        </html>

    );

}
