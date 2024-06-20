import "./profileDeletePage.scss";

import { useContext, useState } from "react";

import { AuthContext } from "../../context/AuthContext";
import apiRequest from "../../lib/apiRequest";
import { useNavigate } from "react-router-dom";

function ProfileDeletePage() {
  const { currentUser, updateUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      await apiRequest.delete(`/users/${currentUser.id}`, {
        headers: {
          Authorization: "Bearer AvZm8PVGeSiLEggxebrHt3FqIO2IwTJeJ4NiQtLJ9c8=",
        },
      });
      updateUser(null); // Clear the user from context
      navigate("/"); // Navigate to the homepage or login page
    } catch (err) {
      console.log(err);
      setError(err.response?.data?.message || "Failed to delete profile");
    }
  };

  return (
    <div className="profileDeletePage">
      <div className="formContainer">
        <h1>Delete Profile</h1>
        <p>
          Are you sure you want to delete your profile? This action cannot be
          undone.
        </p>
        <button onClick={handleDelete} className="deleteButton">
          Delete Profile
        </button>
        {error && <span className="error">{error}</span>}
      </div>
    </div>
  );
}

export default ProfileDeletePage;
