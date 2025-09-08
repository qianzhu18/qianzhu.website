import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "千逐的个人空间 - 千千君子，温润如玉",
  description: "融合中国古典美学与现代技术的命令行式个人网站，展示千逐作为系统构建者的专业能力和人文素养。",
  keywords: "千逐, 个人网站, 命令行界面, CLI, 玉石主题, 系统构建, AI探索, 知识管理",
  authors: [{ name: "千逐", url: "https://qianzhu.dev" }],
  creator: "千逐",
  publisher: "千逐",
  robots: "index, follow",
  icons: {
    icon: [
      { url: 'https://youke1.picui.cn/s1/2025/09/08/68beedd78ab1c.jpg', sizes: 'any' },
    ],
    shortcut: 'https://youke1.picui.cn/s1/2025/09/08/68beedd78ab1c.jpg',
    apple: 'https://youke1.picui.cn/s1/2025/09/08/68beedd78ab1c.jpg',
  },
  openGraph: {
    title: "千逐的个人空间",
    description: "千千君子，温润如玉 - 融合中国古典美学与现代技术的交互式个人网站",
    type: "website",
    locale: "zh_CN",
  },
  twitter: {
    card: "summary_large_image",
    title: "千逐的个人空间",
    description: "千千君子，温润如玉 - 命令行式个人网站",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f5f1" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1f1e" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="zh-CN" 
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
