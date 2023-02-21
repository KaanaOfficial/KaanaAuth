import { serverSupabaseClient } from "#supabase/server";
export default eventHandler(async (event) => {
  const client = serverSupabaseClient(event);
  const { data } = await client
    .from("profiles")
    .select("id, username, full_name, avatar_url, website")
    .eq("username", "albert")
    .limit(1);
  return data;
});
