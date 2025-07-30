
# 📊 AdMyBrand Analytics Dashboard

A fast, responsive, AI-powered analytics dashboard built with **Next.js**, **TypeScript**, **TailwindCSS**, and **shadcn/ui**. This project supports chart visualizations, CSV/XLS upload, data download (PDF/CSV), dark mode, and mobile responsiveness.

---

## 🚀 Features

- 📈 Beautiful charts (Line, Bar, Pie) using Recharts
- 🗂 Upload support for CSV/XLS files
- 📥 Export data as PDF or CSV
- 🔦 Dark Mode toggle using `shadcn/ui`
- 📱 Fully responsive layout
- ⚡ Built with TypeScript and TailwindCSS
- 🧠 Ready for Supabase or Express backend integration

---

## 🛠️ Tech Stack

- **Frontend**: [Next.js 14 (App Router)](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Charts**: [Recharts](https://recharts.org/en-US/)
- **Data Utils**: `jsPDF` for PDF, Blob APIs for CSV

---

## 📂 Folder Structure

```
admybrand-dashboard/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Home page
│   │   ├── globals.css           # Global styles with Tailwind
│   ├── components/
│   │   ├── AnalyticsCharts.tsx   # Recharts visuals
│   │   ├── OverviewCards.tsx     # Summary cards
│   │   ├── DownloadButtons.tsx   # PDF/CSV download UI
│   │   ├── FileUpload.tsx        # Upload CSV/XLS
│   │   ├── ThemeToggle.tsx       # Dark mode toggle
│   ├── lib/
│   │   └── downloadUtils.ts      # Utility for generating PDF/CSV
├── public/
├── tailwind.config.ts
├── postcss.config.js
├── tsconfig.json
├── README.md
```

---

## 🧑‍💻 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/admybrand-dashboard.git
cd admybrand-dashboard
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Development Server

```bash
npm run dev
```

Now open `http://localhost:3000` in your browser.

---

## 📤 File Upload Format

Supported file types:
- `.csv`
- `.xls`, `.xlsx`

Make sure your file has a **header row** and **consistent columns**.

---

## 📥 Download Format

- **CSV**: Standard comma-separated values
- **PDF**: Pretty-printed JSON view of the uploaded data

---

## ⚙️ VS Code Settings (Optional Fix)

To enable Tailwind IntelliSense and avoid `@tailwind` warnings:

```json
// .vscode/settings.json
{
  "files.associations": {
    "*.css": "postcss"
  },
  "css.validate": false,
  "scss.validate": false,
  "less.validate": false
}
```

---

## 📦 Build for Production

```bash
npm run build
npm run start
```

---

## 🧪 Future Improvements

- Integrate with [Supabase](https://supabase.com/) for data persistence
- Add date/platform filters
- Add login/authentication (NextAuth/Supabase)
- Improve PDF formatting

---

## 📝 License

MIT License © 2025 [Parthasarathy_S]
