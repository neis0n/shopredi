// Base styles for all interactive components
export const baseStyles =
  "font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors duration-200 ease-in-out";
export const mainPage = "flex flex-col min-h-screen";
export const mainContent = "flex-grow min-h-[calc(100vh-7.1rem)]"; // new, ensures content area fills available space// Tailwind CSS color/style variants for buttons, badges, alerts, etc.
export const variants = {
  primary:
    "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 rounded-lg px-4 py-2 sm:px-5 sm:py-3 text-sm sm:text-base transition-colors duration-200 ease-in-out shadow-sm cursor-pointer",
  secondary:
    "bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-400 rounded-lg px-4 py-2 sm:px-5 sm:py-3 text-sm sm:text-base transition-colors duration-200 ease-in-out shadow-sm cursor-pointer",
  success:
    "bg-green-600 text-white hover:bg-green-700 focus:ring-green-500 rounded-lg px-4 py-2 sm:px-5 sm:py-3 text-sm sm:text-base transition-colors duration-200 ease-in-out shadow-sm cursor-pointer",
  danger:
    "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 rounded-lg px-4 py-2 sm:px-5 sm:py-3 text-sm sm:text-base transition-colors duration-200 ease-in-out shadow-sm cursor-pointer",
  warning:
    "bg-yellow-500 text-white hover:bg-yellow-600 focus:ring-yellow-400 rounded-lg px-4 py-2 sm:px-5 sm:py-3 text-sm sm:text-base transition-colors duration-200 ease-in-out shadow-sm cursor-pointer",
  info: "bg-sky-500 text-white hover:bg-sky-600 focus:ring-sky-400 rounded-lg px-4 py-2 sm:px-5 sm:py-3 text-sm sm:text-base transition-colors duration-200 ease-in-out shadow-sm cursor-pointer",
  ghost:
    "bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-300 rounded-lg px-4 py-2 sm:px-5 sm:py-3 text-sm sm:text-base transition-colors duration-200 ease-in-out shadow-none cursor-pointer",
  outline:
    "border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-300 rounded-lg px-4 py-2 sm:px-5 sm:py-3 text-sm sm:text-base transition-colors duration-200 ease-in-out shadow-sm cursor-pointer",
  addToCart:
    "bg-orange-400 text-white hover:bg-orange-600 hover:text-black focus:ring-orange-400 rounded-lg px-2 py-1 sm:px-2 sm:py-1 text-sm sm:text-base transition-colors duration-200 ease-in-out shadow-md cursor-pointer",
  viewDetails:
    "bg-white text-sky-600 border border-sky-500 hover:bg-sky-50 hover:text-red-700 focus:ring-sky-400 rounded-lg px-2 py-1 sm:px-2 sm:py-1 text-sm sm:text-base transition-colors duration-200 ease-in-out shadow-sm cursor-pointer",  removeFromCart:
    "bg-red-500 text-white hover:bg-red-600 hover:text-black focus:ring-red-400 rounded-lg px-2 py-1 sm:px-2 sm:py-1 text-sm sm:text-base transition-colors duration-200 ease-in-out shadow-md cursor-pointer",
};