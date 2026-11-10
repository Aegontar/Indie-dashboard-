/* import { fetchPostBySlug } from "@repo/api/blog"; */
import Link from "next/link";
import { notFound } from "next/navigation";
import { fetchGameById } from "../../lib/actions";

type Props = {
  params: Promise<{ slug: number }>;
};

export default async function GamePage({ params }: Props) {
  const { slug } = await params;
  const game = await fetchGameById(slug);
  console.log(`fetched game by id`, game);

  if (!game) {
    notFound();
  }

  return (
    <main>
      <Link href="/dashboard" className="text-sm text-blue-600 hover:underline">
        ← Back to posts
      </Link>
      <h1>{game[0].game_name}</h1>
      <h3>{game[0].genre}</h3>
    </main>
  );
}
