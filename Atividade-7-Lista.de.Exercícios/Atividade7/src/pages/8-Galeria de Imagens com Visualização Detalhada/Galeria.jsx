import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'

const Galeria = () => {

  const navigate = useNavigate()

    const goToBiblioteca = () => {
        navigate('/')
    }

  const images = [
    { id: 1, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBmr2XqOt2JdGNmYlofxYmjg88wsdvS9WLpA&s", alt: "Logo do Instagram" },
    { id: 2, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-uaK5MQMEY1_ds2IHnWNvKen6q96rbt2rgQ&s", alt: "Logo do Facebook" },
    { id: 3, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQphGpv3nHmgfG8uZwIWDykLJk08vwHz_nXTQ&s", alt: "Logo do WhatsApp" },
    { id: 4, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBY55lWWW1t_l91NjomP-S3eYgH_3qmgwKww&s", alt: "Logo do Linkedin" },
  ];

  const [selectedImage, setSelectedImage] = useState(null)

  const openModal = (image) => {
    setSelectedImage(image)
  };

  const closeModal = () => {
    setSelectedImage(null)
  };

  const navigateImages = (direction) => {
    if (!selectedImage) return
    const currentIndex = images.findIndex((img) => img.id === selectedImage.id)
    const nextIndex = (currentIndex + direction + images.length) % images.length
    setSelectedImage(images[nextIndex])
  };

  return (
    <>
    <div className="container">
      <div className="gallery">
        {images.map((image) => (
          <img
            key={image.id}
            src={image.src}
            alt={image.alt}
            onClick={() => openModal(image)}
            style={{ width: 100, margin: 10, cursor: "pointer" }}
          />
        ))}
      </div>

      {selectedImage && (
        <div className="modal" style={modalStyles}>
          <div style={modalContentStyles}>
            <button onClick={closeModal} style={closeButtonStyles}>Fechar</button>
            <div style={imageContainerStyles}>
              <button onClick={() => navigateImages(-1)} style={navigationButtonStyles}>←</button>
              <img src={selectedImage.src} alt={selectedImage.alt} style={modalImageStyles} />
              <button onClick={() => navigateImages(1)} style={navigationButtonStyles}>→</button>
            </div>
          </div>
        </div>
      )}
    </div>
    
    <div>
        <button className="BotãoDeVolta" onClick={goToBiblioteca}>Voltar para a Página Principal</button>
    </div>
    </>
  );
};

const modalStyles = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const modalContentStyles = {
  backgroundColor: "white",
  padding: 20,
  borderRadius: 8,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const closeButtonStyles = {
  position: "absolute",
  top: 10,
  right: 10,
  backgroundColor: "#FF5733",
  color: "white",
  border: "none",
  padding: "5px 10px",
  cursor: "pointer",
};

const imageContainerStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const navigationButtonStyles = {
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  color: "white",
  border: "none",
  padding: "10px",
  cursor: "pointer",
};

const modalImageStyles = {
  maxWidth: "80vw",
  maxHeight: "80vh",
  margin: "0 20px",
};

export default Galeria;
