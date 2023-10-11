# AI Art Gallery

AI Art Gallery is a place to share your AI art.

## Remote Deployment

This app is deployed on fly.io and can be accessed at: <https://ai-art-gallery.fly.dev/>

## Installation

Clone the project

```bash
  git clone https://github.com/fac28/ai-art-gallery.git
```

Go to the project directory

```bash
  cd ai-art-gallery
```

Install dependencies

```bash
  npm install
```

Seed the database
```bash
  npm run seed
```

Start the server

```bash
  npm run start
```

## Database Schema

This app includes a database for images. It has tables for images and image details. It's helpful to know the structure of the database before working with it. You can either read `database/schema.sql`, or expand the sections below.

<details>
<summary><code>images</code></summary>

| column     | type     | constraints               |
| ---------- | -------- | ------------------------- |
| id         | integer  | primary key autoincrement |
| image_file      | blob     |                     |

</details>

<details>
<summary><code>image_details</code></summary>

| column     | type     | constraints               |
| ---------- | -------- | ------------------------- |
| id         | integer  | primary key autoincrement|
| description    | text  |  |
| created_at | datetime | DEFAULT CURRENT_TIMESTAMP |
| image_id | integer | references images(id)     |
| tags | text | |
| uploaded_by | text | |
|FOREIGN KEY (image_id) REFERENCES images (id)|

</details>

## Usage

Start by viewing other's AI images. If you have something to share, just click on the 'submit' button in the menu bar.

## Project Directory Structure

This project is organized into several directories, each containing specific components and tests:

### Directory: `src`

- **`server.js`**: The core server setup for the Express application, handling routing, error tracking with Sentry, and serving static files.

- **`database/db.js`**: Manages the SQLite database, initializes tables based on a schema, and enables foreign keys.

- **`model/images.js`**: Provides functions for database interactions, allowing image and artwork data manipulation.

### Directory: `tests`

- **`helpers.js`**: A utility module with functions for HTTP requests, HTML response attribute assertions, and database reset.

- **`form-test.js`**: Tests the `/submit` route, ensuring it renders a form with the correct attributes and enforces a maximum character limit for the description.

- **`image-validation-test.js`**: Validates image file extensions, covering valid and invalid extensions to ensure the application complies with image format requirements.

- **`database-test.js`**: Interacts with the database and model functions to retrieve and insert artworks, ensuring the application's database operations are correct.

## Summary

This project's directory structure is well-organized, comprising core application files and comprehensive tests. It covers the frontend and backend components, database interactions, and image file validation. These tests help maintain the application's correctness and compliance with specified requirements.


## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Credits

The project was created by <a href="https://github.com/cazanelena">Elena Cazan</a>, <a href="https://github.com/isobelbutler">Isobel Butler</a>, <a href="https://github.com/benante">Tommaso Orlandi</a> & <a href="https://github.com/yuqingwwang">Yuqing Wang</a>.

