import { Link } from "wouter";

export default function Letter() {
  return (
    <div className="min-h-screen py-20">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')",
          backgroundColor: '#FFF8DC'
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="love-letter rounded-3xl p-8 md:p-12 animate-fade-in">
            <div className="text-center mb-8">
              <h2 className="text-4xl md:text-5xl font-dancing mb-4" style={{ color: 'var(--burgundy)' }}>
                To My Beautiful Cupcake 💕
              </h2>
              <img 
                src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                alt="Romantic letter envelope" 
                className="w-32 h-24 mx-auto rounded-lg shadow-md mb-6"
              />
            </div>
            
            <div className="text-lg md:text-xl leading-relaxed text-gray-800 space-y-6">
              <p className="font-vibes text-2xl text-center mb-8" style={{ color: 'var(--deep-rose)' }}>
                "Every day with you feels like a celebration..."
              </p>
              
              <p>My Dearest Love,</p>
              
              <p>
                Today marks the 11th day of your birthday month, and my heart is overflowing with joy and gratitude. 
                Each day that passes brings us closer to celebrating the amazing person you are, and I can't help but 
                smile thinking about all the wonderful moments we've shared together.
              </p>
              
              <p>
                You bring so much light into my world. Your laugh is like music to my ears, your smile brightens 
                even the cloudiest days, and your love makes everything feel possible. I am so incredibly lucky 
                to have you in my life, and I want to spend every day showing you just how much you mean to me.
              </p>
              
              <p>
                As we count down to your special day, I want you to know that you are treasured, you are loved, 
                and you are the most beautiful person inside and out. This month is all about celebrating YOU, 
                and I plan to make every single day magical.
              </p>
              
              <div className="text-center my-8">
                <img 
                  src="https://images.unsplash.com/photo-1561181286-d3fee7d55364?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                  alt="Delicate pink roses" 
                  className="rounded-xl shadow-lg mx-auto max-w-md"
                />
              </div>
              
              <p>
                I love how you make the ordinary feel extraordinary. Whether we're having deep conversations 
                late at night, sharing silly jokes that make us laugh until our stomachs hurt, or simply 
                enjoying quiet moments together, every second with you is a gift.
              </p>
              
              <p>
                Happy 11th day of your birthday month, my beautiful girlfriend. Here's to many more days 
                of love, laughter, and endless adventures together. You are my heart, my happiness, and my home.
              </p>
              
              <div className="text-right mt-8 font-vibes text-xl" style={{ color: 'var(--deep-rose)' }}>
                All my love, always and forever,<br />
                Your lovely bandr 💖
              </div>
            </div>
            
            <div className="text-center mt-8">
              <Link href="/gift">
                <a className="bg-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-700 transition-all duration-300 shadow-lg"
                   style={{ backgroundColor: 'var(--deep-rose)' }}>
                  Now Open Your Gift! 🎁
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
