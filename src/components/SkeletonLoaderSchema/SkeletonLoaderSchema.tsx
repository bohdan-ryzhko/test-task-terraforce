import sass from "./SkeletonLoaderSchema.module.scss";
import { FC } from "react";
import SkeletonLoader from "tiny-skeleton-loader-react";

const style = { width: "100%" };

export const SkeletonLoaderSchema: FC = () => (
	<ul className={sass.skeletonList}>
		<li className={sass.skeletonItem}>
			<SkeletonLoader block style={style} height={160} />
			<SkeletonLoader block style={style} height={15} />
		</li>
		<li className={sass.skeletonItem}>
			<SkeletonLoader block style={style} height={160} />
			<SkeletonLoader block style={style} height={15} />
		</li>
		<li className={sass.skeletonItem}>
			<SkeletonLoader block style={style} height={160} />
			<SkeletonLoader block style={style} height={15} />
		</li>
		<li className={sass.skeletonItem}>
			<SkeletonLoader block style={style} height={160} />
			<SkeletonLoader block style={style} height={15} />
		</li>
		<li className={sass.skeletonItem}>
			<SkeletonLoader block style={style} height={160} />
			<SkeletonLoader block style={style} height={15} />
		</li>
		<li className={sass.skeletonItem}>
			<SkeletonLoader block style={style} height={160} />
			<SkeletonLoader block style={style} height={15} />
		</li>
	</ul>
);
