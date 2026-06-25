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
    pageLabel: "Barton Perreira Brand Profile",
    pageUrl: "https://www.favrspecs.com/en/opticians/in/new-york/364/eurooptica-uws/14545/pro/brands/barton-perreira/66/",
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
    <div class="ref-card">
      <div class="ref-card-header">
        <div class="ref-meta">
          <h2 class="ref-name">${ref.name}</h2>
          <span class="ref-location">${ref.location}</span>
        </div>
        <a href="${ref.website}" class="ref-website" target="_blank">${ref.websiteLabel} ↗</a>
      </div>
      <div class="ref-body">
        <div class="ref-ipad">
          <div class="ref-ipad-frame">
            <div class="ref-ipad-screen">
              <img src="${ref.image}" alt="${ref.imageAlt}" loading="lazy">
            </div>
          </div>
        </div>
        <div class="ref-pages">
          <div class="ref-page">
            <div class="ref-page-top">
              <a href="${ref.pageUrl}" class="ref-page-link" target="_blank">${ref.pageLabel}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

document.addEventListener('DOMContentLoaded', renderNavbarReferences);
