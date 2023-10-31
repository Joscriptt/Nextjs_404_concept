import "./globals.css";
import Theming from "@/components/providers/Theme";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Theming>{children}</Theming>
      </body>
    </html>
  );
}
