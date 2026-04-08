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
          <button class="button outline btnPage" id="previousPageButton" style="display: none">← Page précédente</button>
          <button class="button outline btnPage" id="return-page-1" style="display: none">1</button>
          <button class="button outline btnPage" id="page-2" style="display: none">-1</button>
          <button class="button outline btnPage" id="page-1" style="display: none">0</button>
          <button class="button btnPage" id="actual-page">1</button>
          <button class="button outline btnPage" id="page+1">2</button>
          <button class="button outline btnPage" id="page+2">3</button>
          <button class="button" id="nextPageButton">Page suivante →</button>
        </div>
      </div>
    </main>
    <footer></footer>`;
};
