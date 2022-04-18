export const fetchPosts = async () => {

        try {
        const response = await fetch("http://localhost:3001/blogPosts/")
        if (response.ok) {
        const data = await response.json()
        return data
        }
        
      } catch(error) {
        console.log(error)
      }
}
