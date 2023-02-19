export default defineEventHandler(async (event) => {
    loading.value = true;
    try {
        const { error, user } = await supabase.auth.signInWithOAuth({
            provider: "google",
        });
        if (error) throw error;
        console.log("Successfully signing in with Google!");
    } catch (error) {
        alert(error.error_description || error.message);
    } finally {
        loading.value = false;
        return {user};
    }
});