import classNames from 'classnames'

export default function Image({
	src,
	alt,
	width,
	height,
	loading,
	overrideSrc,
	className,
	decoding,
	isLazy = true
}: ImageProps) {
	const finalLoading = isLazy ? 'lazy' : loading
	const finalDecoding = isLazy ? 'async' : decoding

	return (
		<img
			src={src}
			alt={alt}
			width={width}
			height={height}
			loading={finalLoading}
			srcSet={overrideSrc}
			decoding={finalDecoding}
			className={classNames(className)}
		/>
	)
}
