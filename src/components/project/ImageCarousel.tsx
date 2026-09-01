import React, { useState, useEffect, useCallback } from 'react';

interface ImageCarouselProps {
    images: string[];
    interval?: number;
}

// 유튜브 URL 패턴 확인
const isYouTubeUrl = (url: string): boolean => {
    return url.includes('youtube.com') || url.includes('youtu.be');
};

// 유튜브 URL에서 비디오 ID 추출
const getYouTubeVideoId = (url: string): string | null => {
    const patterns = [
        /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/,
        /(?:https?:\/\/)?(?:www\.)?youtube\.com\/embed\/([a-zA-Z0-9_-]+)/,
        /(?:https?:\/\/)?(?:www\.)?youtube\.com\/shorts\/([a-zA-Z0-9_-]+)/,
        /(?:https?:\/\/)?youtu\.be\/([a-zA-Z0-9_-]+)/
    ];
    for (const pattern of patterns) {
        const match = url.match(pattern);
        if (match) return match[1];
    }
    return null;
};

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, interval = 4000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isVideo, setIsVideo] = useState(false);   // 현재 슬라이드가 영상이면 자동 슬라이드 일시 중지

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    }, [images.length]);

    // 자동 슬라이드
    useEffect(() => {
        if (images.length <= 1) return;
        if (isVideo) return;   // 영상이면 넘기지 않음
        const timer = setInterval(nextSlide, interval);
        return () => clearInterval(timer);
    }, [nextSlide, interval, images.length, isVideo]);

    // 현재 슬라이드가 바뀔 때 영상 여부 확인
    useEffect(() => {
        setIsVideo(isYouTubeUrl(images[currentIndex]));
    }, [currentIndex, images]);

    if (!images || images.length === 0) {
        return <div className="carousel-empty">이미지 없음</div>;
    }

    return (
        <div className="carousel-container">
            <div className="carousel-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((src, index) => (
                    <div className="carousel-slide" key={index}>
                        {isYouTubeUrl(src) ? (
                            <iframe
                                src={`https://www.youtube.com/embed/${getYouTubeVideoId(src)}?autoplay=1&mute=1&controls=1&loop=1&playlist=${getYouTubeVideoId(src)}`}
                                title={`YouTube video ${index + 1}`}
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                                className="carousel-video"
                            />
                        ) : (
                            <img src={src} alt={`slide ${index + 1}`} />
                        )}
                    </div>
                ))}
            </div>

            {/* 점(dot) 인디케이터 */}
            {images.length > 1 && (
                <div className="carousel-dots">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => setCurrentIndex(index)}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default ImageCarousel;