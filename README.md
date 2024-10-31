# Imagica 🎨

**Imagica** is a creative platform where users can generate, view, and share AI-generated images. Leveraging Hugging Face's AI model for image generation and Cloudinary for image storage, Imagica aims to provide a seamless experience for generating and managing stunning visuals.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **AI-Powered Image Generation**: Create unique images based on text prompts using Hugging Face's Stable Diffusion model.
- **Image Download and Sharing**: Download images to local storage or share directly within the Imagica community.
- **Prompt Suggestions**: Get random creative prompts for inspiration.
- **Cloud-Based Storage**: Upload and store generated images securely on Cloudinary.

---

## Tech Stack

- **Frontend**: React, TailwindCSS, Axios, Notistack for notifications
- **Backend**: Node.js, Express.js, Mongoose
- **Database**: MongoDB
- **APIs**:
  - Hugging Face Stable Diffusion for image generation
  - Cloudinary for image storage
- **Utilities**: FileSaver.js for downloading images, Blob-util for Base64 conversions

---

## Installation

### Prerequisites

- Node.js and npm installed
- MongoDB database (local or remote)
- Cloudinary account for image storage
- Hugging Face API token for image generation

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/imagica.git
   cd imagica
   Install dependencies
   ```

bash
Copy code
npm install
Set up environment variables

Create a .env file in the project root and add the following keys:

plaintext
Copy code
MONGO_URI=your_mongodb_connection_string
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
HUGGING_FACE_API_KEY=your_hugging_face_api_key
Start the server

bash
Copy code
npm start
Run frontend

Change to the client directory and start the frontend.
bash
Copy code
cd client
npm install
npm start
Usage
Generate Images: Enter a text prompt, or use the "Surprise Me" feature to auto-generate prompts, then click "Generate" to see the AI-generated image.
Save or Share: Once the image is generated, download it directly or share it within the Imagica community.
Explore Recent Images: View the latest images created by others in the community.
API Endpoints
GET /api/v1/images: Retrieve recent images in the community
POST /api/v1/images/create: Upload a generated image to Cloudinary and save it in MongoDB
POST /api/v1/generate: Generate a new image from a text prompt using Hugging Face API
Folder Structure
plaintext
Copy code
Imagica/
├── client/ # React frontend
├── server/ # Express backend
│ ├── config/ # Configuration files (Cloudinary, MongoDB)
│ ├── controllers/ # API controllers for image handling
│ ├── models/ # Mongoose models (e.g., image model)
│ ├── routes/ # API routes
│ ├── .env # Environment variables
│ └── server.js # Express server setup
├── README.md
└── package.json
Contributing
We welcome contributions to Imagica! To contribute:

Fork the project.
Create a feature branch (git checkout -b feature/YourFeature).
Commit your changes (git commit -m 'Add Your Feature').
Push to the branch (git push origin feature/YourFeature).
Open a Pull Request.
License
Distributed under the MIT License. See LICENSE for more information.

Enjoy creating with Imagica! 🌟
