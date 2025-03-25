export const Header = () => {
  return (
    <header className="w-full border-b bg-white shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold text-blue-600">URL</span>
          <span className="text-xl font-bold text-gray-800">Shortener</span>
        </div>
      </div>
    </header>
  );
};
