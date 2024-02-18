import Button from "./components/ui/Button";
import Input from "./components/ui/Input";
import Navbar from "./components/containers/Navbar";
import Image from "./components/ui/Image";

export default function App() {
  return (
    <div className="bg-gray-200 dark:bg-black flex flex-col w-full min-h-screen p-2 m-0 text-black dark:text-gray-400 " >
      <Navbar/>
      Hola!
      <Button>
        Hi!
      </Button>
      <div className="max-w-[50%] h-auto aspect-video" >
        <Image src="https://w0.peakpx.com/wallpaper/876/896/HD-wallpaper-a-certain-magical-index-a-certain-scientific-railgun-hacker-linux-mikoto-misaka.jpg" alt="hacker" />
      </div>
      <Input type="text" placeholder="Your name here" />
    </div>
  );
}
