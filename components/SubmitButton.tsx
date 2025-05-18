"use client"

import { Button } from '@/components/ui/button'
import { Loader2 } from 'lucide-react'
import { motion } from 'framer-motion'

interface SubmitButtonProps {
  onClick: () => void
  isLoading: boolean
}

export default function SubmitButton({ onClick, isLoading }: SubmitButtonProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
    >
      <Button
        onClick={onClick}
        disabled={isLoading}
        className="w-full h-12 text-base font-medium"
        size="lg"
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Analyzing...
          </>
        ) : (
          'Analyze URL'
        )}
      </Button>
    </motion.div>
  )
}

