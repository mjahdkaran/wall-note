import React, { useEffect, useState } from "react";
import { TypeNote } from "../types";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import DateObject from "react-date-object";
import { getTodayDate } from "../utils/functions";

interface AddNoteProp {
  onClose: (value: boolean) => void;
  onSave: (note: NoteDeatilType) => void;
  initialData?: TypeNote | null;
}
interface NoteDeatilType {
  text: string;
  record: string;
  deadline: string;
}
export default function AddNoteModal({
  onClose,
  onSave,
  initialData,
}: AddNoteProp) {


  
  const [noteDetail, setNoteDetail] = useState<NoteDeatilType>({
    text: "",
    record: getTodayDate(),
    deadline: "",
  });
  useEffect(() => {
    if (initialData) {
      setNoteDetail({
        text: initialData.text,
        record: initialData.record,
        deadline: initialData.deadline,
      });
    } else {
      setNoteDetail({
        text: "",
        record: getTodayDate(),
        deadline: "",
      });
    }
  }, [initialData]);
  const onChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setNoteDetail((prev) => ({ ...prev, [id]: value }));
  };
  const SaveHandler = () => {
    onSave(noteDetail);
    onClose(false);
  };
  return (
    <div
      onClick={() => {
        onClose(false);
      }}
      className="fixed bg-black bg-opacity-40 top-0 left-0 right-0 bottom-0 flex justify-center items-center py-20"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="md:w-8/12 w-11/12 bg-[#FFF1D5]  h-full rounded-lg p-5 flex flex-col "
      >
        <textarea
          id="text"
          onChange={onChangeHandler}
          value={noteDetail.text}
          placeholder="یادداشت ..."
          className="w-full h-40 p-3 rounded-md focus:outline-none resize-none flex-1 bg-inherit"
        />
        <div className="flex md:flex-col flex-row  mt-4 text-gray-500 md:text-sm text-xs ">
          <div className="my-2 ">
            <label htmlFor="record">تاریخ ثبت :</label>
            <DatePicker
              calendar={persian}
              locale={persian_fa}
              value={noteDetail.record}
              onChange={(date) =>
                setNoteDetail((prev) => ({
                  ...prev,
                  record: date?.format("YYYY/MM/DD") || "",
                }))
              }
              disabled
              inputClass=" bg-inherit focus:outline-none  mx-2 p-1"
            />
          </div>
          <div className="my-2 text-black">
            <label htmlFor="deadline">مهلت انجام :</label>
            <DatePicker
              calendar={persian}
              locale={persian_fa}
              value={noteDetail.deadline}
              onChange={(date) =>
                setNoteDetail((prev) => ({
                  ...prev,
                  deadline: date?.format("YYYY/MM/DD") || "",
                }))
              }
              inputClass="border-b bg-inherit focus:outline-none border-gray-500 mx-2 p-1"
             
            />
          </div>
        </div>
        <div className="flex  justify-end mt-5 text-orange-700">
          <button
            onClick={SaveHandler}
            className="md:w-20 w-14 rounded-md  md:p-2 p-1 md:text-lg text-sm  flex justify-center items-center border border-orange-700 hover:bg-orange-700 hover:text-black mx-2 my-1"
          >
            ذخیر
          </button>
          <button
            onClick={() => {
              onClose(false);
            }}
            className="md:w-20 w-14 rounded-md  md:p-2 p-1 md:text-lg text-sm  flex justify-center items-center border border-orange-700 hover:bg-orange-700 hover:text-black mx-2 my-1"
          >
            انصراف
          </button>
        </div>
      </div>
    </div>
  );
}
