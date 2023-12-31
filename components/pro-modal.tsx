'use cliente'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { useProModal } from '@/hooks/use-pro-modal'
import { Badge } from '@/components/ui/badge'
import {
  Check,
  Code,
  VideoIcon,
  ImageIcon,
  Music,
  MessageSquare,
  Zap,
} from 'lucide-react'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { Button } from './ui/button'

import { toast } from 'react-hot-toast'

import axios from 'axios'
import { useState } from 'react'

const tools = [
  {
    label: 'Conversation',
    icon: MessageSquare,
    bgcolor: 'bg-violet-500/10',
    color: 'text-violet-500',
    href: '/conversation',
  },
  {
    label: 'Music Generation',
    icon: Music,
    bgcolor: 'bg-emerald-500/10',
    color: 'text-emerald-500',
    href: '/music',
  },
  {
    label: 'Image Generation',
    icon: ImageIcon,
    bgcolor: 'bg-pink-700/10',
    color: 'text-pink-700',
    href: '/image',
  },
  {
    label: 'Video Generation',
    icon: VideoIcon,
    bgcolor: 'bg-orange-700/10',
    color: 'text-orange-700',
    href: '/video',
  },
  {
    label: 'Code Generation',
    icon: Code,
    bgcolor: 'bg-green-700/10',
    color: 'text-green-700',
    href: '/code',
  },
]

export const ProModal = () => {
  const proModal = useProModal()
  const [loading, setLoading] = useState<boolean>(false)

  const onSubscription = async () => {
    try {
      setLoading(true)
      const response = await axios.get('/api/stripe')

      window.location.href = response.data.url
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error('Something went wrong')
    } finally {
      setLoading(false)
    }
  }
  return (
    <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex justify-center items-center flex-col gap-y-4 pb-2">
            <div className="flex items-center gap-x-2 font-bold py-1">
              Upgrade to Genius
              <Badge variant="premium" className="uppercase text-sm py-1">
                pro
              </Badge>
            </div>
          </DialogTitle>
          <DialogDescription className="text-center pt-2 space-y-2 text-zinc-900 font-medium">
            {tools.map((tool) => (
              <Card
                key={tool.label}
                className="p-3 border-black/5 flex items-center justify-between"
              >
                <div className="flex items-center gap-x-4">
                  <div className={cn('p-2 w-fit rounded-md', tool.bgcolor)}>
                    <tool.icon className={cn('w-6 h-6', tool.color)} />
                  </div>
                  <div className="font-semibold text-sm">{tool.label}</div>
                </div>
                <Check className="text-primary w-5 h-5" />
              </Card>
            ))}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            onClick={onSubscription}
            className="w-full"
            size="lg"
            variant="premium"
            disabled={loading}
          >
            Upgrade
            <Zap className="w-4 h-4 ml-2 fill-white" />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
