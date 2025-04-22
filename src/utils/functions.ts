import DateObject from "react-date-object";

// گرفتن تاریخ روز جاری
export const getTodayDate = () => {
  return new DateObject().format("YYYY-MM-DD");
};
//تبدیل تاریخ به عدد
export const convertDateToNumber = (dateStr: string): number => {
  const newString = dateStr.replaceAll("-", ""); 
  const number = parseInt(newString, 10); 
  return number;
};


  
