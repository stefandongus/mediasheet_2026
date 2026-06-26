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
    name: "Volz",
    location: "Thun, Switzerland",
    website: "https://www.volz.ch/",
    websiteLabel: "volz.ch",
    image: "../../assets/img/ref-navbar-volz.png",
    imageAlt: "Volz Custom Navbar Screenshot",
    navItems: [
      { label: "Brillen online anprobieren", url: "https://www.volz.ch/" }
    ],
    example: {
      label: "product page",
      url: "https://www.favrspecs.com/en/opticians/in/thun/456/volz-optik/10175/pro/brands/goetti/39/eyeglasses/acero/3877/"
    }
  },
  {
    name: "Optik Schade",
    location: "Viersen, Germany",
    website: "https://optikschade.com/",
    websiteLabel: "optikschade.com",
    image: "../../assets/img/ref-navbar-schade.png",
    imageAlt: "Optik Schade Custom Navbar Screenshot",
    navItems: [
      { label: "Brand Slider", url: "https://optikschade.com/" }
    ],
    example: {
      label: "brand profile",
      url: "https://www.favrspecs.com/de/optiker/in/viersen/511/optik-akustik-schade/21803/pro/marken/andy-wolf/102/"
    }
  },
  {
    name: "Optik Hensler",
    location: "Frankfurt, Germany",
    website: "https://www.optik-hensler.de/leistungen/mode",
    websiteLabel: "optik-hensler.de",
    image: "../../assets/img/ref-navbar-hensler.png",
    imageAlt: "Optik Hensler Custom Navbar Screenshot",
    navItems: [
      { label: "Blackfin", url: "https://www.optik-hensler.de/leistungen/mode" }
    ],
    example: {
      label: "brand profile",
      url: "https://www.favrspecs.com/de/optiker/in/frankfurt-am-main/214/augenoptik-hensler/24996/pro/marken/blackfin/41/"
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
  }
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
        <div class="ref-ipad">
          <div class="ref-ipad-frame">
            <div class="ref-ipad-screen">
              <img src="${ref.image}" alt="${ref.imageAlt}" loading="lazy">
            </div>
          </div>
        </div>
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
