import {createClient} from '@supabase/supabase-js'

const supabaseUrl = 'https://cujuxkdkpgxdhybcppxz.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN1anV4a2RrcGd4ZGh5YmNwcHh6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzU4OTU4OTgsImV4cCI6MTk5MTQ3MTg5OH0.V9Bjh9HHtvzu-cblE0Q0tNKxoGS17pRmvx1OtDlvB9Q'
const supabase = createClient(supabaseUrl, supabaseKey)

export default eventHandler(async (event) => {
  const { data: users, error } = await supabase.auth.signInWithOAuth()
  if (error) {
    console.error(error)
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to retrieve user list' })
    }
  } else {
    return {
      statusCode: 200,
      body: JSON.stringify(users)
    }
  }
})