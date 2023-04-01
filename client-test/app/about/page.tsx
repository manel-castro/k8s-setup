import Link from "next/link";

export const metadata = {
  title: "2test",
};
export default function About() {
  return (
    <div>
      Abo1ut2/ssabout22
      <Link href="/about/[id]" as={`/about/${123}`}>
        About123
      </Link>
    </div>
  );
}
