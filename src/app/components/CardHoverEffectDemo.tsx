import { HoverEffect } from "../ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8 ">
      <h1 className="text-center text-3xl font-bold">My Skill</h1>
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "HTML",
    description: "Dasar dari semua halaman web, HTML menyediakan struktur untuk konten di internet.",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    title: "CSS",
    description: "CSS memungkinkan penataan dan tata letak yang menarik untuk halaman web dengan berbagai desain dan estetika.",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    title: "Sass",
    description: "Sass adalah preprocessor CSS yang memperkenalkan fitur-fitur seperti variabel, nesting, dan mixins untuk menulis kode CSS yang lebih efisien dan terorganisir.",
    link: "https://sass-lang.com/",
  },
  {
    title: "Tailwind CSS",
    description: "Framework CSS utilitas-first yang memungkinkan pembuatan desain yang responsif dan kustom dengan cepat dan konsisten.",
    link: "https://tailwindcss.com/",
  },
  {
    title: "JavaScript",
    description: "Bahasa pemrograman yang memberikan interaktivitas dan dinamika pada halaman web, mendukung pengembangan aplikasi web modern.",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    title: "PHP",
    description: "Bahasa pemrograman server-side yang banyak digunakan untuk membangun aplikasi web dinamis dan sistem manajemen konten.",
    link: "https://www.php.net/",
  },
  {
    title: "WordPress",
    description: "Platform CMS yang sangat populer untuk membangun dan mengelola situs web dengan antarmuka yang mudah digunakan dan beragam plugin.",
    link: "https://wordpress.org/",
  },
  {
    title: "MySQL",
    description: "Sistem manajemen basis data relasional open-source yang digunakan untuk menyimpan dan mengelola data dalam berbagai aplikasi web.",
    link: "https://www.mysql.com/",
  },
  {
    title: "Git",
    description: "Sistem kontrol versi terdistribusi yang membantu dalam melacak perubahan pada kode sumber dan kolaborasi tim pengembangan perangkat lunak.",
    link: "https://git-scm.com/",
  },
  {
    title: "GitHub",
    description: "Platform berbasis Git yang menyediakan hosting untuk repositori kode sumber dan alat kolaborasi untuk pengembang perangkat lunak.",
    link: "https://github.com/",
  },
  {
    title: "Figma",
    description: "Alat desain antarmuka berbasis web yang memungkinkan kolaborasi real-time dalam pembuatan desain UI/UX dan prototyping.",
    link: "https://www.figma.com/",
  },
  {
    title: "Laravel",
    description: "Framework PHP yang mempermudah pengembangan aplikasi web dengan fitur-fitur canggih seperti routing, ORM, dan manajemen sesi.",
    link: "https://laravel.com/",
  },
];
