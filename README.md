# ShirShiz - Website

A showcase and workshop site for Shir Azaria, custom cake designer.

The site is built with **React + Vite**, includes **EmailJS** integration for forms (leads / general inquiries), and uses **Supabase** for image hosting.

---

## 🚀 Running locally

```bash
npm install
npm run dev
```

---

## 🔨 Build for production

```bash
npm run build
```

---

## 🖼️ Uploading images to Supabase

There's a small script to upload images (e.g., gallery, cakes, workshops) directly to your Supabase storage bucket.

### How to run?

1. Make sure you have a `.env.local` file with your `SUPABASE_URL` and `SUPABASE_KEY`.

2. From your project directory, run:

```bash
node scripts/uploadImages.js
```

3. Follow the CLI instructions to select and upload files.

> 📌 Uploaded images will automatically be saved to the correct Supabase folder, and you’ll get public URLs to use on the site.

---

## ✉️ Contact

For questions or support, please reach out to  
📧 **Omer Cohen**: omcl97@gmail.com
