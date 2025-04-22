interface DeleteModalProps {
    onClose: (value: boolean) => void;
    onConfirm: () => void;
  }
export default function DeleteModal({onClose,onConfirm }:DeleteModalProps) {
  return (
    <div className="fixed bg-black bg-opacity-40 top-0 left-0 right-0 bottom-0 flex justify-center items-center py-20">
      <div className="md:w-4/12 w-11/12 md:h-60 h-44 bg-white   rounded-lg py-2 px-4 flex flex-col ">
        <div className="flex justify-between items-center text-gray-600">
          <p>حذف یادداشت</p>
          <button className="font-bold text-xl hover:text-red-600">×</button>
        </div>
        <p className="h-1/2 flex justify-center items-center md:text-xl">
          آیا از حذف یادداشت مطمئن هستید؟
        </p>
        <div className="flex  justify-end mt-5 text-orange-700">
          <button
          onClick={()=>onClose(false)}
           className="md:w-20 w-14 rounded-md  md:p-2 p-1 md:text-lg text-sm  flex justify-center items-center border border-orange-700 hover:bg-orange-700 hover:text-black mx-2 my-1">
            خیر
          </button>
          <button
          onClick={onConfirm }
           className="md:w-20 w-14 rounded-md  md:p-2 p-1 md:text-lg text-sm  flex justify-center items-center border border-orange-700 hover:bg-orange-700 hover:text-black mx-2 my-1">
            بلی
          </button>
        </div>
      </div>
    </div>
  );
}
