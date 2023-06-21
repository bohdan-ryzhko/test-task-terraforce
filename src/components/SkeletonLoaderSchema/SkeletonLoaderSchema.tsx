import { FC } from "react";
import SkeletonLoader from "tiny-skeleton-loader-react";

const style = { width: "100%" };

const stylesItem = "flex flex-col gap-5 basis-full md:basis-[calc(100%/2-15px)] lg:basis-[calc(100%/3-20px)]";
const stylesList = "flex flex-wrap items-center gap-7 max-w-350 mx-auto sm:max-w-590 lg:max-w-900";

export const SkeletonLoaderSchema: FC = () => (
	<ul className={stylesList}>
		<li className={stylesItem}>
			<SkeletonLoader block style={style} height={200} />
			<SkeletonLoader block style={style} height={15} />
		</li>
		<li className={stylesItem}>
			<SkeletonLoader block style={style} height={200} />
			<SkeletonLoader block style={style} height={15} />
		</li>
		<li className={stylesItem}>
			<SkeletonLoader block style={style} height={200} />
			<SkeletonLoader block style={style} height={15} />
		</li>
		<li className={stylesItem}>
			<SkeletonLoader block style={style} height={200} />
			<SkeletonLoader block style={style} height={15} />
		</li>
		<li className={stylesItem}>
			<SkeletonLoader block style={style} height={200} />
			<SkeletonLoader block style={style} height={15} />
		</li>
		<li className={stylesItem}>
			<SkeletonLoader block style={style} height={200} />
			<SkeletonLoader block style={style} height={15} />
		</li>
	</ul>
);
