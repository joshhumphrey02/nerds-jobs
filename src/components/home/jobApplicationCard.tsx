import Link from 'next/link';
import Image from 'next/image';
import WhatsApp from '@/assets/images/socials/whatsapp.png';
import LinkedIn from '@/assets/images/socials/linkedin.png';
import Telegram from '@/assets/images/socials/telegram.png';
import Skype from '@/assets/images/socials/skype.png';

const socialImages = [WhatsApp, Telegram, Skype, LinkedIn];

export default function JobApplicationCard({
	row,
	url,
}: {
	row?: boolean;
	url: string;
}) {
	return (
		<div
			className={`w-full py-30 px-6 rounded-md bg-gray100 flex ${
				row ? 'flex-row' : 'flex-col'
			}`}>
			<div className={`flex-col gap-3 flex ${row ? 'w-6/12' : 'w-full'}`}>
				<h5 className="font-bold text-base text-black">
					You may be a good fit for this job
				</h5>
				<span className="text-base font-normal mb-6">
					6 of 10 skills match your profile.{' '}
				</span>
			</div>
			<div className={`flex-col gap-8 flex ${row ? 'w-6/12' : 'w-full'}`}>
				<Link
					target={'_blank'}
					className="w-full h-primary-button rounded-sm bg-primary-BLUE500 flex items-center justify-center text-white font-bold text-sm"
					href={url ? url : '#'}>
					Apply for this job
				</Link>
				<div className="w-full flex justify-center items-center gap-4">
					<span className="text-base font-normal text-black pr-2">
						Share this job
					</span>
					{socialImages.map((item) => {
						return (
							<Link href="#" key={crypto.randomUUID()}>
								<Image src={item} alt="Social Image" />
							</Link>
						);
					})}
				</div>
			</div>
		</div>
	);
}
