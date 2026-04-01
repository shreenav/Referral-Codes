'use client';

import { notFound } from 'next/navigation';
import Link from 'next/link';
import products from '@/data/products.json';

interface Props {
  params: {
    id: string;
  };
}

export default function ProductPage({ params }: Props) {
  const product = products.products.find((p) => p.id === params.id);

  if (!product) {
    notFound();
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(product.referralCode);
    alert('Code copied to clipboard!');
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link href="/" className="text-blue-600 hover:text-blue-700">
            ← Back to All Codes
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center gap-6 mb-6">
            <span className="text-6xl">{product.icon}</span>
            <div>
              <h1 className="text-4xl font-bold text-gray-800 mb-2">
                {product.name} Referral Code
              </h1>
              <p className="text-gray-600">{product.description}</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border-2 border-green-300 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Referral Code</h2>
          <div className="mb-6">
            <p className="text-gray-600 mb-2">Use this code for instant benefits:</p>
            <div className="bg-white rounded-lg p-4 border-2 border-green-400">
              <code className="text-3xl font-bold text-green-600">{product.referralCode}</code>
            </div>
          </div>
          <button
            onClick={handleCopy}
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition font-semibold"
          >
            Copy Code
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">What You Get</h2>
          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
            <p className="text-xl font-semibold text-blue-900">{product.discount}</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">How to Use</h2>
          <ol className="space-y-4">
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</span>
              <span className="text-gray-700">Visit {product.name} app or website</span>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</span>
              <span className="text-gray-700">Create your account or log in</span>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</span>
              <span className="text-gray-700">Enter code: <code className="bg-gray-200 px-2 py-1 rounded">{product.referralCode}</code></span>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">4</span>
              <span className="text-gray-700">Enjoy your discount!</span>
            </li>
          </ol>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Use This Code?</h3>
          <a
            href={product.affiliate}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
          >
            Go to {product.name} →
          </a>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Other Referral Codes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {products.products
              .filter((p) => p.id !== product.id)
              .map((p) => (
                <Link key={p.id} href={`/products/${p.id}`}>
                  <div className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition cursor-pointer">
                    <div className="text-3xl mb-2">{p.icon}</div>
                    <h4 className="font-bold text-gray-800 mb-1">{p.name}</h4>
                    <p className="text-gray-600 text-sm">{p.referralCode}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </main>
  );
}
