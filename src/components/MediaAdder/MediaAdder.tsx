import {useEffect, useRef, useState} from 'react';
import cls from './MediaAdder.module.scss';
import clsx from "clsx";
import plus_icon from '../../assets/circle_plus.svg'

type MediaType = 'photo' | 'video' | 'url';

function MediaAdder() {
    const [activeType, setActiveType] = useState<MediaType>('url');
    const [urlValue, setUrlValue] = useState<string>('');
    const [urlError, setUrlError] = useState<string>('');
    const inputRef = useRef<HTMLInputElement>(null);

    // Фокус на инпуте при переключении на URL
    useEffect(() => {
        if (activeType === 'url' && inputRef.current) {
            inputRef.current.focus();
        }
    }, [activeType]);

    const handleTypeChange = (type: MediaType) => {
        setActiveType(type);
        if (type === 'url') {
            setUrlValue('');
            setUrlError('');
        }
    };

    // Валидация URL для социальных сетей
    const validateSocialUrl = (url: string): boolean => {
        // Удаляем пробелы в начале и конце
        const trimmedUrl = url.trim();

        if (!trimmedUrl) {
            setUrlError('');
            return false;
        }

        // Проверяем, что URL начинается с http:// или https://
        const hasProtocol = /^https?:\/\//.test(trimmedUrl);
        const urlToCheck = hasProtocol ? trimmedUrl : `https://${trimmedUrl}`;

        try {
            const parsedUrl = new URL(urlToCheck);
            const hostname = parsedUrl.hostname.toLowerCase();

            // Проверка на соответствие доменам социальных сетей
            const isInstagram = hostname.includes('instagram.com') || hostname.includes('instagr.am');
            const isTelegram = hostname.includes('t.me') || hostname.includes('telegram.org') || hostname.includes('telegram.me');
            const isVk = hostname.includes('vk.com') || hostname.includes('vkontakte.ru');
            const isTwitter = hostname.includes('twitter.com') || hostname.includes('x.com');
            const isTiktok = hostname.includes('tiktok.com') || hostname.includes('vm.tiktok.com');

            if (isInstagram || isTelegram || isVk || isTwitter || isTiktok) {
                setUrlError('');
                return true;
            } else {
                setUrlError('Пожалуйста, введите ссылку на Instagram, Telegram, VK, X/Twitter или TikTok');
                return false;
            }
        } catch (error) {
            setUrlError('Неверный формат URL');
            return false;
        }
    };

    // Обработка изменения URL
    const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setUrlValue(newValue);

        // Валидация при каждом вводе (можно оптимизировать с debounce)
        if (newValue) {
            validateSocialUrl(newValue);
        } else {
            setUrlError('');
        }
    };

    // Обработка отправки URL формы
    const handleUrlSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (validateSocialUrl(urlValue)) {
            console.log('URL валиден, можно обрабатывать:', urlValue);
            // Здесь код для обработки валидного URL
        }
    };

    // Обработка клика на плюсик для фото и видео
    const handlePlusClick = () => {
        if (activeType === 'photo') {
            // Вызов Telegram API для фото
            if (window.Telegram && window.Telegram.WebApp) {
                window.Telegram.WebApp.showPopup({
                    title: 'Выберите источник',
                    message: 'Откуда вы хотите добавить фото?',
                    buttons: [
                        {text: 'Камера', id: 'camera'},
                        {text: 'Галерея', id: 'gallery'},
                        {text: 'Отмена', type: 'cancel', id: 'cancel'}
                    ]
                }, (buttonId: string) => {
                    if (buttonId === 'camera') {
                        // Логика для открытия камеры
                        console.log('Открытие камеры для фото');
                    } else if (buttonId === 'gallery') {
                        // Логика для открытия галереи
                        console.log('Открытие галереи для фото');
                    }
                });
            } else {
                // Резервный вариант, если Telegram API недоступно
                console.log('Telegram API недоступно, используем стандартный выбор файла');
                // Здесь можно добавить стандартный input type="file"
            }
        } else if (activeType === 'video') {
            // Вызов Telegram API для видео
            if (window.Telegram && window.Telegram.WebApp) {
                window.Telegram.WebApp.showPopup({
                    title: 'Выберите источник',
                    message: 'Откуда вы хотите добавить видео?',
                    buttons: [
                        {text: 'Камера', id: 'camera'},
                        {text: 'Галерея', id: 'gallery'},
                        {text: 'Отмена', type: 'cancel', id: 'cancel'}
                    ]
                }, (buttonId: string) => {
                    if (buttonId === 'camera') {
                        // Логика для открытия камеры
                        console.log('Открытие камеры для видео');
                    } else if (buttonId === 'gallery') {
                        // Логика для открытия галереи
                        console.log('Открытие галереи для видео');
                    }
                });
            } else {
                // Резервный вариант, если Telegram API недоступно
                console.log('Telegram API недоступно, используем стандартный выбор файла');
                // Здесь можно добавить стандартный input type="file"
            }
        }
    };

    const getMediaText = () => {
        switch (activeType) {
            case 'photo':
                return {
                    main: 'Добавьте фотографию с вашего устройства',
                    sub: '(PNG, JPG, JPEG, WebP)'
                };
            case 'video':
                return {
                    main: 'Добавьте видео с вашего устройства',
                    sub: '(MP4, MOV, AVI, WebM)'
                };
            case 'url':
                return {
                    main: 'Добавьте ссылку на вашу социальную сеть или пост в ней',
                    sub: '(Instagram, Telegram, VK, X, TikTok)'
                };
            default:
                return {
                    main: '',
                    sub: ''
                };
        }
    };

    const mediaText = getMediaText();

    return (
        <div className={cls.task_adder}>
            <div className={cls.task_adder_header}>
                <div
                    className={clsx(cls.item, activeType === 'photo' && cls.item_active)}
                    onClick={() => handleTypeChange('photo')}
                >
                    Фото
                </div>
                <div
                    className={clsx(cls.item, activeType === 'video' && cls.item_active)}
                    onClick={() => handleTypeChange('video')}
                >
                    Видео
                </div>
                <div
                    className={clsx(cls.item, activeType === 'url' && cls.item_active)}
                    onClick={() => handleTypeChange('url')}
                >
                    URL
                </div>
            </div>
            <div className={cls.task_adder_footer}>
                {activeType === 'url' ? (
                    <form onSubmit={handleUrlSubmit}>
                        <p className={clsx(cls.text, cls.text_top)}>
                            {mediaText.main}
                        </p>
                        <input
                            ref={inputRef}
                            type="text"
                            className={clsx(cls.url_input, urlError && cls.url_input_error)}
                            placeholder="Вставьте URL..."
                            value={urlValue}
                            onChange={handleUrlChange}
                        />
                        {urlError && (
                            <p className={cls.error_message}>{urlError}</p>
                        )}
                        <p className={clsx(cls.text, cls.text_bottom)}>
                            {mediaText.sub}
                        </p>
                        {urlValue && !urlError && (
                            <button
                                type="submit"
                                className={cls.submit_button}
                            >
                                Добавить
                            </button>
                        )}
                    </form>
                ) : (
                    <>
                        <img
                            className={cls.plus_icon}
                            src={plus_icon}
                            alt=""
                            onClick={handlePlusClick}
                        />
                        <p className={clsx(cls.text, cls.text_top)}>
                            {mediaText.main}
                        </p>
                        <p className={clsx(cls.text, cls.text_bottom)}>
                            {mediaText.sub}
                        </p>
                    </>
                )}
            </div>
        </div>
    );
}

// Типизация для Telegram API
declare global {
    interface Window {
        Telegram?: {
            WebApp?: {
                showPopup: (params: {
                    title?: string;
                    message: string;
                    buttons: Array<{
                        type?: 'default' | 'ok' | 'close' | 'cancel' | 'destructive';
                        text: string;
                        id: string;
                    }>;
                }, callback?: (buttonId: string) => void) => void;
            };
        };
    }
}

export default MediaAdder;