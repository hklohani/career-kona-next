import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    // const {title, description} = data
    const client = await MongoClient.connect(
      "mongodb+srv://hklohani:hklohani@cluster0.iat4x.mongodb.net/postsList?retryWrites=true&w=majority"
    );
    const db = client.db();
    const postsCollection = db.collection("posts");
    const result = await postsCollection.insertOne(data);
    client.close();
    res.status(201).json({ message: "Post inserted" });
  }
}
export default handler;
