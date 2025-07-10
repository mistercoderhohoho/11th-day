import { useState, useRef } from "react";
import { Link } from "wouter";

export default function Gift() {
  const [giftOpened, setGiftOpened] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const flowerContainerRef = useRef<HTMLDivElement>(null);

  const openGift = () => {
    if (giftOpened) return;
    
    setGiftOpened(true);
    
    setTimeout(() => {
      setShowCard(true);
      createFlowerAnimation();
    }, 800);
  };

  const createFlowerAnimation = () => {
    const container = flowerContainerRef.current;
    if (!container) return;
    
    const flowers = ['🌸', '🌺', '🌻', '🌷', '🌹', '🌼'];
    
    for (let i = 0; i < 20; i++) {
      setTimeout(() => {
        const flower = document.createElement('div');
        flower.className = 'flower animate text-4xl';
        flower.textContent = flowers[Math.floor(Math.random() * flowers.length)];
        flower.style.left = Math.random() * 100 + '%';
        flower.style.animationDelay = Math.random() * 2 + 's';
        flower.style.animationDuration = (3 + Math.random() * 2) + 's';
        
        container.appendChild(flower);
        
        setTimeout(() => {
          if (flower.parentNode) {
            flower.parentNode.removeChild(flower);
          }
        }, 6000);
      }, i * 200);
    }
  };

  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-pink-300 via-pink-400 to-pink-600">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-dancing text-white mb-6 drop-shadow-lg">
            A Special Gift Just For You! 🎁
          </h2>
          <p className="text-xl font-vibes" style={{ color: 'var(--ivory)' }}>
            Click the gift box to open your surprise!
          </p>
        </div>
        
        <div className="flex justify-center items-center">
          <div className="gift-container relative">
            <div 
              className={`gift-box animate-gift-pulse ${giftOpened ? 'opened' : ''}`}
              onClick={openGift}
            >
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1513885535751-8b9238bd345a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400" 
                  alt="Decorative gift box with golden ribbon" 
                  className="gift-lid w-64 h-64 rounded-2xl shadow-2xl transition-all duration-800"
                />
                
                <img 
                  src="https://images.unsplash.com/photo-1607344645866-009c7d7496df?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                  alt="Gift box base with decorative pattern" 
                  className="absolute top-0 left-0 w-64 h-48 rounded-2xl shadow-2xl"
                />
              </div>
            </div>
            
            <div className={`gift-card absolute top-8 left-8 w-48 h-64 ${showCard ? 'visible' : ''}`}>
              <div className="bg-white rounded-2xl shadow-2xl p-6 text-center">
                <div className="text-4xl mb-4">💖</div>
                <h3 className="text-xl font-dancing mb-3" style={{ color: 'var(--burgundy)' }}>
                  Your Gift
                </h3>
                <p className="text-sm text-gray-700 mb-4">
                  I will always be at your side in every moment of your life,
                  through the good and the bad, the happy and the sad.
                  I love you always and forever, my dear.
                </p>
                <div className="text-2xl">🌹✨🎂</div>
              </div>
            </div>
          </div>
        </div>
        
        <div 
          ref={flowerContainerRef}
          className="fixed inset-0 pointer-events-none z-50"
        />
        
        <div className="text-center mt-12">
          <Link href="/">
            <a className="bg-white px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg"
               style={{ color: 'var(--burgundy)' }}>
              Back to Home 🏠
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
