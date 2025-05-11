import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

interface UrlInputProps {
  url: string
  setUrl: (url: string) => void
}

export default function UrlInput({ url, setUrl }: UrlInputProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor="url-input">Enter URL</Label>
      <Input
        id="url-input"
        type="url"
        placeholder="https://example.com"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="w-full"
      />
    </div>
  )
}

