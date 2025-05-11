"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
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
    <Card className="w-full max-w-md">
      <CardContent className="space-y-4 p-6">
        <UrlInput url={url} setUrl={setUrl} />
        <SubmitButton onClick={handleSubmit} isLoading={isLoading} />
        <ResultDisplay category={category} error={error} />
      </CardContent>
    </Card>
  )
}

