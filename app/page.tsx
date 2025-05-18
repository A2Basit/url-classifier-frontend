import UrlClassifier from '../components/UrlClassifier'
import { ThemeToggle } from '@/components/ThemeToggle'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4 py-16">
        <div className="flex justify-end mb-8">
          <ThemeToggle />
        </div>
        
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            URL Category Classifier
          </h1>
          <p className="text-xl text-muted-foreground">
            Analyze and categorize URLs with advanced machine learning
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <UrlClassifier />
        </div>
      </div>
    </main>
  )
}

