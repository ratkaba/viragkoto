import React from 'react';

function App() {
  return (
    <>
      <nav className="bg-white/80 dark:bg-stone-900/80 backdrop-blur-md fixed top-0 w-full z-50 flex justify-between items-center px-8 md:px-20 py-4 max-w-full mx-auto">
        <div className="text-2xl font-serif italic text-emerald-900 dark:text-emerald-200">The Botanical Archivist</div>
        <div className="hidden md:flex items-center gap-8">
          <a className="text-stone-600 dark:text-stone-400 hover:text-emerald-700 transition-colors" href="#">Home</a>
          <a className="text-stone-600 dark:text-stone-400 hover:text-emerald-700 transition-colors" href="#">Shop</a>
          <a className="text-emerald-800 dark:text-emerald-400 font-medium border-b border-emerald-800/30" href="#">Services</a>
          <a className="text-stone-600 dark:text-stone-400 hover:text-emerald-700 transition-colors" href="#">Contact</a>
        </div>
        <div className="flex items-center gap-4">
          <button className="hover:opacity-80 transition-all text-emerald-800 dark:text-emerald-400">
            <span className="material-symbols-outlined" data-icon="shopping_cart">shopping_cart</span>
          </button>
          <button className="md:hidden text-emerald-800">
            <span className="material-symbols-outlined" data-icon="menu">menu</span>
          </button>
        </div>
      </nav>

      <main className="flex-grow pt-32 pb-20 px-8 md:px-20 max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <header className="mb-24 text-center max-w-3xl mx-auto">
          <span className="text-primary font-label text-sm tracking-widest mb-4 block">OUR EXPERTISE</span>
          <h1 className="text-5xl md:text-6xl text-on-surface mb-8 leading-tight">Művészi Virágkötészet & Dekoráció</h1>
          <p className="text-lg text-on-surface-variant font-body leading-relaxed">
            Minden alkotásunk egy történetet mesél el. A vadvirágok szabadságát ötvözzük a klasszikus eleganciával, hogy felejthetetlen vizuális élményt teremtsünk az Ön legfontosabb pillanataihoz.
          </p>
        </header>

        {/* Services Content - Asymmetric Layout */}
        <div className="space-y-40">
          {/* Wedding Floristry */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7 relative group">
              <div className="absolute -inset-4 bg-primary-fixed-dim/20 rounded-xl -z-10 transform translate-x-4 translate-y-4"></div>
              <img
                alt="Wedding Flowers"
                className="w-full aspect-[4/5] object-cover rounded-xl shadow-sm transition-transform duration-700 group-hover:scale-[1.02]"
                data-alt="Exquisite wedding floral arrangement with soft pink peonies, white roses, and trailing eucalyptus on an antique wooden table in soft morning light"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvfzaw6QRkWwbXaKOKqh-Wxx2sg--vOvtam_ZSYSdZTpefhi-cn4kRy7Mf_f_IGMWjgJj8_v0NAXBsXhCYCiUuwJYLdVK9zH0lSmUlolcXTt46DQD7eDpeB-am3izIbwObbri3s9faO0pb_r3bugnho2ezC0Q5uWfCCBTvRN3hbau0LCiL3s7Fy_Sr5BiemlEFJtUej3BwcNUbR0ump5eHMdLhJVAV9SxiyHTSsxTVLHWYDt0wHC78xy3v3jOtX8LRXIVDDJ1-Ztw"
              />
            </div>
            <div className="md:col-span-5 md:pl-12">
              <h2 className="text-4xl text-on-surface mb-6">Esküvői Virágkötészet</h2>
              <p className="text-on-surface-variant mb-8 leading-relaxed font-body">
                A nagy nap minden részlete számít. A menyasszonyi csokortól a templomi díszítésen át a teljes asztaldekorációig, segítünk megvalósítani az Ön egyedi elképzeléseit, legyen szó rusztikus romantikáról vagy modern minimalizmusról.
              </p>
              <ul className="space-y-4 mb-10 text-on-surface-variant font-body">
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-sm" data-icon="check_circle">check_circle</span> Személyre szabott konzultáció</li>
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-sm" data-icon="check_circle">check_circle</span> Helyszíni installáció</li>
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-sm" data-icon="check_circle">check_circle</span> Szezonális, prémium virágválaszték</li>
              </ul>
              <button className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-8 py-4 rounded-full font-label font-semibold shadow-md hover:opacity-90 transition-all">
                Kérjen Ajánlatot
              </button>
            </div>
          </section>

          {/* Event Decoration */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5 md:order-1 order-2 md:pr-12">
              <h2 className="text-4xl text-on-surface mb-6">Rendezvény Dekoráció</h2>
              <p className="text-on-surface-variant mb-8 leading-relaxed font-body">
                Vállalati események, gálavacsorák vagy családi összejövetelek – a virágok élettel töltik meg a teret. Professzionális csapatunk gondoskodik róla, hogy a dekoráció tökéletesen illeszkedjen az esemény hangulatához és brandjéhez.
              </p>
              <div className="bg-surface-container-low p-8 rounded-xl mb-8">
                <p className="italic text-on-secondary-container font-serif">"A Botanical Archivist csapata teljesen átformálta a bemutatótermünket. A növényi installációk nem csak szépek voltak, de valódi atmoszférát teremtettek."</p>
                <p className="mt-4 text-sm font-label text-on-surface-variant">— Kovács Adél, Art Director</p>
              </div>
              <button className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-8 py-4 rounded-full font-label font-semibold shadow-md hover:opacity-90 transition-all">
                Kérjen Ajánlatot
              </button>
            </div>
            <div className="md:col-span-7 md:order-2 order-1 relative group">
              <div className="absolute -inset-4 bg-tertiary-fixed/30 rounded-xl -z-10 transform -translate-x-4 translate-y-4"></div>
              <img
                alt="Event Decor"
                className="w-full aspect-[16/10] object-cover rounded-xl shadow-sm transition-transform duration-700 group-hover:scale-[1.02]"
                data-alt="Sophisticated indoor event space with long tables featuring towering floral centerpieces of orchids and lilies under warm ambient lighting"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8OzluR4bHLKUQLuHy2Q02g1ljCGY21HdfZ5HdPmvNV5b2HIRs4uszk6ayZVuHby1dUp3zp_zkh6zNSSqP4ogyaHkoT8I1tm1-nyzNBTRsRGbsVQXKJr-5FqwW1DGbj2sdxGx6kVX4H9Zexp4_yribfw0LBfL3zjRLMiDdaPt0PNqFsUiosJFBIEAqHeP39yFn5_QnAKLsg-9_BzlHtyaEw87wQvCQNfXV-jg4OkS8BXKRX2Nl6XRSQIDI_Rmr3KlQmYTHxd2vF-k"
              />
            </div>
          </section>

          {/* Custom Orders */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7 relative group">
              <div className="absolute -inset-4 bg-secondary-fixed/20 rounded-xl -z-10 transform translate-x-4 -translate-y-4"></div>
              <img
                alt="Custom Bouquet"
                className="w-full aspect-square object-cover rounded-xl shadow-sm transition-transform duration-700 group-hover:scale-[1.02]"
                data-alt="Close-up of a hand-tied artisan bouquet with wild sunflowers, blue delphiniums, and dried grasses wrapped in heavy premium paper"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuByjdx5ym5E3YnATS2BnRy28k-OPonwm4kj1wkrTL16oGQCa7fhXDxpdhiDN1k9xcwLs-FbjOtOv8GKz5AbyrRKyuTb08b3qc23bopU-oHfykXXpxz3pArzFZrC_pLSwsWWp8CP6-VpqudJBssjiQMdGF8i0Wc83n3jmxtEKw8oHHwYncvq-dc8fzMjDLjgY7gvI6PoNO1HSp8tB9ynrrOFkTRAlzOK-DzC5oYLpl82TqwdmrUb2igbFfp3KQBXRj4g3Qq8993ftY8"
              />
            </div>
            <div className="md:col-span-5 md:pl-12">
              <h2 className="text-4xl text-on-surface mb-6">Egyedi Megrendelések</h2>
              <p className="text-on-surface-variant mb-8 leading-relaxed font-body">
                Különleges alkalmakra különleges virágok járnak. Legyen szó születésnapról, évfordulóról vagy csak egy kedves gesztusról, egyedi csokrainkkal és növényi kompozícióinkkal garantáltan örömet szerez.
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                <span className="px-4 py-2 bg-surface-container-high rounded-full text-sm font-label text-on-surface-variant">Születésnap</span>
                <span className="px-4 py-2 bg-surface-container-high rounded-full text-sm font-label text-on-surface-variant">Home Decor</span>
                <span className="px-4 py-2 bg-surface-container-high rounded-full text-sm font-label text-on-surface-variant">Ajándékbox</span>
                <span className="px-4 py-2 bg-surface-container-high rounded-full text-sm font-label text-on-surface-variant">Szárított virágok</span>
              </div>
              <button className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-8 py-4 rounded-full font-label font-semibold shadow-md hover:opacity-90 transition-all">
                Kérjen Ajánlatot
              </button>
            </div>
          </section>
        </div>

        {/* Contact Section / Final CTA */}
        <div className="mt-40 bg-surface-container-low rounded-3xl p-12 md:p-24 text-center">
          <h3 className="text-4xl mb-6">Tervezzük meg együtt</h3>
          <p className="text-on-surface-variant max-w-2xl mx-auto mb-10 leading-relaxed">
            Kérdése van vagy konkrét elképzeléssel rendelkezik? Szívesen segítünk a tervezésben és a megvalósításban egyaránt. Keressen minket bizalommal!
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <div className="flex items-center gap-3 text-primary font-semibold">
              <span className="material-symbols-outlined" data-icon="call">call</span>
              +36 30 123 4567
            </div>
            <div className="hidden md:block w-1.5 h-1.5 bg-outline-variant rounded-full"></div>
            <div className="flex items-center gap-3 text-primary font-semibold">
              <span className="material-symbols-outlined" data-icon="mail">mail</span>
              hello@botanicalarchivist.hu
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-stone-100 dark:bg-stone-950 w-full mt-auto py-16 px-8 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start max-w-7xl mx-auto">
          <div>
            <div className="font-serif text-xl text-emerald-900 dark:text-emerald-200 mb-4">The Botanical Archivist</div>
            <p className="text-stone-700 dark:text-stone-300 font-sans text-sm leading-relaxed">
              © 2024 The Botanical Archivist. Cultivating beauty in every bloom. All rights reserved.
            </p>
          </div>
          <div>
            <h4 className="font-label font-bold text-emerald-800 dark:text-emerald-400 mb-6 tracking-wider">LINKS</h4>
            <div className="flex flex-col gap-4">
              <a className="text-stone-500 hover:text-emerald-600 transition-colors" href="#">Contact</a>
              <a className="text-stone-500 hover:text-emerald-600 transition-colors" href="#">Instagram</a>
              <a className="text-stone-500 hover:text-emerald-600 transition-colors" href="#">Pinterest</a>
            </div>
          </div>
          <div>
            <h4 className="font-label font-bold text-emerald-800 dark:text-emerald-400 mb-6 tracking-wider">NEWSLETTER</h4>
            <form className="flex flex-col gap-4">
              <input className="bg-surface-container-high border-none rounded-lg px-4 py-3 focus:ring-1 focus:ring-primary" placeholder="Your email address" type="email" />
              <button className="bg-primary text-on-primary py-3 rounded-lg font-label font-medium hover:opacity-90 transition-all">Signup</button>
            </form>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
