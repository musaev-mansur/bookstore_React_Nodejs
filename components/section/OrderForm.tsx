import React, { useState } from 'react';
import { Language } from '../../types';
import { Send, MapPin, CheckCircle } from 'lucide-react';
import { translations } from '../../data/translations';

export const OrderForm: React.FC<{ lang: Language }> = ({ lang }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://taymaskha.onrender.com/send_email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        alert(translations[lang].order.successMessage);
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert(translations[lang].order.errorMessage);
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert(translations[lang].order.errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const storeInfo = {
    RU: {
      title: "Где купить",
      storeName: "Книжный магазин «Фаланстер»",
      address: "Тверская ул., 17, Москва, Россия, 125009",
      availability: "В наличии",
      status: "available",
      showAddress: true
    },
    EN: {
      title: "Pre-order",
      availability: "Available early 2026",
      status: "coming",
      showAddress: false
    },
    FR: {
      title: "Précommande",
      availability: "Disponible début 2026",
      status: "coming",
      showAddress: false
    },
    NL: {
      title: "Pre-order",
      availability: "Beschikbaar begin 2026",
      status: "coming",
      showAddress: false
    }
  };

  const currentInfo = storeInfo[lang];

  return (
    <section id="order" className="py-24 bg-noir relative overflow-hidden">
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(138,28,28,0.1)_0%,transparent_70%)]" />

       {/* Left Tower - 3D Effect */}
       <div className="absolute left-0 md:left-0 top-1/2 -translate-y-1/2 w-[400px] md:w-[600px] h-96 opacity-40 pointer-events-none z-0"
            style={{ 
              transform: 'translateY(-50%) perspective(1000px) rotateY(-20deg)',
              transformStyle: 'preserve-3d'
            }}>
         <svg viewBox="0 0 200 300" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
           <g fill="#1a1a20" stroke="#d4af37" strokeWidth="2" transform="scale(2, 1)">
             {/* Left Tower - Wider */}
             <path d="M30,280 L35,20 L45,20 L50,280 Z" />
             <path d="M35,30 h10 M36,50 h8 M37,70 h6 M38,90 h4" strokeOpacity="0.4" />
             {/* Tower Entrance */}
             <path d="M38,200 h6 v20 h-6 Z" fill="#000" stroke="#d4af37" strokeWidth="0.5" />
             {/* Window details */}
             <circle cx="40" cy="120" r="2" fill="#d4af37" opacity="0.3" />
             <circle cx="40" cy="150" r="2" fill="#d4af37" opacity="0.3" />
           </g>
         </svg>
       </div>

       {/* Right Tower - 3D Effect */}
       <div className="absolute right-0 md:right-0 top-1/2 -translate-y-1/2 w-[400px] md:w-[600px] h-96 opacity-40 pointer-events-none z-0"
            style={{ 
              transform: 'translateY(-50%) perspective(1000px) rotateY(20deg)',
              transformStyle: 'preserve-3d'
            }}>
         <svg viewBox="0 0 200 300" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
           <g fill="#1a1a20" stroke="#d4af37" strokeWidth="2" transform="scale(2, 1)">
             {/* Right Tower - Wider */}
             <path d="M50,280 L55,20 L65,20 L70,280 Z" />
             <path d="M55,30 h10 M56,50 h8 M57,70 h6 M58,90 h4" strokeOpacity="0.4" />
             {/* Tower Entrance */}
             <path d="M58,200 h6 v20 h-6 Z" fill="#000" stroke="#d4af37" strokeWidth="0.5" />
             {/* Window details */}
             <circle cx="60" cy="120" r="2" fill="#d4af37" opacity="0.3" />
             <circle cx="60" cy="150" r="2" fill="#d4af37" opacity="0.3" />
           </g>
         </svg>
       </div>

       <div className="container mx-auto px-4 relative z-10">
         <div className="max-w-2xl mx-auto relative">
           {/* Decorative Border Frame */}
           <div className="absolute -inset-4 border border-antique-gold/20 opacity-50 clip-comic" />

           {/* Store Information Block */}
           <div className="bg-black/60 border border-antique-gold/30 p-6 mb-6 backdrop-blur-sm">
             <div className="flex items-start gap-4">
               {currentInfo.showAddress ? (
                 <MapPin className="text-antique-gold mt-1 flex-shrink-0" size={24} />
               ) : (
                 <CheckCircle className={`mt-1 flex-shrink-0 ${currentInfo.status === 'available' ? 'text-chechen-red' : 'text-spectral-cyan'}`} size={24} />
               )}
               <div className="flex-1">
                 <h3 className="text-xl font-ancient text-white mb-3">{currentInfo.title}</h3>
                 {currentInfo.showAddress && (
                   <>
                     <p className="font-cyber font-bold text-antique-gold text-lg mb-2">{currentInfo.storeName}</p>
                     <p className="text-gray-400 font-sans text-sm mb-3">{currentInfo.address}</p>
                   </>
                 )}
                 <div className={`flex items-center gap-2 ${currentInfo.status === 'available' ? 'text-chechen-red' : 'text-spectral-cyan'}`}>
                   {!currentInfo.showAddress && <CheckCircle size={18} />}
                   <span className="font-cyber font-bold text-sm tracking-wider">{currentInfo.availability}</span>
                 </div>
                 {!currentInfo.showAddress && (
                   <p className="text-gray-400 font-sans text-sm mt-3 italic">
                     {lang === 'EN' && "Please fill out the form below to pre-order."}
                     {lang === 'FR' && "Veuillez remplir le formulaire ci-dessous pour précommander."}
                     {lang === 'NL' && "Vul het onderstaande formulier in om voor te bestellen."}
                   </p>
                 )}
               </div>
             </div>
           </div>

           <div className="bg-black/80 border border-spectral-cyan/20 p-8 backdrop-blur-xl shadow-2xl">
             <div className="flex justify-between items-center mb-10">
                <h2 className="text-4xl font-ancient text-white">{translations[lang].order.title}</h2>
                <div className="font-cyber font-bold text-xs text-spectral-cyan animate-pulse tracking-widest">SYSTEM: ONLINE</div>
             </div>

             <form onSubmit={handleSubmit} className="space-y-8">
                <div className="group">
                   <label className="block text-xs font-cyber font-bold tracking-widest text-gray-500 mb-2 group-focus-within:text-chechen-red transition-colors">{translations[lang].order.nameLabel}</label>
                   <input 
                      type="text" 
                      className="w-full bg-transparent border-b border-white/20 py-3 text-white font-ancient text-xl focus:border-chechen-red focus:outline-none transition-colors"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.currentTarget.value})}
                      required
                   />
                </div>

                <div className="group">
                   <label className="block text-xs font-cyber font-bold tracking-widest text-gray-500 mb-2 group-focus-within:text-chechen-red transition-colors">{translations[lang].order.emailLabel}</label>
                   <input 
                      type="email" 
                      className="w-full bg-transparent border-b border-white/20 py-3 text-white font-ancient text-xl focus:border-chechen-red focus:outline-none transition-colors"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.currentTarget.value})}
                      required
                   />
                </div>

                <div className="group">
                   <label className="block text-xs font-cyber font-bold tracking-widest text-gray-500 mb-2 group-focus-within:text-chechen-red transition-colors">{translations[lang].order.messageLabel}</label>
                   <textarea 
                      className="w-full bg-transparent border-b border-white/20 py-3 text-white font-ancient text-xl focus:border-chechen-red focus:outline-none transition-colors resize-none min-h-[120px]"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.currentTarget.value})}
                      required
                   />
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-chechen-red text-white font-bold font-cyber py-5 uppercase tracking-[0.2em] hover:bg-white hover:text-black hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-300 flex justify-center items-center gap-3 mt-8 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={18} />
                  {isSubmitting ? '...' : translations[lang].order.submit}
                </button>
             </form>
           </div>
         </div>
       </div>
    </section>
  );
};

