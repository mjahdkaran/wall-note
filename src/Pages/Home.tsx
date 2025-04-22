import { useState } from "react";
import { PlusIcon } from "@heroicons/react/24/outline";
import { DndContext, closestCenter, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
import { arrayMove, SortableContext, useSortable, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import Note from "../Components/Note"; 
import AddNoteModal from "../Components/AddNoteModal"; 
import DeleteModal from "../Components/DeleteModal"; 
import { tempNotes } from "../tempdata";
import { TypeNote } from "../types"; 

function SortableNote({
  note,
  onClose,
  onEdit,
  onDelete,
}: {
  note: TypeNote;
  onClose: (val: boolean) => void;
  onEdit: (note: TypeNote) => void;
  onDelete: (id: string) => void;
}) {
  const { attributes, listeners, setNodeRef, transform, transition ,    setActivatorNodeRef,} = useSortable({ id: note.id });
  
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes}>
      <Note
        noteObj={note}
        onClose={onClose}
        onEdit={onEdit}
        onDelete={onDelete}
        dragHandleProps={{
          ref: setActivatorNodeRef,
          ...listeners,
        }} 
      />
    </div>
  );

}

export default function Home() {
  // States for handling notes and modals
  const [notes, setNotes] = useState<TypeNote[]>(tempNotes);
  const [editNote, setEditNot] = useState<TypeNote | null>(null);
  const [showAddNoteModal, setShowAddNoteModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [noteIdToDelete, setNoteIdToDelete] = useState<string | null>(null);

  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      const oldIndex = notes.findIndex((note) => note.id === active.id);
      const newIndex = notes.findIndex((note) => note.id === over.id);
      setNotes((items) => arrayMove(items, oldIndex, newIndex));
    }
  };

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
    <div className="w-full h-full flex flex-col items-center">
      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={notes.map((note) => note.id)} strategy={verticalListSortingStrategy}>
          <div className="md:w-10/12 w-11/12 h-fit grid md:grid-cols-4 grid-cols-1 gap-4 py-28">
            {notes.map((note) => (
              <SortableNote
                key={note.id}
                note={note}
                onClose={setShowAddNoteModal}
                onEdit={handleEditNote}
                onDelete={handlerDeletedNote}
              />
            ))}
          </div>
        </SortableContext>
      </DndContext>

      <button
        onClick={() => {
          setShowAddNoteModal(true);
          setEditNot(null);
        }}
        className="fixed left-10 bottom-10 md:h-20 h-14 md:w-20 w-14 flex justify-center items-center rounded-full bg-[#FFC6C6] shadow-xl transition-transform duration-200 hover:scale-110"
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
