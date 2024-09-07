import React from 'react'
function BlogForm() {
    return (
        <div className="max-w-4xl mx-auto p-5">
            <div>
            <label htmlFor="first" className="block w-full text-center mb-2 text-sm font-bold text-gray-700">Write your Blog</label>
  
            </div>
            <form className="space-y-6 bg-white p-6 shadow rounded-lg">
                <div>
                    <label htmlFor="blogTitle" className="block mb-2 text-sm font-medium text-gray-700">Blog Title</label>
                    <input type="text" id="blogTitle" name="blogTitle" placeholder="Enter your blog title here"
                           className="w-full mb-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"/>
                </div>
                <div className="flex space-x-4">
                    <div>
                        <label htmlFor="publishDate" className="block mb-2 text-sm font-medium text-gray-700">Publish Date</label>
                        <input type="text" id="publishDate" name="publishDate" placeholder="dd/mm/yyyy"
                               className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"/>
                    </div>
                    <div className="flex-grow">
                        <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-700">Category</label>
                        <select id="category" name="category"
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500">
                            <option>Select Category</option>
                            {/* Add categories here */}
                        </select>
                    </div>
                </div>
                <div>
                    <label htmlFor="tags" className="block mb-2 text-sm font-medium text-gray-700">Tags (Multiple Selection)</label>
                    <select multiple id="tags" name="tags"
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500">
                        <option>Select Tags</option>
                        {/* Add tags here */}
                    </select>
                </div>
                <div>
                    <label htmlFor="featureImage" className="block mb-2 text-sm font-medium text-gray-700">Feature Image</label>
                    <input type="file"  id="featureImage" name="featureImage"
                           className="w-full   p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"/>
                </div>
            </form>
        </div>
    );
}

export default BlogForm;