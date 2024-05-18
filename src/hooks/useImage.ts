import { useEffect, useState } from 'react';

const useImage = (src?: string) => {
	const [image, setImage] = useState<HTMLImageElement | null>(null);

	useEffect(() => {
		const img = new Image();
		img.src = src || '';
		img.onload = () => setImage(img);
	}, [src]);

	return { image };
};

export { useImage };
