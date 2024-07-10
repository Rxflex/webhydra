"use client";
import { FC } from 'react';

const Loading: FC = () => {
    return (
        <div className="loading-container">
            <div className="loading-spinner"></div>
            <style jsx>{`
        .loading-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-color: #000; /* Цвет фона в темной теме */
        }
        .loading-spinner {
          border: 4px solid rgba(255, 255, 255, 0.3); /* Цвет и прозрачность обводки */
          border-radius: 50%;
          border-top: 4px solid #ffffff; /* Цвет верхней части */
          width: 50px;
          height: 50px;
          animation: spin 1s linear infinite; /* Анимация вращения */
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
        </div>
    );
};

export default Loading;
