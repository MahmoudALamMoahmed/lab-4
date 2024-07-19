import noteModel from "../../../database/models/note.model.js";

const addNote = async (req, res) => {
  let addedNote = await noteModel.insertMany(req.body);
  res.json({ message: "added" });
};

const getAllNotes = async (req, res) => {
  let allNotes = await noteModel
    .find()
    .select("title -_id createdBy")
    .populate("createdBy");
  res.json({ message: "Succeed", allNotes });
};
export { addNote, getAllNotes };
