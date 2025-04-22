import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import DateObject from "react-date-object";

export  const getTodayDate = () => {
    return new DateObject({ calendar: persian, locale: persian_fa }).format("YYYY/MM/DD");
  };