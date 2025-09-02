import { useState } from "react";
import WelcomeScreen from "./components/WelcomeScreen";
import CreateAccount from "./components/CreateAccount";
import SignIn from "./components/SignIn";

export default function App() {
  const [tela, setTela] = useState<"welcome" | "signup" | "signin" | "home">("welcome");
  const [nomeUsuario, setNomeUsuario] = useState("");

  const navegarPara = (proxima: "signup" | "signin") => {
    setTela(proxima);
  };

  const voltar = () => {
    setTela("welcome");
  };

  const aoLogarOuCadastrar = (nome: string) => {
    setNomeUsuario(nome);
    setTela("home");
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      {tela === "welcome" && <WelcomeScreen onNavigate={navegarPara} />}
      {tela === "signup" && <CreateAccount onBack={voltar} onSuccess={aoLogarOuCadastrar} />}
      {tela === "signin" && <SignIn onBack={voltar} onSuccess={aoLogarOuCadastrar} />}
      {tela === "home" && (
        <div className="text-center text-white animate-fade-in">
          <h1 className="text-4xl font-bold mb-4">Bem-vindo ao sistema, {nomeUsuario}!</h1>
          <p className="text-lg text-gray-300">Você está logado. Aproveite a experiência!</p>
        </div>
      )}
    </div>
  );
}