# AI Art Gallery

AI Art Gallery is a place to share your AI art.

## Remote Deployment

~~This app is deployed on fly.io and can be accessed at:~~

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
| uploaded_by | text | |

</details>

## Usage

Start by viewing other's AI images. If you have something to share, just click on the 'submit' button in the menu bar.

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.
