/* ============================================
   FAVR References Data
   Neue Referenz hinzufügen: einfach neues
   Objekt in das Array einfügen.
   ============================================ */

const FAVR_REFERENCES = [
  {
    name: "Toerschen",
    location: "Tönisvorst, Germany",
    website: "https://toerschen.com/",
    websiteLabel: "toerschen.com",
    webdesign: true,
    image: "../../assets/img/ref_toerschen.png",
    imageAlt: "Toerschen Website Screenshot",
    imageModule: "Brand Slider",
    pages: [
      {
        label: "Home",
        url: "https://toerschen.com/",
        modules: ["Brand Slider", "News Slider", "Logo Wall"]
      },
      {
        label: "Brillenmarken",
        url: "https://toerschen.com/brillenmarken",
        modules: ["Brand Wall"]
      },
      {
        label: "Online Brillenanprobe",
        url: "https://www.favrspecs.com/de/optiker/in/toenisvorst/499/brillenhaus-toerschen/16410/pro/optische-brillen/",
        modules: ["Brand Portfolio", "Brand Pages", "Product Pages", "Virtual Try-On"],
        type: "page"
      }
    ]
  },
  {
    name: "Optik Leonhardt",
    location: "Bretten, Deutschland",
    website: "https://www.optik-leonhardt.de/",
    websiteLabel: "optik-leonhardt.de",
    webdesign: true,
    image: "../../assets/img/ref-leonhardt.png",
    imageAlt: "Optik Leonhardt Website Screenshot",
    imageModule: "News Slider",
    pages: [
      {
        label: "Home",
        url: "https://www.optik-leonhardt.de/",
        modules: ["Brand Slider", "News Slider", "Product Wall"]
      },
      {
        label: "Brillen",
        url: "https://www.optik-leonhardt.de/brillen/",
        modules: ["Logo Wall"]
      },
      {
        label: "Online Anprobieren",
        url: "https://www.favrspecs.com/de/optiker/in/bretten/383/optik-leonhardt/10083/pro/optische-brillen/",
        modules: ["Brand Portfolio", "Brand Pages", "Product Pages", "Virtual Try-On"],
        type: "page"
      }
    ]
  },
  {
    name: "Optik Augustin",
    location: "Essen, Deutschland",
    website: "https://optik-augustin.de/",
    websiteLabel: "optik-augustin.de",
    image: "../../assets/img/ref-augustin.png",
    imageAlt: "Optik Augustin Website Screenshot",
    imageModule: "Brand Slider",
    pages: [
      {
        label: "Home",
        url: "https://optik-augustin.de/",
        modules: ["Brand Slider", "News Slider", "Product Wall"]
      },
      {
        label: "Online Brillenanprobe",
        url: "https://www.favrspecs.com/de/optiker/in/essen/213/augustin-optik-lounge/10137/pro/optische-brillen/",
        modules: ["Brand Portfolio"],
        type: "page"
      },
      {
        label: "Marken",
        url: "https://www.favrspecs.com/de/optiker/in/essen/213/augustin-optik-lounge/10137/pro/marken/dita/105/",
        modules: ["Brand Pages", "Product Pages", "Virtual Try-On"],
        type: "page"
      }
    ]
  },
  {
    name: "Augenoptik Hensler",
    location: "Frankfurt, Deutschland",
    website: "https://www.optik-hensler.de/",
    websiteLabel: "optik-hensler.de",
    image: "../../assets/img/ref-hensler.png",
    imageAlt: "Augenoptik Hensler Website Screenshot",
    imageModule: "Brand Wall",
    pages: [
      {
        label: "Brillenmode",
        url: "https://www.optik-hensler.de/leistungen/mode",
        modules: ["Brand Slider", "Brand Wall", "Product Wall Optical", "Product Wall Sun", "News Slider", "Logo Wall"]
      }
    ]
  },
  {
    name: "Amon Mehrsehen",
    location: "Aschaffenburg, Germany",
    website: "https://www.amon-mehrsehen.de/",
    websiteLabel: "amon-mehrsehen.de",
    image: "../../assets/img/ref-amon.png",
    imageAlt: "Amon Mehrsehen Website Screenshot",
    imageModule: "Brand Profile",
    pages: [
      {
        label: "Brillenanprobe",
        url: "https://www.favrspecs.com/de/optiker/in/aschaffenburg/806/amon-mehrsehen/11088/pro/optische-brillen/",
        modules: ["Brand Portfolio", "Brand Pages", "Product Pages", "Virtual Try-On"],
        type: "page"
      }
    ]
  },
  {
    name: "Bärtschi",
    location: "Bern, Switzerland",
    website: "https://www.baertschi.ch/",
    websiteLabel: "baertschi.ch",
    image: "../../assets/img/ref-baertschi.png",
    imageAlt: "Bärtschi Website Screenshot",
    imageModule: "Product Page",
    pages: [
      {
        label: "Unsere Top-Marken / Try-On",
        url: "https://www.favrspecs.com/de/optiker/in/bern/190/baertschi-optik/10898/pro/marken/you-mawo/137/",
        modules: ["Brand Pages", "Product Pages", "Virtual Try-On"],
        type: "page"
      }
    ]
  },
  {
    name: "Mahrt & Hoerning",
    location: "Göttingen, Germany",
    website: "https://www.mahrt-hoerning.de/",
    websiteLabel: "mahrt-hoerning.de",
    image: "../../assets/img/ref-mahrthoerning.png",
    imageAlt: "Mahrt & Hoerning Website Screenshot",
    imageModule: "Brand Post",
    pages: [
      {
        label: "Virtual Try-On",
        url: "https://www.favrspecs.com/de/optiker/in/goettingen/821/mahrt-u-hoerning/24746/pro/optische-brillen/",
        modules: ["Brand Portfolio"],
        type: "page"
      },
      {
        label: "Brillenmode / Brand / Post",
        url: "https://www.favrspecs.com/de/optiker/in/goettingen/821/mahrt-u-hoerning/24746/pro/marken/lindberg/119/lindbergs-new-aw23-campaign-unveils-new-visual-brand-identity/245/",
        modules: ["Brand Pages", "Product Pages", "Virtual Try-On"],
        type: "page"
      }
    ]
  },
  {
    name: "EuroOptica",
    location: "New York City, USA",
    website: "https://www.eurooptica.com/",
    websiteLabel: "eurooptica.com",
    image: "../../assets/img/ref-eurooptica.png",
    imageAlt: "EuroOptica Website Screenshot",
    imageModule: "Brand Page",
    pages: [
      {
        label: "Try-On",
        url: "https://www.favrspecs.com/en/opticians/in/new-york/364/eurooptica-uws/14545/pro/eyeglasses/",
        modules: ["Brand Portfolio", "Brand Pages", "Product Pages", "Virtual Try-On"],
        type: "page"
      }
    ]
  },
  {
    name: "Atelier Valentin",
    location: "Paris, France",
    website: "http://www.ateliervalentin-paris.com/en/",
    websiteLabel: "ateliervalentin-paris.com",
    image: "../../assets/img/ref-valentin.png",
    imageAlt: "Atelier Valentin Website Screenshot",
    imageModule: "Try-On",
    pages: [
      {
        label: "Showroom",
        url: "https://www.favrspecs.com/fr/opticiens/a/paris/249/atelier-valentin/9913/pro/lunettes-de-vue/",
        modules: ["Brand Portfolio", "Brand Pages", "Product Pages", "Virtual Try-On"],
        type: "page"
      }
    ]
  },
  {
    name: "Vandenbalck",
    location: "Leuven, Belgium",
    website: "https://vandenbalck.be/eyewear/",
    websiteLabel: "vandenbalck.be",
    image: "../../assets/img/ref-vandenbalck.png",
    imageAlt: "Vandenbalck Website Screenshot",
    imageModule: "Brand Post",
    pages: [
      {
        label: "Pas je bril online",
        url: "https://www.favrspecs.com/en/opticians/in/leuven/586/vandenbalck-eyewear/10378/pro/eyeglasses/",
        modules: ["Brand Portfolio", "Brand Pages", "Product Pages", "Virtual Try-On"],
        type: "page"
      }
    ]
  },
  {
    name: "City Optik Stockholm",
    location: "Stockholm, Sweden",
    website: "https://cityoptik.se/",
    websiteLabel: "cityoptik.se",
    image: "../../assets/img/ref-cityoptik.png",
    imageAlt: "City Optik Stockholm Website Screenshot",
    imageModule: "Brand Page",
    pages: [
      {
        label: "Prova glasögon virtuellt",
        url: "https://www.favrspecs.com/en/opticians/in/stockholm/338/city-optik/15975/pro/eyeglasses/",
        modules: ["Brand Portfolio", "Brand Pages", "Product Pages", "Virtual Try-On"],
        type: "page"
      }
    ]
  },
  {
    name: "Optik Schade",
    location: "Viersen, Deutschland",
    website: "https://optikschade.com/",
    websiteLabel: "optikschade.com",
    webdesign: true,
    image: "../../assets/img/ref-optikschade.png",
    imageAlt: "Optik Schade Website Screenshot",
    imageModule: "Logo Wall",
    pages: [
      {
        label: "Home",
        url: "https://optikschade.com/",
        modules: ["Brand Slider", "Product Wall", "News Slider"]
      },
      {
        label: "Brillenmarken",
        url: "https://optikschade.com/brillenmarken/",
        modules: ["Logo Wall", "Brand Wall"]
      }
    ]
  },
  {
    name: "Ramstein",
    location: "Basel, Switzerland",
    website: "https://www.ramstein-optik.ch/en/home",
    websiteLabel: "ramstein-optik.ch",
    image: "../../assets/img/ref-ramstein.png",
    imageAlt: "Ramstein Website Screenshot",
    imageModule: "Virtual Try-On",
    pages: [
      {
        label: "Try it on!",
        url: "https://www.favrspecs.com/en/opticians/in/basel/189/ramstein-optik/10496/pro/brands/goetti/39/sunglasses/ahlf/2691/",
        modules: ["Brand Portfolio", "Brand Pages", "Product Pages", "Virtual Try-On"],
        type: "page"
      }
    ]
  },
  {
    name: "Brillen Mahl",
    location: "Bexbach, Germany",
    website: "https://www.brillenmahl.de/",
    websiteLabel: "brillenmahl.de",
    webdesign: true,
    image: "../../assets/img/ref-mahl.png",
    imageAlt: "Brillen Mahl Website Screenshot",
    imageModule: "Brand Wall",
    pages: [
      {
        label: "Marken",
        url: "https://www.brillenmahl.de/marken",
        modules: ["Brand Wall"]
      },
      {
        label: "Online Brillenanprobe",
        url: "https://www.favrspecs.com/de/optiker/in/lebach/3098/brillen-mahl/13821/pro/optische-brillen/",
        modules: ["Brand Portfolio", "Brand Pages", "Product Pages", "Virtual Try-On"],
        type: "page"
      }
    ]
  },
  {
    name: "Gutsch Optik",
    location: "München, Deutschland",
    website: "https://gutsch-optik.de/",
    websiteLabel: "gutsch-optik.de",
    webdesign: true,
    image: "../../assets/img/ref-gutsch.png",
    imageAlt: "Gutsch Optik Website Screenshot",
    imageModule: "Product Wall",
    pages: [
      {
        label: "Home",
        url: "https://gutsch-optik.de/",
        modules: ["Brand Slider", "Logo Wall", "Product Wall"]
      },
      {
        label: "Try On",
        url: "https://www.favrspecs.com/de/optiker/in/muenchen/218/gutsch-optik/20775/pro/optische-brillen/",
        modules: ["Brand Portfolio", "Brand Pages", "Product Pages", "Virtual Try-On"],
        type: "page"
      }
    ]
  },
  {
    name: "Volz",
    location: "Thun, Switzerland",
    website: "https://www.volz.ch/",
    websiteLabel: "volz.ch",
    image: "../../assets/img/ref-volz.png",
    imageAlt: "Volz Website Screenshot",
    imageModule: "Brand Slider",
    pages: [
      {
        label: "Brillen",
        url: "https://www.volz.ch/brillen/",
        modules: ["Product Wall", "Brand Slider"]
      },
      {
        label: "Brillen online anprobieren",
        url: "https://www.favrspecs.com/en/opticians/in/thun/456/volz-optik/10175/pro/eyeglasses/",
        modules: ["Brand Portfolio", "Brand Pages", "Product Pages", "Virtual Try-On"],
        type: "page"
      }
    ]
  },
  {
    name: "Bellevue",
    location: "Hamburg, Germany",
    website: "https://bellevue-hamburg.de/",
    websiteLabel: "bellevue-hamburg.de",
    image: "../../assets/img/ref-bellevue.png",
    imageAlt: "Bellevue Website Screenshot",
    imageModule: "Brand Profile",
    pages: [
      {
        label: "Brand Portfolio",
        url: "https://bellevue-hamburg.de/",
        modules: ["Brand Portfolio", "Brand Pages", "Product Pages", "Virtual Try-On"],
        type: "page"
      }
    ]
  },
  {
    name: "AllesBrille",
    location: "Heidelberg, Germany",
    website: "https://allesbrille-heidelberg.com/",
    websiteLabel: "allesbrille-heidelberg.com",
    webdesign: true,
    image: "../../assets/img/ref-allesbrille.png",
    imageAlt: "AllesBrille Website Screenshot",
    imageModule: "Brand Post",
    pages: [
      {
        label: "Brillenmarken / Online Brillenanprobe",
        url: "https://www.favrspecs.com/de/optiker/in/heidelberg/560/allesbrille-manufaktur/10059/pro/marken/masunaga/78/between-ornament-and-structure-new-ksan-designs-by-masunaga-for-springsummer-2026/604/",
        modules: ["Brand Pages", "Product Pages", "Virtual Try-On"],
        type: "page"
      }
    ]
  },
  {
    name: "Optik Gstaad",
    location: "Gstaad, Switzerland",
    website: "https://www.optikgstaad.ch/de.html",
    websiteLabel: "optikgstaad.ch",
    image: "../../assets/img/ref-gstaad.png",
    imageAlt: "Optik Gstaad Website Screenshot",
    imageModule: "Brand Page",
    pages: [
      {
        label: "Produkte",
        url: "https://www.favrspecs.com/de/optiker/in/saanen/803/optik-gstaad/11415/pro/marken/theo/89/",
        modules: ["Brand Portfolio", "Brand Pages", "Product Pages", "Virtual Try-On"],
        type: "page"
      }
    ]
  },
  {
    name: "Brillenatelier Katrin Wagner",
    location: "Stuttgart, Germany",
    website: "https://www.katrinwagner.de/",
    websiteLabel: "katrinwagner.de",
    image: "../../assets/img/ref-katrinwagner.png",
    imageAlt: "Brillenatelier Katrin Wagner Website Screenshot",
    imageModule: "Brand Post",
    pages: [
      {
        label: "Virtual Try-On",
        url: "https://www.favrspecs.com/de/optiker/in/stuttgart/221/brillenatelier-katrin-wagner/26412/pro/marken/hoffmann-natural-eyewear/53/rooted-in-place-the-heimat-image-campaign-by-hoffmann-natural-eyewear/582/",
        modules: ["Brand Portfolio", "Brand Pages", "Product Pages", "Virtual Try-On"],
        type: "page"
      }
    ]
  },
  {
    name: "Friedman Optometry",
    location: "Los Angeles, USA",
    website: "https://www.friedmanoptical.com/",
    websiteLabel: "friedmanoptical.com",
    note: "accessible in the USA only",
    image: "../../assets/img/ref-friedman.png",
    imageAlt: "Friedman Optometry Website Screenshot",
    imageModule: "Brand Wall",
    pages: [
      {
        label: "Designer Eyeglasses",
        url: "https://www.friedmanoptical.com/eyeglasses/designer-eyeglasses-in-culver-city/",
        modules: ["Logo Wall"]
      },
      {
        label: "Luxury Eyewear",
        url: "https://www.friedmanoptical.com/luxury-eyewear/",
        modules: ["Brand Wall"]
      }
    ]
  }
];

