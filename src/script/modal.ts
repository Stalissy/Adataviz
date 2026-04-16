const MODAL_ID = "modal-overlay";

const createModalIfNeeded = (): void => {
  if (document.getElementById(MODAL_ID)) return;

  const overlay = document.createElement("div");
  overlay.id = MODAL_ID;
  overlay.innerHTML = `<div id="modal-box" role="dialog" aria-modal="true"></div>`;
  document.body.appendChild(overlay);

  // Fermeture en cliquant sur l'overlay (hors de la carte)
  overlay.addEventListener("click", (e: MouseEvent) => {
    if (e.target === overlay) closeModal();
  });

  // Fermeture avec Échap
  document.addEventListener("keydown", (e: KeyboardEvent) => {
    if (e.key === "Escape") closeModal();
  });
};

export const openModal = (obj: any): void => {
  createModalIfNeeded();

  const overlay = document.getElementById(MODAL_ID)!;
  const box = document.getElementById("modal-box")!;

  // Champs disponibles dans l'API Paris
  const title: string = obj.titre_descriptif ?? "Sans titre";
  const corp: string = obj.corps_descriptif ?? "";
  const categorie: string = obj.categorie ?? "";
  const arrondissement: string = obj.arrondissement_ou_commune ?? "";
  const adresse: string = obj.adresse ?? "";
  const dateDebut: string = obj.date_debut ? formatDate(obj.date_debut) : "";
  const dateFin: string = obj.date_fin ? formatDate(obj.date_fin) : "";
  const lien: string = obj.lien ?? "";
  const contact: string = obj.contact ?? "";
  const coordonnees: any = obj.coordonnees_geo;

  const badge = categorie
    ? `<span class="modal-badge">${categorie}</span>`
    : "";

  const metaItems: string[] = [];
  if (arrondissement)
    metaItems.push(`<span class="modal-meta-item">📍 ${arrondissement}</span>`);
  if (adresse)
    metaItems.push(`<span class="modal-meta-item">🏠 ${adresse}</span>`);
  if (dateDebut && dateFin)
    metaItems.push(
      `<span class="modal-meta-item">📅 Du ${dateDebut} au ${dateFin}</span>`,
    );
  else if (dateDebut)
    metaItems.push(
      `<span class="modal-meta-item">📅 À partir du ${dateDebut}</span>`,
    );
  if (contact)
    metaItems.push(`<span class="modal-meta-item">✉️ ${contact}</span>`);
  if (coordonnees)
    metaItems.push(
      `<span class="modal-meta-item">🗺️ ${coordonnees.lat?.toFixed(5)}, ${coordonnees.lon?.toFixed(5)}</span>`,
    );

  const metaHtml = metaItems.length
    ? `<div class="modal-meta">${metaItems.join("")}</div>`
    : "";

  const lienHtml = lien
    ? `<a class="button modal-link" href="${lien}" target="_blank" rel="noopener">Voir sur le site →</a>`
    : "";

  box.innerHTML = `
    <button class="modal-close" id="modal-close-btn" aria-label="Fermer">✕</button>
    <div class="modal-content">
      ${badge}
      <h2 class="modal-title">${title}</h2>
      ${metaHtml}
      <div class="modal-corp">${corp}</div>
      ${lienHtml}
    </div>
  `;

  document
    .getElementById("modal-close-btn")!
    .addEventListener("click", closeModal);

  // Affichage + blocage du scroll
  overlay.classList.add("modal-visible");
  document.body.style.overflow = "hidden";
};

export const closeModal = (): void => {
  const overlay = document.getElementById(MODAL_ID);
  if (!overlay) return;

  overlay.classList.remove("modal-visible");
  document.body.style.overflow = "";
};

const formatDate = (isoString: string): string => {
  try {
    return new Date(isoString).toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  } catch {
    return isoString;
  }
};
