import { TrashIcon, PencilSquareIcon } from "@heroicons/react/24/outline";
import { TypeNote } from "../types";
import { convertDateToNumber, getTodayDate } from "../utils/functions";
import { useEffect, useState } from "react";
interface NoteProps {
  noteObj: TypeNote;
  onClose: (value: boolean) => void;
  onEdit: (note: TypeNote) => void;
  onDelete: (id: string) => void;
}

export default function Note({
  noteObj,
  onClose,
  onEdit,
  onDelete,
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
      }
    if (todyNumber - deadLineNumber === 0) {
      console.log("dueToday");
      color = "bg-green-200";
    }
     else if (todyNumber - deadLineNumber > 0) {
      console.log("overDue",todyNumber , deadLineNumber );

      color = "bg-red-200 ";
    }
    else  {
      console.log("comingSoon",todyNumber , deadLineNumber );

      color = "bg-[#FFF1D5]";
    }
    setBgColor(color);
  };
  useEffect(() => {
    orderNotes();
  }, [today, noteObj.deadline]);

  return (
    <div
      className={` ${bgColor} md:h-60 h-32 rounded-md flex flex-col justify-between  shadow-lg  hover:shadow-lg hover:shadow-orange-500  `}
    >
      <div className="flex flex-col md:text-lg text-sm py-3 px-2 ">
        <p className="text-xs text-left text-gray-500">{noteObj.record}</p>
        <p className="md:line-clamp-5 line-clamp-3 ">{noteObj.text} </p>
      </div>
      <div className="bg-orange-200 flex justify-between p-1 rounded-md">
        <div className="text-xs text-gray-700">
          <span className="">مهلت انجام : </span>
          {noteObj.deadline}
        </div>
        <div>
          <button className="transition-transform duration-200 hover:scale-125 hover:text-red-600">
            <TrashIcon
              className="size-4 md:size-5 mx-2"
              onClick={() => handlerDelete(noteObj.id)}
            />
          </button>

          <button
            onClick={() => {
              handlerEdit(noteObj, true);
            }}
            className="transition-transform duration-200 hover:scale-125 hover:text-blue-600 "
          >
            <PencilSquareIcon className="size-4 md:size-5 mx-2" />
          </button>
        </div>
      </div>
    </div>
  );
}
