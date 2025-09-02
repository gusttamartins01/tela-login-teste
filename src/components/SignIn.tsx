import { useState } from "react";

interface Props {
  onBack: () => void;
  onSuccess: (nome: string) => void;
}

export default function SignIn({ onBack, onSuccess }: Props) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    remember: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login:", form);
    onSuccess(form.name);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-800 p-8 rounded-xl w-full max-w-md space-y-6 animate-fade-in shadow-lg"
    >
      <h2 className="text-3xl font-bold text-center text-white">Bem-vindo de volta!</h2>
      <p className="text-sm text-center text-gray-300 mb-4">Continue sua jornada social.</p>

      <div className="space-y-4">
        <input name="name" placeholder="Nome" value={form.name} onChange={handleChange} className="input" required />
        <input name="email" type="email" placeholder="E-mail" value={form.email} onChange={handleChange} className="input" required />
        <input name="password" type="password" placeholder="Senha" value={form.password} onChange={handleChange} className="input" required />
        <label className="flex items-center text-sm text-gray-200">
          <input type="checkbox" name="remember" checked={form.remember} onChange={handleChange} className="mr-2 accent-blue-500" />
          Lembrar de mim 
        </label>
      </div>

      <button type="submit" className="btn-primary w-full mt-4">Entrar</button>

      <button type="button" onClick={onBack} className="text-sm text-blue-400 underline block text-center mt-2 hover:text-blue-300 transition">
        Esqueceu a senha?
      </button>
    </form>
  );
}