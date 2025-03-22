import { db } from "./database/drizzle";// Import your Drizzle DB connection
import { books } from "./database/schema"; // Import your books schema
import { promises as fs } from "fs"; // Use promises for async read

async function insertBooks() {
  try {
    // Read JSON file asynchronously
    const fileData = await fs.readFile("dummybooks.json", "utf8");
    const booksData = JSON.parse(fileData);

    // Insert into the database
    await db.insert(books).values(booksData);
    
    console.log("📚 Books uploaded successfully!");
  } catch (error) {
    console.error("❌ Error inserting books:", error);
  }
}

// Run the function
insertBooks();
