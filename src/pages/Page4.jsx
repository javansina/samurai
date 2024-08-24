function Page4() {
   return (
      <div className="flex flex-col sm:gap-y-10 gap-y-3 md:mt-5">
         <div className="flex lg:flex-row flex-col items-center">
            <div>
               <p className="leading-9 indent-5 mt-5 p-5 md:pt-0 text-myBlue-300 font-medium">
                  Tantō is the English name for the Japanese word &quot; 短刀
                  &quot; which refers to a small, traditionally single-edged
                  dagger used by the Samurai.
               </p>
            </div>
            <img
               className="w-[700px] h-60 rounded-3xl"
               src="/images/page4/tanto.jpg"
               alt="wakizashi1"
            />
         </div>
         <div className="p-3 xs:p-5 md:p-0 bg-myBlue-200 md:bg-myBlue-20 rounded-3xl text-myWhite-100 md:text-myBrown-200">
            <span className="text-myBrown-100 text-2xl indent-0 font-bold">
               Material:
            </span>
            <ul className="list-disc p-5 flex flex-col ml-5 gap-y-5">
               <li>
                  Blade: Tantō blades were traditionally made from high-carbon
                  steel, often using the same intricate folding and forging
                  techniques as other Samurai swords like the Katana. This
                  process, known as &quot; Tamahagane, &quot; involved
                  repeatedly folding the steel to remove impurities and create a
                  strong, sharp blade.
               </li>
               <li>
                  Handle (Tsuka): The handle was typically made from wood, often
                  wrapped in ray skin (same) and then tightly covered with silk
                  or cotton cord (Ito). The handle fittings, such as the guard
                  (Tsuba), were often made of iron or other metals, sometimes
                  ornately decorated.
               </li>
            </ul>
         </div>
         <div className="md:bg-myBlue-200 rounded-3xl flex flex-col md:flex-row gap-x-7">
            <img
               className="lg:w-96 md:w-1/3 sm:w-1/2 mx-auto rounded-3xl"
               src="/images/page4/2.avif"
               alt="size4"
            />
            <div className="mt-5 flex flex-col justify-center">
               <span className="text-myBrown-100 text-2xl font-bold">
                  Size:
               </span>
               <ul className="list-disc p-5 md:text-myWhite-100 text-myBrown-200 flex flex-col ml-5 gap-y-5">
                  <li>
                     Blade Length: The blade of a Tantō is usually less than 30
                     centimeters (about 12 inches), with some variations
                     depending on the specific style and purpose. The overall
                     length, including the handle, typically ranges between 30
                     to 40 centimeters (about 12 to 16 inches).
                  </li>
                  <li>
                     Thickness: Tantō blades are rel spanatively thick, making
                     them sturdy and capable of withstanding strong impact
                     despite their small size.
                  </li>
               </ul>
            </div>
         </div>
         <div className="p-3 xs:p-5 md:p-0 bg-myBlue-200 md:bg-myBlue-20 rounded-3xl text-myWhite-100 md:text-myBrown-200">
            <span className="text-myBrown-100 text-2xl indent-0 font-bold">
               History:
            </span>
            <ul className="list-disc p-5 flex flex-col ml-5 gap-y-5">
               <li>
                  Origins: The Tantō dates back to the Heian period (794-1185)
                  in Japan, but it became more widespread during the Kamakura
                  period (1185-1333). It was developed as a weapon for close
                  combat and became an essential part of the Samurai&apos;s
                  arsenal.
               </li>
               <li>
                  Use in Different Periods:
                  <ul className="list-disc p-5">
                     <li>
                        Kamakura Period: During this time, the Tantō was often
                        used by Samurai in close-quarters combat. The blade was
                        designed for stabbing and slashing, making it effective
                        in hand-to-hand combat.
                     </li>
                     <li>
                        Muromachi Period (1336-1573): The Tantō continued to
                        evolve, with many being crafted as ceremonial or
                        decorative weapons, showcasing the artisan&apos;s skill
                        through intricate designs and engravings (Horimono).
                     </li>
                     <li>
                        Edo Period (1603-1868): The Tantō&apos;s role shifted
                        more toward a status symbol and decorative piece rather
                        than a battlefield weapon, although it remained a part
                        of the Samurai&apos;s attire.
                     </li>
                  </ul>
               </li>
            </ul>
         </div>
         <div className="md:bg-myBlue-200 rounded-3xl flex flex-col md:flex-row gap-x-7">
            <img
               className="lg:w-96 md:w-1/3 sm:w-1/2 mx-auto rounded-3xl"
               src="/images/page4/1.jpg"
               alt="size4"
            />
            <div className="mt-5 flex flex-col justify-center">
               <span className="text-myBrown-100 text-2xl font-bold">
                  Usage:
               </span>
               <ul className="list-disc p-5 md:text-myWhite-100 text-myBrown-200 flex flex-col ml-5 gap-y-5">
                  <li>
                     Combat: The Tantō was used primarily as a stabbing weapon
                     in close combat. It was effective in tight spaces where
                     longer swords like the Katana would be cumbersome.
                  </li>
                  <li>
                     Ritualistic Use: In addition to its combat role, the Tantō
                     was also used in ritual suicide (Seppuku) by Samurai. The
                     blade&apos;s small size made it suitable for the precise
                     and controlled actions required in this ritual.
                  </li>
                  <li>
                     Status Symbol: As time passed, the Tantō became a symbol of
                     status and craftsmanship, with many blades being highly
                     decorated and presented as gifts to high-ranking
                     individuals.
                  </li>
               </ul>
            </div>
         </div>
         <div className="p-3 xs:p-5 md:p-0 bg-myBlue-200 md:bg-myBlue-20 rounded-3xl text-myWhite-100 md:text-myBrown-200">
            <span className="text-myBrown-100 text-2xl indent-0 font-bold">
               Material:
            </span>
            <p className="list-disc p-5 flex flex-col ml-5 gap-y-5">
               The Tantō is not just a weapon but also a symbol of the
               craftsmanship, culture, and history of the Samurai class in
               Japan. Its design reflects the needs of both combat and ritual,
               making it a versatile and iconic piece of Japanese history.
            </p>
         </div>
      </div>
   );
}

export default Page4;
