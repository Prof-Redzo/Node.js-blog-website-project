import Blog from "../models/Blog.js";


export const getBlog = async (req,res) => {
  const blog = await blog.find().select("-__v");

  res.status(200).send(blog);
}

export const createBlog = async (req, res) => {
  const car = new Blog({ ...req.body, owner: req.user.id });

  try{
  await car.save();
  res.status(201).send(Blog);
} catch (e) {
  res.status(500).send("Could not save your blog");
}
} 
export const updateBlog = async (req, res) => {
  const { id } = req.params;

 const result = await Blog.findOneAndUpdate({ _id: id, owner: req.user.id }, req.body);
  
if(result){
    res.status(200).send(req.body);
  } else{
    res.status(404).send("Blog not found");
  }
 
}

export const deleteBlog = async (req, res) => {
  const { id } = req.params;

  try{
  const result = await Blog.findOneAndDelete({ _id: id, owner: req.user.id });

  if(result){
  res.status(204).send();
} else {
  res.status(404).send("Blog not found, could not delete");
}
} catch(e){
  res.status(500).send("Could not delete blog with id:" + id);
}
}

export const deleteUser = async (req, res) => {
  const { id } = req.params;

  const result = await Blog.findByIdAndUpdate(id, {sold: true});

  res.status(200).send("User deleted successfully");
}