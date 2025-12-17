import { Link, Outlet, useLocation } from "react-router-dom"

const Product = () => {
  const location = useLocation()
  const isBasePage = location.pathname === "/product"

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">

      <div className="flex justify-center">
  <div
    className="
      w-full max-w-xl rounded-2xl py-5
      bg-slate-800/60 border border-white/10
      transition-all duration-300 ease-out
      hover:bg-slate-800/80
      hover:border-amber-400/40
      hover:shadow-xl hover:shadow-amber-500/10
    "
  >

          <div className="flex justify-center gap-12">
            <Link
              to="/product/men"
              className="text-lg font-semibold text-white transition-colors hover:text-amber-400"
            >
              Men
            </Link>
            <Link
              to="/product/women"
              className="text-lg font-semibold text-white transition-colors hover:text-amber-400"
            >
              Women
            </Link>
            <Link
              to="/product/kids"
              className="text-lg font-semibold text-white transition-colors hover:text-amber-400"
            >
              Kids
            </Link>
          </div>
        </div>
      </div>

      {/* Content Section */}
      {!isBasePage && (
        <div className="mt-25 flex justify-center">
          <div className="w-full max-w-3xl text-center">
            <Outlet />
          </div>
        </div>
      )}

    </section>
  )
}

export default Product
