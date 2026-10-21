"use server";
import { z } from "zod";
import { v4 as uuidv4 } from "uuid";
import postgres from "postgres";
import { revalidatePath } from "next/dist/server/web/spec-extension/revalidate";
import type { Games } from "./definitions";
import { redirect } from "next/navigation";
const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

const GameSchema = z.object({
  id: z.string(),
  gameId: z.string(),
  gameName: z.coerce.string(),
  genre: z.string(),
});

const CreateGame = GameSchema.omit({ id: true });

export async function createGame(formData: FormData) {
  console.log(
    "Checking DB URL at runtime:",
    process.env.NEXT_PUBLIC_SUPABASE_URL,
  );

  const { gameId, gameName, genre } = CreateGame.parse({
    gameId: uuidv4(),
    gameName: formData.get("gameName"),
    genre: formData.get("genre"),
  });

  // Insert data into the database

  try {
    await sql`

    INSERT INTO games (game_id, game_name, genre)
    VALUES (${gameId}, ${gameName}, ${genre})
  `;
  } catch (error) {
    // If a database error occurs, return a more specific error.
    console.error("Database error:", error);
  }

  revalidatePath("/dashboard/");
  redirect("/dashboard/");
}

export async function deleteGame(id: string) {
  await sql`DELETE FROM games WHERE id = ${id}`;
  revalidatePath("/dashboard/games");
}

const fetchGames = async () => {
  try {
    const data = await sql<Games[]>`SELECT * FROM games`;
    return data;
  } catch (error) {
    console.error("Database error:", error);
    throw error;
  }
};

export default fetchGames;
