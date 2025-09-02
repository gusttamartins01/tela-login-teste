interface Props {
  onNavigate: (tela: "signup" | "signin") => void;
}

export default function WelcomeScreen({ onNavigate }: Props) {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{
        backgroundImage: "url('https://source.unsplash.com/featured/?social,people')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="relative z-10 text-center px-6 max-w-xl animate-fade-in">
        <h1 className="text-5xl font-extrabold mb-4 tracking-tight">Social Page</h1>
        <p className="text-lg mb-2">Comece uma nova jornada social.</p>
        <p className="text-sm text-gray-300 mb-8">Conecte-se com pessoas e eventos ao seu redor</p>

        <div className="space-y-4">
          <button
            onClick={() => onNavigate("signin")}
            className="w-full bg-white text-gray-900 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
          >
            Entrar
          </button>
          <button
            onClick={() => onNavigate("signup")}
            className="text-blue-400 hover:text-blue-300 underline text-sm transition"
          >
            Ou criar conta →
          </button>
        </div>
      </div>
    </div>
  );
}