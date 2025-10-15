function Filters({ selectedCategory, setSelectedCategory }) {
  return (
    <div className="p-4 bg-amber-200 border-b border-gray-300 text-black">
      <label htmlFor="category" className="mr-2 text-gray-700 font-medium">Filter by category:</label>
      <select
        id="category"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        <option value="all" className="text-gray-700">All</option>
        <option value="electronics" className="text-gray-700">Electronics</option>
        <option value="jewelry" className="text-gray-700">Jewelry</option>
        <option value="men's clothing" className="text-gray-700">Men's Clothing</option>
        <option value="women's clothing" className="text-gray-700">Women's Clothing</option>
      </select>
    </div>
  );
}

export default Filters;