
import { useState } from "react";
import "./App.css";

export default function App() {
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    gender: "Male",
  });

  
  const [submittedData, setSubmittedData] = useState(null);

 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
    setFormData({ name: "", email: "", age: "", gender: "Male" });
  };

  return (
    <div className="container">
      <h1>Simple Form SPA</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Age:
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            min="1"
            max="120"
            required
          />
        </label>

        <label>
          Gender:
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </label>

        <button type="submit">Submit</button>
      </form>

      {submittedData && (
        <div className="result">
          <h2>Submitted Data</h2>
          <p>
            <strong>Name:</strong> {submittedData.name}
          </p>
          <p>
            <strong>Email:</strong> {submittedData.email}
          </p>
          <p>
            <strong>Age:</strong> {submittedData.age}
          </p>
          <p>
            <strong>Gender:</strong> {submittedData.gender}
          </p>
        </div>
      )}
    </div>
  );
}
