//import { useSupabaseClient } from "#supabase/server";
//const supabase = useSupabaseClient();
//const loading = ref(false);
export default defineEventHandler(async (event) => {
    loading.value = true;
    try {
        const { error, users } = await supabase.auth.signInWithOAuth({
            provider: 'google',
        });
        if (error) throw error;
        console.log("Successfully signing in with Google!");
    } catch (error) {
        alert(error.error_description || error.message);
    } finally {
        loading.value = false;
        return {users};
    }
});