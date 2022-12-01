import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { BsYoutube } from 'react-icons/bs';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdKeyboardVoice } from 'react-icons/md';
export default function SearchHeader() {
  const navigate = useNavigate();
  const { keyword } = useParams();
  const [text, setText] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };
  useEffect(() => {
    setText(keyword || '');
  }, [keyword]);
  return (
    <header className="w-full flex items-center p-4 text-2xl border-b border-zinc-800 mb-4 drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
      <div>
        <Link to="/" className="flex items-center">
          <BsYoutube className="text-3xl text-brand" />
          <h1 className="font-bold ml-2 text-2xl">Hootube</h1>
        </Link>
      </div>

      <form onSubmit={handleSubmit} className="flex w-full justify-center">
        <input
          type="text"
          placeholder="Search"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-7/12 h-1/5 p-2 pl-6 outline-none text-gray-50 bg-black border border-zinc-800 text-base rounded-l-full"
        />
        <button className="bg-zinc-800 pl-3 pr-4 rounded-r-full flex items-center justify-center">
          <AiOutlineSearch />
        </button>
        <button className="bg-zinc-900  pl-2 pr-2 rounded-full flex items-center justify-center ml-4 hover:bg-zinc-800">
          <MdKeyboardVoice />
        </button>
      </form>
    </header>
  );
}
