import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";
import { LogIn, Mail, Lock, User } from "lucide-react";
import axios from "../api/axios";


const Login: React.FC = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !password) {
      alert(t("fillAllFields") || "Veuillez remplir tous les champs.");
      return;
    }

    try {
      const response = await axios.post("/auth/login", { email, password });
      console.log("Réponse login :", response.data);
      console.log("Token reçu :", response.data.access_token);

      if (!response.data.access_token) {
        alert(t("error") || "Token non reçu, connexion impossible");
        return;
      }

    localStorage.setItem("access_token", response.data.access_token);
    localStorage.setItem("id", response.data.user.id);
    navigate("/dashboard"); 
  } catch (error: any) {
    alert(
      error.response?.data?.message
        ? `${t("error") || "Erreur"}: ${error.response.data.message}`
        : error.message || t("error") || "Erreur inconnue"
    );
  }
};




return (
  <div className="min-h-screen bg-gradient-to-br from-purple-100 via-white to-purple-50 flex items-center justify-center px-4">
    <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 border border-gray-200">
      <div className="text-center mb-8">
        <LogIn className="mx-auto h-10 w-10 text-purple-600" />
        <h1 className="text-3xl font-extrabold text-purple-700 mt-2">
          {t("login") || "Connexion"}
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          {t("welcomeBack") || "Content de vous revoir !"}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="relative">
          <Mail className="absolute left-3 top-3 text-gray-400" />
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t("email") || "Email"}
            className="pl-10 w-full py-2.5 rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />
        </div>

        <div className="relative">
          <Lock className="absolute left-3 top-3 text-gray-400" />
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder={t("password") || "Mot de passe"}
            className="pl-10 w-full py-2.5 rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl font-semibold transition duration-300 shadow-md"
        >
          <LogIn size={20} />
          {t("login") || "Connexion"}
        </button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">
          {t("dontHaveAnAccount") || "Vous n'avez pas encore de compte ?"}
        </p>
        <button
          onClick={() => navigate("/signup")}
          className="mt-1 inline-flex items-center gap-1 text-purple-600 hover:text-purple-800 font-medium transition"
        >
          <User className="mr-1" />
          {t("signup") || "Inscription"}
        </button>
      </div>
    </div>
  </div>
);
};

export default Login;
