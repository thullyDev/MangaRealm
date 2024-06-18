interface _Poster {
  image_url: string;
  title: string;
  imageStyles: string;
  wrapperStyles: string;
}

export const Poster = ({ image_url, title, imageStyles, wrapperStyles }: _Poster) => {
  return (
    <span className="poster-con">
      <span className={"inner-poster-con " + imageStyles}>
        <img src={image_url} alt={title} className={"poster " + imageStyles} />
      </span>
    </span>
  );
};
