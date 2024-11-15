import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
   <main className="bg-purple-100">
   <section className="grid grid-cols-2 h-[50vh]">
<div className="flex flex-col gap-4 items-center justify-center">
<p className="text-2xl font-black ">The best URL shortner in the Market</p>
<p className="px-56 text-center">We are the most straight forward URL shortner in the world.Most popular URL shortner in the world track your location but we understand your needs.</p>
<div className='flex gap-3 justify-start'>
          <Link href="/shorten"><button className='text-white bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold'>Try Now</button></Link>
          <Link href="/github"><button className='text-white bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold'>GitHub</button></Link>
        </div>
</div>
<div className="flex justify-start relative">
<Image className="mix-blend-darken" src={"/vector.png"} fill={true}  alt="vector image" />
</div>
   </section>
   </main>
  );
}
