"use client"
import { useState, useEffect, useRef } from 'react';
import * as React from 'react';
import styles from './revenue-calculator.module.css';

const RevenueCalculator: React.FC = () => {
  const [totalUsers, setTotalUsers] = useState<number>(100);
  const [cardSwipes, setCardSwipes] = useState<number>(25);
  const [transactionSize, setTransactionSize] = useState<number>(53);
  const [annualRevenuePerUser, setAnnualRevenuePerUser] = useState<number>(0);
  const [totalAnnualRevenues, setTotalAnnualRevenues] = useState<number>(0);
  const interchange = 0.01;

  const totalUsersRef = useRef<HTMLInputElement>(null);
  const cardSwipesRef = useRef<HTMLInputElement>(null);
  const transactionSizeRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const calculateRevenue = () => {
      const totalMonthlyVolume = (transactionSize * cardSwipes * totalUsers) / 12;
      const totalAnnualRevenue = totalUsers * cardSwipes * transactionSize * interchange;
      const revenuePerUser = totalAnnualRevenue / totalUsers;
      setAnnualRevenuePerUser(revenuePerUser);
      setTotalAnnualRevenues(totalAnnualRevenue);
    };

    calculateRevenue();
  }, [totalUsers, cardSwipes, transactionSize]);

  const handleRangeChange = (setter: React.Dispatch<React.SetStateAction<number>>, ref: React.RefObject<HTMLInputElement>) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = Number(event.target.value);
    setter(value);
    updateSliderBackground(ref.current);
  };

  const updateSliderBackground = (slider: HTMLInputElement | null) => {
    if (slider) {
      const value = Number(slider.value);
      const min = Number(slider.min);
      const max = Number(slider.max);
      const percentage = ((value - min) / (max - min)) * 100;
      slider.style.background = `linear-gradient(to right, #3b82f6 ${percentage}%, #e0e0e0 ${percentage}%)`;
    }
  };

  useEffect(() => {
    updateSliderBackground(totalUsersRef.current);
    updateSliderBackground(cardSwipesRef.current);
    updateSliderBackground(transactionSizeRef.current);
  }, []);

  return (
    <div className="flex flex-wrap">
      <div className="w-full max-w-xl mx-auto mb-12">
        <input type="hidden" id="interchange" value=".01" />
      </div>
      <div className="w-full flex flex-wrap items-center justify-center">
        <div className="w-full lg:w-5/12 mb-8 lg:mb-0">
          <form id="cardRevenueForm">
            <div className="mb-12">
              <label htmlFor="totalUsersRange" className="block text-sm font-medium mb-2">Total Users</label>
              <p id="totalUsersRangeSum" className="text-2xl font-semibold mb-2">{totalUsers.toLocaleString()}</p>
              <input
                ref={totalUsersRef}
                type="range"
                min="10"
                max="1000000"
                step="100"
                id="totalUsersRange"
                value={totalUsers}
                onChange={handleRangeChange(setTotalUsers, totalUsersRef)}
                className={`w-full h-2 rounded-lg appearance-none ${styles.slider}`}
              />
            </div>
            <div className="mb-12">
              <label htmlFor="cardSwipesRange" className="block text-sm font-medium mb-2">Average Annual Transactions per User</label>
              <p className="text-2xl font-semibold mb-2">{cardSwipes}</p>
              <input
                ref={cardSwipesRef}
                type="range"
                min="1"
                max="1000"
                step="1"
                id="cardSwipesRange"
                value={cardSwipes}
                onChange={handleRangeChange(setCardSwipes, cardSwipesRef)}
                className={`w-full h-2 rounded-lg appearance-none ${styles.slider}`}
              />
            </div>
            <div className="mb-12">
              <label htmlFor="averageTransactionRange" className="block text-sm font-medium mb-2">Average Transaction Size</label>
              <p className="text-2xl font-semibold mb-2">${transactionSize}</p>
              <input
                ref={transactionSizeRef}
                type="range"
                min="10"
                max="1000"
                step="1"
                id="averageTransactionRange"
                value={transactionSize}
                onChange={handleRangeChange(setTransactionSize, transactionSizeRef)}
                className={`w-full h-2 rounded-lg appearance-none ${styles.slider}`}
              />
            </div>
          </form>
        </div>
        <div className="w-full lg:w-5/12 flex flex-col justify-around">
          <div className="mb-8">
            <p className="text-xl font-medium mb-2">Additional Revenue Per User</p>
            <p className="text-2xl font-semibold">${annualRevenuePerUser.toFixed(2)}</p>
          </div>
          <div>
            <p className="text-xl font-medium mb-2">Total Annual Revenue</p>
            <p className="text-2xl font-semibold">${totalAnnualRevenues.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevenueCalculator;