// export default function Home() {
//   return <h1>Welcome to Team Task Manager 🚀</h1>;
// }
export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6">
      
      <h1 className="text-4xl md:text-6xl font-bold text-center">
        Team Task Manager 
      </h1>

      <p className="mt-4 text-white/60 text-center max-w-md">
        Manage your projects, assign tasks, and collaborate with your team — all in one place.
      </p>

      <div className="mt-8 flex gap-4">
        <a
          href="/signup"
          className="px-6 py-3 bg-white text-black rounded-md font-medium hover:bg-white/90"
        >
          Get Started
        </a>

        <a
          href="/login"
          className="px-6 py-3 border border-white/20 rounded-md text-white/80 hover:border-white/40 hover:text-white"
        >
          Login
        </a>
      </div>

    </main>
  );
}