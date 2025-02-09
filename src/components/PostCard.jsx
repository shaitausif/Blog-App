import React from 'react';
import { Link } from 'react-router-dom';
import appwriteService from '../appwrite/config';
import parse from 'html-react-parser';

const PostCard = ({ $id, title, featuredImage, content }) => {
    const imageUrl = featuredImage
        ? appwriteService.getFilePreview(featuredImage)
        : 'https://www.svgrepo.com/show/508699/landscape-placeholder.svg';

    return (
        <Link to={`/post/${$id}`} className="block">
            <div className="md:w-[300px] w-[350px] md:h-[350px] h-[350px] bg-gray-100 rounded-xl p-4 overflow-hidden flex flex-col">
                {/* Image Container */}
                <div className="flex-shrink-0 mb-4">
                    <img
                        src={imageUrl}
                        alt={title}
                        className="w-full h-[160px] object-cover rounded-xl"
                    />
                </div>

                {/* Title */}
                <h2 className="text-xl font-bold mb-3 truncate">{title}</h2>

                {/* Content */}
                <div className="flex-grow overflow-hidden text-gray-700 line-clamp-3">
                    {parse(content)}
                </div>
            </div>
        </Link>
    );
};

export default PostCard;
