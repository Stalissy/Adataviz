export const DOM = (id: string) => {
  const app: any = document.getElementById(id);
  app.innerHTML = `
    <header>
      <h1>Gloire à Hidalgo</h1>
      <h3>Site sur l'actualité Parisienne</h3>
    </header>
    <main id="main">
      <div id="article"></div>
      <div id="buttonPage">
        <div class="pagination">
          <button class="button outline" id="previousPageButton">← Page précédente</button>
          <button class="button" id="nextPageButton">Page suivante →</button>
        </div>
      </div>
    </main>
    <footer></footer>`;
};
