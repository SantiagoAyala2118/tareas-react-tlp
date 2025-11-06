import { useNavigate } from "react-router";
import { useForm } from "../hooks/useForm";

export const RegisterPage = () => {
  const { handleChange, formulario } = useForm({
    username: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-sky-200 via-yellow-100 to-yellow-300 p-6">
      <form
        className="w-full max-w-lg bg-yellow-50/90 backdrop-blur-sm border-4 border-blue-700 rounded-2xl p-8 shadow-2xl"
        onSubmit={handleSubmit}
      >
        <header className="mb-6 text-center">
          <h2 className="text-2xl font-extrabold text-blue-900">
            ¡Bienvenido a la Springfield App 🍩
          </h2>
          <p className="text-sm text-blue-800/80">
            Crea tu usuario — estilo Simpsons
          </p>
        </header>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-blue-900 mb-1">
              Username
            </label>
            <input
              className="w-full rounded-lg px-4 py-2 border-2 border-transparent focus:border-orange-400 focus:ring-4 focus:ring-orange-200 bg-white/90 placeholder-gray-400"
              type="text"
              name="username"
              value={formulario.username}
              onChange={handleChange}
              placeholder="username"
              aria-label="username"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-blue-900 mb-1">
              Email
            </label>
            <input
              className="w-full rounded-lg px-4 py-2 border-2 border-transparent focus:border-orange-400 focus:ring-4 focus:ring-orange-200 bg-white/90 placeholder-gray-400"
              type="email"
              name="email"
              value={formulario.email}
              onChange={handleChange}
              placeholder="email"
              aria-label="email"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-blue-900 mb-1">
              Password
            </label>
            <input
              className="w-full rounded-lg px-4 py-2 border-2 border-transparent focus:border-orange-400 focus:ring-4 focus:ring-orange-200 bg-white/90 placeholder-gray-400"
              type="password"
              name="password"
              value={formulario.password}
              onChange={handleChange}
              placeholder="password"
              aria-label="password"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-blue-900 mb-1">
                Firstname
              </label>
              <input
                className="w-full rounded-lg px-4 py-2 border-2 border-transparent focus:border-orange-400 focus:ring-4 focus:ring-orange-200 bg-white/90 placeholder-gray-400"
                type="text"
                name="firstName"
                value={formulario.firstName}
                onChange={handleChange}
                placeholder="firstName"
                aria-label="firstName"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-blue-900 mb-1">
                Lastname
              </label>
              <input
                className="w-full rounded-lg px-4 py-2 border-2 border-transparent focus:border-orange-400 focus:ring-4 focus:ring-orange-200 bg-white/90 placeholder-gray-400"
                type="text"
                name="lastName"
                value={formulario.lastName}
                onChange={handleChange}
                placeholder="lastName"
                aria-label="lastName"
              />
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-full shadow-md transition"
          >
            Crear cuenta
          </button>
          <span className="text-xs text-blue-800/70">
            ¿Ya tenés cuenta? Inicia sesión
          </span>
        </div>

        <footer className="mt-4 text-center text-xs text-blue-800/60">
          <span>— Powered by Duff & Donuts 🍩 —</span>
        </footer>
      </form>
    </div>
  );
};
