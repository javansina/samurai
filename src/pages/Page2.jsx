function Page2() {
   return (
      <>
         <div className="flex lg:flex-row flex-col items-center py-5">
            <p className="leading-9 indent-5 lg:w-1/2 p-5 md:pt-0 text-myBlue-300 font-medium">
               Katana (刀) is a traditional Japanese sword known for its
               distinctive curved, single-edged blade, which was used primarily
               by Samurai warriors. It is one of the most iconic and revered
               weapons in Japanese history.
            </p>
            <img
               className="w-[700px] h-60 rounded-3xl"
               src="/images/katana-8635755_1280 (1).webp"
               alt=""
            />
         </div>
         <div className="flex flex-col text-xl gap-y-14">
            <div className="p-3 xs:p-5 md:p-0 bg-myBlue-200 md:bg-myBlue-20 rounded-3xl text-myWhite-100 md:text-myBrown-200">
               <span className="text-myBrown-100 text-2xl indent-0 font-bold">
                  Material:
               </span>
               <ul className="list-disc p-5 flex flex-col ml-5 gap-y-5">
                  <li>
                     blade: Traditionally made from high-carbon steel using a
                     process called &quot;Tamahagane.&quot; The steel is
                     repeatedly folded and forged to create a strong, sharp
                     blade with a distinct grain pattern known as
                     &quot;Hamon.&quot;
                  </li>
                  <li>
                     Handle (Tsuka): Typically made from wood, wrapped in ray
                     skin (same), and then tightly covered with silk or cotton
                     cord (Ito). The handle fittings, such as the guard (Tsuba),
                     are often made from iron, brass, or other metals, sometimes
                     intricately decorated.
                  </li>
               </ul>
            </div>
            <div className="md:bg-myBlue-200 rounded-3xl flex flex-col md:flex-row gap-x-7">
               <img
                  className="lg:w-96 md:w-1/3 xs:w-1/2 mx-auto rounded-3xl"
                  src="/images/16091972815266.webp"
                  alt=""
               />
               <div className="mt-5 flex flex-col justify-center">
                  <span className="text-myBrown-100 text-2xl font-bold">
                     Specifications:
                  </span>
                  <ul className="list-disc p-5 md:text-myWhite-100 text-myBrown-200 flex flex-col ml-5 gap-y-5">
                     <li>
                        Blade Length: Typically ranges from 60 to 80 centimeters
                        (about 24 to 31 inches). The Katana is known for its
                        long, curved blade with a single sharp edge.
                     </li>
                     <li>
                        curvature: The blade has a distinct curvature that
                        allows for swift, powerful cuts.
                     </li>
                     <li>
                        Handle Length: The handle (Tsuka) is usually around 25
                        to 30 centimeters (10 to 12 inches) long, allowing a
                        two-handed grip.
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
                     combat: The Katana was primarily used by Samurai warriors
                     in battle. Its design allows for quick drawing and cutting
                     in a single motion, known as &quot;Iaijutsu.&quot;
                  </li>
                  <li>
                     Ceremonial Use: Beyond combat, the Katana was also used in
                     various ceremonial contexts, including ritual suicides
                     (Seppuku) and as part of formal attire.
                  </li>
                  <li>
                     symbolism: The Katana is considered the soul of the
                     Samurai, embodying their values of honor, duty, and mastery
                     of martial arts.
                  </li>
               </ul>
            </div>
            <div className="md:bg-myBlue-200 rounded-3xl flex flex-col md:flex-row gap-x-7">
               <img
                  className="lg:w-1/2 md:w-1/3 xs:w-1/2 sm:h-96 mx-auto rounded-3xl"
                  src="/images/history.jpg"
                  alt=""
               />
               <div className="mt-5 flex flex-col justify-center">
                  <span className="text-myBrown-100 text-2xl font-bold">
                     History:
                  </span>
                  <ul className="list-disc p-5 md:text-myWhite-100 text-myBrown-200 flex flex-col ml-5 gap-y-5">
                     <li>
                        origins: The Katana emerged during the Kamakura period
                        (1185-1333) in Japan. It was developed to suit the needs
                        of Samurai warriors, particularly for use in battle.
                     </li>
                     <li>
                        evolution: Over time, the Katana evolved to become a
                        symbol of the Samurai class. During the Muromachi period
                        (1336-1573), the design of the Katana became more
                        refined, emphasizing balance and cutting efficiency.
                     </li>
                     {/* <li>
                        Edo Period (1603-1868): The Katana became more than just
                        a weapon; it was a symbol of the Samurai&apos;s status
                        and honor. It was often passed down through generations
                        as a family heirloom.
                     </li> */}
                  </ul>
               </div>
            </div>

            <div className="p-3 xs:p-5 md:p-0 bg-myBlue-200 md:bg-myBlue-20 rounded-3xl text-myWhite-100 md:text-myBrown-200">
               <span className="text-myBrown-100 text-2xl indent-0 font-bold">
                  Size:
               </span>
               <ul className="list-disc p-5 flex flex-col ml-5  gap-y-5">
                  <li>Blade Length: 60 to 80 centimeters (24 to 31 inches).</li>
                  <li>
                     Overall Length: Including the handle, the Katana typically
                     measures between 85 to 110 centimeters (33 to 43 inches).
                  </li>
                  <li>
                     weight: The Katana generally weighs between 1 to 1.5
                     kilograms (2.2 to 3.3 pounds), making it a balanced weapon
                     that is both powerful and agile.
                  </li>
               </ul>
            </div>
         </div>
      </>
   );
}

export default Page2;
