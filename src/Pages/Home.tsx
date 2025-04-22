import { PlusIcon } from "@heroicons/react/24/outline";
import Note from "../Components/Note";
import AddNoteModal from "../Components/AddNoteModal";
import { tempNotes } from "../tempdata";
import { useState } from "react";
import { TypeNote } from "../types";
import DeleteModal from "../Components/DeleteModal";

export default function Home() {
  const [notes, setNotes] = useState<TypeNote[]>(tempNotes);
  const [editNote, setEditNot] = useState<TypeNote | null>(null);
  const [showAddNoteModal, setShowAddNoteModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [noteIdToDelete, setNoteIdToDelete] = useState<string | null>(null);

  const handleSaveNot = (note: Omit<TypeNote, "id">) => {
    if (editNote) {
      setNotes((prev) =>
        prev.map((n) => (n.id === editNote.id ? { ...editNote, ...note } : n))
      );
      setEditNot(null);
    } else {
      const newNote = { id: Date.now().toString(), ...note };
      setNotes((prev) => [...prev, newNote]);
    }

    setShowAddNoteModal(false);
  };
  const handleEditNote = (note: TypeNote) => {
    setEditNot(note);
  };

  const handlerDeletedNote = (id: string) => {
    setNoteIdToDelete(id);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    if (noteIdToDelete) {
      setNotes((prev) => prev.filter((note) => note.id !== noteIdToDelete));
      setNoteIdToDelete(null);
      setShowDeleteModal(false);
    }
  };

  return (
    <div className=" w-full h-full  flex flex-col items-center  ">
      <div className=" md:w-10/12 w-11/12   h-fit     grid md:grid-cols-4  grid-cols-1 gap-4  py-28   scroll-auto">
        {notes?.map((note) => (
          <Note
            key={note.id}
            noteObj={note}
            onClose={setShowAddNoteModal}
            onEdit={handleEditNote}
            onDelete={handlerDeletedNote}
          />
        ))}

        <button
          onClick={() => {
            setShowAddNoteModal(true);
            setEditNot(null);
          }}
          className=" fixed left-10 bottom-10 md:h-20  h-14 md:w-20 w-14  flex justify-center items-center rounded-full bg-[#FFC6C6] shadow-xl transition-transform duration-200 hover:scale-110 "
        >
          <PlusIcon className="md:size-10 size-6" />
        </button>
        {showAddNoteModal && (
          <AddNoteModal
            onClose={setShowAddNoteModal}
            onSave={handleSaveNot}
            initialData={editNote}
          />
        )}
      </div>
      {showDeleteModal && (
        <DeleteModal
          onClose={() => {
            setShowDeleteModal(false);
            setNoteIdToDelete(null);
          }}
          onConfirm={confirmDelete}
        />
      )}
    </div>
  );
}
