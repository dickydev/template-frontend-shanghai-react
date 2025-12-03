import React, { useState, useMemo } from 'react';
import { usePosts } from '../../api/posts/hooks/usePosts';

const Post: React.FC = () => {
  const { data, isLoading, isError } = usePosts();
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState<'asc' | 'desc'>('asc');

  const processedData = useMemo(() => {
    if (!data) return [];
    let result = [...data];

    if (search.trim()) {
      result = result.filter((dataFiltered) =>
        dataFiltered.title.toLowerCase().includes(search.toLowerCase()),
      );
      console.log(result);
    }

    result.sort((a, b) => {
      return sortBy === 'asc'
        ? a.title.localeCompare(b.title)
        : b.title.localeCompare(a.title);
    });

    return result;
  }, [search, data, sortBy]);

  if (isLoading) return <p>Loading mass...</p>;
  if (isError) return <p style={{ color: 'red' }}>Error loading data...</p>;
  console.log(search);
  console.log(data);
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Posts</h1>

      <div>
        <input
          type="text"
          className="border w-full mb-10 p-2"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="border"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as 'asc' | 'desc')}
        >
          <option value="asc">Sort A {'->'} Z</option>
          <option value="desc">Sort Z {'->'} A</option>
        </select>
        <h1 className="text-xl font-bold mb-4 text-gray-400">
          Search result & Filtered :{' '}
        </h1>
        <ul className="space-y-3">
          {processedData?.slice(0, 10).map((data) => (
            <li key={data.id} className="p-4 border rounded-md">
              {data.title}
            </li>
          ))}
        </ul>
      </div>

      <h1 className="text-xl font-bold mb-4 text-gray-400">Data result : </h1>
      <ul className="space-y-3">
        {data?.slice(0, 10).map((data) => (
          <li key={data.id} className="p-4 border rounded-md">
            {data.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Post;
