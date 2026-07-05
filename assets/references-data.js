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
    name: "Optik Leonhardt",
    location: "Bretten, Deutschland",
    website: "https://www.optik-leonhardt.de/",
    websiteLabel: "optik-leonhardt.de",
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
    name: "Gutsch Optik",
    location: "München, Deutschland",
    website: "https://gutsch-optik.de/",
    websiteLabel: "gutsch-optik.de",
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
    name: "AllesBrille",
    location: "Heidelberg, Germany",
    website: "https://allesbrille-heidelberg.com/",
    websiteLabel: "allesbrille-heidelberg.com",
    image: "../../assets/img/ref-allesbrille.png",
    imageAlt: "AllesBrille Website Screenshot",
    imageModule: "Brand Post",
    pages: [
      {
        label: "Brillenmarken / Online Brillenanprobe",
        url: "https://www.favrspecs.com/de/optiker/in/heidelberg/560/allesbrille-manufaktur/10059/pro/marken/masunaga/78/between-ornament-and-structure-new-ksan-designs-by-masunaga-for-springsummer-2026/604/",
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

/* ── Icons (inline SVG, no external font dependency) ── */
const REF_ICON_POINTER = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8a8a8a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0; transform:rotate(90deg);" aria-hidden="true"><path d="M7.904 17.563a1.2 1.2 0 0 0 2.228 .308l2.09 -3.093l4.907 4.907a1.067 1.067 0 0 0 1.509 0l1.047 -1.047a1.067 1.067 0 0 0 0 -1.509l-4.907 -4.907l3.113 -2.09a1.2 1.2 0 0 0 -.309 -2.228l-13.582 -3.904l3.904 13.563z"/></svg>';

function refIconCheck(color) {
  return `<svg width="12" height="12" viewBox="0 0 24 24" style="flex-shrink:0;" aria-hidden="true"><path d="M20 6L9 17L4 12" stroke="${color}" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
}

/* ── Pill button per module ── */
function refPill(label, isLanding) {
  const bg = isLanding ? '#E6F1FB' : '#EAF3DE';
  const color = isLanding ? '#0C447C' : '#27500A';
  return `<span style="display:inline-flex; align-items:center; gap:6px; background:${bg}; color:${color}; font-size:13px; line-height:1; padding:7px 14px; border-radius:999px; white-space:nowrap;">${refIconCheck(color)}${label}</span>`;
}

/* ── Single page row: pointer + "label" + pill buttons ── */
function refPageRow(page, isLast) {
  const dividerStyle = isLast ? '' : 'border-bottom:0.5px solid #e3e3e0; margin-bottom:14px; padding-bottom:14px;';
  return `
    <div style="${dividerStyle}">
      <div style="display:flex; align-items:center; gap:8px; margin-bottom:10px;">
        ${REF_ICON_POINTER}
        <a href="${page.url}" target="_blank" style="font-size:15px; color:#1a1a1a; text-decoration:none;">&ldquo;${page.label}&rdquo;</a>
      </div>
      <div style="display:flex; flex-wrap:wrap; gap:8px;">
        ${page.modules.map(m => refPill(m, page.type === 'page')).join('')}
      </div>
    </div>
  `;
}

/* ── Category group: heading + card, only rendered if pages exist ── */
function refGroup(title, color, pages, isFirst) {
  if (!pages.length) return '';
  return `
    <div style="font-size:13px; font-weight:600; color:${color}; text-transform:uppercase; letter-spacing:0.03em; margin-bottom:10px;${isFirst ? '' : ' margin-top:24px;'}">${title}</div>
    <div style="background:#fafafa; border:0.5px solid #e3e3e0; border-radius:12px; padding:14px 16px;">
      ${pages.map((p, i) => refPageRow(p, i === pages.length - 1)).join('')}
    </div>
  `;
}

/* ── Render function ── */
function renderReferences() {
  const container = document.getElementById('ref-cards-container');
  if (!container) return;

  container.innerHTML = FAVR_REFERENCES.map(ref => {
    const scmPages = ref.pages.filter(p => p.type !== 'page');
    const landingPages = ref.pages.filter(p => p.type === 'page');

    const pagesHtml =
      refGroup('Smart Content Modules', '#3B6D11', scmPages, true) +
      refGroup('Landing Pages', '#185FA5', landingPages, scmPages.length === 0);

    return `
      <div class="ref-card" style="margin-bottom: 56px;">
        <div class="ref-card-header">
          <div class="ref-meta">
            <h2 class="ref-name">${ref.name}</h2>
            <span class="ref-location">${ref.location}</span>
          </div>
          <div class="ref-website-wrap">
            <a href="${ref.website}" class="ref-website" target="_blank">${ref.websiteLabel} ↗</a>
            ${ref.note ? `<span class="ref-note">${ref.note}</span>` : ''}
          </div>
        </div>
        <div class="ref-body">
          <div class="ref-ipad">
            <img src="${ref.image}" alt="${ref.imageAlt}" loading="lazy" style="width:100%; display:block;">
            <div class="ref-ipad-label">${ref.imageModule}</div>
          </div>
          <div class="ref-pages">
            ${pagesHtml}
          </div>
        </div>
      </div>
    `;
  }).join('');
}

document.addEventListener('DOMContentLoaded', renderReferences);
