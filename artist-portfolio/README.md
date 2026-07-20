# 🎨 Artist Portfolio Website

A professional portfolio website built with **React + Tailwind CSS**.

---

## 📁 Project Structure

```
artist-portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       ← Navigation bar
│   │   ├── Hero.jsx         ← Hero / landing section
│   │   ├── About.jsx        ← About me section
│   │   ├── Portfolio.jsx    ← Gallery with filter
│   │   ├── Services.jsx     ← Services offered
│   │   ├── Contact.jsx      ← Contact form
│   │   └── Footer.jsx       ← Footer
│   ├── data/
│   │   └── portfolioData.js ← ⭐ EDIT THIS FILE
│   ├── App.jsx
│   ├── index.js
│   └── index.css
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Start development server
```bash
npm start
```

### 3. Build for production
```bash
npm run build
```

---

## ✏️ How to Customize

### Change Your Name & Info
Open `src/data/portfolioData.js` and update:
```js
export const artistInfo = {
  name: "Your Name",           // ← Apna naam
  email: "your@email.com",     // ← Apna email
  phone: "+92 300 0000000",    // ← Apna phone
  instagram: "https://instagram.com/yourhandle",
  ...
};
```

### Add Your Images
1. Put your images in `public/images/` folder
2. In `portfolioData.js`, update the `image` field:
```js
{
  id: 1,
  category: "painting",      // "painting", "sketch", or "calligraphy"
  title: "My Painting",
  description: "Oil on canvas, 2024",
  image: "/images/painting1.jpg",  // ← Apni image ka path
}
```

### Add Your Photo (About Section)
Open `src/components/About.jsx` and find the comment:
```
// TO ADD YOUR PHOTO:
// Replace this entire inner div with:
// <img src="/images/your-photo.jpg" alt="Artist" className="w-full h-full object-cover" />
```

---

## 📧 Enable Contact Form Emails

The form is currently simulated. To receive real emails, use **EmailJS** (free):

1. Go to [emailjs.com](https://www.emailjs.com) and create a free account
2. Create a service and template
3. Install: `npm install emailjs-com`
4. In `Contact.jsx`, replace the `setTimeout` block with:
```js
import emailjs from 'emailjs-com';

emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form, 'YOUR_USER_ID')
  .then(() => setSent(true))
  .catch(console.error)
  .finally(() => setSending(false));
```

---

## 🌐 Deploying Online (Free)

### Netlify (Recommended)
1. Run `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag & drop the `build/` folder
4. Done! You get a free link to share.

### Vercel
1. Push to GitHub
2. Connect at [vercel.com](https://vercel.com)
3. Auto-deploys on every push

---

## 🎨 Features
- ✅ Responsive (mobile + desktop)
- ✅ Portfolio gallery with category filter (All / Paintings / Sketches / Calligraphy)
- ✅ Lightbox image viewer (click any image)
- ✅ Smooth scroll navigation
- ✅ Animated sections on scroll
- ✅ Contact form
- ✅ Arabic calligraphy decorative elements
- ✅ Professional dark/parchment aesthetic
