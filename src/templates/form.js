const form = () => {
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
        <script defer src="validation.js"></script>
        <title>AI image gallery</title>
      </head>
      <body>
        <header class="header">
          <a href="/" class="header__link">home</a>
        </header>
        <main class="main">
          <h1 class="form__title">Upload your image</h1>
          <form enctype="multipart/form-data" method="post">
            <label for="name">
              Name
              <span aria-hidden="true">*</span>
            </label>
            <input class="bottom_border" id="name" name="name" required />

            <label for="description">
              Description
              <span aria-hidden="true">*</span>
              <p id="descriptionHelp">Character limit is 200</p>
            </label>
            <textarea
            class="bottom_border"
              name="description"
              id="description"
              maxlength="200"
              aria-describedby="descriptionHelp"
              required></textarea>
              <input type="file" class="file_input " id="image" name="image" required />
              <label class="file_input_label form_btn" for="image">Choose File</label>

            <button class="submit_btn form_btn">Submit</button>
          </form>
        </main>
        
      <body>
  `;
};

module.exports = form;
