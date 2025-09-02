import { useState } from "react";

interface Props {
  onBack: () => void;
  onSuccess: (nome: string) => void;
}

export default function CreateAccount({ onBack, onSuccess }: Props) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Cadastro:", form);
    onSuccess(form.name);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-800 p-8 rounded-xl w-full max-w-md space-y-6 animate-fade-in shadow-lg"
    >
      <h2 className="text-3xl font-bold text-center text-white">Criar Conta</h2>

      <div className="space-y-4">
        <input name="name" placeholder="Nome" value={form.name} onChange={handleChange} className="input" required />
        <input name="email" type="email" placeholder="E-mail" value={form.email} onChange={handleChange} className="input" required />
        <input name="phone" placeholder="Telefone" value={form.phone} onChange={handleChange} className="input" />
        <input name="password" type="password" placeholder="Senha" value={form.password} onChange={handleChange} className="input" required />
        <input name="confirmPassword" type="password" placeholder="Confirmar Senha" value={form.confirmPassword} onChange={handleChange} className="input" required />
        <label className="flex items-center text-sm text-gray-200">
          <input type="checkbox" name="agree" checked={form.agree} onChange={handleChange} className="mr-2 accent-blue-500" required />
          Concordo com os termos e condições
        </label>
      </div>

      <button type="submit" className="btn-primary w-full mt-4">Cadastrar</button>

      <p className="text-center text-sm mt-4 text-gray-300">
        Já tem uma conta?{" "}
        <button type="button" onClick={onBack} className="underline text-blue-400 hover:text-blue-300 transition">
          Entrar
        </button>
      </p>
    </form>
  );
}