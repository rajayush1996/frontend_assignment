export default function Pagination({ pageInfo, onPrev, onNext }) {
  return (
    <div className="flex items-center justify-between mt-6">
      <Button onClick={onPrev} disabled={!pageInfo.hasPreviousPage} variant="outline">
        Previous
      </Button>
      <span className="text-sm text-gray-700">
        Page {pageInfo.page} of {pageInfo.totalPages} — {pageInfo.totalItems} items
      </span>
      <Button onClick={onNext} disabled={!pageInfo.hasNextPage} variant="outline">
        Next
      </Button>
    </div>
  );
}
