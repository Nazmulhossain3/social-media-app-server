const { Posts } = require("./post.model")

const createPost = async (req,res)=> {
    try {
        const { title, imageUrl } = req.body;
    
        // Save the post to MongoDB
        const newPost = new Posts({
          title,
          imageUrl,
        });
    
        const savedPost = await newPost.save();
    
        // Send a response indicating success
        res.json({ success: true, data: savedPost });
      } catch (error) {
        console.error('Error creating post:', error);
        // Send a response indicating failure
        res.status(500).json({ success: false, error: 'Internal Server Error' });
      }
    
}


module.exports = {
    createPost
}