import './globals.css'
import Navbar from './Components/Navbar'
import Profilepic from './Components/Profilepic'

export const metadata = {
  title: "That one Vegan Running Mom ",
  description: 'build by Alejandra Quintero ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className=' mx-auto flex justify-between flex-col bg-zinc-700'>
        <Navbar />
        <Profilepic/>
        
        {children}</body>
    </html>
  )
}

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className='bg-zinc-700 text-white'>{children}</body>
//     </html>
//   );
// }
