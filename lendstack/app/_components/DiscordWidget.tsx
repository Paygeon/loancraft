"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Member {
  id: string;
  username: string;
  discriminator: string;
  avatar_url: string;
  status: string;
}

interface DiscordWidgetData {
  id: string;
  name: string;
  instant_invite: string;
  channels: Array<{ id: string; name: string; position: number }>;
  members: Member[];
  presence_count: number;
}

const DiscordWidget: React.FC = () => {
  const [data, setData] = useState<DiscordWidgetData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<DiscordWidgetData>('https://discord.com/api/guilds/1250914758509727807/widget.json');
        setData(response.data);
      } catch (err) {
        setError('Failed to fetch data from Discord API.');
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden">
      <header className="bg-purple-600 p-4">
        <h1 className="text-2xl font-bold text-white">{data.name}</h1>
        <a href="https://discord.gg/S2uHz5DAyN" className="text-teal-200 underline mt-2 inline-block">Join Server</a>
      </header>
      <div className="p-4">
        <p className="mb-4">Online Members: {data.presence_count}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data.members.map((member) => (
            <div key={member.id} className="bg-gray-700 p-4 rounded-sm flex items-center">
              <img src={member.avatar_url} alt={`${member.username}'s avatar`} className="w-30 h-10 rounded-full mr-8" />
              <div>
                <p className="font-bold">{member.username}#{member.discriminator}</p>
                <p className={`text-sm ${member.status === 'online' ? 'text-green-400' : 'text-gray-400'}`}>
                  {member.status}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiscordWidget;
