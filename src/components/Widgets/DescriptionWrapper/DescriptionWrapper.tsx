export const DescriptionWrapper = ({ description, slug }: { description: string; slug: string }) => {
	return (
		<div className="description-con">
			<p className="description">{description}</p>
			<a href={slug} className="more-link">more</a>
		</div>
	) 
}
