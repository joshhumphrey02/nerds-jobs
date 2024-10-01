import Image, { StaticImageData } from 'next/image';
import SpliceLogo from '@/assets/images/splice.png';
import { cn } from '@/lib/utils';
import { useMediaQuery } from '@/hooks/use-media-query';
import { useMemo } from 'react';

interface Props {
	logo: StaticImageData | string;
	className?: string;
	width?: number;
	height?: number;
}

const CompanyLogo = ({
	logo = SpliceLogo,
	className,
	width,
	height,
	...props
}: Props) => {
	const isMobile = useMediaQuery('(max-width: 480px)');
	return (
		<Image
			{...props}
			src={logo}
			alt="Splice Logo"
			decoding="async"
			style={{ color: 'transparent' }}
			height={width ?? isMobile ? 48 : 52}
			width={width ?? isMobile ? 48 : 52}
			className={cn('object-contain', className)}
		/>
	);
};

export default CompanyLogo;
