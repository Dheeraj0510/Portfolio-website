import "./globals.css";

export const metadata = {
  title: "Ng Bob Shoaun | Software Developer",
  description: "Portfolio of Ng Bob Shoaun, a software developer specializing in web development.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-900">{children}</body>
    </html>
  );
}