import { v4 as uuidv4 } from "uuid";
import { supabase } from "../db/init";

export async function smash(count: number) {
  // Check local storage for user id
  const userId = localStorage.getItem("userId");

  try {
    // if not found, create one
    if (!userId) {
      await createNewInstance(count);
    } else {
      // Get the user's previous smash count
      const { data: prevSmashData } = await supabase
        .from("smashes")
        .select("smash_count")
        .eq("id", userId)
        .maybeSingle();

      // if no data matches user id, create a new user
      if (!prevSmashData) {
        await createNewInstance(count);
        return;
      }

      const prevSmashCount = prevSmashData.smash_count ?? 0;

      // Update the user's smash count
      await updatePrevInstance(prevSmashCount + count, userId);
    }
  } catch (error) {
    console.error("Smash error: ", error);
  }
}

async function createNewInstance(count: number) {
  // Create a new userid
  const userId = uuidv4();
  localStorage.setItem("userId", userId);

  // Get user agent
  const ua = window.navigator.userAgent;

  const { data } = await supabase.from("smashes").insert({
    id: userId,
    smash_count: count,
    user_agent: ua,
  });

  return data;
}

async function updatePrevInstance(count: number, userId: string) {
  // Update the user's smash count
  const { data } = await supabase
    .from("smashes")
    .update({
      smash_count: count,
    })
    .eq("id", userId);

  return data;
}
