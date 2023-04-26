import './globals.css'
import Navbar from './Components/Navbar'
import Profilepic from './Components/Profilepic'
import Footer from './Components/Footer'


export const metadata = {
  title: "That one Vegan Running Mom",
  description: 'built by Alejandra Quintero ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <html lang="en"> 
  
      <body className=' bg-orange-100 container mx-auto flex justify-between place-content-between flex flex-col'>


        <Navbar />
        <Profilepic/>
        
        {children}

        <section className='place-items-baseline'> <Footer/> </section>

       
        
        </body>

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
