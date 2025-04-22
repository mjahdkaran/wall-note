import { TrashIcon, PencilSquareIcon } from "@heroicons/react/24/outline";
import { TypeNote } from "../types";
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
  const handlerEdit = (obj: TypeNote, value: boolean) => {
    onEdit(obj);
    onClose(value);
  };
  const handlerDelete = (id: string) => {
    onDelete(id);
  };
  return (
    <div className=" bg-[#FFF1D5] md:h-60 h-32 rounded-md flex flex-col justify-between  shadow-lg  hover:shadow-xl   ">
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
            className="transition-transform duration-200 hover:scale-125 hover:text-blue-600"
          >
            <PencilSquareIcon className="size-4 md:size-5 mx-2" />
          </button>
        </div>
      </div>
    </div>
  );
}
