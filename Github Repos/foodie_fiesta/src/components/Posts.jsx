import React from 'react';
import postsData from './PostsData';
import { FaStar } from 'react-icons/fa';

function Posts() {
  return (
    <section className="posts-section py-8 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">User Recipes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {postsData.map((post) => (
          <div
            key={post.id}
            className="post-card p-4 rounded-lg  neumorphic bg-white transition-transform hover:scale-105"
          >
            <img
              src={post.photo}
              alt={post.title}
              className="w-full h-48 object-cover rounded-md mb-4 shadow-inner-neumorphic"
            />
            <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
            <p className="text-gray-600 mb-4">{post.description}</p>
            <div className="flex items-center mb-4">
              <span className="text-yellow-500 flex items-center">
                {Array.from({ length: 5 }, (_, i) => (
                  <FaStar
                    key={i}
                    className={i < Math.round(post.rating) ? 'text-yellow-500' : 'text-gray-300'}
                  />
                ))}
              </span>
              <span className="ml-2 text-gray-700">{post.rating.toFixed(1)}</span>
            </div>
            <div className="comments">
              <h4 className="text-lg font-semibold mb-2">Comments:</h4>
              <ul className="text-gray-700">
                {post.comments.map((comment, index) => (
                  <li key={index} className="mb-2">
                    <strong>{comment.user}:</strong> {comment.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Posts;
