export async function getUsers() {
    try {
      const response = await fetch('src/getUsers.php')
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const text = await response.text();
      console.log(text);
  const users = JSON.parse(text);
      return users;
    }
    catch(error) {
      console.error('Error:', error);
    }
  }