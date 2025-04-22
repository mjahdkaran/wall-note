# اپلیکیشن یادداشت‌برداری React با قابلیت جابه‌جایی (Drag & Drop) 📝

این پروژه یک اپلیکیشن یادداشت‌برداری است که با استفاده از تکنولوژی‌های **React**، **Tailwind CSS** و **TypeScript** ساخته شده است. در این اپلیکیشن، یادداشت‌ها قابلیت جابه‌جایی (Drag & Drop) دارند و ویژگی‌های مختلفی همچون تعیین مهلت انجام برای یادداشت‌ها و امکان ویرایش و حذف آن‌ها وجود دارد.

## ویژگی‌ها 🌟

### 🚀 **جابه‌جایی یادداشت‌ها**
- هر یادداشت دارای یک آیکون چند نقطه در گوشه سمت راست است که با استفاده از آن می‌توانید یادداشت‌ها را به راحتی جابه‌جا کنید. این ویژگی در **دستگاه‌های دسکتاپ** فعال است و در **دستگاه‌های موبایل** به دلیل مشکلات مربوط به لمس غیرفعال شده است.

### 🌈 **رنگ یادداشت‌ها بسته به مهلت انجام**
- **یادداشت‌های منقضی‌شده**: اگر مهلت انجام یادداشت گذشته باشد، رنگ یادداشت به **قرمز** تغییر می‌کند.
- **یادداشت‌های مربوط به امروز**: اگر مهلت انجام یادداشت برابر با امروز باشد، رنگ آن به **سبز** تغییر می‌کند.
- **یادداشت‌هایی که مهلت انجام ندارند یا مهلت انجامشان به آینده منتقل شده**: اگر مهلتی برای یادداشت تعیین نشده باشد یا مهلت انجام آن به آینده موکول شده باشد، رنگ آن تغییر نمی‌کند.

### ✏️ **ویرایش یادداشت‌ها**
- برای ویرایش هر یادداشت، یک دکمه با آیکون مداد در بخش پایین یادداشت وجود دارد که شما را به حالت ویرایش می‌برد.

### 🗑️ **حذف یادداشت‌ها**
- برای حذف هر یادداشت، از آیکون سطل زباله استفاده می‌شود که بعد از تایید حذف از طریق یک مودال، یادداشت حذف می‌شود.

### ➕ **اضافه کردن یادداشت جدید**
- در پایین سمت چپ صفحه، یک دکمه دایره‌ای قرار دارد که امکان اضافه کردن یادداشت جدید را فراهم می‌کند. این امکان حتی برای یادداشت‌هایی که هیچ متنی ندارند نیز فعال است.

### 📅 **تاریخ ثبت و مهلت انجام**
- تاریخ ثبت هر یادداشت به طور خودکار تاریخ روزی که یادداشت ایجاد می‌شود تنظیم می‌شود و امکان ویرایش تاریخ ثبت وجود ندارد.
- همچنین، برای هر یادداشت، **امکان تعیین مهلت انجام** وجود دارد. می‌توانید یک تاریخ مشخص را برای مهلت انجام انتخاب کنید، یا حتی **هیچ مهلت انجامی تعیین نکنید**.

## 📦 تکنولوژی‌ها و وابستگی‌ها

- **TypeScript**
- **Tailwind CSS**
- **React**
- **@dnd-kit/modifiers**(برای قابلیت جابه‌جایی یادداشت‌ها)
- **@dnd-kit/sortable** (برای قابلیت جابه‌جایی یادداشت‌ها)
- **@heroicons/react** (برای آیکون‌ها)
- **react-date-object** (برای مدیریت تاریخ‌ها)






**# React Note App with Drag & Drop 📝**

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

### 📅 **Automatic Date of Creation and Deadline**
- Each note's creation date is automatically set to the current date when it is created. Editing the creation date is not possible.
- Additionally, for each note, you can **set a deadline**. You can choose a specific deadline date, or you can **leave the deadline empty**.

## 📦 Technologies and Dependencies

- **TypeScript**
- **Tailwind CSS**
- **React**
- **@dnd-kit/modifiers** (for drag-and-drop functionality)
- **@dnd-kit/sortable** (for drag-and-drop functionality)
- **@heroicons/react** (for icons)
- **react-date-object** (for managing dates)

## 🔧 Installation and Setup

To set up the project, you need to install the necessary packages. Run the following command:

```bash
npm install
