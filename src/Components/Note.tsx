import { TrashIcon, PencilSquareIcon } from "@heroicons/react/24/outline";
import { TypeNote } from "../types";
import { convertDateToNumber, getTodayDate } from "../utils/functions";
import { useEffect, useState } from "react";

interface NoteProps {
  noteObj: TypeNote;
  onClose: (value: boolean) => void;
  onEdit: (note: TypeNote) => void;
  onDelete: (id: string) => void;
  dragHandleProps?: any; 
}

export default function Note({
  noteObj,
  onClose,
  onEdit,
  onDelete,
  dragHandleProps,
}: NoteProps) {
  const today = getTodayDate();
  const [bgColor, setBgColor] = useState("bg-[#FFF1D5]");

  const handlerEdit = (obj: TypeNote, value: boolean) => {
    onEdit(obj);
    onClose(value);
  };

  const handlerDelete = (id: string) => {
    onDelete(id);
  };

  const orderNotes = () => {
    let color;
    const todyNumber: number = convertDateToNumber(today);
    const deadLineNumber: number = convertDateToNumber(noteObj.deadline);

    if (isNaN(deadLineNumber)) {
      color = "bg-[#FFF1D5]";
    } else if (todyNumber - deadLineNumber === 0) {
      color = "bg-green-200";
    } else if (todyNumber - deadLineNumber > 0) {
      color = "bg-red-200";
    } else {
      color = "bg-[#FFF1D5]";
    }
    setBgColor(color);
  };

  useEffect(() => {
    orderNotes();
  }, [today, noteObj.deadline]);

  return (
    <div
   
      className={` ${bgColor} md:h-60 h-32 rounded-md flex flex-col justify-between shadow-lg hover:shadow-lg hover:shadow-orange-500`}
    >

      <div
        {...dragHandleProps}
        className=" flex justify-between cursor-grab active:cursor-grabbing text-gray-400 hover:text-gray-600 p-2 "
      >
        <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
          <path d="M7 4h2v2H7V4zm0 4h2v2H7V8zm0 4h2v2H7v-2zm4-8h2v2h-2V4zm0 4h2v2h-2V8zm0 4h2v2h-2v-2z" />
        </svg>
        <p className="text-xs  text-left text-gray-500">{noteObj.record}</p>
      </div>


      <div className="flex flex-col md:text-lg text-sm py-3 px-2 ">
        <p className="md:line-clamp-5 line-clamp-3 ">{noteObj.text}</p>
      </div>


      <div className="bg-orange-200 flex justify-between p-1 rounded-md">
        <div className="text-xs text-gray-700">
          <span>مهلت انجام : </span>
          {noteObj.deadline}
        </div>
        <div>
          <button
            className="transition-transform duration-200 hover:scale-125 hover:text-red-600"
            onClick={() => handlerDelete(noteObj.id)}
          >
            <TrashIcon className="size-4 md:size-5 mx-2" />
          </button>

          <button
            onClick={() => {
              handlerEdit(noteObj, true);
            }}
            className="transition-transform duration-200 hover:scale-125 hover:text-blue-600"
          >
            <PencilSquareIcon className="size-4 md:size-5 mx-2" />
          </button>
        </div>
      </div>
    </div>
  );
}
