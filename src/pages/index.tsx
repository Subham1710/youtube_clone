 import Image from 'next/image'
 import { Inter } from 'next/font/google'

import {VideoCard} from '@/components/VideoCard';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <div>
    asasas
    <VideoCard

      title ={"fucker"}
      image={"chad.jpeg"}
      thumbImage={"thumb.jpeg"}
      author={"Raman Singh"}
      views={"100k"}
      timestamp={"2 days ago "}


      

    ></VideoCard>
    asasas
   </div>
  )
}


