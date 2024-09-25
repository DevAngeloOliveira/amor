"use client";

import React, { useEffect } from "react";

const NamoroComponente = () => {
  const sim = () => {
    alert("Você aceitou namorar comigo! :)");
    location.href =
      "https://music.youtube.com/watch?v=P0flqL3E5sM&si=NLZnIrlWqHy70feA";
  };

  const desvia = (btn) => {
    btn.style.position = "absolute";
    btn.style.bottom = geraPosicao(10, 90);
    btn.style.left = geraPosicao(10, 90);
    console.log("opa, desviei...");
  };

  const geraPosicao = (min, max) => {
    return Math.random() * (max - min) + min + "%";
  };

  const criarCoracao = () => {
    const coracao = document.createElement("div");
    coracao.className = "coracao";
    coracao.innerText = "❤️"; // Usando o emoji de coração
    coracao.style.left = `${Math.random() * 100}vw`;
    document.body.appendChild(coracao);

    setTimeout(() => {
      coracao.remove();
    }, 3000); // Remove o coração após 3 segundos
  };

  useEffect(() => {
    const intervalo = setInterval(criarCoracao, 500); // Cria um coração a cada 500ms
    return () => clearInterval(intervalo); // Limpa o intervalo ao desmontar
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-pink-500 to-yellow-500 p-10 rounded-lg shadow-lg animate-fadeIn">
      <h2 className="text-white text-3xl font-cursive mb-6">
        Aceita namorar comigo?
      </h2>
      <div className="flex space-x-4">
        {" "}
        {/* Adicionando espaço entre os botões */}
        <button
          className="bg-green-500 text-white py-2 px-4 rounded-lg shadow-md transition-transform transform hover:scale-110"
          onClick={sim}
        >
          SIM
        </button>
        <button
          className="bg-red-500 text-white py-2 px-4 rounded-lg shadow-md transition-transform transform hover:scale-110"
          onMouseOver={(e) => desvia(e.target)}
        >
          NÃO
        </button>
      </div>
    </div>
  );
};

export default NamoroComponente;
