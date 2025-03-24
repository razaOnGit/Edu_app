import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const Like = () => {
  const [likes, setLikes] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    const savedLikes = localStorage.getItem('pageLikes');
    const userLiked = localStorage.getItem('userLiked');
    if (savedLikes) setLikes(parseInt(savedLikes));
    if (userLiked) setHasLiked(JSON.parse(userLiked));
  }, []);

  const handleLike = () => {
    if (!hasLiked) {
      const newLikes = likes + 1;
      setLikes(newLikes);
      setHasLiked(true);
      localStorage.setItem('pageLikes', newLikes.toString());
      localStorage.setItem('userLiked', 'true');
    }
  };

  const formatLikes = (count) => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M likes`;
    } else if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K likes`;
    } else if (count === 1) {
      return '1 person likes';
    } else {
      return `${count} people like`;
    }
  };

  return (
    <motion.div
      className="like-container"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="outer-container">
        <button
          className={`like-button ${hasLiked ? 'liked' : ''}`}
          onClick={handleLike}
          disabled={hasLiked}
        >
          <FontAwesomeIcon icon={faThumbsUp} className="thumbs-icon" />
        </button>
      </div>
      <span className="likes-count">{formatLikes(likes)}</span>

      <style jsx>{`
        .like-container {
          position: fixed;
          right: 30px;
          bottom: 30px;
          z-index: 999;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .outer-container {
          width: 70px;
          height: 70px;
          background: #87CEEB; /* Sky blue background */
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          animation: containerFloat 2s ease-in-out infinite;
        }

        .like-button {
          width: 50px;
          height: 50px;
          border: none;
          background: transparent;
          cursor: pointer;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0;
        }

        .like-button :global(.thumbs-icon) {
          font-size: 28px;
          color: #ffffff; /* White color */
          animation: rotate 8s linear infinite;
        }

        .like-button.liked :global(.thumbs-icon) {
          color: #ff4500; /* Orange-red color when liked */
          animation: rotate 8s linear infinite, pop 0.4s ease-out;
        }

        .likes-count {
          margin-top: 10px;
          background: white;
          padding: 5px 12px;
          border-radius: 15px;
          font-size: 14px;
          color: #666;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        @keyframes rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes containerFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes pop {
          0% { transform: scale(1); }
          50% { transform: scale(1.2); }
          100% { transform: scale(1); }
        }

        @media (max-width: 768px) {
          .outer-container {
            width: 60px;
            height: 60px;
          }

          .like-button {
            width: 40px;
            height: 40px;
          }

          .like-button :global(.thumbs-icon) {
            font-size: 24px;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default Like;