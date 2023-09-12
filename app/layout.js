import '../styles/index.scss'

export const metadata = {
  title: "Predrag's Portfolio",
  description: "React and Next.js Front end web developer's Portfolio"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=PT+Sans+Caption:wght@700&family=Poppins&display=swap" rel="stylesheet" />
      </head>


      <body>
        {children}
      </body>
    </html>
  )
}
