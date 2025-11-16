import React, { useEffect, useRef, useState } from "react";
import { FaPen, FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const MyConnections = () => {
  const [connections, setConnections] = useState([]);
  const [selectedConnection, setSelectedConnection] = useState({});
  const connectionRef = useRef(null);
  useEffect(() => {
    fetch(`http://localhost:3000/my-connection`)
      .then((res) => res.json())
      .then((data) => {
        // console.log("my connection for this", data);
        setConnections(data);
      });
  }, []);

  const handleonDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/my-connection/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your connection has been deleted.",
                icon: "success",
              });
              const remainingConnection = connections.filter(
                (item) => item._id !== _id
              );
              setConnections(remainingConnection);
            }
          });
      }
    });
  };

  const handleOnUpdate = (_id) => {
    connectionRef.current.showModal();
    fetch(`http://localhost:3000/my-connection/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        setSelectedConnection(data);
        connectionRef.current.showModal();
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name: e.target.name.value,
      subject: e.target.subject.value,
      studyMode: e.target.studyMode.value,
    };

    fetch(`http://localhost:3000/my-connection/${selectedConnection._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        toast("Connection updated successfully!");
        console.log(data)
        connectionRef.current.close();
        const updatedList = connections.map((item) =>
          item._id === selectedConnection._id ? { ...item, ...formData } : item
        );

        setConnections(updatedList);
      })
      .catch((error) => {
        toast(error.message);
      });
  };

  return (
    <div className="max-w-5xl mx-auto my-20">
      <h2 className="text-3xl font-bold mb-6">
        My Connections {connections.length}
      </h2>

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
                    {/* <p className="text-sm text-gray-600">{item.location}</p> */}
                  </div>
                </td>

                {/* Subject */}
                <td className="p-4 font-semibold">
                  <span className="bg-blue-200 py-2 px-4 rounded-full">
                    {item.subject}
                  </span>
                </td>

                {/* Study Mode */}
                <td className="p-4 font-semibold">
                  <span className="bg-blue-200 py-2 px-4 rounded-full">
                    {item.studyMode}
                  </span>
                </td>

                {/* Actions */}
                <td className="p-4 text-center">
                  <button
                    onClick={() => handleOnUpdate(item._id)}
                    className="btn bg-blue-500 text-white px-3 py-2 rounded-md mx-1 hover:bg-blue-600"
                  >
                    <FaPen />
                  </button>
                  <dialog
                    ref={connectionRef}
                    className="modal modal-bottom sm:modal-middle"
                  >
                    <div className="modal-box">
                      <h3 className="font-bold text-lg">Update Connection</h3>
                      <div className="">
                        <form
                          onSubmit={handleSubmit}
                          // method="dialog"
                          className="space-y-3"
                        >
                          {/* Name */}
                          <div>
                            <label className="block text-left font-semibold mb-1">
                              Name
                            </label>
                            <input
                              type="text"
                              name="name"
                              className="input input-bordered w-full"
                              placeholder="Enter name"
                              defaultValue={selectedConnection?.name}
                            />
                          </div>

                          {/* Subject */}
                          <div>
                            <label className="block text-left font-semibold mb-1">
                              Subject
                            </label>
                            <input
                              type="text"
                              name="subject"
                              className="input input-bordered w-full"
                              placeholder="Enter subject"
                              defaultValue={selectedConnection?.subject}
                            />
                          </div>

                          {/* Study Mode */}
                          <div>
                            <label className="block text-left font-semibold mb-1">
                              Study Mode
                            </label>
                            <select
                              name="studyMode"
                              className="select select-bordered w-full"
                              defaultValue={selectedConnection?.studyMode}
                            >
                              <option value="Online">Online</option>
                              <option value="Offline">Offline</option>
                              <option value="Both">Both</option>
                            </select>
                          </div>
                          <div className="space-x-3">
                            <button className="btn" type="submit">
                              Update
                            </button>
                            <button
                              onClick={() => connectionRef.current.close()}
                              className="btn"
                              type="button"
                            >
                              Close
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </dialog>

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
