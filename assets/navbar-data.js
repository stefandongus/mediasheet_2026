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
    imageOriginal: "../../assets/img/ref-navbar-eurooptica-original.png",
    imageAlt: "EuroOptica Custom Navbar Screenshot",
    navItems: [
      { label: "Try-On", url: "https://www.eurooptica.com/" }
    ],
    example: {
      label: "Brand Profile",
      url: "https://www.favrspecs.com/en/opticians/in/new-york/364/eurooptica-uws/14545/pro/brands/barton-perreira/66/"
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
        <div class="ref-ipad-stack">
          <!-- Hinteres iPad: Original-Website -->
          <div class="ref-ipad ref-ipad-back">
            <div class="ref-ipad-frame">
              <div class="ref-ipad-screen">
                <img src="${ref.imageOriginal}" alt="Original website" loading="lazy">
              </div>
            </div>
          </div>
          <!-- Vorderes iPad: nachgebaute Navbar -->
          <div class="ref-ipad ref-ipad-front">
            <div class="ref-ipad-frame">
              <div class="ref-ipad-screen">
                <img src="${ref.image}" alt="${ref.imageAlt}" loading="lazy">
              </div>
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
