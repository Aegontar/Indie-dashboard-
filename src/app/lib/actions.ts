"use server";
import { z } from "zod";
import { v4 as uuidv4 } from "uuid";
import postgres from "postgres";
import { revalidatePath } from "next/dist/server/web/spec-extension/revalidate";
import { redirect } from "next/navigation";
const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

const GameSchema = z.object({
  id: z.string(),
  gameId: z.string(),
  gameName: z.coerce.string(),
  /*   status: z.enum(["pending", "paid"]), */
  genre: z.string(),
});

/* const customerId = uuidv4(); */

/* export type State = {
  errors?: {
    customerId?: string[];
    amount?: string[];
    status?: string[];
  };
  message?: string | null;
};
 */
const CreateGame = GameSchema.omit({ id: true });

export async function createGame(formData: FormData) {
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

  /*   try {

  } catch (error) {
    error.cause = { nextNoDigest: true, originalCause: error.cause };
    throw error;
  }
 */
  /*   revalidatePath("/dashboard/");
  redirect("/dashboard/"); */

  /*
   */
  /*       customerId,
    gameName: formData.get("gameName"),
    genre: formData.get("genre"),
 */
  // Test it out:
  /*   console.log(`form data`, rawFormData); */
}

/*       id: string;
  name: string;
  genre: string; */
