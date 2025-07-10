import { useEffect } from "react";

export default function FloatingHearts() {
  useEffect(() => {
    const hearts = document.querySelectorAll('.heart-float');
    hearts.forEach((heart, index) => {
      (heart as HTMLElement).style.animationDelay = (index * 0.5) + 's';
    });

    if (window.innerWidth < 768) {
      hearts.forEach(heart => {
        (heart as HTMLElement).style.fontSize = '1.5rem';
      });
    }
  }, []);

  return (
    <>
      <div className="heart-float text-2xl" style={{
        top: '10%', 
        left: '5%'
      }}>
        💖
      </div>
      <div className="heart-float text-xl" style={{
        top: '20%', 
        right: '10%',
        animationDelay: '1s'
      }}>
        💕
      </div>
      <div className="heart-float text-xl" style={{
        top: '60%', 
        left: '8%',
        animationDelay: '2s'
      }}>
        💗
      </div>
      <div className="heart-float text-lg" style={{
        top: '80%', 
        right: '15%',
        animationDelay: '0.5s'
      }}>
        💝
      </div>
    </>
  );
}
