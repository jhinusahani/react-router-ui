const Contact = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">

      <h1 className="text-3xl font-semibold leading-tight text-white">
        <span className="text-amber-400">Contact Us</span>
      </h1>

      <p className="mt-6 max-w-3xl text-base text-gray-400 leading-relaxed">
        Have questions or need support? Reach out to us and our team will get
        back to you shortly. We aim to respond clearly and efficiently, without
        unnecessary delays.
      </p>

      <div className="mt-10 space-y-2 text-gray-400 text-sm">
        <p>
          Email: <span className="text-white">support@radhakrishnastore.com</span>
        </p>
        <p>
          Business Hours: <span className="text-white">Mon – Fri, 10 AM – 6 PM</span>
        </p>
      </div>

    </section>
  )
}

export default Contact
