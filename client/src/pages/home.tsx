import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen romantic-bg flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center animate-slide-up">
          <h1 className="text-6xl md:text-8xl font-dancing text-white mb-6 drop-shadow-lg">
            Happy 11th Day!
          </h1>
          <p className="text-2xl md:text-3xl mb-8 font-vibes" style={{ color: 'var(--ivory)' }}>
            Celebrating another beautiful day of your birthday month, my love
          </p>
          
          <div className="max-w-md mx-auto mb-8 animate-float">
            <img 
              src="https://images.unsplash.com/photo-1518895949257-7621c3c786d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
              alt="Romantic roses bouquet" 
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>
          
          <div className="space-y-4">
            <Link href="/letter">
              <a className="inline-block bg-white text-burgundy px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-lg mr-4"
                 style={{ color: 'var(--burgundy)' }}>
                Read My Letter 💌
              </a>
            </Link>
            <Link href="/gift">
              <a className="inline-block text-white px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-lg"
                 style={{ backgroundColor: 'var(--burgundy)' }}>
                Open Your Gift 🎁
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
