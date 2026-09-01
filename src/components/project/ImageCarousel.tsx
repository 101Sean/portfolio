import React, { useState, useEffect, useCallback } from 'react';

interface ImageCarouselProps {
    images: string[];
    interval?: number;
}

// 유튜브 URL 패턴 확인
const isYouTubeUrl = (url?: string): boolean => {
    if (!url) return false;
    return url.includes('youtube.com') || url.includes('youtu.be');
};

// 유튜브 URL에서 비디오 ID 추출
const getYouTubeVideoId = (url?: string): string | null => {
    if (!url) return null;
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

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images = [], interval = 4000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // images 배열이 바뀌면 0으로 리셋
    useEffect(() => {
        setCurrentIndex(0);
    }, [images]);

    // 인덱스 계산
    const safeIndex = currentIndex >= images.length ? 0 : currentIndex;
    const currentSrc = images[safeIndex];
    const isVideo = isYouTubeUrl(currentSrc);

    const nextSlide = useCallback(() => {
        if (images.length <= 1) return;
        setCurrentIndex((prev) => (prev + 1) % images.length);
    }, [images.length]);

    // 자동 슬라이드
    useEffect(() => {
        if (images.length <= 1 || isVideo) return; // 영상이거나 이미지 1개 이하면 중지
        const timer = setInterval(nextSlide, interval);
        return () => clearInterval(timer);
    }, [nextSlide, interval, images.length, isVideo]);

    if (!images || images.length === 0) {
        return <div className="carousel-empty">이미지 없음</div>;
    }

    return (
        <div className="carousel-container">
            <div className="carousel-track" style={{ transform: `translateX(-${safeIndex * 100}%)` }}>
                {images.map((src, index) => {
                    const videoId = getYouTubeVideoId(src);
                    const isMediaVideo = isYouTubeUrl(src);

                    return (
                        <div className="carousel-slide" key={`${src}-${index}`}>
                            {isMediaVideo && videoId ? (
                                <iframe
                                    key={`iframe-${videoId}-${index}`}
                                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=1&loop=1&playlist=${videoId}`}
                                    title={`YouTube video ${index + 1}`}
                                    allow="autoplay; encrypted-media"
                                    allowFullScreen
                                    className="carousel-video"
                                />
                            ) : (
                                <img src={src} alt={`slide ${index + 1}`} />
                            )}
                        </div>
                    );
                })}
            </div>

            {/* 점(dot) 인디케이터 */}
            {images.length > 1 && (
                <div className="carousel-dots">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            className={`carousel-dot ${index === safeIndex ? 'active' : ''}`}
                            onClick={() => setCurrentIndex(index)}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default ImageCarousel;