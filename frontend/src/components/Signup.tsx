import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";
import {
  Mail,
  Lock,
  ShieldCheck,
  LogIn,
  UserPlus,
} from "lucide-react";

const Signup: React.FC = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Gestion de la soumission du formulaire
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password === confirmPassword) {
      // Redirection vers dashboard après inscription
      navigate("/dashboard");
    } else {
      alert(t("passwordMismatch") || "Les mots de passe ne correspondent pas");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 border border-gray-200">
        <div className="text-center mb-8">
          <UserPlus className="mx-auto h-10 w-10 text-purple-600" />
          <h1 className="text-3xl font-extrabold text-purple-700 mt-2">
            {t("signup") || "Créer un compte"}
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            {t("createYourAccount") || "Rejoignez-nous dès maintenant !"}
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

          <div className="relative">
            <ShieldCheck className="absolute left-3 top-3 text-gray-400" />
            <input
              type="password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder={t("confirmPassword") || "Confirmer le mot de passe"}
              className="pl-10 w-full py-2.5 rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl font-semibold transition duration-300 shadow-md"
          >
            <UserPlus size={20} />
            {t("signup") || "S'inscrire"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            {t("alreadyHaveAnAccount") || "Vous avez déjà un compte ?"}
          </p>
          <button
            onClick={() => navigate("/login")}
            className="mt-1 inline-flex items-center gap-1 text-purple-600 hover:text-purple-800 font-medium transition"
          >
            <LogIn size={18} />
            {t("login") || "Connexion"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
