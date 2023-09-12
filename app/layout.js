import '../styles/index.scss'

export const metadata = {
  title: "Predrag's Portfolio",
  description: "React and Next.js Front end web developer's Portfolio"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
