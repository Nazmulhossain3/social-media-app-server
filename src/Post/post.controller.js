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

 

const getAllPost = async(req,res)=> {
    try {
        const result = await Posts.find()
        res.status(200).json({
            result
        })
    } catch (error) {
       res.status(500).json({
        error
       }) 
    }
}

const getSinglePost = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Posts.findById(id);

    if (!result) {
      // If no post is found with the given ID
      return res.status(404).json({ error: 'Post not found' });
    }

    res.status(200).json({
      result
    });
  } catch (error) {
    res.status(500).json({
      error
    });
  }
};


const incrementPostReaction = async (req, res) => {
  try {
    const { postId } = req.params;
   

    // Check if the post with the given ID exists
    const existingPost = await Posts.findById(postId);
    if (!existingPost) {
      return res.status(404).json({ error: 'Post not found' });
    }

    // Increment reactions count
    const updatedPost = await Posts.findByIdAndUpdate(
      postId,
      { $inc: { reactionsCount: 1 } },
      { new: true }
    );

    res.json({ result: updatedPost });
  } catch (error) {
    console.error('Error incrementing reactions count:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};


module.exports = {
  createPost,
  getAllPost,
  getSinglePost,
  incrementPostReaction,
};


module.exports = {
    createPost,
    getAllPost,
   getSinglePost,
   incrementPostReaction
}