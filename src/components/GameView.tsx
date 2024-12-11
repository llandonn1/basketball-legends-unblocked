import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const GameView = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const startGame = () => setIsPlaying(true);
  const exitGame = () => setIsPlaying(false);

  return (
    <>
      <div className={`game-container ${!isPlaying ? 'hidden' : ''}`}>
        <div className="absolute top-4 left-4 z-10">
          <Button 
            onClick={exitGame}
            variant="secondary"
            className="flex items-center gap-2 hover:bg-secondary/80"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Menu
          </Button>
        </div>
        <iframe
          src="https://unblocked-games.s3.amazonaws.com/games/2024/gm/basketball-stars/index.html"
          className="game-frame"
          title="Basketball Stars"
        />
      </div>

      {!isPlaying && (
        <div className="min-h-screen flex flex-col items-center justify-center p-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center bg-gradient-to-r from-orange-500 to-red-600 text-transparent bg-clip-text">
            Basketball Legends UnBlocked
          </h1>
          
          <Button
            onClick={startGame}
            className="text-xl px-8 py-6 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105"
          >
            Play Now
          </Button>

          <div className="fixed bottom-4 text-sm text-muted-foreground">
            Made By Landon S.
          </div>
        </div>
      )}
    </>
  );
};

export default GameView;