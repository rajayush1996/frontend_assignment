export default function ToggleView({ viewMode, setViewMode }) {
  return (
    <div className="flex items-center space-x-4">
      <button
        onClick={() => setViewMode('grid')}
        className={`px-4 py-2 rounded ${
          viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-white border'
        }`}
      >
        Grid
      </button>
      <button
        onClick={() => setViewMode('tile')}
        className={`px-4 py-2 rounded ${
          viewMode === 'tile' ? 'bg-blue-600 text-white' : 'bg-white border'
        }`}
      >
        Tile
      </button>
    </div>
  );
}