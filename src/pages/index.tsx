import Slider from "@/components/slider"
import Timer from "@/components/timer"
import { NextPage } from "next"

const Home: NextPage = () => {
  return (
    <main>
      <Slider/>
      <Timer/>
    </main>
  )  
}

export default Home