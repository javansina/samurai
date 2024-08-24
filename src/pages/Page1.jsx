function Page1() {
   return (
      <>
         <div className="text-myBlue-300 flex flex-col text-xl p-5 indent-5 gap-y-10">
            <div className="mt-10">
               <h1 className="text-myBrown-100 text-2xl indent-0 mb-5 font-bold">
                  Introduction to Japanese Swords
               </h1>
               <p className="">
                  Japanese swords, known for their exceptional craftsmanship and
                  historical significance, are a central part of Japan’s rich
                  cultural heritage. These weapons are not merely tools of war
                  but are also seen as works of art and symbols of the Samurai’s
                  code of honor, Bushido. The three primary types of traditional
                  Japanese swords—Katana, Wakizashi, and Tantō—each have their
                  unique characteristics, history, and uses, reflecting the
                  intricate artistry and martial traditions of Japan.
               </p>
            </div>
            <div className="flex  flex-col items-center py-5">
               <div className="flex md:flex-row flex-col-reverse">
                  <div>
                     <span className="text-myBrown-100 text-2xl indent-0 mt-5 font-bold">
                        Katana:
                     </span>
                     <span className="w-full block leading-9 indent-5 p-5 md:pt-0 text-myBlue-300 font-medium">
                        The Samurai&apos;s Soul The Katana is perhaps the most
                        famous of all Japanese swords, recognized worldwide for
                        its distinctive curved blade and single sharp edge.
                        Typically ranging from 60 to 80 centimeters in length,
                        the Katana was the Samurai&apos;s primary weapon and a
                        symbol of their status and honor.
                     </span>
                  </div>
                  <img
                     className="sm:w-1/2 mb-5 md:h-72 mx-auto rounded-3xl"
                     src="/images/index/katana.jpg"
                     alt=""
                  />
               </div>
               <p className="">
                  Crafted from high-carbon steel using the Tamahagane process,
                  the Katana is known for its strength, sharpness, and the
                  beautiful grain patterns (Hamon) that appear on the blade. Its
                  design allows for quick, powerful cuts, making it ideal for
                  both battle and ceremonial purposes.
               </p>
            </div>
            <div className="flex  flex-col items-center py-5">
               <div className="flex md:flex-row flex-col">
                  <img
                     className="sm:w-1/2 mb-5 md:h-72 mx-auto rounded-3xl"
                     src="/images/index/wakizashi.webp"
                     alt=""
                  />
                  <div>
                     <span className="text-myBrown-100 text-2xl indent-0 mt-5 font-bold">
                        Wakizashi:
                     </span>
                     <p className="w-full block leading-9 indent-5 p-5 md:pt-0 text-myBlue-300 font-medium">
                        The Companion Sword The Wakizashi is a shorter sword,
                        usually measuring between 30 to 60 centimeters in
                        length. It was traditionally worn alongside the Katana,
                        forming a pair known as Daisho, which means
                        &quot;big-little.&quot; While the Katana was often left
                        outside or set aside in certain situations, the
                        Wakizashi was kept close at hand, even indoors.
                     </p>
                  </div>
               </div>
               <p className="">
                  This sword was used for close-quarters combat, as a backup
                  weapon, and in ritual suicide (Seppuku). The
                  Wakizashi&apos;s versatility made it an indispensable part
                  of the Samurai&apos;s armory.
               </p>
            </div>
            <div className="flex  flex-col items-center py-5">
               <div className="flex md:flex-row flex-col-reverse">
                  <div>
                     <span className="text-myBrown-100 text-2xl indent-0 mt-5 font-bold">
                     Tantō:
                     </span>
                     <span className="w-full block leading-9 indent-5 p-5 md:pt-0 text-myBlue-300 font-medium">
                     The Dagger of the Samurai The Tantō is a small, single-edged
               dagger with a blade typically less than 30 centimeters long.
               Unlike the longer Katana and Wakizashi, the Tantō was used for
               stabbing rather than cutting. It was carried as a self-defense
               weapon and was also employed in ritual practices like Seppuku.
                     </span>
                  </div>
                  <img
                     className="sm:w-1/2 mb-5 md:h-72 mx-auto rounded-3xl"
                     src="/images/index/Tantō.jpg"
                     alt=""
                  />
               </div>
               <p className="">
               The Tantō&apos;s compact size made it easy to carry and conceal,
               and it was often elaborately decorated, reflecting the
               owner&apos;s status. Despite its small size, the Tantō was a
               deadly weapon in the hands of a skilled Samurai.
               </p>
            </div>
            
            <p className="mt-5">
               Cultural and Historical Significance Japanese swords are more
               than just weapons; they are embodiments of the Japanese spirit
               and artistry. Each sword type—Katana, Wakizashi, and Tantō—served
               not only practical purposes in battle but also carried deep
               cultural and symbolic meanings. These swords were often passed
               down through generations, becoming family heirlooms and symbols
               of lineage and honor. Today, Japanese swords continue to be
               revered not only in Japan but around the world, admired for their
               beauty, craftsmanship, and the rich history they represent.
            </p>
         </div>
      </>
   );
}

export default Page1;
