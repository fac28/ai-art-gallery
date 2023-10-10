const layout = (images) => {
  return /*html*/ `
  <!doctype html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="../styles.css">
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=PT+Serif&family=Playfair+Display&family=Young+Serif&display=swap" rel="stylesheet">
      <title>AI image gallery</title>
    </head>
    <body>
      <header class="header">
        <a href="/submit" class="header__link">Submit</a>
      </header>
      <main class="main">
        <h1 class="header__title">Welcome to the gallery</h1>
        <div class="main__row">
          ${images.map(image => `
            <div class="main__image-container">
              <img class="main__image" src="${image.url}" alt="${image.alt}">
              <div class="main__image-description">
                <p class="main__username">${image.username}</p>
                <p class="main__description">${image.description}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </main>
    </body>
  </html>
  `;
}

module.exports = layout;
