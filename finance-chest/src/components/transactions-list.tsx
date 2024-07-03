"use client"
import React, { useState } from 'react';

type TransactionItemProps = {
  title: string;
  id: string;
  date: string;
  amount: string;
  isPositive: boolean;
  onClick: () => void;
};

const TransactionItem: React.FC<TransactionItemProps> = ({
  title,
  id,
  date,
  amount,
  isPositive,
  onClick,
}) => (
  <button
    onClick={onClick}
    className="flex gap-5 justify-between p-6 w-full bg-white border border-gray-100 border-solid max-md:flex-wrap max-md:px-5 max-md:max-w-full hover:bg-gray-50 transition-colors"
  >
    <div className="flex gap-5 justify-between">
      <div className="flex flex-col">
        <h3 className="text-sm font-medium leading-5 text-neutral-800">{title}</h3>
        <p className="mt-1 text-sm leading-4 text-neutral-400">{id}</p>
      </div>
      <time className="my-auto text-sm leading-5 text-neutral-800">{date}</time>
    </div>
    <p
      className={`my-auto text-sm font-medium leading-5 text-right ${
        isPositive ? 'text-green-500' : 'text-red-500'
      }`}
    >
      {amount}
    </p>
  </button>
);

type PaginationProps = {
  currentPage: number;
  totalResults: number;
  onPrevClick: () => void;
  onNextClick: () => void;
};

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalResults,
  onPrevClick,
  onNextClick,
}) => (
  <nav className="flex gap-5 pl-3 mt-5 w-full text-sm leading-5 max-md:flex-wrap max-md:max-w-full">
    <p className="my-auto text-zinc-600">
      Viewing {(currentPage - 1) * 20 + 1}–{Math.min(currentPage * 20, totalResults)} of{' '}
      {totalResults} results
    </p>
    <div className="flex flex-1 gap-3 pl-20 font-medium whitespace-nowrap text-neutral-800 max-md:flex-wrap">
      <button
        onClick={onPrevClick}
        className="justify-center px-4 py-2.5 bg-white rounded-3xl border border-gray-200 border-solid hover:bg-gray-50 transition-colors"
      >
        Prev.
      </button>
      <button
        onClick={onNextClick}
        className="justify-center px-4 py-2.5 bg-white rounded-3xl border border-gray-200 border-solid hover:bg-gray-50 transition-colors"
      >
        Next
      </button>
    </div>
  </nav>
);

type Transaction = {
  title: string;
  id: string;
  date: string;
  amount: string;
  isPositive: boolean;
};

const TransactionList: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([
    {
      title: 'Payment Cleared',
      id: '000000011',
      date: 'Feb 28, 2023',
      amount: '+ $5,000.00',
      isPositive: true,
    },
    {
      title: 'Best Buy',
      id: '000000011',
      date: 'Feb 28, 2023',
      amount: '- $2,500.00',
      isPositive: false,
    },
    {
      title: 'Payment Cleared',
      id: '000000011',
      date: 'Feb 28, 2023',
      amount: '+ $2,500.00',
      isPositive: true,
    },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const totalResults = 273;

  const handleTransactionClick = (index: number) => {
    console.log(`Clicked on transaction ${index}`);
  };

  const handlePrevClick = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextClick = () => {
    setCurrentPage((prev) => Math.min(prev + 1, Math.ceil(totalResults / 20)));
  };

  return (
    <main className="flex flex-col">
      <header className="flex gap-5 justify-between px-6 py-4 w-full text-sm leading-5 whitespace-nowrap bg-white rounded-3xl border border-gray-100 border-solid text-neutral-400 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between">
          <h2>Transaction</h2>
          <h2>Date</h2>
        </div>
        <h2 className="text-right">Amount</h2>
      </header>
      <section>
        {transactions.map((transaction, index) => (
          <TransactionItem
            key={index}
            {...transaction}
            onClick={() => handleTransactionClick(index)}
          />
        ))}
      </section>
      <Pagination
        currentPage={currentPage}
        totalResults={totalResults}
        onPrevClick={handlePrevClick}
        onNextClick={handleNextClick}
      />
    </main>
  );
};

export default TransactionList;