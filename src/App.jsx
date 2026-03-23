import { useState } from 'react'
import './App.css'

// Här definierar du alla dina 19 bilder. Jag har lagt in 3 som exempel.
const initialImages = [
  { id: 1, src: '/bild01.png', count: 2 },
  { id: 2, src: '/bild02.png', count: 4 },
  { id: 3, src: '/bild03.png', count: 1 },
  { id: 4, src: '/bild04.png', count: 3 },
  { id: 5, src: '/bild05.png', count: 5 },
  { id: 6, src: '/bild06.png', count: 3 },
  { id: 7, src: '/bild07.png', count: 3 },
  { id: 8, src: '/bild08.png', count: 3 },
  { id: 9, src: '/bild09.png', count: 3 },
  { id: 10, src: '/bild10.png', count: 3 },
  { id: 11, src: '/bild11.png', count: 2 },
  { id: 12, src: '/bild12.png', count: 5 },
  { id: 13, src: '/bild13.png', count: 5 },
  { id: 14, src: '/bild14.png', count: 3 },
  { id: 15, src: '/bild15.png', count: 4 },
  { id: 16, src: '/bild16.png', count: 8 },
  { id: 17, src: '/bild17.png', count: 9 },
  { id: 18, src: '/bild18.png', count: 4 },
  { id: 19, src: '/bild19.png', count: 1 },

  // ... fyll på med resten av dina 19 bilder här
]

function App() {
  // useState håller koll på bildernas nuvarande status
  const [images, setImages] = useState(initialImages)

  // Räkna ut den totala summan av alla siffror
  const totalCount = images.reduce((sum, image) => sum + image.count, 0)

  // Funktion som körs när du klickar på en bild
  const handleImageClick = (clickedId) => {
    setImages(prevImages => 
      prevImages
        // 1. Minska räknaren med 1 för den bild du klickade på
        .map(img => img.id === clickedId ? { ...img, count: img.count - 1 } : img)
        // 2. Filtrera bort de bilder som har nått 0
        .filter(img => img.count > 0)
    )
  }

  // Funktion för att återställa allt till ursprungsläget
  const handleReset = () => {
    setImages(initialImages)
  }

return (
    <div className="app-container">
      <header>
        <h1>Totalt tiles left: {totalCount}</h1>
      </header>

      <div className="grid-container">
        {images.map(image => (
          <div 
            key={image.id} 
            className="image-wrapper"
            onClick={() => handleImageClick(image.id)}
          >
            <div className="badge">{image.count}</div>
            <img src={image.src} alt={`Bild ${image.id}`} />
          </div>
        ))}
      </div>

      {/* Här ligger knappen nu, under rutnätet! */}
      <button onClick={handleReset} className="reset-btn">Reset</button>
    </div>
  )
}

export default App
