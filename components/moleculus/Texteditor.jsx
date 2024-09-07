import React from 'react';

function Texteditor() {
    return (
        <div className="max-w-4xl mx-auto p-2">
            <div className="flex flex-col space-y-4 bg-white p-4 shadow rounded-lg">
                <div className="border-b pb-2">
                    <div className="flex justify-between items-center">
                        <div className="space-x-2">
                            <button className="px-2 py-1 text-xs font-semibold text-gray-600">File</button>
                            <button className="px-2 py-1 text-xs font-semibold text-gray-600">Edit</button>
                            <button className="px-2 py-1 text-xs font-semibold text-gray-600">View</button>
                            <button className="px-2 py-1 text-xs font-semibold text-gray-600">Insert</button>
                            <button className="px-2 py-1 text-xs font-semibold text-gray-600">Format</button>
                            <button className="px-2 py-1 text-xs font-semibold text-gray-600">Tools</button>
                            <button className="px-2 py-1 text-xs font-semibold text-gray-600">Table</button>
                            <button className="px-2 py-1 text-xs font-semibold text-gray-600">Help</button>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className="text-xs text-gray-600">Paragraph</span>
                            <select className="text-xs text-gray-700 p-1 border border-gray-300 rounded">
                                <option>Roboto</option>
                                {/* Add more font options */}
                            </select>
                            <select className="text-xs text-gray-700 p-1 border border-gray-300 rounded">
                                <option>12px</option>
                                {/* Add more size options */}
                            </select>
                        </div>
                    </div>
                </div>
                <textarea
                    className="w-full h-48 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Write your blog content here...">
                </textarea>

                <div className="flex justify-end">
                    <button className="px-6 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-6  00">Submit</button>
                </div>
            </div>
        </div>

    );
    }


    export default Texteditor