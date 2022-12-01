import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { BsYoutube } from 'react-icons/bs';
import { GrSearch } from 'react-icons/gr';
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
    <header>
      <div>
        <Link to="/">
          <BsYoutube />
          <h1>hootube</h1>
        </Link>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button>
          <GrSearch />
        </button>
      </form>
    </header>
  );
}
