"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion, AnimatePresence } from "framer-motion"
import { Globe } from "lucide-react"
import UrlInput from "./UrlInput"
import SubmitButton from "./SubmitButton"
import ResultDisplay from "./ResultDisplay"

export default function UrlClassifier() {
  const [url, setUrl] = useState("")
  const [category, setCategory] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async () => {
    setIsLoading(true)
    setError("")
    setCategory("")

    try {
      if (!url.trim()) {
        throw new Error("Please enter a valid URL")
      }

      // Add http:// prefix if missing
      // const formattedUrl = url.startsWith("http") ? url : `http://${url}`

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/classify`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: url }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || "Failed to classify URL")
      }

      const data = await response.json()
      console.log(data)
      setCategory(data.category)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred while classifying the URL")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="w-full shadow-lg border-border/50">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold flex items-center gap-2">
            <Globe className="h-6 w-6 text-primary" />
            URL Analysis
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 p-6">
          <UrlInput url={url} setUrl={setUrl} />
          <SubmitButton onClick={handleSubmit} isLoading={isLoading} />
          <AnimatePresence mode="wait">
            {(category || error) && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <ResultDisplay category={category} error={error} />
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>
    </motion.div>
  )
}

