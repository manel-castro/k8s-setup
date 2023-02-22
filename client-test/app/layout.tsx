import Link from "next/link";
import Header from "./(layout)/Menu";

export const metadata = {
  title: "atest",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />

      <body style={{ margin: 0, padding: 0 }}>
        <div style={{ margin: "0px 50px" }}>
          <Header></Header>
          <div style={{ padding: 10 }}>{children}</div>
        </div>
      </body>
    </html>
  );
}
