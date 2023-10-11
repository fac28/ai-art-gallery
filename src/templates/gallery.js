const layout = (artworkDetails) => {
  return /* html */ `
  <!doctype html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="../styles.css">
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=PT+Serif&family=Playfair+Display&family=Young+Serif&display=swap" rel="stylesheet">
      <script defer src="filter.js"></script>
      <title>AI image gallery</title>
    </head>
    <body>
      <header class="header">
        <a href="/submit" class="header__link">Submit</a>
      </header>
      <h1 class="header__title">Welcome to the gallery</h1>
      <div class="filter">
        <label>
        Filter by tag:
        </label>
        <select id="multiple-select">
            <option value="travel">Travel</option>
            <option value="fantasy">Fantasy</option>
            <option value="landscape">Landscape</option>
            <option value="architecture">Architecture</option>
            <option value="abstract">Abstract</option>
            <option value="all">Show all</option>
        </select>
      </div>
      <main class="main">
        ${artworkDetails
          .reduce((acc, image, index) => {
            if (index % 2 === 0) {
              // Start a new row
              acc.push("<div class=\"main__row\">");
            }

            acc.push(`
            <div class="main__image-container" hidden=false>
              <img class="main__image" src="${image.image_file}">
              <div class="main__image-description">
                <p class="main__username"><strong>${image.uploaded_by}</strong></p>
                <p class="main__tags">${image.tags}</p>
                <p class="main__description">${image.description}</p>
                <span>${image.created_at}</span>
              </div>
            </div>
          `);

            if (index % 2 !== 0 || index === artworkDetails.length - 1) {
              // Close the row when we have two images or it's the last image
              acc.push("</div>");
            }

            return acc;
          }, [])
          .join("")}
      </main>
    </body>
  </html>
  `;
};

module.exports = layout;
