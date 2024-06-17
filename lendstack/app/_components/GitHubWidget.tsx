"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  watchers_count: number;
  html_url: string; // Added html_url for the repository link
}

const GitHubWidget: React.FC<{ username: string; repoName: string }> = ({ username, repoName }) => {
  const [repoData, setRepoData] = useState<GitHubRepo | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<GitHubRepo>(`https://api.github.com/repos/${username}/${repoName}`);
        setRepoData(response.data);
      } catch (err) {
        setError('Failed to fetch data from GitHub API.');
      }
    };

    fetchData();
  }, [username, repoName]);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (!repoData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden">
      <header className="bg-gray-900 p-4 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 2C5.03 2 1 6.03 1 10c0 3.31 2.12 6.14 5.08 7.17.37.12.52-.16.52-.36 0-.18-.01-.78-.01-1.42-2.1.38-2.54-.51-2.7-.98-.09-.23-.48-.98-.82-1.18-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.22 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .2.15.49.53.36C16.88 16.13 19 13.31 19 10c0-3.97-3.04-7.19-7-7.19zm-1 13.7c-.27.25-.65.38-1.02.38-.37 0-.75-.13-1.02-.38-.57-.53-.68-1.45-.33-2.48.21-.58.57-1.36 1.35-2.36.18-.26.6-.8 1.28-.8s1.1.54 1.28.8c.78 1 1.14 1.78 1.35 2.36.35 1.03.24 1.95-.33 2.48z" clipRule="evenodd" />
        </svg>
        <a href={repoData.html_url} target="_blank" rel="noopener noreferrer" className="text-xl font-bold text-white">{repoData.full_name}</a>
      </header>
      <div className="p-4">
        <p className="text-sm mb-4">{repoData.description}</p>
        <div className="flex justify-between">
          <div className="flex items-center">
            <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M12.6725 0.668076C12.5462 0.412074 12.2855 0.25 12 0.25C11.7145 0.25 11.4538 0.412074 11.3274 0.668076L8.26911 6.8649L1.4305 7.85861C1.14799 7.89966 0.913278 8.09754 0.82506 8.36905C0.736841 8.64056 0.810414 8.93861 1.01484 9.13788L5.9633 13.9614L4.79513 20.7724C4.74687 21.0538 4.86254 21.3381 5.0935 21.5059C5.32446 21.6738 5.63065 21.6959 5.88334 21.563L12 18.3473L18.1166 21.563C18.3693 21.6959 18.6755 21.6738 18.9065 21.5059C19.1374 21.3381 19.2531 21.0538 19.2048 20.7724L18.0366 13.9614L22.9851 9.13788C23.1895 8.93861 23.2631 8.64056 23.1749 8.36905C23.0867 8.09754 22.852 7.89966 22.5694 7.85861L15.7308 6.8649L12.6725 0.668076Z" fill="#FFFF00"/>
            </svg>
            <span className="text-sm text-yellow-400">{repoData.stargazers_count}</span>
          </div>
          <div className="flex items-center">
          <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path fill-rule="evenodd" clip-rule="evenodd" d="M6.75 18.25C6.75 20.0449 8.20507 21.5 10 21.5C11.7949 21.5 13.25 20.0449 13.25 18.25C13.25 16.7132 12.1834 15.4255 10.75 15.087V11.5H13.25C15.3211 11.5 17 9.82107 17 7.75V6.91303C18.4333 6.57445 19.5 5.28679 19.5 3.75C19.5 1.95507 18.0449 0.5 16.25 0.5C14.4551 0.5 13 1.95507 13 3.75C13 5.28679 14.0666 6.57445 15.5 6.91303V7.75C15.5 8.99264 14.4926 10 13.25 10H6.75C5.50736 10 4.5 8.99264 4.5 7.75V6.91303C5.93335 6.57445 7 5.28679 7 3.75C7 1.95507 5.54493 0.5 3.75 0.5C1.95507 0.5 0.5 1.95507 0.5 3.75C0.5 5.28679 1.56665 6.57445 3 6.91303V7.75C3 9.82107 4.67893 11.5 6.75 11.5H9.25V15.087C7.81665 15.4255 6.75 16.7132 6.75 18.25ZM10 20C9.0335 20 8.25 19.2165 8.25 18.25C8.25 17.2835 9.0335 16.5 10 16.5C10.9665 16.5 11.75 17.2835 11.75 18.25C11.75 19.2165 10.9665 20 10 20ZM3.75 5.5C2.7835 5.5 2 4.7165 2 3.75C2 2.7835 2.7835 2 3.75 2C4.7165 2 5.5 2.7835 5.5 3.75C5.5 4.7165 4.7165 5.5 3.75 5.5ZM14.5 3.75C14.5 4.7165 15.2835 5.5 16.25 5.5C17.2165 5.5 18 4.7165 18 3.75C18 2.7835 17.2165 2 16.25 2C15.2835 2 14.5 2.7835 14.5 3.75Z" fill="#157AF1"/>
             <path d="M6 3.5C6 4.88071 4.88071 6 3.5 6C2.11929 6 1 4.88071 1 3.5C1 2.11929 2.11929 1 3.5 1C4.88071 1 6 2.11929 6 3.5Z" fill="#157AF1"/>
             <path d="M18 3.5C18 4.88071 17.1046 6 16 6C14.8954 6 14 4.88071 14 3.5C14 2.11929 14.8954 1 16 1C17.1046 1 18 2.11929 18 3.5Z" fill="#157AF1"/>
             <path d="M12 18C12 19.1046 11.1046 20 10 20C8.89543 20 8 19.1046 8 18C8 16.8954 8.89543 16 10 16C11.1046 16 12 16.8954 12 18Z" fill="#157AF1"/>
           </svg>
            <span className="text-sm text-blue-400">{repoData.forks_count}</span>
          </div>
          <div className="flex items-center">
          <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M15.4999 9C15.4999 10.933 13.9329 12.5 11.9999 12.5C10.0669 12.5 8.49988 10.933 8.49988 9C8.49988 7.067 10.0669 5.5 11.9999 5.5C13.9329 5.5 15.4999 7.067 15.4999 9Z" fill="#0AD242"/>
             <path fill-rule="evenodd" clip-rule="evenodd" d="M12 0.500122C8.5681 0.500122 5.8755 2.03429 3.94591 3.74074C2.02028 5.44368 0.814406 7.35141 0.329595 8.20137C0.0449209 8.70046 0.0449199 9.29979 0.329594 9.79887C0.814405 10.6488 2.02028 12.5566 3.94591 14.2595C5.8755 15.966 8.5681 17.5001 12 17.5001C15.4319 17.5001 18.1245 15.9659 20.0541 14.2595C21.9797 12.5565 23.1856 10.6488 23.6704 9.79879C23.955 9.2997 23.955 8.70038 23.6704 8.2013C23.1856 7.35135 21.9797 5.44363 20.0541 3.74071C18.1245 2.03428 15.4319 0.500122 12 0.500122ZM1.63254 8.94456C2.07402 8.17057 3.18409 6.41688 4.9396 4.86438C6.69114 3.3154 9.04487 2.00012 12 2.00012C14.9552 2.00012 17.3089 3.31539 19.0604 4.86435C20.8159 6.41683 21.926 8.1705 22.3674 8.94449C22.3805 8.96748 22.3839 8.98606 22.3839 9.00005C22.3839 9.01405 22.3805 9.03262 22.3674 9.05561C21.926 9.82961 20.8159 11.5833 19.0604 13.1358C17.3089 14.6848 14.9552 16.0001 12 16.0001C9.04487 16.0001 6.69114 14.6848 4.9396 13.1359C3.18409 11.5834 2.07402 9.82968 1.63254 9.05568C1.61942 9.03269 1.61609 9.01412 1.61609 9.00012C1.61609 8.98613 1.61942 8.96756 1.63254 8.94456Z" fill="#0AD242"/>
           </svg>
            <span className="text-sm text-green-400">{repoData.watchers_count}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GitHubWidget;
