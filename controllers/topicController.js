import Topic from "../models/Topic.js"

//@route GET /api/topics @desc get all topic @access public
export const getTopics = async (req, res) => {
  const topics = await Topic.find({})
  return res.json(topics)
}
