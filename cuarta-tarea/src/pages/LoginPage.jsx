import { useForm } from "../hooks/useForm";

export const LoginPage = () => {
  const { formulario, handleSubmit, handleChange } = useForm({
    username: "",
    password: "",
  });

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-yellow-200 via-yellow-100 to-sky-300 p-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-yellow-50/95 border-4 border-blue-800 rounded-2xl p-8 shadow-2xl flex flex-col items-center"
      >
        <header className="mb-6 text-center">
          <div className="w-14 h-14 bg-orange-400 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-inner">
            🍩
          </div>
          <h2 className="mt-3 text-2xl font-extrabold text-blue-900">
            Springfield Login
          </h2>
          <p className="text-sm text-blue-800/80">Accedé al mundo amarillo</p>
        </header>

        <div className="w-full space-y-4">
          <div>
            <label className="block text-sm font-semibold text-blue-900 mb-1">
              Username
            </label>
            <input
              type="text"
              name="username"
              value={formulario.username}
              onChange={handleChange}
              placeholder="username"
              aria-label="username"
              className="w-full rounded-lg px-4 py-2 border-2 border-transparent focus:border-orange-400 focus:ring-4 focus:ring-orange-200 bg-white/90 placeholder-gray-400 transition"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-blue-900 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formulario.password}
              onChange={handleChange}
              placeholder="password"
              aria-label="password"
              className="w-full rounded-lg px-4 py-2 border-2 border-transparent focus:border-orange-400 focus:ring-4 focus:ring-orange-200 bg-white/90 placeholder-gray-400 transition"
            />
          </div>
        </div>

        <div className="mt-6 w-full flex flex-col items-center gap-3">
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-8 rounded-full shadow-md transition"
          >
            Iniciar sesión
          </button>

          <p className="text-xs text-blue-800/70">
            ¿No tenés cuenta?{" "}
            <span className="text-orange-600 hover:underline cursor-pointer">
              Registrate acá
            </span>
          </p>
        </div>

        <footer className="mt-6 text-center text-xs text-blue-800/60">
          <span>— Una producción de la Duff Company 🍺 —</span>
        </footer>
      </form>
    </div>
  );
};
