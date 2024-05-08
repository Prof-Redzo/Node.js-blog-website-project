import User from "../models/User.js";

export const updateUser = async (req, res) => {
  try{
    const { id } = req.params;
  const user = req.body;

  if(id === req.user.id) {
    await User.findByIdAndUpdate(id, user);
    
    return res.status(200).send(user);
  } else{
   return res.status(403).send("Cannot update user");
  }
  }

 catch(e) {
  res.status(500).send("Something went wrong");
}
}

export const deleteUser = async (req, res) => {
   const { id } = req.params;
   
   try{
    if(id === req.user.id){
 const result = await User.findByIdAndDelete(id);
if (result) {
  res.status(204).send();
} else {
  res.status(404).send("User not found");
}
} else {
  res.status(403).send("Cannot delete user");
}
} catch(e) {
  res.status(500).send("Something went wrong");
}

}