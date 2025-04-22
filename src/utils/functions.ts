import DateObject from "react-date-object";

// گرفتن تاریخ روز جاری
export const getTodayDate = () => {
  return new DateObject().format("YYYY-MM-DD");
};

export const convertDateToNumber = (dateStr: string): number => {
  const newString = dateStr.replaceAll("-", ""); // حذف "-" از تاریخ
  const number = parseInt(newString, 10); // تبدیل به عدد با پایه 10
  return number;
};


  
