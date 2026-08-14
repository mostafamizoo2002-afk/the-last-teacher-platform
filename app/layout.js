export const metadata = {
  title: "THE LAST TEACHER",
  description: "منصة THE LAST TEACHER التعليمية",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
