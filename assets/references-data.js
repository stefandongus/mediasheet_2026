/* ============================================
   FAVR References Data
   Neue Referenz hinzufügen: einfach neues
   Objekt in das Array einfügen.
   ============================================ */

const FAVR_REFERENCES = [
  {
    name: "Optik Schade",
    location: "Viersen, Deutschland",
    website: "https://optikschade.com/",
    websiteLabel: "optikschade.com",
    image: "../../assets/img/ref-optikschade.png",
    imageAlt: "Optik Schade Website Screenshot",
    imageModule: "Brand Slider",
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
      }
    ]
  }
];

/* ── Render function ── */
function renderReferences() {
  const container = document.getElementById('ref-cards-container');
  if (!container) return;

  container.innerHTML = FAVR_REFERENCES.map(ref => `
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
          <div class="ref-ipad-label">${ref.imageModule}</div>
        </div>
        <div class="ref-pages">
          ${ref.pages.map(page => `
            <div class="ref-page">
              <div class="ref-page-top">
                <a href="${page.url}" class="ref-page-link" target="_blank">${page.label}</a>
                <div class="ref-modules">
                  ${page.modules.map(m => `<span class="ref-tag">${m}</span>`).join('')}
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
