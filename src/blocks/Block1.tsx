interface Block1Props {
  handleClick: () => void;
}

function Block1({ handleClick }: Block1Props) {
  return (
    <div className="w-full bg-gradient-to-br from-fuchsia-400 to-purple-500 border border-gray-200 shadow-lg">
      <div className="max-w-6xl mx-auto p-8">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <div className="md:w-2/3">
            <h5 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              <span className="inline-block transform hover:scale-105 transition-transform duration-300">¡Transforma</span> tu Negocio con el{" "}
              <span className="relative">
                Bono Digital
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-pink-300 rounded-full"></span>
              </span>{" "}
              SIN IVA!
            </h5>
            <p className="text-lg text-white opacity-90 leading-relaxed">
              Gestionamos tu subvención del Kit Digital en Canarias. Cubrimos servicios clave para digitalizar tu empresa.
            </p>
          </div>
          
          <div className="mt-6 md:mt-0 shrink-0">
            <div className="relative">
              <div className="absolute -inset-1 bg-pink-200 opacity-30 rounded-lg blur-sm"></div>
              <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="h-3 w-3 rounded-full bg-pink-300"></div>
                  <div className="h-3 w-3 rounded-full bg-white/50"></div>
                  <div className="h-3 w-3 rounded-full bg-white/30"></div>
                </div>
                <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 transition-colors duration-300">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-pink-200 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              <span className="text-white font-medium">Sin IVA</span>
            </div>
            <p className="mt-2 text-white/80 text-sm ml-7">Todo gratis para tu empresa</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 transition-colors duration-300">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-pink-200 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              <span className="text-white font-medium">Equipo Informático</span>
            </div>
            <p className="mt-2 text-white/80 text-sm ml-7">Renueva tu equipamiento</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 transition-colors duration-300">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-pink-200 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
              </svg>
              <span className="text-white font-medium">Web Profesional</span>
            </div>
            <p className="mt-2 text-white/80 text-sm ml-7">Crea tu presencia online</p>
          </div>
        </div>
        
        {/* Botón principal con efecto */}
        <div className="flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-300 to-pink-100 rounded-lg blur opacity-50 group-hover:opacity-80 transition duration-300"></div>
            <button 
              onClick={handleClick} 
              className="relative flex items-center px-7 py-4 bg-pink-200 rounded-lg text-purple-700 font-bold group-hover:bg-pink-300 transition-all duration-300"
            >
              <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
              </svg>
              Alta Kit Digital
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Block1;
