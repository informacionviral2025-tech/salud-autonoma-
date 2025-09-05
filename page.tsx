export default function Home() {
  return (
    <main className="max-w-4xl mx-auto p-6">
      {/* HERO */}
      <section className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Transforma tu salud paso a paso
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          10 000+ personas ya mejoraron su salud sin dietas milagro.
        </p>
        <a
          href="/test"
          className="inline-block bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700"
        >
          Haz el Test Gratis
        </a>
      </section>

      {/* RETO ACTIVO */}
      <section className="py-8">
        <h2 className="text-2xl font-semibold mb-4">Reto de junio</h2>
        <div className="border rounded p-4 bg-white">
          <p className="font-medium">30 días caminando 10 000 pasos</p>
          <p className="text-sm text-gray-500">1 247 personas activas · ¡Únete!</p>
          <a
            href="/retos"
            className="inline-block mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Unirme
          </a>
        </div>
      </section>

      {/* ARTÍCULOS DESTACADOS */}
      <section className="py-8">
        <h2 className="text-2xl font-semibold mb-4">Artículos destacados</h2>
        <ul className="space-y-3">
          <li className="border rounded p-4 bg-white">
            <a href="/posts/pina-grasa" className="font-medium text-blue-700">
              ¿La piña quema grasa? Ciencia detrás del mito
            </a>
            <p className="text-sm text-gray-500">5 min de lectura</p>
          </li>
          <li className="border rounded p-4 bg-white">
            <a href="/posts/desayunos-10min" className="font-medium text-blue-700">
              10 desayunos saludables en menos de 10 min
            </a>
            <p className="text-sm text-gray-500">3 min de lectura</p>
          </li>
          <li className="border rounded p-4 bg-white">
            <a href="/posts/dormir-5pasos" className="font-medium text-blue-700">
              Cómo dormir mejor en 5 pasos
            </a>
            <p className="text-sm text-gray-500">4 min de lectura</p>
          </li>
        </ul>
      </section>
    </main>
  );
}