/* ── Render function ── */
function renderReferences() {
  const container = document.getElementById('ref-cards-container');
  if (!container) return;

  container.innerHTML = FAVR_REFERENCES.map(ref => `
    <div class="ref-card" style="margin-bottom: 56px;">
      <div class="ref-card-header">
        <div class="ref-meta">
          <h2 class="ref-name">${ref.name}</h2>
          <span class="ref-location">${ref.location}</span>
        </div>
        <div class="ref-website-wrap">
          <a href="${ref.website}" class="ref-website" target="_blank">${ref.websiteLabel} ↗</a>
          ${ref.webdesign ? `<span style="font-size:11px; color:#b8922a; font-weight:500;">✎ Including webdesign</span>` : ''}
          ${ref.note ? `<span class="ref-note">${ref.note}</span>` : ''}
        </div>
      </div>
      <div class="ref-body">
        <div class="ref-ipad">
          <img src="${ref.image}" alt="${ref.imageAlt}" loading="lazy" style="width:100%; display:block;">
          <div class="ref-ipad-label">${ref.imageModule}</div>
        </div>
        <div class="ref-pages">
          ${ref.pages.map(page => `
            <div class="ref-page">
              <div class="ref-page-top">
                <a href="${page.url}" class="ref-page-link" style="text-decoration:none;" target="_blank">↗ &ldquo;${page.label}&rdquo;</a>
                <div class="ref-modules">
                  ${page.modules.map(m => page.type === 'page' ? `<span style="display:inline-block;font-size:10px;font-weight:600;letter-spacing:0.5px;background:#dbeafe;color:#1e3a5f;border:1px solid #93c5fd;padding:3px 10px;border-radius:999px;">✓ ${m}</span>` : `<span style="display:inline-block;font-size:10px;font-weight:600;letter-spacing:0.5px;background:#dcfce7;color:#14532d;border:1px solid #86efac;padding:3px 10px;border-radius:999px;">✓ ${m}</span>`).join('')}
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

document.addEventListener('DOMContentLoaded', renderReferences);
