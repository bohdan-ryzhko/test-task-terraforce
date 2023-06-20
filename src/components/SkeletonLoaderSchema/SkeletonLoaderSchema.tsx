import { FC } from "react";
import SkeletonLoader from "tiny-skeleton-loader-react";

export const SkeletonLoaderSchema: FC = () => (
	<ul className="flex flex-wrap">
		<li className="">
			<SkeletonLoader block width={200} height={100} />
			<SkeletonLoader block width={85} height={15} />
		</li>
		<li className="">
			<SkeletonLoader block width={200} height={100} />
			<SkeletonLoader block width={85} height={15} />
		</li>
		<li className="">
			<SkeletonLoader block width={200} height={100} />
			<SkeletonLoader block width={85} height={15} />
		</li>
		<li className="">
			<SkeletonLoader block width={200} height={100} />
			<SkeletonLoader block width={85} height={15} />
		</li>
		<li className="">
			<SkeletonLoader block width={200} height={100} />
			<SkeletonLoader block width={85} height={15} />
		</li>
		<li className="">
			<SkeletonLoader block width={200} height={100} />
			<SkeletonLoader block width={85} height={15} />
		</li>
	</ul>
);
