import { Button } from '@/components/ui/button'
import { Loader2 } from 'lucide-react'

interface SubmitButtonProps {
  onClick: () => void
  isLoading: boolean
}

export default function SubmitButton({ onClick, isLoading }: SubmitButtonProps) {
  return (
    <Button
      onClick={onClick}
      disabled={isLoading}
      className="w-full"
    >
      {isLoading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Classifying...
        </>
      ) : (
        'Classify URL'
      )}
    </Button>
  )
}

