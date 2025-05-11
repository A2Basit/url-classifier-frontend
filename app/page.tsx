import UrlClassifier from '../components/UrlClassifier'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-b from-gray-100 to-gray-200">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">URL Category Classifier</h1>
      <UrlClassifier />
    </main>
  )
}

