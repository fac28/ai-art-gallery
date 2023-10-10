const layout = (image, username, description) => {
  return /*html*/ `
  <!doctype html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="../styles.css">
        <link href="https://fonts.googleapis.com/css?family=Raleway:500|Vollkorn:400i" rel="stylesheet">
        <title>AI image gallery</title>
      </head>
      <body>
        <header class="header">
        <div class="header__row">
          <h1 class="header__title">AI image gallery</h1>
        </div>
        </header>
          <main class="main">
          <div class="main__row">
            <div class="main__image-container">
              <img class="main__image" src="${image}" alt="AI generated image">
              <div class="main__image-description">
                <p class="main__username">${username}</p>
                <p class="main__description">${description}</p>
              </div>
            </div>
            <div class="main__image-container">
              <img class="main__image" src="${image}" alt="AI generated image">
              <div class="main__image-description">
                <p class="main__username">${username}</p>
                <p class="main__description">${description}</p>
              </div>
            </div>
          </div>
        </main>
      <body>
  `
}

module.exports = layout;
