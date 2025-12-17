import { useNavigate } from "react-router-dom"

const Navbar2 = () => {
  const navigate = useNavigate()

  return (
    <div className="bg-slate-800/80 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center gap-3 flex-wrap">

        {/* Home */}
        <button
          onClick={() => navigate("/")}
          className="group relative overflow-hidden flex items-center gap-2
                     text-sm font-medium bg-amber-500 text-black
                     px-4 py-2 rounded-lg
                     transition-all duration-300
                     hover:bg-amber-400 hover:shadow-lg hover:shadow-amber-500/30
                     active:scale-95"
        >
          <svg
            className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
          </svg>
          Home
        </button>

        {/* Back */}
        <button
          onClick={() => navigate(-1)}
          className="group flex items-center gap-2
                     text-sm font-medium bg-slate-700 text-white
                     px-4 py-2 rounded-lg
                     transition-all duration-300
                     hover:bg-slate-600 hover:shadow-md hover:shadow-black/30
                     active:scale-95"
        >
          <svg
            className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>

        {/* Next */}
        <button
          onClick={() => navigate(1)}
          className="group flex items-center gap-2
                     text-sm font-medium bg-slate-700 text-white
                     px-4 py-2 rounded-lg
                     transition-all duration-300
                     hover:bg-slate-600 hover:shadow-md hover:shadow-black/30
                     active:scale-95"
        >
          Next
          <svg
            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

      </div>
    </div>
  )
}

export default Navbar2
