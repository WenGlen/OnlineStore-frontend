import React from 'react';

/**
 * 分頁組件
 */
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="pagination">
      {/* 上一頁 */}
      <button
        className="pagination__btn pagination__btn--nav"
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
      >
        &lt;
      </button>

      {/* 頁碼 */}
      {pages.map(page => (
        <button
          key={page}
          className={`pagination__btn ${currentPage === page ? 'pagination__btn--active' : ''}`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}

      {/* 下一頁 */}
      <button
        className="pagination__btn pagination__btn--nav"
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
