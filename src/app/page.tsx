"use client";
import Image from "next/image";
import HTMLFlipBook from "react-pageflip";
import page1 from "../../public/GDI ADVISORS - Plaquette - VF-03.pdf/1.png";
import page2 from "../../public/GDI ADVISORS - Plaquette - VF-03.pdf/2.png";
import page3 from "../../public/GDI ADVISORS - Plaquette - VF-03.pdf/3.png";
import page4 from "../../public/GDI ADVISORS - Plaquette - VF-03.pdf/4.png";
import page5 from "../../public/GDI ADVISORS - Plaquette - VF-03.pdf/5.png";
import page6 from "../../public/GDI ADVISORS - Plaquette - VF-03.pdf/6.png";
import page7 from "../../public/GDI ADVISORS - Plaquette - VF-03.pdf/7.png";
import page8 from "../../public/GDI ADVISORS - Plaquette - VF-03.pdf/8.png";

export default function MyBook() {
  return (
    <main className="h-screen w-full bg-blue-900  ">
      <HTMLFlipBook
        width={930}
        height={968}
        className=" bg-slate-700 justify-start border-slate-700 mx-auto"
      >
        <div className="demoPage relative ">
          <Image
            src={page1}
            width="800"
            height="500"
            alt=""
            className="w-full h-full  border-slate-400 border-r-4"
          />
          <div className="absolute right-0 top-0 opacity-70 bg-gradient-to-r from-transparent via-transparent to-gray-900   w-full h-full"></div>
        </div>
        <div className="demoPage relative ">
          <Image
            src={page2}
            width="800"
            height="500"
            alt=""
            className="w-full h-full  border-slate-400 border-l-4 "
          />
          <div className="absolute right-0 top-0 opacity-70 bg-gradient-to-l  border-slate-900 border-l-4 from-transparent via-transparent to-gray-900   w-full h-full"></div>
        </div>
        <div className="demoPage relative ">
          <Image
            src={page3}
            width="800"
            height="500"
            alt=""
            className="w-full h-full  border-slate-400 border-r-4"
          />
          <div className="absolute right-0 top-0 opacity-70 bg-gradient-to-r from-transparent via-transparent to-gray-900   w-full h-full"></div>
        </div>
        <div className="demoPage relative ">
          <Image
            src={page4}
            width="800"
            height="500"
            alt=""
            className="w-full h-full  border-slate-400 border-l-4"
          />
          <div className="absolute right-0 top-0 opacity-70 bg-gradient-to-l  border-slate-900 border-l-4 from-transparent via-transparent to-gray-900   w-full h-full"></div>
        </div>
        <div className="demoPage relative ">
          <Image
            src={page5}
            width="800"
            height="500"
            alt=""
            className="w-full h-full  border-slate-400 border-r-4"
          />
          <div className="absolute right-0 top-0 opacity-70 bg-gradient-to-r from-transparent via-transparent to-gray-900   w-full h-full"></div>
        </div>
        <div className="demoPage relative ">
          <Image
            src={page6}
            width="800"
            height="500"
            alt=""
            className="w-full h-full  border-slate-400 border-l-4"
          />
          <div className="absolute right-0 top-0 opacity-70 bg-gradient-to-l  border-slate-900 border-l-4 from-transparent via-transparent to-gray-900   w-full h-full"></div>
        </div>
        <div className="demoPage relative ">
          <Image
            src={page7}
            width="800"
            height="500"
            alt=""
            className="w-full h-full  border-slate-400 border-r-4"
          />
          <div className="absolute right-0 top-0 opacity-70 bg-gradient-to-r from-transparent via-transparent to-gray-900   w-full h-full"></div>
        </div>
        <div className="demoPage relative ">
          <Image
            src={page8}
            width="800"
            height="500"
            alt=""
            className="w-full h-full  border-slate-400 border-l-4"
          />
          <div className="absolute right-0 top-0 opacity-70 bg-gradient-to-l  border-slate-900 border-l-4 from-transparent via-transparent to-gray-900   w-full h-full"></div>
        </div>

        {/* <div className="demoPage  bg-slate-800"></div> */}
      </HTMLFlipBook>
    </main>
  );
}
