const express = require('express');
const router = express.Router();
const Discussion = require('../models/Post_new_discussion');


//Gets every discussion back
router.get('/', async(req, res) => {
    try{
        const discussions = await Discussion.find();
        res.json(discussions);
    }catch(err){
        res.json({message: err});
    }
});

//Specific discussion
router.get('/:discussionID', async(req, res) => {
    try{
        const singleDiscussion = await Discussion.findById(req.params.discussionID);
        res.json(singleDiscussion);
    }
    catch(err){
        res.json(error)
    }
})
 router
//Submit a new discussion
router.post('/', async (req, res) => {
    const post = new Discussion({
        title: req.body.title,
        description: req.body.description
    });
    console.log(req.body);
    try {
        const savedDiscussion = await post.save();
        res.json(savedDiscussion);
    } catch(error) {
        res.json({message: error})
    }
})

//update comments
router.patch('/:discussionId', async (req, res) => {

    try {
        const updatedDiscussion = await Discussion.updateOne({_id : req.params.discussionId}, {$set: {comments: req.body.comments}})
        res.json(updatedDiscussion);
    } catch(error){
        res.json(error)
    }
})

//Delete Discussions
router.delete('/:discussionId', async (req, res) => {
    try {
        const removedDiscussion = await Discussion.remove({ _id: req.params.discussionId})
        res.json(removedDiscussion);
    } catch(err) {
        res.json({message: err})
    }
})

module.exports = router;