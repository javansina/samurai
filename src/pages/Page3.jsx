function Page3() {
   return (
      <div className="flex flex-col sm:gap-y-10 gap-y-3 mt-5">
         <div className="flex lg:flex-row flex-col items-center">
            <div>
               <h1 className="pl-4 text-myBrown-100 font-semibold text-xl">
                  Wakizashi (脇差):
               </h1>
               <p className="leading-9 indent-5 p-5 md:pt-0 text-myBlue-300 font-medium">
                  Blade Length: The Wakizashi typically has a blade length
                  between 30 to 60 centimeters (about 12 to 24 inches), making
                  it shorter than the Katana. curvature: Like the Katana, the
                  Wakizashi also has a curved, single-edged blade, but the
                  curvature is less pronounced.
               </p>
            </div>
            <img
               className="w-[700px] h-60 rounded-3xl"
               src="/images/page3/wakizashi.webp"
               alt="wakizashi1"
            />
         </div>
         <div className="p-3 xs:p-5 md:p-0 bg-myBlue-200 md:bg-myBlue-20 rounded-3xl text-myWhite-100 md:text-myBrown-200">
            <span className="text-myBrown-100 text-2xl indent-0 font-bold">
               Material:
            </span>
            <ul className="list-disc p-5 flex flex-col ml-5 gap-y-5">
               <li>
                  blade: The Wakizashi&apos;s blade is traditionally made from
                  high-carbon steel using the &quot;Tamahagane&quot; process,
                  similar to the Katana. The steel is repeatedly folded and
                  forged to create a blade that is both sharp and durable, with
                  a distinct grain pattern known as &quot;Hamon.&quot;
               </li>
               <li>
                  Handle (Tsuka): The handle is typically made from wood,
                  wrapped in ray skin (same), and then tightly covered with silk
                  or cotton cord (Ito). The fittings, including the handguard
                  (Tsuba), are often made from iron, brass, or other metals, and
                  can be intricately decorated.
               </li>
            </ul>
         </div>
         <div className="md:bg-myBlue-200 rounded-3xl flex flex-col md:flex-row gap-x-7">
            <img
               className="lg:w-96 md:w-1/3 sm:w-1/2 mx-auto rounded-3xl"
               src="/images/page3/2.webp"
               alt="history"
            />
            <div className="mt-5 flex flex-col justify-center">
               <span className="text-myBrown-100 text-2xl font-bold">
                  History:
               </span>
               <ul className="list-disc p-5 md:text-myWhite-100 text-myBrown-200 flex flex-col ml-5 gap-y-5">
                  <li>
                     origins: The Wakizashi dates back to the Sengoku period
                     (1467-1615) in Japan. It was developed as a companion sword
                     to the Katana, forming part of the traditional Samurai
                     sword set known as &quot;Daish%C5%8D&quot; (meaning
                     &quot;big-little&quot;), where the Katana is the
                     &quot;big&quot; sword and the Wakizashi is the
                     &quot;little&quot; sword.
                  </li>
                  <li>
                     evolution: Over time, the Wakizashi became an essential
                     part of a Samurai&apos;s attire. It was often worn indoors,
                     where the longer Katana might be considered impractical or
                     too imposing.
                  </li>
                  <li>
                     Edo Period (1603-1868): During this period, the Wakizashi
                     also gained significance as a symbol of status and was
                     carried by the Samurai as a sign of their rank and
                     privilege.
                  </li>
               </ul>
            </div>
         </div>
         <div className="p-3 xs:p-5 md:p-0 bg-myBlue-200 md:bg-myBlue-20 rounded-3xl text-myWhite-100 md:text-myBrown-200">
            <span className="text-myBrown-100 text-2xl indent-0 font-bold">
               Usage:
            </span>
            <ul className="list-disc p-5 flex flex-col ml-5 gap-y-5">
               <li>
                  combat: The Wakizashi was used in close-quarters combat,
                  particularly in situations where a longer sword like the
                  Katana would be unwieldy. It was also used as a backup weapon
                  in case the primary sword was lost or damaged.
               </li>
               <li>
                  self-defense: Because of its size, the Wakizashi was ideal for
                  self-defense within confined spaces, such as indoors. It was
                  also used for tasks like beheading defeated enemies in battle.
               </li>
               <li>
                  Ritual Use: The Wakizashi was often used in Seppuku (ritual
                  suicide), where its size made it suitable for the precise and
                  controlled actions required in the ritual.
               </li>
               <li>
                  Everyday Carry: Unlike the Katana, which was often left
                  outside or set aside in certain settings, the Wakizashi was
                  carried at all times, even indoors, making it a constant
                  companion of the Samurai.
               </li>
            </ul>
         </div>
         <div className="md:bg-myBlue-200 rounded-3xl flex flex-col md:flex-row gap-x-7">
            <img
               className="lg:w-96 md:w-1/3 sm:w-1/2 mx-auto rounded-3xl"
               src="/images/page3/3.jpg"
               alt="history"
            />
            <div className="mt-5 flex flex-col justify-center">
               <span className="text-myBrown-100 text-2xl font-bold">
                  Size:
               </span>
               <ul className="list-disc p-5 md:text-myWhite-100 text-myBrown-200 flex flex-col ml-5 gap-y-5">
                  <li>
                     Blade Length: Typically between 30 to 60 centimeters (12 to
                     24 inches).
                  </li>
                  <li>
                     Overall Length: Including the handle, the Wakizashi usually
                     measures between 45 to 75 centimeters (18 to 30 inches).
                  </li>
                  <li>
                     weight: The Wakizashi generally weighs between 0.5 to 1
                     kilogram (1 to 2.2 pounds), making it lighter and more
                     maneuverable than the Katana.
                  </li>
               </ul>
            </div>
         </div>
      </div>
   );
}

export default Page3;
