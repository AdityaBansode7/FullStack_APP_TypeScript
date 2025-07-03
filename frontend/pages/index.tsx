import { useEffect, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


interface User {
  id: string;
  name: string;
  email: string;
}

export default function HomePage() {
  const [users, setUsers] = useState<User[]>([]);
  const [form, setForm] = useState({ id: "", name: "", email: "" });

  const apiBase =
    "http://localhost:5001/fullstack-crud-assignment/us-central1";

  const loadUsers = async () => {
    try {
      const res = await axios.get(`${apiBase}/apiGetUsers`);
      setUsers(res.data);
    } catch (error) {
      toast.error("Error loading users.");
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleSubmit = async () => {
    try {
      if (form.id) {
        await axios.put(`${apiBase}/apiUpdateUser`, form);
        toast.success("User updated successfully!");
      } else {
        await axios.post(`${apiBase}/apiCreateUser`, {
          name: form.name,
          email: form.email,
        });
        toast.success("User created successfully!");
      }
      setForm({ id: "", name: "", email: "" });
      loadUsers();
    } catch (error) {
      toast.error("Something went wrong.");
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`${apiBase}/apiDeleteUser`, { data: { id } });
      toast.success("User deleted!");
      loadUsers();
    } catch (error) {
      toast.error("Error deleting user.");
    }
  };

  const handleEdit = (user: User) => {
    setForm(user);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 flex items-center justify-center p-6">
      <div className="bg-white bg-opacity-80 backdrop-blur-md shadow-2xl rounded-lg w-full max-w-3xl p-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
           User Dashboard
        </h1>
{/* <div className="text-3xl text-purple-600">Made by Aditya!!!</div> */}

        <div className="flex flex-col md:flex-row justify-center mb-8 gap-4">
          <input
            className="flex-1 px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            className="flex-1 px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <button
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded font-semibold hover:scale-105 transition"
            onClick={handleSubmit}
          >
            {form.id ? "Update" : "Add"} User
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-gray-800 rounded overflow-hidden shadow-md">
            <thead className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
              <tr>
                <th className="py-3 px-4 text-left">Name</th>
                <th className="py-3 px-4 text-left">Email</th>
                <th className="py-3 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr
                  key={u.id}
                  className="hover:bg-gray-100 transition"
                >
                  <td className="py-3 px-4">{u.name}</td>
                  <td className="py-3 px-4">{u.email}</td>
                  <td className="py-3 px-4 flex gap-2">
                    <button
                      className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded transition"
                      onClick={() => handleEdit(u)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded transition"
                      onClick={() => handleDelete(u.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {users.length === 0 && (
                <tr>
                  <td colSpan={3} className="text-center py-4 text-gray-500">
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <ToastContainer position="top-right" />
    </div>
  );
}
