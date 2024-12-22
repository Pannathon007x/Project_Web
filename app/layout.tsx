import Navbar from "@/components/Navbar"
import Link from "next/link"
import './globals.css'
import { Metadata } from "next"
import OnlineGallery from "@/components/OnlineGallery"

export const metadata:Metadata ={
  title:'Pannathon NextJS',
  description:'NextJS 15 Tutorial',
  keywords:'Pannathon Kankumnanta,Thiland'
} 

const layout = ({children}) => {
  return (
    <html>
      <body>
          <Navbar />
          {children}
      </body>
    </html>
  )
}
export default layout