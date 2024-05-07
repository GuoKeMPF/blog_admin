import { PictureCard, UploadPicture } from ".";

import { PictureTypes } from "@/interface";
import { Empty } from "@/components/empty";


import React, { Fragment, type FC } from "react";

type PictureListProps = {
	pictures: PictureTypes;
	reFetch: () => void
};

export const PictureList: FC<PictureListProps> = ({
	pictures = [], reFetch
}) => {

	if (pictures.length === 0) {
		return <Empty
			title="No Picture"
			description="Get started by upload a new picture"
			actions={<UploadPicture reFetch={reFetch} />}
		/>
	}


	return (<Fragment>

		<div className='mb-4 grid xs:gap-1 xs:grid-cols-1 sm:gap-2 sm:grid-cols-3 md:gap-3 md:grid-cols-4 lg:gap-4 lg:grid-cols-6'>

			{(pictures || []).map(picture => {
				return <PictureCard key={picture.id} picture={picture} reFetch={reFetch}></PictureCard>
			})}
		</div>

	</Fragment>);
};
export default PictureList