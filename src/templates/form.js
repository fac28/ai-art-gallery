const form = () =>{
  return  /*html*/ `
  <!doctype html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="../styles.css">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display&family=Young+Serif&display=swap" rel="stylesheet">
        <title>AI image gallery</title>
      </head>
      <body>
        <header class="header">
          <a href="/" class="header__link">home</a>
        </header>
        <main class="main">
          <h1 class="form__title">Upload your image</h1>
          <form>
            <label for="username">
              Username
            </label>
            <input id="name" required />

            <label for="description">
              Description
            </label>
            <textarea
              id="description"
              rows="5">
            </textarea>

            <label for="avatar">Your image</label>
            <input type="file" id="avatar" name="avatar">

            <button>Submit</button>
          </form>


        </main>
      <body>
  `
}

module.exports = form;
