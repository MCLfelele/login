"use client"
import { Fragment, useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase"


const users = [
  { id: "user1_id", email: "agbejoye.ayanfe@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/PreSchool/Agbejoye-Ayanfe.html" },
  { id: "user2_id", email: "akinpelu.tobiloba@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/PreSchool/Akinpelu-Tobiloba.html" },
  { id: "user3_id", email: "akinsolu.david@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/PreSchool/Akinsolu-David.html" },
  { id: "user4_id", email: "animashaun.fiirekunolami@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/PreSchool/Animashaun-Fiirekunolami.html" },
  { id: "user5_id", email: "asake.mololuwa@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/PreSchool/Asake-Mololuwa.html" },
  { id: "user6_id", email: "boyejo.daniel@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/PreSchool/Boyejo-Daniel.html" },
  { id: "user7_id", email: "ayoola.jason@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/PreSchool/Ayoola-Jason.html" },
  { id: "user8_id", email: "kayode.tantoluwa@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/PreSchool/Kayode-Tantoluwa.html" },
  { id: "user9_id", email: "ede.ryan@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/PreSchool/Ede-Ryan.html" },
  { id: "user10_id", email: "gentry.anfelaoluwa@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/PreSchool/Gentry-Anfelaoluwa.html" },
  { id: "user11_id", email: "nwaze.bruyson@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/PreSchool/Nwaze-Bruyson.html" },
  { id: "user12_id", email: "ogundairo.omotade@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/PreSchool/Ogundairo-Omotade.html" },
  { id: "user13_id", email: "olatunji.ojima@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/PreSchool/Olatunji-Ojima.html" },
  { id: "user14_id", email: "oladokun.divine@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/PreSchool/Oladokun-Divine.html" },
  { id: "user15_id", email: "olagunju.pius@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/PreSchool/Olagunju-Pius.html" },
  { id: "user16_id", email: "olapade.thelight@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/PreSchool/Olapade-Thelight.html" },
  { id: "user17_id", email: "popoola.obaloluwa@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/PreSchool/Popoola-Obaloluwa.html" },
  { id: "user18_id", email: "shenaike.boluwatife@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/PreSchool/Shenaike-Boluwatife.html" },
  { id: "user19_id", email: "yinka-sobo.ogooluwa@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/PreSchool/Yinka-Sobo-Ogooluwa.html" },
  { id: "user20_id", email: "adeyemo.matthew@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/PreSchool/Adeyemo-Matthew.html" },
  { id: "user21_id", email: "bello.tiwadola@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/PreSchool/Bello-Tiwadola.html" },
  { id: "user22_id", email: "enisemo.tolorunnimi@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/PreSchool/Enisemo-Tolorunnimi.html" },
  { id: "user23_id", email: "fakayode.adesewa@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/PreSchool/Fakayode-Adesewa.html" },
  { id: "user24_id", email: "mogaji.damilola@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/PreSchool/Mogaji-Damilola.html" },
  { id: "user25_id", email: "odusanya.jemima@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/PreSchool/Odusanya-Jemima.html" },
  { id: "user26_id", email: "okunola.iremide@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/PreSchool/Okunola-Iremide.htmlhttps://portal-six-xi.vercel.app/PreSchool/Olatunde-Blossom.html" },
  { id: "user27_id", email: "olatunde.blossom@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/PreSchool/Olatunde-Blossom.html" },
  { id: "user28_id", email: "olayiwola.shindara@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/PreSchool/Olayiwola-Shindara.html" },
  { id: "user29_id", email: "oyenusi.ifeoluwa@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/PreSchool/Oyenusi-Ifeoluwa.html" },


  { id: "user30_id", email: "adefiranye.mofetoluwa@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/GradeOne/Adefiranye-Mofetoluwa.html" },
  { id: "user31_id", email: "akinlabi.akindesire@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/GradeOne/Akinlabi-Akindesire.html" },
  { id: "user32_id", email: "olufidipe.obaloluwa@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/GradeOne/Olufidipe-Obaloluwa.html" },
  { id: "user33_id", email: "ogunwomoju.kingjason@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/GradeOne/Ogunwomoju-King-Jason.html" },
  { id: "user34_id", email: "okikiola.koleade@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/GradeOne/Okikiola-Koleade.html" },
  { id: "user35_id", email: "shittu.jomiloju@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/GradeOne/Shittu-Jomiloju.html" },
  { id: "user36_id", email: "oladipupo.firewamiri@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/GradeOne/Oladipupo-Firewamiri.html" },
  { id: "user37_id", email: "elue.andrea@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/GradeOne/Elue-Andrea.html" },
  { id: "user38_id", email: "fasola.desire@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/GradeOne/Fasola-Desire.html" },
  { id: "user39_id", email: "olaku.damilola@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/GradeOne/Olaku-Damilola.html"},
  { id: "user40_id", email: "akintola.phoebe@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/GradeOne/Akintola-Phoebe.html" },
  { id: "user41_id", email: "boyejo.racheal@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/GradeOne/Boyejo-Racheal.html" },
  { id: "user42_id", email: "motoro.zara@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/GradeOne/Motoro-Zara.html" },
  { id: "user43_id", email: "akande.ifeoluwa@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/GradeOne/Akande-Ifeoluwa.html" },
  { id: "user44_id", email: "olayiwola.dunmininu@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/GradeOne/Olayiwola-Dunmininu.html" },
  { id: "user45_id", email: "olajide.zahra@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/GradeOne/Olajide-Zahra.html" },
  { id: "user46_id", email: "alake.adunola@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/GradeOne/Alake-Adunola.html" },
  { id: "user47_id", email: "olayiwola.zeenat@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/GradeOne/Olayiwola-Zeenat.html" },
  { id: "user48_id", email: "atunwa.amaris@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/GradeOne/Atunwa-Amaris.html" },
  { id: "user49_id", email: "awotade.cedar@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/GradeOne/Awotade-Cedar.html" },


  { id: "user50_id", email: "adeniyi.derek@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/GradeTwo/Adeniyi-Derek.html" },
  { id: "user51_id", email: "amiola.shalom@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/GradeTwo/Amiola-Shalom.html" },
  { id: "user52_id", email: "animashaun.valentino@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/GradeTwo/Animashaun-Valentino.html" },
  { id: "user53_id", email: "adeniba.temiloluwa@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/GradeTwo/Adeniba-Temiloluwa.html" },
  { id: "user54_id", email: "akande.wisdom@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/GradeTwo/Akande-Wisdom.html" },
  { id: "user55_id", email: "odebunmi.temisire@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/GradeTwo/Odebunmi-Temisire.html" },
  { id: "user56_id", email: "oyeniran.olumide@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/GradeTwo/Oyeniran-Olumide.html" },
  { id: "user57_id", email: "balogun.daniel@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/GradeTwo/Balogun-Daniel.html" },
  { id: "user58_id", email: "oladejo.obafemi@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/GradeTwo/Oladejo-Obafemi.html" },
  { id: "user59_id", email: "ojo.david@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/GradeTwo/Ojo-David.html" },
  { id: "user60id", email: "ojofeyitimi.pelumi@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/GradeTwo/Ojofeyitimi-Pelumi.html" },
  { id: "user61_id", email: "oni.dunmininu@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/GradeTwo/Oni-Dunmininu.html" },
  { id: "user62_id", email: "onoja.emperor@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/GradeTwo/Onoja-Emperor.html" },
  { id: "user63_id", email: "ayetuoma.gaius@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/GradeTwo/Ayetuoma-Gaius.html" },
  { id: "user64_id", email: "asake.mofinyinfoluwa@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/GradeTwo/Asake-Mofinyinfoluwa.html" },
  { id: "user65_id", email: "ibiyemi.roheem@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/GradeTwo/Ibiyemi-Roheem.html" },
  { id: "user66_id", email: "gentry.taraoluwa@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/GradeTwo/Gentry-Taraoluwa.html" },
  { id: "user67_id", email: "akinbogun.morayo@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/GradeTwo/Akinbogun-Morayo.html" },
  { id: "user68_id", email: "bello.oluwalonimi@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/GradeTwo/Bello-Oluwalonimi.html" },
  { id: "user69_id", email: "owolabi.anjola@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/GradeTwo/Owolabi-Anjola.html" },
  { id: "user70_id", email: " yinka-sobo.tumilara@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/GradeTwo/Yinka-Sobo-Tumilara.html" },
  { id: "user71_id", email: "olapade.elizabeth@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/GradeTwo/Olapade-Elizabeth.html" },
  { id: "user72_id", email: "okunola.ewatomi@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/GradeTwo/Okunola-Ewatomi.html" },
  { id: "user73_id", email: "olagunju.amira@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/GradeTwo/Olagunju-Amira.html" },
  { id: "user74_id", email: "adeniyi.todimu@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/GradeTwo/Adeniyi-Todimu.html" },
  { id: "user75_id", email: "folarin.sunmisola@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/GradeTwo/Folarin-Sunmisola.html" },
  { id: "user76_id", email: "popoola.oreoluwa@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/GradeTwo/Popoola-Oreoluwa.html" },
  { id: "user77_id", email: "olatunji.peace@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/GradeTwo/Olatunji-Peace.html" },


  { id: "user78_id", email: "adaramaja.akinbiyi@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/GradeThree/Adaramaja-Akinbiyi.html" },
  { id: "user79_id", email: "aikhionbare.obaloluwa@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/GradeThree/Aikhionbare-Obaloluwa.html" },
  { id: "user80_id", email: "akinpelu.oluwatosin@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/GradeThree/Akinpelu-Oluwatosin.html" },
  { id: "user81_id", email: "fakayode.adeoluwa@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/GradeThree/Fakayode-Adeoluwa.html" },
  { id: "user82_id", email: "ojetola.fikayo@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/GradeThree/Ojetola-Fikayo.html" },
  { id: "user83_id", email: "olayemi.aanuoluwaposimi@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/GradeThree/Olayemi-Aanuoluwaposimi.html" },
  { id: "user84_id", email: "oshunkoya.enoch@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/GradeThree/Oshunkoya-Oba-Enoch.html" },
  { id: "user85_id", email: "owolabi.christopher@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/GradeThree/Owolabi-Christopher.html" },
  { id: "user86_id", email: "abiola.christianah@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/GradeThree/Abiola-Christianah.html" },
  { id: "user87_id", email: "aderinto.aanuoluwaposimi@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/GradeThree/Aderinto-Aanuoluwaposimi.html" },
  { id: "user88_id", email: "adetola.toluwanimi@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/GradeThree/Adetola-Toluwanimi.html" },
  { id: "user89_id", email: "akinsolu.grace@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/GradeThree/Akinsolu-Grace.html" },
  { id: "user90_id", email: "ariyo.diekolola@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/GradeThree/Ariyo-Diekolola.html" },
  { id: "user91_id", email: "atunwa.ayanfe@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/GradeThree/Atunwa-Ayanfe.html" },
  { id: "user92_id", email: "atunwa.ayanfe@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/GradeTwo/Olatunji-Peace.html" },
  { id: "user93_id", email: "gentry.anjolaoluwa@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/GradeThree/Gentry-Anjolaoluwa.html" },
  { id: "user94_id", email: "obasa.omolola@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/GradeThree/Obasa-Omolola.html" },


  { id: "user95_id", email: "adegoke.david@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/GradeFour/Adegoke-David.html" },
  { id: "user96_id", email: "adeniba.tofunmi@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/GradeFour/Adeniba-Tofunmi.html" },
  { id: "user97_id", email: "adeosun.phillip@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/GradeFour/Adeosun-Phillip.html" },
  { id: "user98_id", email: "adeyinka.dodanim@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/GradeFour/Adeyinka-Dodanim.html" },
  { id: "user99_id", email: "afolabi.abdulfatah@mcl.com ", profileUrl: "https://portal-six-xi.vercel.app/GradeFour/Afolabi-Abdulfatah.html" },
  { id: "user100_id", email: "fashola.tobiloba@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/GradeFour/Fashola-Tobiloba.html" },
  { id: "user101_id", email: "itoto.darasimi@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/GradeFour/Itoto-Darasimi.html" },
  { id: "user102_id", email: "lawal.hassan@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/GradeFour/Lawal-Hassan.html" },
  { id: "user103_id", email: "oniyinde.adeleke@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/GradeFour/Oniyinde-Adeleke.html" },
  { id: "user104_id", email: "balogun.lilian@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/GradeFour/Balogun-Lilian.html" },
  { id: "user105_id", email: "boyejo.michelle@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/GradeFour/Boyejo-Michelle.html" },
  { id: "user106_id", email: "folarin.subomi@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/GradeFour/Folarin-Subomi.html" },
  { id: "user107_id", email: "ibiyemi.roishat@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/GradeFour/Ibiyemi-Roishat.html" },
  { id: "user108_id", email: "igbakin.daniella@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/GradeFour/Igbakin-Daniella.html" },
  { id: "user109_id", email: "olagunju.pemisire@mcl.com ", profileUrl: "https://portal-six-xi.vercel.app/GradeFour/Olagunju-Pemisire.html" },
  { id: "user110_id", email: "olatunji.joy@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/GradeFour/Olatunji-Joy.html" },
  { id: "user111_id", email: "oluwaseun.elizabeth@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/GradeFour/Oluwaseun-Elizabeth.html" },
  { id: "user112_id", email: "owolabi.eniola@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/GradeFour/Owolabi-Eniola.html" },
  { id: "user113_id", email: "oyenusi.inioluwa@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/GradeFour/Oyenusi-Inioluwa.html" },
  { id: "user114_id", email: "shittu.tiwaloluwa@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/GradeFour/Shittu-Tiwaloluwa.html" },
  { id: "user48_id", email: "atunwa.amaris@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/GradeOne/Atunwa-Amaris.html" },
  { id: "user49_id", email: "awotade.cedar@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/GradeOne/Awotade-Cedar.html" },


  { id: "user115_id", email: "adefiranye.mofiyin@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/GradeFive/Adefiranye-Mofiyin.html" },
  { id: "user116_id", email: "adegbite.joel@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/GradeFive/Adegbite-Joel.html" },
  { id: "user117_id", email: "adeniji.pamilerin@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/GradeFive/Adeniji-Pamilerin.html" },
  { id: "user118_id", email: "ariyo.yanmife@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/GradeFive/Ariyo-Yanmife.html" },
  { id: "user119_id", email: "balogun.david@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/GradeFive/Balogun-David.html" },
  { id: "user120_id", email: "fakayode.olaoluwa@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/GradeFive/Fakayode-Olaoluwa.html" },
  { id: "user121_id", email: "momoh.oluwafikayomi@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/GradeFive/Momoh-Oluwafikayomi.html" },
  { id: "user134_id", email: "odeleye.paul@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/GradeFive/Odeleye-Paul.html" },
  { id: "user122_id", email: "yinka-sobo.daniel@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/GradeFive/Yinka-Sobo-Daniel-Semilore.html" },
  { id: "user123_id", email: "adebayo.olansile@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/GradeFive/Adebayo-Mufeedah-Olansile.html" },
  { id: "user124_id", email: "aderibigbe.emmanuella@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/GradeFive/Aderibigbe-Emmanuella.html" },
  { id: "user125_id", email: "adetola.omotolani@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/GradeFive/Adetola-Omotolani.html" },
  { id: "user126_id", email: "adeyemi.fareeda@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/GradeFive/Adeyemi-Fareeda.html" },
  { id: "user127_id", email: "akintade-esan.ifechi@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/GradeFive/Akintade-Esan-Ifechi.html" },
  { id: "user128_id", email: "asake.morire@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/GradeFive/Asake-Morire.html" },
  { id: "user129_id", email: "duruh.benedicta@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/GradeFive/Duruh-Chizaramekpere-Benedicta.html" },
  { id: "user130_id", email: "ogundairo.omotoke@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/GradeFive/Ogundairo-Omotoke.html" },
  { id: "user131_id", email: "ojetola.oluwasemilore@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/GradeFive/Ojetola-Oluwasemilore.html" },
  { id: "user132_id", email: "onoja.empress@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/GradeFive/Onoja-Empress.html" },
  { id: "user133_id", email: "owolabi.christabella@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/GradeFive/Owolabi-Christabella.html" },
  
  

  { id: "user135_id", email: "emmanuella.aderibigbe@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/GradeSix/Emmanuella-Aderibigbe.html" },
  { id: "user136_id", email: "paul.odeleye@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/GradeSix/Paul-Odeleye.html" },


  { id: "user114_id", email: "tileolanimi.oluwatomiwo@mcl.com", profileUrl: "https://portal-six-xi.vercel.app/JssOne/Tileolanimi-Ogundeji-Oluwatomiwo.html" },
  
];


  
  const Signin = () => {
      let [isOpen, setIsOpen] = useState(false)
      const [email, setEmail] = useState('')
      const [password, setPassword] = useState('')
  
      
          
  
      const signin = (e: React.FormEvent) => {
          e.preventDefault();
  
          // Find the user based on the entered email
          const user = users.find((u) => u.email === email);
  
          if (!user) {
              console.log("User not found.");
              return;
          }
  
  
          signInWithEmailAndPassword(auth, email, password)
              .then((userCredential) => {
  
                  const userId = user.id; // Retrieve the user's unique ID
                  console.log("User ID:", userId);
  
                  console.log(userCredential)
              }).catch((error) => {
                  console.log(error)
              })
              window.location.href = user.profileUrl;
      }


  return (
    <body className="antialiased bg-gray-200 text-gray-900 font-sans">
    <div className="flex items-center h-screen w-full">
      <div className="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
      <span className="block w-full text-xl uppercase font-bold mb-4">Login</span>      
        <form onSubmit ={signin} className="mb-4" action="/" method="post">
          <div className="mb-4 md:w-full">
            <label htmlFor="email" className="block text-xs mb-1">Email</label>
            <input className="w-full border rounded p-2 outline-none focus:shadow-outline" type="email" value={email}  onChange={(e) => setEmail(e.target.value)} name="email" id="email" placeholder="Username"></input>
          </div>
          <div className="mb-6 md:w-full">
            <label htmlFor="password" className="block text-xs mb-1">Password</label>
            <input className="w-full border rounded p-2 outline-none focus:shadow-outline" type="password" value={password}  onChange={(e) => setPassword(e.target.value)} name="password" id="password" placeholder="Password"></input>
          </div>
          <button className="bg-green-500 hover:bg-green-700 text-white uppercase text-sm font-semibold px-4 py-2 rounded">Login</button>
        </form>
        <a className="text-blue-700 text-center text-sm" href="/login"></a>
    </div>
  </div>
</body>
  )
}


export default Signin


