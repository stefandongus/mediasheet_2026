/* ============================================
   FAVR Navbar References Data
   Neue Referenz hinzufügen: einfach neues
   Objekt in das Array einfügen.
   ============================================ */
const FAVR_NAVBAR_REFERENCES = [
  {
    name: "EuroOptica",
    location: "New York City, USA",
    website: "https://www.eurooptica.com/",
    websiteLabel: "eurooptica.com",
    image: "../../assets/img/ref-navbar-eurooptica.png",
    imageAlt: "EuroOptica Custom Navbar Screenshot",
    navItems: [
      { label: "Try-On", url: "https://www.eurooptica.com/" }
    ],
    example: {
      label: "Brand Profile",
      url: "https://www.favrspecs.com/en/opticians/in/new-york/364/eurooptica-uws/14545/pro/brands/barton-perreira/66/"
    }
  },
  {
    name: "Amon Mehrsehen",
    location: "Aschaffenburg, Germany",
    website: "https://www.amon-mehrsehen.de/",
    websiteLabel: "amon-mehrsehen.de",
    image: "../../assets/img/ref-navbar-amon.png",
    imageAlt: "Amon Mehrsehen Custom Navbar Screenshot",
    navItems: [
      { label: "Brillenanprobe / Hoffmann Natural Eyewear", url: "https://www.favrspecs.com/de/optiker/in/aschaffenburg/806/amon-mehrsehen/11088/pro/optische-brillen/" }
    ],
    example: {
      label: "brand profile",
      url: "https://www.favrspecs.com/de/optiker/in/aschaffenburg/806/amon-mehrsehen/11088/pro/marken/hoffmann-natural-eyewear/53/"
    }
  },
  {
    name: "Augustin Optik Lounge",
    location: "Essen, Germany",
    website: "https://optik-augustin.de/",
    websiteLabel: "optik-augustin.de",
    image: "../../assets/img/ref-navbar-augustin.png",
    imageAlt: "Augustin Optik Lounge Custom Navbar Screenshot",
    navItems: [
      { label: "ONLINE BRILLENANPROBE", url: "https://optik-augustin.de/" }
    ],
    example: {
      label: "virtual try-on",
      url: "https://www.favrspecs.com/de/optiker/in/essen/213/augustin-optik-lounge/10137/pro/marken/lindberg/119/optische-brillen/1055/4166/"
    }
  },
  {
    name: "Hoet Optiek",
    location: "Bruges, Belgium",
    website: "https://www.hoet-optiek.be/en",
    websiteLabel: "hoet-optiek.be",
    image: "../../assets/img/ref-navbar-hoet.png",
    imageAlt: "Hoet Optiek Custom Navbar Screenshot",
    navItems: [
      { label: "Virtual fitting in the footer", url: "https://www.hoet-optiek.be/en" }
    ],
    example: {
      label: "Microsite",
      url: "https://www.favrspecs.com/en/opticians/in/bruges/608/hoet-optiek-bv/15061/pro/eyeglasses/"
    }
  },
  {
    name: "Mahrt & Hoerning",
    location: "Göttingen, Germany",
    website: "https://www.mahrt-hoerning.de/",
    websiteLabel: "mahrt-hoerning.de",
    image: "../../assets/img/ref-navbar-mahrthoerning.png",
    imageAlt: "Mahrt & Hoerning Custom Navbar Screenshot",
    navItems: [
      { label: "Virtual Try-On / Lindberg", url: "https://www.mahrt-hoerning.de/" }
    ],
    example: {
      label: "brand post",
      url: "https://www.favrspecs.com/de/optiker/in/goettingen/821/mahrt-u-hoerning/24746/pro/marken/lindberg/119/lindbergs-new-aw23-campaign-unveils-new-visual-brand-identity/245/"
    }
  },
  {
    name: "Bärtschi",
    location: "Bern, Switzerland",
    website: "https://www.baertschi.ch/",
    websiteLabel: "baertschi.ch",
    image: "../../assets/img/ref-navbar-baertschi.png",
    imageAlt: "Bärtschi Custom Navbar Screenshot",
    navItems: [
      { label: "Unsere Top Marken / TRY ON", url: "https://www.baertschi.ch/top-marken" }
    ],
    example: {
      label: "Product Page",
      url: "https://www.favrspecs.com/de/optiker/in/bern/190/baertschi-optik/10898/pro/marken/goetti/39/optische-brillen/acero/3877/"
    }
  },
  {
    name: "Richtig! Kühn",
    location: "Jena, Germany",
    website: "https://richtigkuehn.de/die-groesste-auswahl-an-hochwertigen-markenbrillen/",
    websiteLabel: "richtigkuehn.de",
    image: "../../assets/img/ref-navbar-richtigkühn.png",
    imageAlt: "Richtig! Kühn Custom Navbar Screenshot",
    navItems: [
      { label: "Suzy Glam", url: "https://richtigkuehn.de/die-groesste-auswahl-an-hochwertigen-markenbrillen/" }
    ],
    example: {
      label: "brand profile",
      url: "https://www.favrspecs.com/de/optiker/in/jena/826/richtig-kuehn/16431/pro/marken/suzy-glam/131/"
    }
  },
  {
    name: "Schütt Optik",
    location: "Ludwigsburg, Germany",
    website: "https://optik-schuett.de/",
    websiteLabel: "optik-schuett.de",
    image: "../../assets/img/ref-navbar-schütt.png",
    imageAlt: "Schütt Optik Custom Navbar Screenshot",
    navItems: [
      { label: "Try On / Caroline Abram", url: "https://optik-schuett.de/" }
    ],
    example: {
      label: "brand profile",
      url: "https://www.favrspecs.com/de/optiker/in/ludwigsburg/380/schuett-optik-hoerakustik-kg/9900/pro/marken/caroline-abram/166/"
    }
  },
];

/* ── Render function ── */
function renderNavbarReferences() {
  const container = document.getElementById('navbar-cards-container');
  if (!container) return;
  if (FAVR_NAVBAR_REFERENCES.length === 0) {
    container.innerHTML = '<p class="ref-placeholder">Referenzen folgen in Kürze.</p>';
    return;
  }
  container.innerHTML = FAVR_NAVBAR_REFERENCES.map(ref => `
    <div class="ref-card ref-card-navbar">
      <div class="ref-navbar-image">
        <img src="${ref.image}" alt="${ref.imageAlt}" loading="lazy">
      </div>
      <div class="ref-navbar-info">
        <div>
          <h2 class="ref-name">${ref.name}</h2>
          <span class="ref-location">${ref.location}</span>
        </div>
        <div class="ref-navbar-items">
          <div class="ref-navbar-items-label">Original navigation bar</div>
          ${ref.navItems.map(item => `
            <a href="${item.url}" class="ref-navbar-item" target="_blank">
              <span class="ref-navbar-item-name">→ click on "${item.label}"</span>
              <span class="ref-navbar-item-arrow">↗</span>
            </a>
          `).join('')}
        </div>
        ${ref.example ? `
        <div class="ref-navbar-example-block">
          <div class="ref-navbar-items-label">Replicated navigation bar</div>
          <a href="${ref.example.url}" class="ref-navbar-item" target="_blank">
            <span class="ref-navbar-item-name">→ example: ${ref.example.label}</span>
            <span class="ref-navbar-item-arrow">↗</span>
          </a>
        </div>` : ''}
      </div>
    </div>
  `).join('');
}
document.addEventListener('DOMContentLoaded', renderNavbarReferences);
