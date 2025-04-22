import DateObject from "react-date-object";

// گرفتن تاریخ روز جاری
export const getTodayDate = () => {
  return new DateObject().format("YYYY-MM-DD");
};

export const convertDateToNumber = (dateStr: string): number => {
  const newString = dateStr.replaceAll("-", ""); // حذف "-" از تاریخ
  const number = parseInt(newString, 10); // تبدیل به عدد با پایه 10
  console.log(number);
  return number;
};


export const orderNotes = (today: string, deadline: string): "dueToday" | "overDue" | "upComing" => {
    let state: "dueToday" | "overDue" | "upComing";
  
    const todayNumber = convertDateToNumber(today);
    const deadlineNumber = convertDateToNumber(deadline);
  
    if (todayNumber - deadlineNumber === 0) {
      state = "dueToday";
    } else if (todayNumber - deadlineNumber < 0) {
      state = "overDue";
    } else {
      state = "upComing";
    }
  
    return state;
  };
  