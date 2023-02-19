import { serverSupabaseClient } from "#supabase/server";
export default eventHandler(async (event) => {
  const client = serverSupabaseClient(event);
  const { data } = await client
    .from("profiles")
    .select()
    .order("id", { ascending: false });
  return { users: data };
});

