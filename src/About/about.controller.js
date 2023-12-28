const { Abouts } = require("./about.model")

const createAbout = async(req,res)=> {
    try {
        const newAbout = new Abouts(req.body)
        const result = await newAbout.save()
        res.status(200).json({
            result
        })
    } catch (error) {
        res.status(500).json({
            error
        })
    }
}

const getAllAbout = async(req,res)=> {
    try {
        const result = await Abouts.find()
        res.status(200).json({
            result
        })
    } catch (error) {
        res.status(500).json({
            error
        })
    }
}

const updateAbout = async(req,res)=> {
    const aboutId = req.params.id;

    try {
        // Find the About document by ID and update it
        const updatedAbout = await Abouts.findByIdAndUpdate(
          aboutId,
          {
            $set: {
              name: req.body.Name || '',
              university: req.body.University || '',
              email: req.body.Email || '',
              address: req.body.Address || '',
            },
          },
          { new: true } // Return the updated document
        );
    
        if (!updatedAbout) {
          return res.status(404).json({ message: 'About not found' });
        }
    
        res.json({ message: 'About updated successfully', result: updatedAbout });
      } catch (error) {
        console.error('Error updating About:', error);
        res.status(500).json({ message: 'Internal Server Error' });
      }
}

module.exports = {
    createAbout,
    getAllAbout,
    updateAbout
}