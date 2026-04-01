export const DOM = (id: string) => {
  const app: any = document.getElementById(id);
  app.innerHTML = `
    <header>
      <h1>Gloire à Hidalgo</h1>
      <h3>Site sur l'actualité Parisienne</h3>
    </header>
    <main id="main"></main>
    <footer></footer>`;
};
