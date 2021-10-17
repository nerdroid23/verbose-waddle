import 'tailwindcss/tailwind.css'

const App = ({ Component, pageProps }) => (
  <div className="grid place-items-center h-screen">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Component {...pageProps} />
    </div>
  </div>
)

export default App