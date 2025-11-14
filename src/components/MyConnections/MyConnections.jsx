import React, { useEffect, useState } from "react";
import { FaPen, FaTrash } from "react-icons/fa";

const MyConnections = ({ handleonDelete, handleOnUpdate }) => {
  const [connections, setConnections] = useState([])
  useEffect(() => {
    fetch(`http://localhost:3000/my-connection`)
      .then(res => res.json())
      .then(data => {
        console.log("my connection for this", data)
        setConnections(data)
    })
  },[])
  return (
    <div className="max-w-5xl mx-auto my-20">
      <h2 className="text-3xl font-bold mb-6">My Connections { connections.length}</h2>

      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-100 border-b border-gray-300">
            <tr>
              <th className="p-4 font-semibold">Partner</th>
              <th className="p-4 font-semibold">Subject</th>
              <th className="p-4 font-semibold">Study Mode</th>
              <th className="p-4 font-semibold text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {connections?.map((item) => (
              <tr
                key={item._id}
                className="border-b border-gray-200 hover:bg-gray-50 transition"
              >
                {/* Partner */}
                <td className="p-4 flex items-center gap-3">
                  <img
                    src={item.profileimage}
                    alt=""
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-gray-600">{item.location}</p>
                  </div>
                </td>

                {/* Subject */}
                <td className="p-4 font-semibold">{item.subject}</td>

                {/* Study Mode */}
                <td className="p-4 font-semibold">{item.studyMode}</td>

                {/* Actions */}
                <td className="p-4 text-center">
                  <button
                    onClick={() => handleOnUpdate(item)}
                    className="btn bg-blue-500 text-white px-3 py-2 rounded-md mx-1 hover:bg-blue-600"
                  >
                    <FaPen />
                  </button>

                  <button
                    onClick={() => handleonDelete(item._id)}
                    className="btn bg-red-500 text-white px-3 py-2 rounded-md mx-1 hover:bg-red-600"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {connections?.length === 0 && (
          <p className="text-center py-10 text-gray-500">
            No connections found!
          </p>
        )}
      </div>
    </div>
  );
};

export default MyConnections;
