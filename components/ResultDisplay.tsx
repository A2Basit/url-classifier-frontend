import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle2, AlertCircle } from "lucide-react"

interface ResultDisplayProps {
  category: string
  error: string
}

export default function ResultDisplay({ category, error }: ResultDisplayProps) {
  if (!category && !error) return null

  return (
    <Alert variant={error ? "destructive" : "default"}>
      {error ? (
        <>
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </>
      ) : (
        <>
          <CheckCircle2 className="h-4 w-4" />
          <AlertTitle>URL Classified</AlertTitle>
          <AlertDescription>
            <div className="font-medium">Category: {category}</div>
          </AlertDescription>
        </>
      )}
    </Alert>
  )
}

