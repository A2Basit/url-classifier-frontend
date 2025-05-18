"use client"

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { motion } from 'framer-motion'

interface UrlInputProps {
  url: string
  setUrl: (url: string) => void
}

export default function UrlInput({ url, setUrl }: UrlInputProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-2"
    >
      <Label htmlFor="url" className="text-base">
        Enter URL to analyze
      </Label>
      <Input
        id="url"
        type="url"
        placeholder="https://example.com"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="h-12 text-base"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault()
            const form = e.currentTarget.form
            if (form) form.requestSubmit()
          }
        }}
      />
    </motion.div>
  )
}

