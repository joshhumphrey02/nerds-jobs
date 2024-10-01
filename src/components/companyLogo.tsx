import Image, { StaticImageData } from 'next/image';
import SpliceLogo from '@/assets/images/splice.png';

const CompanyLogo = ({
	logo = SpliceLogo,
}: {
	logo: StaticImageData | string;
}) => {
	return (
		<Image
			src={logo}
			alt="Splice Logo"
			width={48}
			height={48}
			decoding="async"
			style={{ color: 'transparent' }}
			className="w-11 md:w-12 h-11 md:h-16 object-contain"
		/>
	);
};

export default CompanyLogo;
