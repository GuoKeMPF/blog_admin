import React, { Fragment, type FC } from "react";

type EmptyProps = {
	title?: string,
	description?: string,
	actions?: React.ReactNode
};

export const Empty: FC<EmptyProps> = ({ title = 'No Data', description = 'Get started by creating a new one', actions }) => {
	return (<Fragment>
		<div className="flex flex-col gap-4 items-center justify-center h-full min-h-[80px]">
			<h1 className="text-2xl font-bold text-foreground">{title}</h1>
			<p className="text-muted-foreground">{description}</p>
			{actions && <div>
				{actions}
			</div>}
		</div>
	</Fragment>);
};