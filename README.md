# React Note App with Drag & Drop 📝

به **React Note App** خوش آمدید! 🎉 این اپلیکیشن یادداشت‌برداری با استفاده از تکنولوژی‌های قدرتمند **React**، **Tailwind CSS** و **TypeScript** ساخته شده است. در این پروژه، یادداشت‌ها قابلیت **جابه‌جایی (Drag & Drop)** دارند و ویژگی‌های جالبی همچون تعیین مهلت انجام، ویرایش، حذف، و اضافه کردن یادداشت‌ها وجود دارد.

## ویژگی‌های برجسته 🌟

### 🚀 **جابه‌جایی یادداشت‌ها**
- هر یادداشت دارای یک آیکون سه نقطه در گوشه سمت راست است. با استفاده از این آیکون، می‌توانید یادداشت‌ها را به راحتی جابه‌جا کنید. این امکان در **دستگاه‌های دسکتاپ** فعال است، اما در دستگاه‌های موبایل به دلیل مشکلات تاچ و نیاز به زمان بیشتر برای انجام این عملیات غیرفعال می‌باشد.

### 🌈 **رنگ‌بندی یادداشت‌ها بر اساس مهلت انجام**
- **یادداشت‌های منقضی‌شده**: رنگ یادداشت به **قرمز** تغییر می‌کند.
- **یادداشت‌های امروز**: رنگ یادداشت به **سبز** تغییر می‌کند.
- **یادداشت‌های بدون مهلت یا با مهلت آینده**: رنگ یادداشت ثابت می‌ماند و تغییری نمی‌کند.

### ✏️ **ویرایش یادداشت‌ها**
- برای ویرایش یادداشت، کافی است بر روی دکمه **مداد** در پایین هر یادداشت کلیک کنید.

### 🗑️ **حذف یادداشت‌ها**
- برای حذف یک یادداشت، روی آیکون **سطل زباله** کلیک کنید. بعد از تایید حذف از طریق یک مودال، یادداشت حذف می‌شود.

### ➕ **اضافه کردن یادداشت جدید**
- در گوشه پایین سمت چپ صفحه یک دکمه دایره‌ای شکل قرار دارد که شما را قادر می‌سازد یادداشت جدیدی اضافه کنید، حتی اگر محتوای آن یادداشت خالی باشد.

### 📅 **تاریخ ثبت خودکار**
- تاریخ ثبت هر یادداشت به طور خودکار به تاریخ روز جاری تنظیم می‌شود. امکان ویرایش این تاریخ وجود ندارد.

## 📦 تکنولوژی‌ها و وابستگی‌ها

- **TypeScript**
- **Tailwind CSS**
- **React**
- **@dnd-kit/sortable** (برای قابلیت جابه‌جایی یادداشت‌ها)
- **@heroicons/react** (برای آیکون‌ها)
- **react-date-object** (برای مدیریت تاریخ‌ها)

## 🔧 نصب و راه‌اندازی

برای راه‌اندازی پروژه، ابتدا باید پکیج‌های مورد نیاز را نصب کنید. دستور زیر را اجرا کنید:

```bash
npm install



# React Note App with Drag & Drop 📝

Welcome to the **React Note App**! 🎉 This note-taking app is built using **React**, **Tailwind CSS**, and **TypeScript**. It features drag-and-drop functionality for notes, deadline-based coloring, and allows you to edit, delete, and add new notes.

## Key Features 🌟

### 🚀 **Drag and Drop Notes**
- Each note has a three-dot icon on the top-right corner. You can drag and drop notes easily using this icon. This feature is enabled on **desktop devices**, but it's disabled on **mobile devices** due to touch-related issues and the need for more time to perform this action on touch devices.

### 🌈 **Note Color Based on Deadline**
- **Expired Notes**: If a note’s deadline has passed, its color changes to **red**.
- **Today's Notes**: If the deadline is today, the note color turns **green**.
- **Notes with no deadline or upcoming deadlines**: If no deadline is set or the deadline is in the future, the note color remains unchanged.

### ✏️ **Edit Notes**
- To edit a note, click the **pencil icon** located at the bottom of each note.

### 🗑️ **Delete Notes**
- To delete a note, click the **trash bin icon**. After confirming deletion through a modal, the note will be removed.

### ➕ **Add New Note**
- There’s a circular button on the bottom-left corner of the screen that allows you to add a new note. This feature even works for notes that have no text.

### 📅 **Automatic Date of Creation**
- Each note's creation date is automatically set to the current date when it is created. Editing the creation date is not possible.

## 📦 Technologies and Dependencies

- **TypeScript**
- **Tailwind CSS**
- **React**
- **@dnd-kit/sortable** (for drag-and-drop functionality)
- **@heroicons/react** (for icons)
- **react-date-object** (for managing dates)

## 🔧 Installation and Setup

To set up the project, you need to install the necessary packages. Run the following command:

```bash
npm install

