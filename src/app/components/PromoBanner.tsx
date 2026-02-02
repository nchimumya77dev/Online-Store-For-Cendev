import { X, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/app/components/ui/button';
import { motion, AnimatePresence } from 'motion/react';

export function PromoBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 'auto', opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 flex-1 justify-center">
              <Sparkles className="w-5 h-5 animate-pulse" />
              <p className="text-sm sm:text-base font-medium">
                <span className="font-bold">Limited Offer:</span> Get 20% OFF on all products! Use code{' '}
                <span className="font-mono bg-white/20 px-2 py-1 rounded">CENDEV20</span>
              </p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/20 flex-shrink-0"
              onClick={() => setIsVisible(false)}
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
