import { useState } from "react";
import { registerWithEmail } from "../services/authService";
import axios from "axios";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      const idToken = await registerWithEmail(email, password);

      // Envoie au backend
      const res = await axios.post("http://localhost:3000/auth/firebase", { idToken });

      localStorage.setItem("jwt", res.data.jwt); // Stockage du JWT backend
      alert("Inscription réussie !");
    } catch (err) {
      console.error(err);
      alert("Erreur");
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" />
      <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password" />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}
