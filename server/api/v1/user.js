import {createClient} from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_KEY
const jwttoken = process.env.jwttoken
const supabase = createClient(supabaseUrl, supabaseKey)



export default eventHandler(async (event) => {
  const { users, error } = await supabase.auth.getUser()
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