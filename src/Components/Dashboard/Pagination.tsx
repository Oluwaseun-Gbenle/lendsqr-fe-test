import React, { FC } from 'react';
import '../../Styles/Pagination.scss';

interface PaginationProps {
    totalItems: number;
    itemsPerPage: number;
    currentPage: number;
    setPage: (page: number) => void;
    setItemsPerPage: (num: number) => void;
}

const Pagination: FC<PaginationProps> = ({ totalItems, currentPage, itemsPerPage, setPage, setItemsPerPage }) => {

    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const changePage = (newPage: number) => {
        if (newPage > 0 && newPage <= totalPages) {
            setPage(newPage);
        }
    };

    return (
        <div className="pagination-container">
            <div className="items-per-page">
                Showing
                <select
                    value={itemsPerPage}
                    onChange={(e) => { setPage(1); setItemsPerPage(parseInt(e.target.value, 10)) }}
                >
                    {[50, 100].map((number) => (
                        <option key={number} value={number}>
                            {number}
                        </option>
                    ))}
                </select>
                out of {totalItems}
            </div>
            <div className="page-controls">
                <button onClick={() => changePage(currentPage - 1)} disabled={currentPage <= 1}>
                    &lt;
                </button>
                {Array.from({ length: totalPages }, (_, index) => index + 1).map((number) => (
                    <span
                        key={number}
                        className={currentPage === number ? 'active' : ''}
                        onClick={() => setPage(number)}
                    >
                        {number}
                    </span>
                ))}
                <button onClick={() => changePage(currentPage + 1)} disabled={currentPage >= totalPages}>
                    &gt;
                </button>
            </div>
        </div>
    );
};

export default Pagination;
