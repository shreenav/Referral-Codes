import Link from 'next/link';
import products from '@/data/products.json';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">💰 Referral Codes</h1>
          <p className="text-xl text-blue-100">
            Get the best referral codes and discounts for your favorite apps
          </p>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Search Intent Text */}
        <div className="mb-12">
          <p className="text-gray-600 text-center text-sm mb-6">
            Looking for referral codes? Find verified codes for wakefit referral code, eatclub referral code, and more!
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.products.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`}>
              <div className="card p-6 h-full">
                <div className="text-4xl mb-4">{product.icon}</div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  {product.name} Referral Code
                </h2>
                <p className="text-gray-600 mb-4">{product.description}</p>

                <div className="mb-4">
                  <p className="text-sm text-gray-500 mb-1">Referral Code:</p>
                  <div className="code-badge">{product.referralCode}</div>
                </div>

                <p className="text-green-600 font-semibold mb-4">
                  {product.discount}
                </p>

                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                  View Details →
                </button>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            Don't see your app? We're constantly adding more referral codes!
          </p>
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition"
          >
            Suggest an App
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-8 mt-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="mb-2">&copy; 2024 Referral Codes. All rights reserved.</p>
          <p className="text-sm">
            Find the best referral codes and get amazing discounts on your favorite apps.
          </p>
        </div>
      </footer>
    </main>
  );
}
